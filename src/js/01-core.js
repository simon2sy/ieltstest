/* =========================================================================
   IELTS MASTERY — CORE
   Utilities → Store → Band tables → Answer normaliser → Bank & assembly
   → Validator → Analytics → Recommendations → Study plan
   ========================================================================= */
var APP = { version: "1.0.0", started: Date.now() };

/* ------------------------------ utilities ------------------------------ */
function $(sel, root) { return (root || document).querySelector(sel); }
function $$(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
function esc(s) {
  return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
    return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c];
  });
}
function uid(p) { return (p || "id") + "-" + Date.now().toString(36) + Math.random().toString(36).slice(2, 7); }
function clamp(n, a, b) { return Math.max(a, Math.min(b, n)); }
function round1(n) { return Math.round(n * 10) / 10; }
function roundHalf(n) { return Math.round(n * 2) / 2; }
function pct(n) { return Math.round(n * 100); }
function mean(a) { return a.length ? a.reduce(function (x, y) { return x + y; }, 0) / a.length : 0; }
function fmtTime(sec) {
  sec = Math.max(0, Math.round(sec));
  var m = Math.floor(sec / 60), s = sec % 60;
  return m + ":" + (s < 10 ? "0" : "") + s;
}
function fmtDate(ts) {
  var d = new Date(ts);
  return d.toLocaleDateString(undefined, { day: "numeric", month: "short", year: "numeric" });
}
function fmtDateTime(ts) {
  var d = new Date(ts);
  return fmtDate(ts) + " " + d.toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit" });
}
function daysBetween(a, b) { return Math.round((b - a) / 86400000); }
function shuffle(a) {
  a = a.slice();
  for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; }
  return a;
}
function sample(a, n) { return shuffle(a).slice(0, Math.min(n, a.length)); }
function groupBy(a, fn) {
  var o = {};
  a.forEach(function (x) { var k = fn(x); (o[k] = o[k] || []).push(x); });
  return o;
}
function sortBy(a, fn) { return a.slice().sort(function (x, y) { var u = fn(x), v = fn(y); return u < v ? -1 : u > v ? 1 : 0; }); }
function slug(s) { return String(s).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""); }
function toast(msg, ms) {
  var t = $("#toast");
  if (!t) { t = document.createElement("div"); t.id = "toast"; t.className = "toast"; document.body.appendChild(t); }
  t.textContent = msg; t.classList.add("show");
  clearTimeout(toast._t); toast._t = setTimeout(function () { t.classList.remove("show"); }, ms || 2600);
}
function download(filename, text) {
  var blob = new Blob([text], { type: "application/json" });
  var a = document.createElement("a");
  a.href = URL.createObjectURL(blob); a.download = filename; document.body.appendChild(a); a.click();
  setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 400);
}
function sparkline(points, opts) {
  opts = opts || {};
  var w = 320, h = opts.h || 90, pad = 8;
  if (!points.length) return "<div class='faint small'>Not enough data yet</div>";
  var min = Math.min.apply(null, points), max = Math.max.apply(null, points);
  if (max === min) { max = min + 1; }
  var lo = opts.min != null ? opts.min : Math.max(0, Math.floor(min - 0.5));
  var hi = opts.max != null ? opts.max : Math.ceil(max + 0.5);
  var xs = function (i) { return pad + (i * (w - 2 * pad)) / Math.max(1, points.length - 1); };
  var ys = function (v) { return h - pad - ((v - lo) / (hi - lo)) * (h - 2 * pad); };
  var d = points.map(function (v, i) { return (i ? "L" : "M") + xs(i).toFixed(1) + " " + ys(v).toFixed(1); }).join(" ");
  var grid = [lo, (lo + hi) / 2, hi].map(function (v) {
    return "<line x1='" + pad + "' x2='" + (w - pad) + "' y1='" + ys(v).toFixed(1) + "' y2='" + ys(v).toFixed(1) + "' stroke='#eef1f8' stroke-width='1'/>";
  }).join("");
  var dots = points.map(function (v, i) {
    return "<circle cx='" + xs(i).toFixed(1) + "' cy='" + ys(v).toFixed(1) + "' r='3' fill='#2f4be0'/>";
  }).join("");
  return "<svg class='spark' viewBox='0 0 " + w + " " + h + "' preserveAspectRatio='none'>" + grid +
    "<path d='" + d + "' fill='none' stroke='#2f4be0' stroke-width='2.4' stroke-linejoin='round' stroke-linecap='round'/>" + dots + "</svg>";
}
function barRow(label, value, max, cls) {
  var w = max ? clamp((value / max) * 100, 2, 100) : 2;
  return "<div style='margin-bottom:9px'><div class='row' style='justify-content:space-between'><span class='small'>" + esc(label) +
    "</span><span class='small b'>" + esc(value) + "</span></div><div class='bar " + (cls || "") + "'><i style='width:" + w + "%'></i></div></div>";
}

/* -------------------------------- store -------------------------------- */
var Store = {
  KEY: "ielts-mastery-v1",
  ok: true,
  s: null,
  defaults: function () {
    var d = new Date(); d.setDate(d.getDate() + 60);
    return {
      profile: {
        name: "", module: "academic", currentBand: 6.0, targetBand: 7.5,
        examDate: d.toISOString().slice(0, 10), dailyMinutes: 60, createdAt: Date.now(), onboarded: false
      },
      attempts: [], responses: [], errorTags: [], tutor: [],
      vocab: { saved: [], srs: {}, learned: [] },
      plan: { generatedAt: 0, days: [], done: {} },
      seen: {}, settings: { timed: true, sound: true, rate: 1 }
    };
  },
  load: function () {
    try {
      var raw = window.localStorage.getItem(this.KEY);
      this.s = raw ? JSON.parse(raw) : this.defaults();
      var d = this.defaults();
      for (var k in d) if (!(k in this.s)) this.s[k] = d[k];
    } catch (e) { this.ok = false; this.s = this.defaults(); }
    return this.s;
  },
  save: function () {
    try { window.localStorage.setItem(this.KEY, JSON.stringify(this.s)); } catch (e) { this.ok = false; }
  },
  get: function () { return this.s || this.load(); },
  reset: function () { this.s = this.defaults(); this.save(); }
};
Store.load();

/* ---------------------------- band conversion --------------------------- */
var BANDS = {
  /* Raw-score → band conversion tables (IELTS-style, 40-item tests) */
  academicReading: [
    [39, 9.0], [37, 8.5], [35, 8.0], [33, 7.5], [30, 7.0], [27, 6.5], [23, 6.0],
    [19, 5.5], [15, 5.0], [13, 4.5], [10, 4.0], [6, 3.5], [4, 3.0], [2, 2.5], [0, 2.0]
  ],
  generalReading: [
    [40, 9.0], [39, 8.5], [37, 8.0], [35, 7.5], [32, 7.0], [29, 6.5], [26, 6.0],
    [23, 5.5], [19, 5.0], [15, 4.5], [12, 4.0], [9, 3.5], [6, 3.0], [3, 2.5], [0, 2.0]
  ],
  listening: [
    [39, 9.0], [37, 8.5], [35, 8.0], [33, 7.5], [30, 7.0], [27, 6.5], [23, 6.0],
    [19, 5.5], [15, 5.0], [13, 4.5], [10, 4.0], [6, 3.5], [4, 3.0], [2, 2.5], [0, 2.0]
  ]
};
function tableFor(skill, module) {
  if (skill === "listening") return BANDS.listening;
  if (skill === "reading") return module === "general" ? BANDS.generalReading : BANDS.academicReading;
  return BANDS.academicReading;
}
/** Convert raw marks to an estimated band. For sets shorter than 40 items the
 *  raw score is scaled to a 40-mark equivalent first (flagged as an estimate). */
function rawToBand(raw, outOf, skill, module) {
  if (!outOf) return 0;
  var eq = Math.round((raw / outOf) * 40);
  var t = tableFor(skill, module);
  for (var i = 0; i < t.length; i++) if (eq >= t[i][0]) return t[i][1];
  return t[t.length - 1][1];
}
function bandDescriptor(b) {
  if (b >= 8.5) return "Expert user";
  if (b >= 7.5) return "Very good user";
  if (b >= 7.0) return "Good user";
  if (b >= 6.0) return "Competent user";
  if (b >= 5.0) return "Modest user";
  if (b >= 4.0) return "Limited user";
  return "Extremely limited user";
}

/* --------------------------- answer normaliser -------------------------- */
var NUMWORDS = { zero: "0", one: "1", two: "2", three: "3", four: "4", five: "5", six: "6", seven: "7", eight: "8", nine: "9", ten: "10", eleven: "11", twelve: "12", thirteen: "13", fourteen: "14", fifteen: "15", sixteen: "16", seventeen: "17", eighteen: "18", nineteen: "19", twenty: "20", thirty: "30", "thirty-five": "35", forty: "40", fifty: "50", sixty: "60", seventy: "70", eighty: "80", ninety: "90", hundred: "100", thousand: "1000" };
function normaliseAnswer(s, opts) {
  opts = opts || {};
  var t = String(s == null ? "" : s).toLowerCase().trim();
  t = t.replace(/[.,;:!?"'’”“()]/g, " ").replace(/\s+/g, " ").trim();
  t = t.replace(/\s*&\s*/g, " and ");
  t = t.replace(/\b(no|number)\.?\s*(?=\d)/g, "");
  /* currency symbols out, keep word currency */
  t = t.replace(/[£$€]/g, "").trim();
  /* ordinals and number words → digits (both directions accepted) */
  var words = t.split(" ");
  words = words.map(function (w) {
    var bare = w.replace(/[^a-z0-9-]/g, "");
    if (NUMWORDS[bare]) return NUMWORDS[bare];
    if (/^(1st|first)$/.test(bare)) return "1";
    if (/^(2nd|second)$/.test(bare)) return "2";
    if (/^(3rd|third)$/.test(bare)) return "3";
    if (/^(4th|fourth)$/.test(bare)) return "4";
    if (/^(5th|fifth)$/.test(bare)) return "5";
    if (/^(6th|sixth)$/.test(bare)) return "6";
    if (/^(7th|seventh)$/.test(bare)) return "7";
    if (/^(8th|eighth)$/.test(bare)) return "8";
    if (/^(9th|ninth)$/.test(bare)) return "9";
    if (/^(10th|tenth)$/.test(bare)) return "10";
    return w;
  });
  t = words.join(" ").replace(/\s+/g, " ").trim();
  if (opts.dropArticle) t = t.replace(/^(the|a|an) /, "");
  return t;
}
function countWords(s) {
  var t = String(s || "").trim();
  if (!t) return 0;
  return t.split(/\s+/).filter(Boolean).length;
}
/** Check one objective answer. Returns {correct, over_limit, note} */
function optionStyle(options) {
  if (!options || !options.length) return null;
  if (/^[A-F][\s.)]/.test(options[0])) return "letter";
  if (/^[ivx]+[\.\)]/.test(options[0].toLowerCase()) || /^[ivx]+\s/.test(options[0])) return "roman";
  return "text";
}
/* options run from A to J (letters) or i to x (roman numerals on heading tasks) */
function optionPrefixRE(style) {
  return style === "roman" ? /^([ivx]+)[\s.)]/ : /^([a-j])[\s.)]/;
}
function optionIndexOf(answer, options) {
  var style = optionStyle(options);
  var preRE = optionPrefixRE(style);
  var key = normaliseAnswer(String(answer));
  if (style === "letter" || style === "roman") {
    var k = key.replace(/^(paragraph|section|heading)\s+/, "").split(" ")[0];
    for (var i = 0; i < options.length; i++) {
      var pre = preRE.exec(normaliseAnswer(options[i]));
      if (pre && pre[1] === k) return i;
    }
  }
  for (var j = 0; j < options.length; j++) {
    var o = normaliseAnswer(options[j]);
    var body = o.replace(preRE, "").trim();
    if (key === o || key === body || key === body.replace(/^(the|a|an)\s+/, "")) return j;
  }
  return -1;
}
/* Some IELTS items print their options inside the question text (the paper
   format) instead of an options array. Parse them so the runner can render
   radio buttons and so the checker can mark by letter or by text. */
function parseOptionsFromPrompt(prompt) {
  var lines = String(prompt == null ? "" : prompt).split("\n");
  var start = -1, opts = [];
  for (var i = 0; i < lines.length; i++) {
    if (/^\s*A[\.\)]\s*\S/.test(lines[i]) || /^\s*A\s{1,3}\S/.test(lines[i])) { start = i; break; }
  }
  if (start === -1) return null;
  for (var j = start; j < lines.length; j++) {
    var m = /^\s*([A-Ha-h])[\.\)]?\s+(.+)$/.exec(lines[j]);
    if (!m) break;
    opts.push(m[1].toUpperCase() + ". " + m[2].trim());
  }
  return opts.length >= 3 ? opts : null;
}
function promptStem(prompt) {
  var lines = String(prompt == null ? "" : prompt).split("\n");
  var keep = [];
  for (var i = 0; i < lines.length; i++) {
    if (/^\s*A[\.\)]?\s+\S/.test(lines[i])) break;
    keep.push(lines[i]);
  }
  return keep.join("\n").trim() || String(prompt || "");
}
function itemOptions(it) {
  if (it.options && it.options.length) return it.options;
  if (it.optionsParsed === undefined) it.optionsParsed = parseOptionsFromPrompt(it.prompt);
  return it.optionsParsed || null;
}
function checkObjective(userRaw, q) {
  var user = String(userRaw == null ? "" : userRaw).trim();
  if (!user) return { correct: false, note: "not answered" };
  /* multiple-choice / matching / heading items: accept the option letter, the
     roman numeral or the option text, in any reasonable format */
  var qOpts = itemOptions(q);
  if (qOpts && qOpts.length && qOpts[0].toUpperCase() !== "TRUE" && qOpts[0].toUpperCase() !== "FALSE") {
    var style = optionStyle(qOpts);
    var idx = optionIndexOf(q.answer, qOpts);
    var nu = normaliseAnswer(user).replace(/^(paragraph|section|heading|option)\s+/, "");
    if (idx > -1) {
      var optNorm = normaliseAnswer(qOpts[idx]);
      var preRE2 = optionPrefixRE(style);
      var pre = preRE2.exec(optNorm);
      var code = pre ? pre[1] : null;
      var optBody = pre ? optNorm.replace(preRE2, "").trim() : optNorm;
      var uFirst = nu.split(" ")[0];
      var bare = function (x) { return x.replace(/^(the|a|an)\s+/, ""); };
      /* the declared answer and every accepted form are authoritative */
      var declared = [q.answer].concat(q.accepted || []);
      for (var d = 0; d < declared.length; d++) if (normaliseAnswer(String(declared[d])) === nu) return { correct: true, note: "" };
      if (code && uFirst === code) return { correct: true, note: "" };
      if (nu === optNorm || nu === optBody || bare(nu) === bare(optBody)) return { correct: true, note: "" };
      if (optBody && nu.length > 8 && (nu.indexOf(optBody) > -1 || optBody.indexOf(nu) > -1)) return { correct: true, note: "" };
      if (style === "text") {
        var parts = nu.split(" ").filter(function (w) { return w.length > 3; });
        if (parts.length && parts.every(function (w) { return optNorm.indexOf(w) > -1; })) return { correct: true, note: "" };
      } else if (code) {
        var toks = nu.match(/\b([a-j]|[ivx]+)\b/g) || [];
        if (toks.indexOf(code) > -1) return { correct: true, note: "" };
      }
    }
    return { correct: false, note: "option mismatch" };
  }
  /* word limits appear as "NO MORE THAN TWO WORDS", "ONE WORD ONLY",
     "Choose ONE WORD ONLY from the passage", "NO MORE THAN THREE WORDS AND/OR A NUMBER" */
  var WORDNUM = { ONE: 1, TWO: 2, THREE: 3, FOUR: 4, FIVE: 5, SIX: 6 };
  var lm = /\b(ONE|TWO|THREE|FOUR|FIVE|SIX|\d+)\s+WORDS?\b/i.exec(q.wordLimit || "");
  var limitN = lm ? (WORDNUM[lm[1].toUpperCase()] || parseInt(lm[1], 10) || 0) : 0;
  var numbersAllowed = /AND\/OR A NUMBER|A NUMBER/i.test(q.wordLimit || "") || limitN === 0;
  var overLimit = limitN ? (countWords(user) > limitN) : false;
  var candidates = [q.answer].concat(q.accepted || []);
  var nu = normaliseAnswer(user, { dropArticle: true });
  var singular = function (t) { return t.split(" ").map(function (w) { return w.length > 3 ? w.replace(/(ies)$/, "y").replace(/(es|s)$/, "") : w; }).join(" "); };
  for (var i = 0; i < candidates.length; i++) {
    var c = normaliseAnswer(candidates[i], { dropArticle: true });
    if (nu === c) return { correct: !overLimit, over_limit: overLimit, note: overLimit ? "over the word limit" : "" };
    /* tolerate singular / plural differences: 'instrument' vs 'instruments' */
    if (singular(nu) === singular(c)) return { correct: !overLimit, over_limit: overLimit, note: overLimit ? "over the word limit" : "" };
    if (c.indexOf(" ") === -1 && nu.indexOf(" ") > -1) {
      /* allow 'yellow' vs 'the yellow route' */
      if (nu.split(" ").indexOf(c) > -1) return { correct: true, note: "" };
    }
  }
  /* TFNG-style answers: accept full words */
  var tf = ["true", "false", "not given", "yes", "no", "ng", "n g"];
  if (tf.indexOf(nu) > -1) {
    var map = { ng: "not given", "n g": "not given", yes: "yes", no: "no" };
    var canon = map[nu] || nu, tgt = normaliseAnswer(q.answer);
    if (canon === tgt) return { correct: true, note: "" };
  }
  return { correct: false, over_limit: overLimit, note: overLimit ? "over the word limit" : "" };
}

/* ------------------------------ bank & pools ---------------------------- */
var TYPELABEL = {
  MCQ: "Multiple Choice", TFNG: "True / False / Not Given", YNNG: "Yes / No / Not Given",
  HEADINGS: "Matching Headings", MATCHINFO: "Matching Information", MATCHFEAT: "Matching Features",
  MATCHEND: "Matching Sentence Endings", SENTCOMP: "Sentence Completion", SUMMARY: "Summary Completion",
  NOTE: "Note Completion", FORM: "Form Completion", TABLE: "Table Completion", FLOWCHART: "Flow-chart Completion",
  DIAGRAM: "Diagram Label Completion", SHORTANS: "Short Answer", MATCH: "Matching"
};
var SKILLS = ["reading", "listening", "writing", "speaking"];
function bandNum(bandLevel) {
  var m = /(\d+(?:\.\d+)?)/.exec(String(bandLevel || ""));
  return m ? parseFloat(m[1]) : 6.5;
}
var Bank = {
  items: [],
  build: function () {
    var items = [];
    ["academic", "general"].forEach(function (mod) {
      (window.BANK_READING[mod] || []).forEach(function (p) {
        p.questions.forEach(function (q) {
          items.push({
            id: p.id + "-" + q.n, skill: "reading", module: mod, ctxId: p.id, ctxType: "passage",
            ctx: p, number: q.n, type: q.type, prompt: q.q, options: q.options || null, wordLimit: q.wordLimit || "",
            answer: q.answer, accepted: q.accepted || [], ex: q.ex, difficulty: q.diff || p.difficulty,
            bandLevel: q.bandLevel || ("Band " + p.band), topic: p.topic, source: p.title
          });
        });
      });
    });
    (window.BANK_LISTENING.sections || []).forEach(function (s) {
      s.questions.forEach(function (q) {
        items.push({
          id: s.id + "-" + q.n, skill: "listening", module: "academic", ctxId: s.id, ctxType: "section",
          ctx: s, number: q.n, type: q.type, prompt: q.q, options: q.options || null, wordLimit: q.wordLimit || "",
          answer: q.answer, accepted: q.accepted || [], ex: q.ex, difficulty: q.diff || s.difficulty,
          bandLevel: q.bandLevel || ("Band " + s.band), topic: s.context, source: s.context
        });
      });
    });
    this.items = items;
    return items;
  },
  objective: function () { return this.items; },
  filter: function (f) {
    f = f || {};
    return this.items.filter(function (it) {
      if (f.skill && it.skill !== f.skill) return false;
      if (f.type && it.type !== f.type) return false;
      if (f.module && it.module !== f.module) return false;
      if (f.difficulty && it.difficulty !== f.difficulty) return false;
      if (f.types && f.types.length && f.types.indexOf(it.type) === -1) return false;
      if (f.exclude && f.exclude.indexOf(it.id) > -1) return false;
      if (f.nearBand != null) {
        var d = Math.abs(bandNum(it.bandLevel) - f.nearBand);
        if (d > (f.tolerance || 1.0)) return false;
      }
      return true;
    });
  },
  typesBy: function (skill) {
    var g = groupBy(this.filter({ skill: skill }), function (i) { return i.type; });
    return Object.keys(g).map(function (t) { return { type: t, label: TYPELABEL[t] || t, count: g[t].length }; }).sort(function (a, b) { return b.count - a.count; });
  },
  /** Build a test object. mode: quick | type | skill | weakness | full | retry */
  assemble: function (o) {
    o = o || {};
    var self = this, seen = Store.get().seen || {};
    var stale = function (arr) { return arr.filter(function (i) { return !seen[i.id]; }); };
    var test = { id: uid("test"), mode: o.mode || "quick", skill: o.skill || "reading", module: o.module || Store.get().profile.module, items: [], contexts: [], timed: o.timed !== false, title: o.title || "Practice", durationSec: 0, bandTarget: o.bandTarget || Store.get().profile.targetBand };
    var target = test.bandTarget;
    if (o.mode === "full") {
      var rItems = [], lItems = [];
      var mockRound = Math.max(0, parseInt(o.mockRound || 0, 10));
      var acad = (window.BANK_READING[test.module] || []);
      var parts = test.module === "general" ? [1, 2] : [1, 2, 3];
      test.contexts = [];
      parts.forEach(function (part) {
        var pool = stale(acad.filter(function (p) { return p.part === part; }));
        if (!pool.length) pool = acad.filter(function (p) { return p.part === part; });
        var p = pool.length ? pool[(mockRound + part - 1) % pool.length] : null;
        if (p) {
          test.contexts.push(p);
          p.questions.forEach(function (q) {
            rItems.push({ id: p.id + "-" + q.n, skill: "reading", module: test.module, ctxId: p.id, ctxType: "passage", ctx: p, number: q.n, type: q.type, prompt: q.q, options: q.options || null, wordLimit: q.wordLimit || "", answer: q.answer, accepted: q.accepted || [], ex: q.ex, difficulty: q.diff || p.difficulty, bandLevel: q.bandLevel || ("Band " + p.band), topic: p.topic, source: p.title });
          });
        }
      });
      /* pick a whole listening test (all four sections, in order) — the one whose
         questions the student has seen least often, so a second mock is fresh */
      var allSecs = window.BANK_LISTENING.sections || [];
      var lsecs = [], bestFresh = -1;
      var listeningTests = window.BANK_LISTENING.tests || [];
      var preferredTest = o.mockRound != null && listeningTests.length ? listeningTests[mockRound % listeningTests.length] : null;
      listeningTests.forEach(function (tst) {
        var secs = sortBy(allSecs.filter(function (s) { return s.testId === tst.id; }), function (s) { return s.number; });
        if (secs.length < 4) return;
        if (preferredTest && tst.id === preferredTest.id) {
          lsecs = secs;
          bestFresh = Number.MAX_SAFE_INTEGER;
          return;
        }
        if (lsecs.length && bestFresh === Number.MAX_SAFE_INTEGER) return;
        var fresh = 0;
        secs.forEach(function (s) { s.questions.forEach(function (q) { if (!seen[s.id + "-" + q.n]) fresh++; }); });
        if (fresh > bestFresh) { bestFresh = fresh; lsecs = secs; }
      });
      if (!lsecs.length) { /* fallback: any four sections, in order, never doubled up */
        var byTest = groupBy(allSecs, function (s) { return s.testId; });
        Object.keys(byTest).forEach(function (k) { if (lsecs.length < 4) lsecs = lsecs.concat(sortBy(byTest[k], function (s) { return s.number; }).slice(0, 4 - lsecs.length)); });
      }
      lsecs.forEach(function (s) {
        test.contexts.push(s);
        s.questions.forEach(function (q) {
          lItems.push({ id: s.id + "-" + q.n, skill: "listening", module: "academic", ctxId: s.id, ctxType: "section", ctx: s, number: q.n, type: q.type, prompt: q.q, options: q.options || null, wordLimit: q.wordLimit || "", answer: q.answer, accepted: q.accepted || [], ex: q.ex, difficulty: q.diff || s.difficulty, bandLevel: q.bandLevel || ("Band " + s.band), topic: s.context, source: s.context });
        });
      });
      test.items = rItems.concat(lItems);
      test.skill = "mixed"; test.title = o.title || "Full Mock Test"; test.timed = true;
      test.durationSec = 60 * 60 + 30 * 60; /* reading 60 + listening 30 */
      test.subTests = { reading: rItems.length, listening: lItems.length };
      return test;
    }
    var pool;
    if (o.mode === "type" && o.types && o.types.length) {
      pool = this.filter({ skill: o.skill, types: o.types });
    } else if (o.mode === "skill") {
      pool = this.filter({ skill: o.skill, module: o.skill === "reading" ? test.module : null, nearBand: target, tolerance: o.tolerance != null ? o.tolerance : 1.5 });
    } else if (o.mode === "weakness") {
      pool = this.filter({ types: o.types && o.types.length ? o.types : null, nearBand: target, tolerance: 2 });
    } else {
      pool = this.filter({ skill: o.skill, types: o.types || null, nearBand: o.bandTarget ? target : null, tolerance: 2 });
    }
    if (o.passageId) pool = pool.filter(function (i) { return i.ctxId === o.passageId; });
    /* never hand the student an empty test: if the band target leaves nothing,
       widen the net and say so, rather than showing a blank screen */
    if (!pool.length && (target != null || o.bandTarget)) {
      [0.6, 1.0, 1.5, 2.5, 4.0].forEach(function (tol) {
        if (pool.length) return;
        pool = self.filter({ skill: o.skill, types: o.types || null, nearBand: target, tolerance: tol });
      });
      if (!pool.length) pool = self.filter({ skill: o.skill, types: o.types || null });
      if (pool.length) test.note = "No questions sit exactly at Band " + target.toFixed(1) + " yet, so this set uses the closest available difficulty — mostly " + (pool[0].bandLevel || pool[0].difficulty) + ".";
    }
    /* if the student's target sits above everything in the bank, say so plainly */
    if (target != null) {
      var topBand = 0;
      self.items.forEach(function (i) { var b = bandNum(i.bandLevel); if (b > topBand) topBand = b; });
      if (target - topBand > 0.5) test.note = "Your target is Band " + target.toFixed(1) + ", but the hardest questions currently in the bank are Band " + topBand.toFixed(1) + ". You are being given the hardest material available — real exam-standard Band 9 passages still need to be added.";
    }
    var fresh = stale(pool);
    pool = fresh.length >= Math.min(5, o.count || 10) ? fresh : pool;
    /* prefer the requested difficulty mix around the band target */
    var n = o.count || 10;
    var chosen = sample(pool, n);
    if (o.keepOrder !== false) chosen = sortBy(chosen, function (i) { return i.ctxId + "-" + i.number; });
    test.items = chosen;
    var ctxSeen = {}, ctxs = [];
    chosen.forEach(function (i) { if (!ctxSeen[i.ctxId]) { ctxSeen[i.ctxId] = 1; ctxs.push(i.ctx); } });
    test.contexts = ctxs;
    test.durationSec = chosen.reduce(function (a, i) { return a + (60 / Math.max(1, (i.ctx.questions || chosen).length)) * 0; }, 0) || 0;
    test.durationSec = o.timed === false ? 0 : Math.max(120, Math.round(chosen.length * (o.skill === "listening" ? 40 : 60)));
    return test;
  }
};

/* ------------------------------- validator ------------------------------ */
var Validator = {
  run: function () {
    var rep = { checked: 0, errors: [], warnings: [], byType: {}, byDifficulty: {}, bySkill: {}, coverage: {} };
    var ids = {};
    Bank.items.forEach(function (it) {
      rep.checked++;
      rep.byType[it.type] = (rep.byType[it.type] || 0) + 1;
      rep.byDifficulty[it.difficulty] = (rep.byDifficulty[it.difficulty] || 0) + 1;
      rep.bySkill[it.skill] = (rep.bySkill[it.skill] || 0) + 1;
      if (ids[it.id]) rep.errors.push("Duplicate question id: " + it.id);
      ids[it.id] = 1;
      if (!it.prompt || String(it.prompt).length < 8) rep.errors.push(it.id + ": prompt too short");
      if (it.answer == null || String(it.answer).length === 0) rep.errors.push(it.id + ": missing answer key");
      var completionTypes = ["SENTCOMP", "SUMMARY", "NOTE", "FORM", "TABLE", "FLOWCHART", "SHORTANS", "DIAGRAM"];
      var isCompletion = completionTypes.indexOf(it.type) > -1;
      if (isCompletion && (!it.accepted || !it.accepted.length)) rep.warnings.push(it.id + ": completion item with no alternative answers listed");
      if (isCompletion && it.wordLimit) {
        var WORDNUM = { ONE: 1, TWO: 2, THREE: 3, FOUR: 4, FIVE: 5 };
        var lm = /\b(ONE|TWO|THREE|FOUR|FIVE|\d+)\s+WORDS?\b/i.exec(it.wordLimit);
        var lim = lm ? (WORDNUM[lm[1].toUpperCase()] || parseInt(lm[1], 10)) : 0;
        if (lim && countWords(it.answer) > lim) rep.errors.push(it.id + ": answer '" + it.answer + "' exceeds its own word limit (" + lim + ")");
        (it.accepted || []).forEach(function (a) {
          if (lim && countWords(a) > lim) rep.errors.push(it.id + ": accepted alternative '" + a + "' exceeds the word limit (" + lim + ")");
        });
      }
      var ex = it.ex || {};
      ["test", "where", "quote", "why", "mine", "trap", "next"].forEach(function (k) {
        if (!ex[k] || String(ex[k]).length < 10) rep.errors.push(it.id + ": explanation field '" + k + "' missing/incomplete");
      });
      if (it.options && it.options.length < 3) rep.errors.push(it.id + ": too few options");
      var optList = (it.options && it.options.length) ? it.options : parseOptionsFromPrompt(it.prompt);
      if (optList && optionStyle(optList) !== "text") {
        if (optionIndexOf(it.answer, optList) === -1) rep.errors.push(it.id + ": answer '" + it.answer + "' cannot be matched to any option");
      }
      /* single intended answer unless alternatives declared */
      var set = {}; [it.answer].concat(it.accepted || []).forEach(function (a) { set[normaliseAnswer(a)] = 1; });
      if (!it.options && Object.keys(set).length > 4) rep.warnings.push(it.id + ": many accepted forms — check key clarity");
      /* evidence present in context text */
      var ctxText = "";
      if (it.ctxType === "passage") ctxText = (it.ctx.text || []).map(function (p) { return p.p; }).join(" ");
      else if (it.ctxType === "section") ctxText = (it.ctx.transcript || []).map(function (l) { return l.line; }).join(" ");
      var keyWord = String(it.answer).split(" ").sort(function (a, b) { return b.length - a.length; })[0].replace(/[^a-z0-9]/gi, "").toLowerCase();
      if (isCompletion && ctxText && keyWord.length > 2 && ctxText.toLowerCase().indexOf(keyWord) === -1) {
        var alt = (it.accepted || []).some(function (a) { return ctxText.toLowerCase().indexOf(String(a).toLowerCase().split(" ")[0]) > -1; });
        if (!alt) rep.warnings.push(it.id + ": answer word '" + keyWord + "' not found in the source text (check paraphrase)");
      }
    });
    rep.coverage.readingTypes = Bank.typesBy("reading").length;
    rep.coverage.listeningTypes = Bank.typesBy("listening").length;
    rep.coverage.passages = (window.BANK_READING.academic || []).length + (window.BANK_READING.general || []).length;
    rep.coverage.sections = (window.BANK_LISTENING.sections || []).length;
    rep.coverage.writingTasks = (window.BANK_WRITING.tasks || []).length;
    rep.coverage.speakingSets = (window.BANK_SPEAKING.sets || []).length;
    rep.coverage.vocabWords = (window.BANK_VOCAB.words || []).length;
    rep.coverage.grammarItems = (window.BANK_GRAMMAR.categories || []).reduce(function (a, c) { return a + c.items.length; }, 0);
    return rep;
  }
};

/* ------------------------------- analytics ------------------------------ */
var Analytics = {
  objective: function () { return Store.get().attempts.filter(function (a) { return a.skill !== "writing" && a.skill !== "speaking"; }); },
  skillAttempts: function (skill) { return Store.get().attempts.filter(function (a) { return a.skill === skill; }); },
  /** Recency-weighted band for a skill (last 5 attempts, newest weighted most). */
  skillBand: function (skill) {
    var a = Store.get().attempts.filter(function (x) { return x.skill === skill && x.band; });
    if (!a) return null;
    var recent = a.slice(-6);
    var num = 0, den = 0;
    recent.forEach(function (x, i) { var w = i + 1; num += x.band * w; den += w; });
    return den ? round1(num / den) : null;
  },
  bands: function () {
    var o = {};
    SKILLS.forEach(function (s) { o[s] = this.skillBand(s); }, this);
    var vals = SKILLS.map(function (s) { return o[s]; }).filter(function (v) { return v != null; });
    o.overall = vals.length === 4 ? roundHalf(mean(vals)) : (vals.length >= 2 ? roundHalf(mean(vals)) : null);
    return o;
  },
  typeAccuracy: function (skill) {
    var r = Store.get().responses.filter(function (x) { return !skill || x.skill === skill; });
    var g = groupBy(r, function (x) { return x.type; });
    return Object.keys(g).map(function (t) {
      var arr = g[t], ok = arr.filter(function (x) { return x.correct; }).length;
      return { type: t, label: TYPELABEL[t] || t, total: arr.length, correct: ok, accuracy: arr.length ? ok / arr.length : 0 };
    }).sort(function (a, b) { return a.accuracy - b.accuracy; });
  },
  difficultyAccuracy: function () {
    var r = Store.get().responses;
    var g = groupBy(r, function (x) { return x.difficulty; });
    return ["beginner", "intermediate", "advanced", "band7", "band8", "band9"].filter(function (d) { return g[d]; }).map(function (d) {
      var arr = g[d], ok = arr.filter(function (x) { return x.correct; }).length;
      return { difficulty: d, total: arr.length, correct: ok, accuracy: ok / arr.length };
    });
  },
  timing: function () {
    var a = Store.get().attempts;
    return { avgSeconds: a.length ? Math.round(mean(a.map(function (x) { return x.timeSpentSec || 0; }))) : 0, count: a.length };
  },
  trend: function (skill) {
    return Store.get().attempts.filter(function (a) { return a.band && (!skill || a.skill === skill); })
      .slice(-12).map(function (a) { return a.band; });
  },
  weakTypes: function (min) {
    return this.typeAccuracy().filter(function (t) { return t.total >= (min || 2) && t.accuracy < 0.75; });
  },
  strongTypes: function (min) {
    return this.typeAccuracy().filter(function (t) { return t.total >= (min || 2) && t.accuracy >= 0.8; }).reverse();
  },
  grammarErrors: function () {
    var g = groupBy(Store.get().errorTags, function (e) { return e.category; });
    return Object.keys(g).map(function (c) {
      return { category: c, count: g[c].length, examples: g[c].slice(-3) };
    }).sort(function (a, b) { return b.count - a.count; });
  },
  vocabProgress: function () {
    var v = Store.get().vocab;
    return { saved: (v.saved || []).length, learned: (v.learned || []).length, due: Vocab.due().length };
  },
  priorities: function () {
    var b = this.bands(), p = Store.get().profile;
    var gaps = SKILLS.map(function (s) {
      var cur = b[s] == null ? 5.0 : b[s];
      return { skill: s, current: b[s], gap: Math.max(0, p.targetBand - cur), weight: (b[s] == null ? 1.4 : 1) * Math.max(0.2, p.targetBand - cur) };
    });
    gaps.sort(function (a, b2) { return b2.weight - a.weight; });
    return gaps.map(function (g, i) {
      g.rank = i + 1;
      g.reason = b[g.skill] == null
        ? "No completed " + g.skill + " attempt yet — the platform cannot estimate this band."
        : (g.gap <= 0 ? "Already at or above target (" + b[g.skill].toFixed(1) + "). Maintain with weekly practice."
          : "Currently estimated " + b[g.skill].toFixed(1) + "; " + g.gap.toFixed(1) + " band below your target of " + p.targetBand.toFixed(1) + ".");
      return g;
    });
  },
  recommendedPractice: function (limit) {
    var out = [], weak = this.weakTypes(2), prio = this.priorities();
    weak.slice(0, limit || 4).forEach(function (t) {
      var skill = null;
      Bank.items.forEach(function (i) { if (i.type === t.type) skill = skill || i.skill; });
      out.push({
        title: "Targeted drill: " + (TYPELABEL[t.type] || t.type),
        skill: skill || "reading", types: [t.type],
        detail: "Accuracy " + pct(t.accuracy) + "% over " + t.total + " questions. Drill 20 items in timed mode, then review every explanation.",
        reason: "Your weakest question type is " + (TYPELABEL[t.type] || t.type) + " at " + pct(t.accuracy) + "%."
      });
    });
    prio.slice(0, 2).forEach(function (p) {
      if (p.gap > 0) out.push({
        title: "Priority skill: " + p.skill.charAt(0).toUpperCase() + p.skill.slice(1),
        skill: p.skill, types: null,
        detail: "Largest band gap (" + p.gap.toFixed(1) + "). Run a full " + p.skill + " set, then a 15-minute feedback review.",
        reason: p.reason
      });
    });
    var ge = this.grammarErrors();
    if (ge.length) out.push({
      title: "Grammar: " + ge[0].category, skill: "grammar", types: null,
      detail: ge[0].count + " logged errors in this category. Complete the generated exercise set, then rewrite one paragraph using the rule.",
      reason: "Most frequent error category in your writing."
    });
    var vp = this.vocabProgress();
    if (vp.due > 0) out.push({
      title: "Vocabulary review", skill: "vocabulary", types: null,
      detail: vp.due + " words are due for spaced repetition today. Use the SRS session (about 8 minutes).",
      reason: "Spaced repetition is most effective when reviews are on schedule."
    });
    return out.slice(0, limit || 6);
  }
};

/* ----------------------------- study planner ---------------------------- */
var StudyPlan = {
  generate: function (opts) {
    opts = opts || {};
    var p = Store.get().profile;
    var exam = new Date(p.examDate + "T00:00:00");
    var today = new Date(); today.setHours(0, 0, 0, 0);
    var days = clamp(daysBetween(today, exam), 1, 60);
    var minutes = p.dailyMinutes || 60;
    var prio = Analytics.priorities();
    var weak = Analytics.weakTypes(2);
    var weakTypes = weak.map(function (w) { return w.type; });
    var plan = [];
    for (var d = 0; d < days; d++) {
      var date = new Date(today.getTime() + d * 86400000);
      var focusSkill = prio[d % Math.min(prio.length, 3)].skill;
      var tasks = [];
      /* objective skill block */
      if (focusSkill === "reading" || focusSkill === "listening") {
        var t = weakTypes.filter(function (x) { return x.indexOf("TFNG") === 0 || x.indexOf("HEAD") === 0 || x.indexOf("MATCH") === 0 || x.indexOf("SUMMARY") === 0; })[0];
        tasks.push({ skill: focusSkill, text: focusSkill.charAt(0).toUpperCase() + focusSkill.slice(1) + " — " + (t ? TYPELABEL[t] : "mixed set") + ", " + Math.round(minutes * 0.35 / 60 * 60 / 60 * 20 + 6) + " questions, timed", min: Math.round(minutes * 0.35) });
      } else if (focusSkill === "writing") {
        var wTask = d % 2 ? "Task 2 essay (40 min)" : "Task 1 report / letter (20 min)";
        tasks.push({ skill: "writing", text: "Writing — " + wTask + ", then read all four band samples", min: Math.round(minutes * 0.45) });
      } else {
        tasks.push({ skill: "speaking", text: "Speaking — " + (d % 2 ? "Part 2 cue card + Part 3 discussion" : "Part 1 topics + record yourself"), min: Math.round(minutes * 0.3) });
      }
      /* second skill block */
      var second = prio[(d + 1) % Math.min(prio.length, 3)].skill;
      if (second !== focusSkill) {
        if (second === "writing") tasks.push({ skill: "writing", text: "Writing — plan one Task 2 essay (introduction + two topic sentences only)", min: Math.round(minutes * 0.25) });
        else if (second === "speaking") tasks.push({ skill: "speaking", text: "Speaking — 6 Part 1 questions, aiming for 3 sentences each", min: Math.round(minutes * 0.2) });
        else tasks.push({ skill: second, text: second.charAt(0).toUpperCase() + second.slice(1) + " — one practice set, untimed learning mode", min: Math.round(minutes * 0.25) });
      }
      /* vocabulary + grammar */
      tasks.push({ skill: "vocabulary", text: "Vocabulary — " + (d % 3 === 0 ? "save 10 new words from today's reading" : "20 due words (spaced repetition)"), min: 12 });
      if (d % 2 === 1) tasks.push({ skill: "grammar", text: "Grammar — " + (Analytics.grammarErrors()[0] ? Analytics.grammarErrors()[0].category : "articles & prepositions") + " exercise set", min: 10 });
      if (d % 7 === 5) tasks.push({ skill: "mock", text: "Full practice test day — Reading + Listening under exam timing", min: 90 });
      if (d % 7 === 6) tasks.push({ skill: "review", text: "Review day — re-read every wrong answer explanation from this week", min: Math.round(minutes * 0.5) });
      plan.push({ day: d + 1, date: date.toISOString().slice(0, 10), focus: focusSkill, tasks: tasks, totalMin: tasks.reduce(function (a, t) { return a + t.min; }, 0) });
    }
    return plan;
  },
  save: function (plan) {
    var s = Store.get();
    s.plan = { generatedAt: Date.now(), days: plan, done: s.plan.done || {} };
    Store.save();
  }
};
