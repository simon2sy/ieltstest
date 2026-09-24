/* =========================================================================
   IELTS MASTERY — render smoke test
   Loads every module against a minimal DOM stub and renders each screen,
   including a full test run, submission, result page and transcript review.
   Catches runtime errors that syntax checks cannot see.
   ========================================================================= */
const fs = require("fs"), path = require("path"), vm = require("vm");
const ROOT = path.join(__dirname, "..");
const DATA = ["reading-academic-1.js", "reading-academic-2.js", "reading-academic-3.js", "reading-gt.js", "reading-gt-2.js",
  "listening-1.js", "listening-2.js", "writing-t1.js", "writing-2.js", "speaking.js", "vocab.js", "grammar.js"];
const JS = ["01-core.js", "06-sets.js", "02-eval.js", "03-views-a.js", "04-views-b.js"];
const APP_JS = "05-app.js";

/* ---- DOM stub rich enough for the view layer ---- */
function makeEl(tag) {
  const el = {
    tagName: (tag || "div").toUpperCase(), _html: "", style: {}, dataset: {}, value: "", checked: false,
    classList: { add() { }, remove() { }, toggle() { }, contains: () => false },
    addEventListener() { }, removeEventListener() { }, appendChild() { }, remove() { }, click() { },
    focus() { }, setSelectionRange() { }, scrollIntoView() { }, closest: () => null, contains: () => false,
    querySelector: () => null, querySelectorAll: () => [],
    get innerHTML() { return this._html; }, set innerHTML(v) { this._html = String(v); },
    get textContent() { return this._text || ""; }, set textContent(v) { this._text = String(v); }
  };
  return el;
}
const registry = { "#view": makeEl("main"), "#sidebar": makeEl("aside"), "#topbar": makeEl("header"), "#toast": makeEl("div"), "#chat": makeEl("div") };
global.window = global;
window.innerWidth = 1440;
window.speechSynthesis = undefined;
window.localStorage = { getItem: () => null, setItem() { }, removeItem() { } };
global.localStorage = window.localStorage;
global.MutationObserver = function () { this.observe = () => { }; this.disconnect = () => { }; };
global.Event = function (t) { this.type = t; };
global.Blob = function () { };
global.URL = { createObjectURL: () => "", revokeObjectURL() { } };
global.FileReader = function () { };
global.document = {
  readyState: "loading",
  body: makeEl("body"),
  activeElement: null,
  addEventListener() { },
  createElement: makeEl,
  querySelector: sel => registry[sel] || null,
  querySelectorAll: () => []
};
window.location = { hash: "" };
window.addEventListener = () => { };
window.scrollTo = () => { };

const ctx = vm.createContext(global);
const load = f => vm.runInContext(fs.readFileSync(f, "utf8"), ctx, { filename: f });
DATA.forEach(f => load(path.join(ROOT, "src", "data", f)));
JS.forEach(f => load(path.join(ROOT, "src", "js", f)));
/* load the controller with its auto-boot call neutralised so the harness controls
   when boot() runs (and when a test is launched and submitted) */
const appSrc = fs.readFileSync(path.join(ROOT, "src", "js", APP_JS), "utf8")
  .replace('if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot); else boot();',
           "/* auto-boot disabled in tests */");
vm.runInContext(appSrc, ctx, { filename: APP_JS });

let pass = 0, fail = 0;
function ok(cond, label, extra) {
  if (cond) { pass++; console.log("  ✓ " + label); }
  else { fail++; console.log("  ✗ " + label + (extra ? "\n      → " + extra : "")); }
}
function render(fn, label) {
  try {
    const html = fn();
    const good = typeof html === "string" && html.length > 400 && html.indexOf("[object Object]") === -1;
    ok(good, label + " (" + (html ? html.length : 0) + " chars)", good ? "" : String(html).slice(0, 200));
    return html;
  } catch (e) {
    ok(false, label, e.message + "\n      " + (e.stack || "").split("\n")[1]);
    return "";
  }
}

console.log("\n[R1] Every screen renders without error");
Bank.build();
Store.get().profile.onboarded = true;
const routes = ["dashboard", "practice", "sets", "mock", "reading", "listening", "writing", "speaking", "vocabulary", "grammar", "progress", "plan", "tutor", "about"];
routes.forEach(r => {
  App.route = r;
  render(() => App.html(), "route: " + r);
});
/* onboarding branch */
Store.get().profile.onboarded = false;
App.route = "dashboard";
render(() => App.html(), "route: dashboard (first-run onboarding)");
Store.get().profile.onboarded = true;

console.log("\n[R2] Test runner, submission and result page");
const test = Bank.assemble({ mode: "full", module: "academic", title: "Render smoke mock" });
App.test = test;
App.answers = {}; App.flags = {}; App.qIndex = 0;
App.timer = { id: null, start: Date.now(), elapsed: 1200, duration: test.durationSec, paused: false };
const runnerHTML = render(() => Views.runner(), "runner with reading passage pane");
ok(/class="passage"/.test(runnerHTML), "passage text pane present in runner");
ok(/Question navigator/.test(runnerHTML), "question navigator grid present");
App.qIndex = test.items.findIndex(i => i.skill === "listening");
const runnerL = render(() => Views.runner(), "runner with listening section pane (audio controls)");
ok(/Play section/.test(runnerL), "audio playback controls rendered for listening sections");

/* answer everything correctly, then mark a couple wrong to exercise explanations */
test.items.forEach((it, i) => { App.answers[it.id] = i % 7 === 0 ? "definitely wrong" : it.answer; });
const res = scoreTest(test, App.answers);
ok(res.raw === test.items.filter((_, i) => i % 7 !== 0).length, "raw score matches the number of correct answers (" + res.raw + "/" + res.outOf + ")");
const attempt = recordAttempt(test, res);
ok(!!attempt.id && Store.get().attempts.length === 1, "attempt recorded");
ok(Store.get().responses.length === test.items.length, "one response row per question (" + Store.get().responses.length + ")");
App.result = res; App.route = "result";
const resultHTML = render(() => Views.result(), "result page");
ok(/Estimated IELTS Band/.test(resultHTML), "estimated-band label present");
ok(/Estimated band\./.test(resultHTML), "scoring honesty note present");
ok(/What was tested/.test(resultHTML) && /The trap/.test(resultHTML) && /Next time/.test(resultHTML), "seven-field explanation rendered per question");
ok(/Accuracy by question type/.test(resultHTML), "accuracy breakdown by question type");
ok(/Recommended next practice/.test(resultHTML), "recommended practice block");

App.showTranscript = true;
const trHTML = render(() => Views.result(), "result page with transcript review");
ok(/answer Q/.test(trHTML), "transcript highlights answer locations");
ok(/distractor signal/.test(trHTML), "transcript flags lines where a fact is withdrawn or corrected");

console.log("\n[R3] Writing flow");
const wTask = window.BANK_WRITING.tasks.filter(t => t.id === "W-A2-OPINION-1")[0];
App.writing = { task: wTask, text: "Technology is good. " + wTask.samples.band7, elapsed: 1500, showPlan: true, showSamples: true, report: null };
render(() => Views.writingrun(), "writing editor with samples open");
App.writing.report = WritingEval.evaluate(App.writing.text, wTask);
const wRep = render(() => Views.writingrun(), "writing evaluation report");
ok(/Estimated IELTS Band — Writing/.test(wRep), "writing report shows estimated band");
ok(/Why the second is stronger/.test(wRep), "rewrites explain why the alternative is stronger");
ok(/Top actions/.test(wRep), "ranked actions present");
ok(/Compare with the band samples/.test(wRep), "band-sample comparison table present");

console.log("\n[R4] Speaking flow");
const set = window.BANK_SPEAKING.sets[0];
App.speaking = {
  set: set, part: 1, answers: ["Well, I live in a small flat with my family, which is convenient because it is close to my work."],
  answers3: [], part2Text: "", part2Seconds: 0, elapsed: 300, phase: null, phaseTimer: 0, report: null
};
render(() => Views.speakingrun(), "speaking Part 1 screen");
App.speaking.part = 2;
render(() => Views.speakingrun(), "speaking Part 2 cue card + timers");
App.speaking.part = 3;
render(() => Views.speakingrun(), "speaking Part 3 screen");
App.speaking.report = SpeakingEval.evaluate({ transcript: wTask.samples.band7, cueCard: set.part2.cueCard, bullets: set.part2.bullets, seconds: 115 });
const sRep = render(() => Views.speakingrun(), "speaking evaluation report");
ok(/Fluency analytics/.test(sRep), "fluency analytics block present");
ok(/Pronunc/.test(sRep), "pronunciation caveat present");

console.log("\n[R5] Builders and insight screens with data present");
Store.get().errorTags.push({ ts: Date.now(), category: "Articles", match: "a increase", message: "Article error", source: "writing" });
App.srs = { queue: [Vocab.all()[0], Vocab.all()[1]], i: 0, reveal: true };
render(() => Views.vocabulary(), "vocabulary with active SRS session");
App.grammar = { cat: "GR-1", answers: {}, checked: true };
render(() => Views.grammar(), "grammar category open with answers checked");
App.grammarGenerated = sample(window.BANK_GRAMMAR.categories[0].items.map(i => ({ category: "Articles", q: i.q, options: i.options, answer: i.answer, why: i.why })), 3);
App.grammarGenState = { answers: {}, checked: false };
render(() => Views.grammar(), "grammar generated exercise set");
Store.get().plan = { generatedAt: Date.now(), days: StudyPlan.generate(), done: {} };
Store.get().profile.onboarded = true;
render(() => Views.plan(), "study plan calendar");
render(() => Views.progress(), "progress analytics");
Store.get().tutor.push({ role: "me", text: "hi", ts: Date.now() }, { role: "ai", text: Tutor.ask("Practice my weak areas").answer, ts: Date.now() });
render(() => Views.tutor(), "tutor chat with history");
render(() => Views.about(), "about / validator report");

console.log("\n[R5b] Every button in the UI is wired to a real action");
/* collects data-act verbs from every rendered screen and checks the controller
   implements each one — a dead button would otherwise fail silently in the browser */
const acts = new Set();
const collect = html => (String(html).match(/data-act="([a-z0-9-]+)"/g) || []).forEach(m => acts.add(m.replace(/data-act="|"/g, "")));
Object.keys(Views).forEach(k => { if (typeof Views[k] !== "function") return; try { App.route = k; collect(Views[k]()); } catch (e) { /* covered by R1 */ } });
App.route = "runner"; collect(Views.runner());
App.route = "result"; collect(Views.result());
App.route = "writingrun"; collect(Views.writingrun());
App.route = "speakingrun"; collect(Views.speakingrun());
App.route = "dashboard"; Store.get().profile.onboarded = false; collect(Views.onboarding()); Store.get().profile.onboarded = true;
Store.get().tutor.push({ role: "me", text: "hello", ts: Date.now() });
App.route = "tutor"; collect(Views.tutor());
const missing = [...acts].filter(a => typeof ACTIONS[a] !== "function").sort();
ok(acts.size >= 25, "the UI exposes a broad set of actions (" + acts.size + " verbs)");
ok(missing.length === 0, "no dead buttons: every data-act verb has a handler" + (missing.length ? " — missing: " + missing.join(", ") : ""));

console.log("\n[R6] Real submission path splits skills and updates bands");
Store.reset();
const mock = Bank.assemble({ mode: "full", module: "academic", title: "Submit-path mock" });
App.test = mock; App.answers = {}; App.flags = {}; App.qIndex = 0; App.route = "runner";
App.timer = { id: null, start: Date.now(), elapsed: 3300, duration: mock.durationSec, paused: false };
mock.items.forEach((it, i) => { App.answers[it.id] = i % 5 === 0 ? "no" : it.answer; });
App.submitTest();
const b = Analytics.bands();
const skl = Store.get().attempts.map(a => a.skill).sort().join(",");
ok(skl === "listening,reading", "full mock writes one attempt row per skill for clean per-skill analytics (got " + skl + ")");
ok(b.reading != null && b.listening != null, "reading and listening bands estimated after submission (" + b.reading + " / " + b.listening + ")");
ok(Analytics.typeAccuracy().length > 3, "type accuracy matrix populated from the submission");
const vrep = Validator.run();
ok(vrep.errors.length === 0, "validator reports zero errors after full render pass (" + vrep.errors.length + ")");
ok(vrep.checked === Bank.items.length, "validator checked every objective item (" + vrep.checked + ")");

console.log("\n[R7] Practice-set flow — launch, score, and move to the next set");
Store.reset();
Store.get().profile.onboarded = true;
ok(PracticeSets.catalog("reading").length === 30, "the catalogue offers 30 reading sets");
const catHTML0 = render(() => Views.sets(), "practice sets catalogue");
ok(/data-act="open-set"/.test(catHTML0) && /<span class="badge">Set 1<\/span>/.test(catHTML0) && /Start practice/.test(catHTML0), "every set card shows its number at the top and carries its own start button");
ok(/<span class="badge">Set 30<\/span>/.test(catHTML0), "set 30 is listed");
PracticeSets.launch("RS-2");
ok(App.test && App.test.setKey === "RS-2" && App.test.items.length >= 10, "launching a set loads its fixed questions (" + (App.test ? App.test.items.length : 0) + ")");
App.answers = {}; App.flags = {}; App.qIndex = 0; App.route = "runner";
App.timer = { id: null, start: Date.now(), elapsed: 600, duration: App.test.durationSec, paused: false };
App.test.items.forEach((it, i) => { App.answers[it.id] = i % 4 === 0 ? "definitely wrong" : it.answer; });
App.submitTest();
ok(Store.get().attempts.some(a => a.setKey === "RS-2"), "submitting a set logs an attempt tagged with the set key");
const setResHTML = render(() => Views.result(), "result page for a practice set");
ok(/Practice set 2/.test(setResHTML) && /Set number 2/.test(setResHTML) && /Next set/.test(setResHTML), "result page shows the numbered set banner and a next-set button");
const setStats = PracticeSets.stats("RS-2");
ok(setStats.attempts === 1 && setStats.best != null, "the set now has a recorded score (best " + setStats.best + ")");
const catHTML1 = render(() => Views.sets(), "catalogue after a scored set");
ok(/Best/.test(catHTML1) && /<span class="badge">Set 2<\/span>/.test(catHTML1) && /Retake practice/.test(catHTML1), "the catalogue shows the set number, score and retake action");
ok(PracticeSets.nextKey("RS-2") === "RS-3", "next-set moves to the following set in the same skill");

console.log("\n" + "=".repeat(58));
console.log("RENDER RESULT: " + pass + " passed, " + fail + " failed");
console.log("=".repeat(58));
process.exit(fail ? 1 : 0);
