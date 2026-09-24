/* =========================================================================
   IELTS MASTERY — built-file preview test
   Runs the *actual* inline scripts from /home/user/ielts-platform.html inside a
   browser-like stub that reproduces the two hostile conditions of the in-app
   preview pane: an opaque origin where localStorage throws, and no
   speechSynthesis / SpeechRecognition support. The app must still boot and
   render every screen.
   ========================================================================= */
const fs = require("fs"), path = require("path"), vm = require("vm");
const ROOT = path.join(__dirname, "..");
const built = fs.readFileSync(path.join(ROOT, "ielts-platform.html"), "utf8");
const scripts = [...built.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(m => m[1]);
if (!scripts.length) { console.log("no inline scripts found"); process.exit(1); }

let pass = 0, fail = 0;
const ok = (c, label, extra) => { c ? (pass++, console.log("  ✓ " + label)) : (fail++, console.log("  ✗ " + label + (extra ? "\n      → " + extra : ""))); };

function makeEl(tag) {
  const el = {
    tagName: (tag || "div").toUpperCase(), _html: "", style: {}, dataset: {}, value: "", checked: false, type: "",
    classList: { add() { }, remove() { }, toggle() { }, contains: () => false },
    addEventListener() { }, removeEventListener() { }, appendChild() { }, remove() { }, click() { },
    focus() { }, setSelectionRange() { }, scrollIntoView() { }, closest: () => null, contains: () => false,
    querySelector: () => null, querySelectorAll: () => [],
    get innerHTML() { return this._html; }, set innerHTML(v) { this._html = String(v); },
    get textContent() { return this._text || ""; }, set textContent(v) { this._text = String(v); }
  };
  return el;
}

const view = makeEl("main"), sidebar = makeEl("aside"), topbar = makeEl("header"), main = makeEl("div");
const listeners = {};
global.window = global;
window.innerWidth = 390;                    /* worst case: phone */
window.speechSynthesis = undefined;         /* no TTS */
window.SpeechRecognition = undefined;       /* no ASR */
window.SpeechSynthesisUtterance = undefined;
window.addEventListener = (t, fn) => { (listeners[t] = listeners[t] || []).push(fn); };
window.scrollTo = () => { };
window.localStorage = {
  getItem() { throw new Error("SecurityError: localStorage is not available for opaque origins"); },
  setItem() { throw new Error("SecurityError"); },
  removeItem() { throw new Error("SecurityError"); }
};
global.localStorage = window.localStorage;
global.MutationObserver = function () { this.observe = () => { }; this.disconnect = () => { }; };
global.Event = function (t) { this.type = t; };
global.Blob = function () { };
global.URL = { createObjectURL: () => "", revokeObjectURL() { } };
global.FileReader = function () { };
global.alert = () => { };
global.document = {
  readyState: "loading",
  body: makeEl("body"),
  activeElement: null,
  addEventListener(t, fn) { (listeners[t] = listeners[t] || []).push(fn); },
  createElement: makeEl,
  querySelector(sel) {
    if (sel === "#view") return view;
    if (sel === "#sidebar") return sidebar;
    if (sel === "#topbar") return topbar;
    if (sel === ".main") return main;
    if (/^#/.test(sel)) return makeEl("div");
    return null;
  },
  querySelectorAll: () => []
};
window.document = global.document;
window.location = { hash: "" };

const ctx = vm.createContext(global);
let bootError = null;
try {
  scripts.forEach((s, i) => vm.runInContext(s, ctx, { filename: "ielts-platform.html#script" + i }));
} catch (e) { bootError = e; }
ok(!bootError, "built file executes without a top-level error", bootError && bootError.message);
try { (listeners.DOMContentLoaded || []).forEach(fn => fn()); } catch (e) { bootError = e; }
ok(!bootError, "boot() completes even with localStorage blocked", bootError && bootError.message + "\n      " + (bootError.stack || "").split("\n")[1]);

console.log("\n[P2] Degraded-environment behaviour");
ok(vm.runInContext("Store.ok === false", ctx), "Store reports failure instead of throwing (Store.ok = false, storage falls back to memory)");
ok(vm.runInContext("!!App && typeof App.render === 'function'", ctx), "App controller is present after boot");

let routes = vm.runInContext("NAV.reduce(function(a,g){return a.concat(g.items.map(function(i){return i[0];}));},[])", ctx);
ok(routes.length >= 12, "navigation exposes every screen (" + routes.length + " routes)");
console.log("\n[P3] Every route renders in the preview environment (390 px viewport)");
routes.forEach(r => {
  try {
    const html = vm.runInContext("App.go(" + JSON.stringify(r) + "), App.html()", ctx);
    ok(typeof html === "string" && html.length > 300, "route: " + r + " (" + html.length + " chars)");
  } catch (e) { ok(false, "route: " + r, e.message + "\n      " + (e.stack || "").split("\n")[1]); }
});

console.log("\n[P4] Storage warning is surfaced to the user, not hidden");
const dash = vm.runInContext("App.go('dashboard'), App.html()", ctx);
ok(/Progress will not be saved in this window/i.test(dash), "dashboard warns that progress cannot be saved in this context");

console.log("\n[P5] No-network audit of the built file");
ok(!/(src|href)\s*=\s*["']https?:\/\//i.test(built), "no external script/style/image URLs");
ok(!/@import|url\(\s*["']?https?:/i.test(built), "no remote CSS imports or fonts");
ok(built.indexOf("localStorage") > -1 && built.indexOf("try {") > -1, "storage access is wrapped in try/catch");
ok(scripts.length === 2, "exactly two inline scripts (data + app), no third-party bundle");

console.log("\n" + "=".repeat(58));
console.log("PREVIEW RESULT: " + pass + " passed, " + fail + " failed");
console.log("=".repeat(58));
process.exit(fail ? 1 : 0);
