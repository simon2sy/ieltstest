/* =========================================================================
   IELTS MASTERY — APP CONTROLLER
   boot → shell → delegated events → timers → submit & record →
   writing / speaking flows → plan / tutor / vocabulary / data management
   ========================================================================= */
var App2 = {};

/* ------------------------------- shell ---------------------------------- */
function renderShell() {
  document.body.innerHTML =
    '<div class="shell">' +
    '<aside class="sidebar" id="sidebar">' + navHTML() + "</aside>" +
    '<div class="main"><header class="topbar" id="topbar">' + topbarHTML() + "</header>" +
    '<main class="content" id="view"></main></div></div>' +
    '<div id="backdrop" class="backdrop"></div>' +
    '<div id="toast" class="toast"></div>';
  $("#view").innerHTML = App.html() + mobileTabsHTML();
  $$("a[data-act=go]").forEach(function (a) {
    a.addEventListener("click", function (e) { e.preventDefault(); });
  });
}
function refreshShell() {
  var sb = $("#sidebar"), tb = $("#topbar");
  if (sb) sb.innerHTML = navHTML();
  if (tb) tb.innerHTML = topbarHTML();
  App.refresh();
}

/* ------------------------------- timers --------------------------------- */
function stopAppTimer() { if (App.timer.id) { clearInterval(App.timer.id); App.timer.id = null; } }
function startAppTimer() {
  stopAppTimer();
  App.timer.start = Date.now();
  App.timer.id = setInterval(function () {
    if (App.timer.paused) { App.timer.start = Date.now() - App.timer.elapsed * 1000; return; }
    App.timer.elapsed = Math.round((Date.now() - App.timer.start) / 1000);
    var el = $(".timerbar .timer");
    if (el) {
      var display = App.timer.duration ? Math.max(0, App.timer.duration - App.timer.elapsed) : App.timer.elapsed;
      el.textContent = fmtTime(display) + (App.timer.duration ? "" : " elapsed");
      el.classList.toggle("low", !!App.timer.duration && (App.timer.duration - App.timer.elapsed) < 120);
    }
    if (App.timer.duration && App.timer.elapsed >= App.timer.duration && !App.timer.paused) {
      stopAppTimer();
      toast("Time is up — your test has been submitted.");
      App.submitTest();
    }
  }, 1000);
}
function updateProgressUI() {
  var bar = $(".timerbar .bar > i");
  if (!bar || !App.test) return;
  var answered = App.test.items.filter(function (i) { return String(App.answers[i.id] || "").trim(); }).length;
  bar.style.width = (answered / App.test.items.length) * 100 + "%";
  var lbl = $(".timerbar .row .small");
  if (lbl) lbl.textContent = "Answered " + answered + "/" + App.test.items.length;
}

/* ------------------------------- actions -------------------------------- */
var ACTIONS = {
  "go": function (el) { App.go(el.dataset.route, el.dataset.skill ? { skill: el.dataset.skill } : undefined); },
  "toggle-menu": function () {
    var s = $("#sidebar"), bd = $("#backdrop");
    if (!s) return;
    s.classList.toggle("open");
    if (bd) bd.classList.toggle("show", s.classList.contains("open"));
  },
  "close-menu": function () {
    var s = $("#sidebar"), bd = $("#backdrop");
    if (s) s.classList.remove("open");
    if (bd) bd.classList.remove("show");
  },

  /* ---- onboarding & profile ---- */
  "save-onboarding": function () {
    var p = Store.get().profile;
    p.module = $("#ob-module").value; p.currentBand = parseFloat($("#ob-cur").value);
    p.targetBand = parseFloat($("#ob-tar").value); p.examDate = $("#ob-date").value;
    p.dailyMinutes = parseInt($("#ob-min").value, 10); p.name = $("#ob-name").value;
    p.onboarded = true; Store.save();
    var plan = StudyPlan.generate(); StudyPlan.save(plan);
    toast("Profile saved. A " + plan.length + "-day plan has been generated.");
    refreshShell();
  },
  "open-profile": function () { App.go("plan"); },

  /* ---- test assembly ---- */
  "quick-start": function (el) {
    var skill = el.dataset.skill || "reading";
    var types = (el.dataset.types || "").split(",").filter(Boolean);
    var count = parseInt(el.dataset.count || "10", 10);
    App.launchTest({ mode: types.length ? "type" : "skill", skill: skill, types: types, count: count, timed: true, title: (types.length ? (TYPELABEL[types[0]] || types[0]) + " drill" : skill + " practice") });
  },
  "start-custom": function () {
    var skill = $("#pr-skill").value, count = parseInt($("#pr-count").value, 10), timed = $("#pr-timed").value === "1";
    if (skill === "mixed") {
      var half = Math.floor(count / 2);
      var t1 = Bank.assemble({ mode: "skill", skill: "reading", count: count - half, timed: timed, title: "Mixed practice" });
      var t2 = Bank.assemble({ mode: "skill", skill: "listening", count: half, timed: timed, title: "Mixed practice" });
      var items = t1.items.concat(t2.items); App.launchTest(prep({ items: items, contexts: t1.contexts.concat(t2.contexts), skill: "mixed", module: Store.get().profile.module, timed: timed, title: "Mixed practice", mode: "quick", durationSec: count * 55 }));
      return;
    }
    App.launchTest({ mode: "skill", skill: skill, count: count, timed: timed, title: skill + " practice" });
  },
  "start-diagnostic": function () {
    var parts = [["reading", 6], ["listening", 6]];
    var items = [], ctxs = [];
    parts.forEach(function (p) {
      var t = Bank.assemble({ mode: "skill", skill: p[0], count: p[1], timed: true });
      items = items.concat(t.items); ctxs = ctxs.concat(t.contexts);
    });
    App.launchTest(prep({ items: items, contexts: ctxs, skill: "mixed", title: "Diagnostic test", mode: "diagnostic", timed: true, module: Store.get().profile.module, durationSec: 12 * 60 }));
  },
  "start-bandsweep": function () {
    var target = Store.get().profile.targetBand;
    var it = Bank.filter({ nearBand: target, tolerance: 0.6 });
    if (it.length < 5) it = Bank.filter({ nearBand: target, tolerance: 1.5 });
    var chosen = sortBy(sample(it, 15), function (i) { return bandNum(i.bandLevel); });
    var ctxs = [], seen = {};
    chosen.forEach(function (i) { if (!seen[i.ctxId]) { seen[i.ctxId] = 1; ctxs.push(i.ctx); } });
    App.launchTest(prep({ items: chosen, contexts: ctxs, skill: "mixed", title: "Band " + target.toFixed(1) + " challenge", mode: "band-target", timed: true, module: Store.get().profile.module, durationSec: 15 * 60 }));
  },
  "start-weakness": function () {
    var weak = Analytics.weakTypes(2).map(function (t) { return t.type; });
    var prio = Analytics.priorities()[0];
    var items = Bank.filter({ types: weak.length ? weak : null, nearBand: Store.get().profile.targetBand, tolerance: 2 });
    if (!items.length) items = Bank.filter({});
    var chosen = sample(items, Math.min(20, items.length));
    var ctxs = [], seen = {};
    chosen.forEach(function (i) { if (!seen[i.ctxId]) { seen[i.ctxId] = 1; ctxs.push(i.ctx); } });
    App.launchTest(prep({ items: chosen, contexts: ctxs, skill: "mixed", title: "Weakness practice", mode: "weakness", timed: true, module: Store.get().profile.module, durationSec: chosen.length * 55 }));
  },
  "sets-skill": function (el) { App.setSkill = el.dataset.skill; App.params.skill = el.dataset.skill; App.refresh(); },
  "open-set": function (el) { PracticeSets.launch(el.dataset.key); },
  "next-set": function () {
    var nk = PracticeSets.nextKey(App.lastSetKey || (App.test && App.test.setKey));
    if (!nk) { App.go("sets"); return; }
    PracticeSets.launch(nk);
  },
  "practice-difficulty": function (el) {
    var d = el.dataset.difficulty;
    var items = Bank.filter({ difficulty: d });
    var chosen = sample(items, Math.min(20, items.length));
    var ctxs = [], seen = {};
    chosen.forEach(function (i) { if (!seen[i.ctxId]) { seen[i.ctxId] = 1; ctxs.push(i.ctx); } });
    App.launchTest(prep({ items: chosen, contexts: ctxs, skill: "mixed", title: d + " set", mode: "difficulty", timed: true, module: Store.get().profile.module, durationSec: chosen.length * 55 }));
  },
  "start-passage": function (el) {
    var id = el.dataset.id;
    var t = Bank.assemble({ mode: "skill", passageId: id, count: 20, timed: true });
    App.launchTest(t);
  },
  "start-reading-full": function (el) {
    var timed = el.dataset.timed !== "0";
    App.launchTest({ mode: "skill", skill: "reading", module: Store.get().profile.module, count: 40, timed: timed, title: (Store.get().profile.module === "general" ? "General Training" : "Academic") + " Reading test", full: true });
  },
  "start-listening-full": function (el) {
    var timed = el.dataset.timed !== "0";
    App.launchTest({ mode: "skill", skill: "listening", module: "academic", count: 40, timed: timed, title: "Listening test", full: true });
  },
  "start-section": function (el) {
    var id = el.dataset.id;
    var t = Bank.assemble({ mode: "skill", skill: "listening", passageId: id, count: 20, timed: true, title: "Listening Section practice" });
    App.launchTest(t);
  },
  "start-mock": function () {
    var mockNumber = Store.get().attempts.filter(function (a) { return a.mode === "full"; }).length + 1;
    var t = Bank.assemble({ mode: "full", mockRound: mockNumber - 1, title: "Full Mock Test " + mockNumber });
    App.launchTest(t);
  },
  "start-mock-section": function (el) {
    var s = el.dataset.section;
    if (s === "reading") return App.launchTest({ mode: "skill", skill: "reading", module: Store.get().profile.module, count: 40, timed: true, title: "Reading — exam simulation", mockSection: true });
    if (s === "listening") return App.launchTest({ mode: "skill", skill: "listening", count: 40, timed: true, title: "Listening — exam simulation", mockSection: true });
    if (s === "writing") return ACTIONS["go-writing-random"]();
    return ACTIONS["go-speaking-random"]();
  },
  "go-writing-random": function () {
    var tasks = window.BANK_WRITING.tasks.filter(function (t) { return t.module === Store.get().profile.module || t.module === "academic"; });
    Act.openWriting(sample(tasks, 1)[0]);
  },
  "go-speaking-random": function () {
    Act.startSpeaking({ set: sample(window.BANK_SPEAKING.sets, 1)[0], mode: "full" });
  },

  /* ---- runner ---- */
  "jump": function (el) { App.qIndex = parseInt(el.dataset.i, 10); App.pane = "questions"; App._scrollTo = true; App.replaceRunner(); },
  "prev-page": function () { App.qIndex = Math.max(0, Math.floor(App.qIndex / 5) * 5 - 5); App.pane = "questions"; App._scrollTo = true; App.replaceRunner(); },
  "next-page": function () { App.qIndex = Math.min(App.test.items.length - 1, Math.floor(App.qIndex / 5) * 5 + 5); App.pane = "questions"; App._scrollTo = true; App.replaceRunner(); },
  "prev-q": function () { App.qIndex = Math.max(0, App.qIndex - 1); App._scrollTo = true; App.replaceRunner(); },
  "next-q": function () { App.qIndex = Math.min(App.test.items.length - 1, App.qIndex + 1); App._scrollTo = true; App.replaceRunner(); },
  "flag": function (el) {
    var id = el.dataset.id;
    App.flags[id] ? delete App.flags[id] : App.flags[id] = 1;
    App.replaceRunner();
  },
  "scroll-reader": function () { var r = $("#reader"); if (r) r.scrollIntoView({ behavior: "smooth", block: "start" }); },
  "toggle-pane": function (el) {
    var pane = el.dataset.pane;
    if (!pane) return;
    App.pane = pane;
    var runnerEl = $(".runner");
    if (runnerEl) {
      runnerEl.classList.toggle("pane-passage", pane === "passage");
      runnerEl.classList.toggle("pane-questions", pane === "questions");
      $$(".pane-toggle button").forEach(function (b) { b.classList.toggle("primary", b.dataset.pane === pane); });
    }
  },
  "toggle-pause": function () { App.timer.paused = !App.timer.paused; toast(App.timer.paused ? "Timer paused" : "Timer resumed"); App.replaceRunner(); },
  "toggle-review": function () { App.review = !App.review; App.replaceRunner(); },
  "toggle-transcript-pre": function () { App.showTranscript = !App.showTranscript; App.replaceRunner(); },
  "toggle-transcript": function () { App.showTranscript = !App.showTranscript; App.refresh(); },
  "play": function (el) {
    var test = App.test, idx = App.qIndex, item = test.items[idx] || test.items[0];
    var sec = item.ctx;
    Listening.play(sec, parseFloat(el.dataset.rate || "1"));
  },
  "stop-audio": function () { Listening.stop(); },
  "submit-test": function () { App.submitTest(); },
  "retry-test": function () {
    App.launchTest(App.test);
  },
  "view-attempt": function (el) {
    var a = Store.get().attempts.filter(function (x) { return x.id === el.dataset.id; })[0];
    if (!a) return;
    var resp = Store.get().responses.filter(function (r) { return r.attemptId === a.id; });
    openModal("<h2>" + esc(a.title || a.mode) + "</h2><div class=\"small muted\">" + fmtDateTime(a.ts) + " · " + esc(a.skill) + " · " + (a.timed ? "timed" : "untimed") + "</div>" +
      '<div class="grid g3" style="margin-top:12px"><div class="stat"><div class="k">Raw</div><div class="v">' + (a.raw == null ? "—" : a.raw + "/" + a.outOf) + '</div></div>' +
      '<div class="stat"><div class="k">Estimated band</div><div class="v">' + (a.band == null ? "—" : a.band.toFixed(1)) + '</div></div>' +
      '<div class="stat"><div class="k">Time</div><div class="v">' + fmtTime(a.timeSpentSec) + "</div></div></div>" +
      '<div class="upper" style="margin-top:12px">Accuracy by type</div>' +
      (a.breakdown || []).map(function (b) { return barRow(b.label, b.correct + "/" + b.total, b.total, b.correct / b.total < 0.6 ? "rose" : "teal"); }).join("") +
      (resp.length ? '<div class="upper" style="margin-top:12px">Question responses (' + resp.length + ")</div><div class=\"small\" style=\"max-height:200px;overflow:auto\">" +
        resp.map(function (r) { return (r.correct ? "✓" : "✗") + " " + esc(r.type) + " · " + esc(r.difficulty) + (r.userAnswer ? " → " + esc(r.userAnswer) : ""); }).join("<br>") + "</div>" : ""));
  },

  /* ---- writing ---- */
  "open-writing": function (el) {
    var t = window.BANK_WRITING.tasks.filter(function (x) { return x.id === el.dataset.id; })[0];
    Act.openWriting(t);
  },
  "toggle-plan": function () { App.writing.showPlan = !App.writing.showPlan; App.refresh(); },
  "writing-samples": function () { App.writing.showSamples = !App.writing.showSamples; App.refresh(); },
  "writing-clear": function () { App.writing.text = ""; refreshShell(); },
  "evaluate-writing": function () {
    var w = App.writing;
    var text = ($("#writing-text") ? $("#writing-text").value : w.text) || "";
    w.text = text;
    if (countWords(text) < 40) { toast("Write at least 40 words before evaluating — shorter answers cannot be scored meaningfully."); return; }
    var rep = WritingEval.evaluate(text, w.task);
    w.report = rep;
    /* log grammar errors into the student's error profile */
    rep.corrections.forEach(function (c) {
      Store.get().errorTags.push({ ts: Date.now(), category: c.category, match: String(c.original).slice(0, 120), message: c.issue, suggestion: c.correction ? c.issue : c.why, source: "writing" });
    });
    var s = Store.get(), p = s.profile;
    s.attempts.push({
      id: uid("att"), ts: Date.now(), mode: "writing-task", skill: "writing", module: p.module,
      title: w.task.title, raw: null, outOf: null, band: rep.overall, accuracy: null,
      setKey: w.setKey || null,
      timeSpentSec: w.elapsed || 0, timed: true, bandTarget: p.targetBand,
      criterionBands: rep.criteria.map(function (c) { return [c.name, c.band]; }),
      textMeta: { words: rep.stats.words, paragraphs: rep.stats.paragraphs, errors: rep.stats.errors.length }
    });
    Store.save();
    refreshShell();
  },
  "retry-writing": function () { App.writing.report = null; App.refresh(); },
  "writing-next": function () {
    var w = App.writing;
    if (!w || !w.paper) { toast("No further task in this set."); return; }
    var idx = (w.paperIndex || 0) + 1;
    var task = window.BANK_WRITING.tasks.filter(function (t) { return t.id === w.paper[idx]; })[0];
    if (!task) { toast("No further task in this set."); return; }
    Act.openWriting(task, { setKey: w.setKey, paper: w.paper, paperIndex: idx });
  },
  "log-grammar": function () {
    var r = App.writing.report;
    if (!r) return;
    r.corrections.forEach(function (c) {
      if (!Store.get().errorTags.some(function (e) { return e.match === String(c.original).slice(0, 120) && e.category === c.category; })) {
        Store.get().errorTags.push({ ts: Date.now(), category: c.category, match: String(c.original).slice(0, 120), message: c.issue, source: "writing-manual" });
      }
    });
    Store.save(); toast("Logged to your grammar error profile.");
  },

  /* ---- speaking ---- */
  "start-speaking": function (el) {
    var id = el.dataset.set, mode = el.dataset.mode || "full";
    var set = id ? window.BANK_SPEAKING.sets.filter(function (s) { return s.id === id; })[0] : sample(window.BANK_SPEAKING.sets, 1)[0];
    Act.startSpeaking({ set: set, mode: mode });
  },
  "speaking-next": function (el) {
    App.speaking.part = parseInt(el.dataset.next, 10);
    App.speaking.elapsed = App.speaking.elapsed || 0;
    App.refresh();
  },
  "part2-prep": function () { Act.part2Timer("prep", 60); },
  "part2-speak": function () { Act.part2Timer("speak", 120); },
  "part2-stop": function () { Act.clearPart2(); App.refresh(); },
  "mic": function (el) {
    var i = el.dataset.i;
    var SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    var state = $("#mic-state-" + i);
    function getTa() {
      var sel = ".qcard textarea[data-i='" + i + "']";
      if (String(i).indexOf("a") === 0) return $(".qcard:not(:empty) textarea[data-i='" + i + "']") || $(sel);
      return $(sel);
    }
    if (!SR) { if (state) state.textContent = "Speech recognition unavailable — type your answer."; return; }
    if (App.micRec) { try { App.micRec.stop(); } catch (e) { } App.micRec = null; if (state) state.textContent = "stopped"; return; }
    var rec = new SR();
    rec.continuous = true; rec.interimResults = true; rec.lang = "en-GB";
    var base = "";
    var ta = $$("textarea").filter(function (t) { return t.dataset.i === i; })[0];
    if (ta) base = ta.value;
    rec.onresult = function (e) {
      var txt = "";
      for (var k = e.resultIndex; k < e.results.length; k++) txt += e.results[k][0].transcript + " ";
      if (ta) { ta.value = (base + " " + txt).trim(); ta.dispatchEvent(new Event("input", { bubbles: true })); }
    };
    rec.onerror = function (e) { if (state) state.textContent = "mic error: " + e.error; };
    rec.onend = function () { if (state) state.textContent = "stopped"; App.micRec = null; };
    try { rec.start(); App.micRec = rec; if (state) state.textContent = "listening…"; }
    catch (e2) { if (state) state.textContent = "could not start: " + e2.message; }
  },
  "evaluate-speaking": function () {
    var sp = App.speaking;
    var t1 = (sp.answers || []).filter(Boolean).join("\n");
    var t2 = (sp.answers3 || []).filter(Boolean).join("\n");
    var transcript = [sp.part2Text || "", t1, t2].filter(Boolean).join("\n");
    var seconds = (sp.part2Seconds || 0) + (sp.elapsed || 0);
    if (countWords(transcript) < 30) { toast("Record or type at least 30 words before evaluating (use the microphone or type your answer)."); return; }
    var rep = SpeakingEval.evaluate({ transcript: transcript, cueCard: sp.set.part2.cueCard, bullets: sp.set.part2.bullets, seconds: seconds });
    sp.report = rep;
    var s = Store.get(), p = s.profile;
    s.attempts.push({
      id: uid("att"), ts: Date.now(), mode: "speaking-test", skill: "speaking", module: p.module,
      title: "Speaking — " + sp.set.part1Topic, raw: null, outOf: null, band: rep.overall,
      setKey: sp.setKey || null,
      accuracy: null, timeSpentSec: seconds, timed: true, bandTarget: p.targetBand,
      criterionBands: rep.criteria.map(function (c) { return [c.name, c.band]; }),
      textMeta: { words: rep.words, wpm: rep.wpm, fillers: rep.fillerTotal }
    });
    rep.errors.forEach(function (e) {
      s.errorTags.push({ ts: Date.now(), category: e.category, match: String(e.match).slice(0, 120), message: e.message, source: "speaking" });
    });
    Store.save();
    refreshShell();
  },
  "retry-speaking": function () {
    Act.startSpeaking({ set: sample(window.BANK_SPEAKING.sets, 1)[0], mode: "full" });
  },

  /* ---- vocabulary ---- */
  "vocab-save": function (el) { var w = Vocab.toggle(el.dataset.word); toast(w ? "Saved — added to your review queue." : "Removed from your list."); App.refresh(); },
  "vocab-open": function (el) { Act.openWord(el.dataset.word); },
  "srs-start": function () { Act.srsStart(); },
  "srs-reveal": function () { App.srs.reveal = true; App.refresh(); },
  "srs-grade": function (el) {
    var w = App.srs.queue[App.srs.i];
    if (w) Vocab.grade(w.word, parseInt(el.dataset.g, 10));
    App.srs.i++; App.srs.reveal = false; App.refresh();
  },
  "srs-end": function () { App.srs = null; App.refresh(); },

  /* ---- grammar ---- */
  "grammar-open": function (el) { App.grammar.cat = el.dataset.id; App.grammar.checked = false; App.refresh(); },
  "grammar-check": function () {
    App.grammar.checked = true;
    var cat = window.BANK_GRAMMAR.categories.filter(function (c) { return c.id === App.grammar.cat; })[0];
    if (cat) cat.items.forEach(function (it, i) {
      var key = cat.id + "-" + i, sel = App.grammar.answers[key];
      if (sel && sel !== it.answer) {
        Store.get().errorTags.push({ ts: Date.now(), category: cat.category, match: it.q.slice(0, 110), message: "You chose '" + sel + "' instead of '" + it.answer + "'.", suggestion: it.why.slice(0, 180), source: "grammar" });
      }
    });
    Store.save(); App.refresh();
  },
  "grammar-generate": function () {
    var errs = Analytics.grammarErrors();
    var cats = window.BANK_GRAMMAR.categories;
    var order = cats.slice().sort(function (a, b) {
      var na = errs.filter(function (e) { return e.category === a.category; })[0];
      var nb = errs.filter(function (e) { return e.category === b.category; })[0];
      return (nb ? nb.count : 0) - (na ? na.count : 0);
    });
    var set = [];
    order.forEach(function (c) {
      c.items.forEach(function (it) { set.push({ category: c.category, q: it.q, options: it.options, answer: it.answer, why: it.why }); });
    });
    App.grammarGenerated = sample(set, 6);
    App.grammarGenState = { answers: {}, checked: false };
    App.refresh();
  },
  "grammar-check-gen": function () {
    App.grammarGenState.checked = true;
    (App.grammarGenerated || []).forEach(function (it, i) {
      var sel = App.grammarGenState.answers["gen-" + i];
      if (sel && sel !== it.answer) Store.get().errorTags.push({ ts: Date.now(), category: it.category, match: it.q.slice(0, 110), message: "Chose '" + sel + "' instead of '" + it.answer + "'.", suggestion: it.why.slice(0, 180), source: "grammar-generated" });
    });
    Store.save(); App.refresh();
  },
  "grammar-log": function () { toast("Wrong answers logged to your error profile."); Store.save(); },

  /* ---- plan ---- */
  "generate-plan": function () {
    var plan = StudyPlan.generate();
    StudyPlan.save(plan);
    toast("Plan generated: " + plan.length + " days to your exam date.");
    App.refresh();
  },

  /* ---- tutor ---- */
  "tutor-send": function () {
    var inp = $("#tutor-input"), q = inp ? inp.value.trim() : "";
    if (!q) return;
    Act.tutorAsk(q);
  },
  "tutor-ask": function (el) { Act.tutorAsk(el.dataset.q); },
  "tutor-clear": function () { Store.get().tutor = []; Store.save(); App.refresh(); },
  "ask-about": function (el) { Act.tutorAsk(el.dataset.q, true); },

  /* ---- data ---- */
  "export-data": function () {
    download("ielts-mastery-data-" + new Date().toISOString().slice(0, 10) + ".json", JSON.stringify(Store.get(), null, 2));
    toast("Snapshot exported.");
  },
  "import-data": function () { $("#import-file").click(); },
  "reset-data": function () {
    if (!window.confirm("Delete all attempts, saved words and settings? This cannot be undone.")) return;
    Store.reset(); toast("All data cleared."); refreshShell();
  }
};

/* ------------------------------- actions (logic) ------------------------- */
var Act = {
  openWriting: function (task, opts) {
    opts = opts || {};
    App.writing = { task: task, text: "", elapsed: 0, showPlan: false, showSamples: false, report: null, setKey: opts.setKey || null, paper: opts.paper || null, paperIndex: opts.paperIndex || 0 };
    if (opts.setKey) App.lastSetKey = opts.setKey;
    App.go("writingrun");
    if (App.writingTimer) clearInterval(App.writingTimer);
    App.writingTimer = setInterval(function () {
      if (App.route !== "writingrun" || App.writing.report) return;
      App.writing.elapsed++;
      var el = $(".timerbar .timer");
      if (el) {
        var left = App.writing.task.timeMinutes * 60 - App.writing.elapsed;
        el.textContent = fmtTime(Math.max(0, left)) + " remaining";
        el.classList.toggle("low", left < 120);
      }
    }, 1000);
  },
  startSpeaking: function (o) {
    App.speaking = { set: o.set, part: o.mode === "part2" ? 2 : o.mode === "part3" ? 3 : 1, answers: [], answers3: [], part2Text: "", part2Seconds: 0, elapsed: 0, phase: null, phaseTimer: 0, report: null, setKey: o.setKey || null };
    if (o.setKey) App.lastSetKey = o.setKey;
    App.go("speakingrun");
    if (App.speakingClock) clearInterval(App.speakingClock);
    App.speakingClock = setInterval(function () {
      if (App.route !== "speakingrun" || App.speaking.report) return;
      if (App.speaking.part !== 2) {
        App.speaking.elapsed++;
        var el = $(".timerbar .timer");
        if (el) el.textContent = fmtTime(App.speaking.elapsed);
      }
    }, 1000);
  },
  part2Timer: function (phase, seconds) {
    var sp = App.speaking;
    sp.phase = phase; sp.phaseTimer = seconds;
    if (sp.phaseId) clearInterval(sp.phaseId);
    var state = $("#part2-state");
    sp.phaseId = setInterval(function () {
      sp.phaseTimer--;
      var el = $(".timerbar .timer");
      if (el) el.textContent = (sp.phase === "prep" ? "Preparation: " : "Speaking: ") + fmtTime(Math.max(0, sp.phaseTimer));
      if (sp.phaseTimer <= 0) {
        clearInterval(sp.phaseId);
        if (sp.phase === "prep") { toast("Preparation over — start speaking now."); Act.part2Timer("speak", 120); }
        else {
          sp.part2Seconds = 120; toast("Two minutes are up. Stop and move to Part 3.");
          if (state) state.textContent = "Part 2 complete (2:00)";
          App.refresh();
        }
      }
    }, 1000);
    toast(phase === "prep" ? "One minute preparation — make notes only." : "Two minutes speaking — keep going until the timer stops.");
  },
  clearPart2: function () { if (App.speaking.phaseId) clearInterval(App.speaking.phaseId); App.speaking.phase = null; },
  srsStart: function () {
    var q = Vocab.queue();
    if (!q.length) { toast("Save some words first — click Save in the word list."); return; }
    App.srs = { queue: q, i: 0, reveal: false };
    App.refresh();
  },
  openWord: function (word) {
    var w = Vocab.find(word);
    if (!w) return;
    openModal('<div class="row" style="justify-content:space-between"><h2 style="margin:0">' + esc(w.word) + '</h2><span class="chip">' + esc(w.band) + "</span></div>" +
      '<div class="small muted">' + esc(w.pos) + " · " + esc(w.ipa) + " · " + esc(w.topic) + "</div>" +
      '<div class="hr"></div><div><b>Meaning:</b> ' + esc(w.meaning) + "</div>" +
      "<div style=\"margin-top:8px\"><b>Synonyms:</b> " + esc(w.synonyms.join(", ")) + " &nbsp; <b>Antonyms:</b> " + esc(w.antonyms.join(", ")) + "</div>" +
      "<div style=\"margin-top:8px\"><b>Collocations:</b> " + esc(w.collocations.join(" · ")) + "</div>" +
      '<div style="margin-top:10px"><b>Example:</b> <i>' + esc(w.example) + "</i></div>" +
      '<div class="quote" style="margin-top:10px"><b>IELTS-style:</b> ' + esc(w.ieltsExample) + "</div>" +
      '<div class="row" style="margin-top:14px"><button class="btn primary" data-act="vocab-save" data-word="' + esc(w.word) + '">' + (Vocab.isSaved(w.word) ? "Remove from my list" : "Save to my list") + "</button>" +
      '<button class="btn" data-act="close-modal">Close</button></div>');
  },
  tutorAsk: function (q, keepRoute) {
    var s = Store.get();
    s.tutor.push({ role: "me", text: esc(q), ts: Date.now() });
    var r = Tutor.ask(q);
    s.tutor.push({ role: "ai", text: esc(r.answer), ts: Date.now() });
    s.tutor = s.tutor.slice(-40);
    Store.save();
    if (App.route !== "tutor") App.go("tutor", { q: q }); else App.refresh();
  }
};

/* ------------------------------ modal helpers ---------------------------- */
function openModal(html) {
  var d = document.createElement("div");
  d.className = "modal-bg"; d.id = "modal";
  d.innerHTML = '<div class="modal">' + html + "</div>";
  d.addEventListener("click", function (e) { if (e.target === d || e.target.dataset.act === "close-modal") closeModal(); });
  document.body.appendChild(d);
}
function closeModal() { var m = $("#modal"); if (m) m.remove(); }

/* --------------------------- test launch & submit ------------------------ */
function prep(o) {
  o.items = o.items || [];
  o.id = o.id || uid("test");
  o.durationSec = o.durationSec != null ? o.durationSec : (o.timed === false ? 0 : o.items.length * 55);
  return o;
}
App.launchTest = function (t) {
  if (!t) return;
  if ((t.full || t.mockSection) && (!t.items || !t.items.length)) {
    var module = t.module || Store.get().profile.module;
    var assembly = t.skill === "listening"
      ? Bank.assemble({ mode: "skill", skill: "listening", count: 40, timed: t.timed, title: t.title })
      : Bank.assemble({ mode: "full", module: module, title: t.title });
    var items = t.skill === "listening" ? assembly.items.filter(function (i) { return i.skill === "listening"; }) : assembly.items;
    if (t.full && t.skill !== "listening" && t.skill !== "reading") { t = assembly; }
    else {
      t.items = items;
      var seen = {};
      t.contexts = [];
      items.forEach(function (i) { if (!seen[i.ctxId]) { seen[i.ctxId] = 1; t.contexts.push(i.ctx); } });
    }
  }
  if (t.full && !t.items.length) { toast("The bank does not have enough items for a full test — loading available items."); t.items = Bank.filter({}); }
  App.test = t;
  if (t.setKey) App.lastSetKey = t.setKey;
  App.answers = {}; App.flags = {}; App.qIndex = 0; App.review = false; App.pane = window.innerWidth <= 900 ? "questions" : "passage"; App.showTranscript = t.timed === false;
  App.result = null; App.timer = { id: null, start: 0, elapsed: 0, duration: t.timed ? (t.durationSec || t.items.length * 60) : 0, paused: false };
  App.go("runner");
  startAppTimer();
};
App.replaceRunner = function () {
  var tb = $(".timerbar"), wrap = $(".runner");
  $("#view").innerHTML = Views.runner();
  App.after();
};
App.submitTest = function () {
  var t = App.test;
  if (!t) return;
  /* stop any running audio */
  Listening.stop();
  stopAppTimer();
  var res = scoreTest(t, App.answers);
  if (t.skill === "mixed") {
    /* record separate reading / listening attempts plus the combined attempt */
    var rItems = res.detail.filter(function (d) { return d.item.skill === "reading"; });
    var lItems = res.detail.filter(function (d) { return d.item.skill === "listening"; });
    var groups = [["reading", rItems], ["listening", lItems]];
    groups.forEach(function (g) {
      if (!g[1].length) return;
      var sub = { raw: g[1].filter(function (d) { return d.correct; }).length, outOf: g[1].length, accuracy: g[1].filter(function (d) { return d.correct; }).length / g[1].length, band: rawToBand(g[1].filter(function (d) { return d.correct; }).length, g[1].length, g[0], t.module), breakdown: res.breakdown, detail: g[1] };
      recordAttempt({ id: t.id + "-" + g[0], mode: t.mode, skill: g[0], module: t.module, title: t.title, timed: t.timed, bandTarget: t.bandTarget, durationSec: t.durationSec }, sub);
    });
  } else {
    recordAttempt(t, res);
  }
  App.result = res;
  App.submitted = true;
  App.route = "result";
  App.render();
};

/* ------------------------------- input events ---------------------------- */
function bindInputs(root) {
  $$("[data-answer]", root).forEach(function (el) {
    el.addEventListener("input", function () {
      App.answers[el.dataset.answer] = el.value;
      updateProgressUI();
    });
    el.addEventListener("change", function () {
      App.answers[el.dataset.answer] = el.value;
      updateProgressUI();
      if (el.type === "radio") {
        var card = el.closest(".qcard");
        if (card) $$("label.opt", card).forEach(function (l) { l.classList.remove("sel"); });
        var lab = el.closest("label.opt"); if (lab) lab.classList.add("sel");
      }
    });
  });
  $$("[data-input]", root).forEach(function (el) {
    var kind = el.dataset.input;
    var handler = function () {
      if (kind === "writing") {
        App.writing.text = el.value;
        var c = $(".timerbar .timer[style]");
        var wc = $$(".timerbar .timer")[1];
        if (wc) wc.textContent = countWords(el.value) + " words / " + App.writing.task.minWords + " min";
      } else if (kind === "sp-answer") {
        App.speaking.answers[parseInt(el.dataset.i, 10)] = el.value;
      } else if (kind === "sp-answer3") {
        App.speaking.answers3[parseInt(el.dataset.i, 10)] = el.value;
      } else if (kind === "sp-part2") {
        App.speaking.part2Text = el.value;
        var st = $$("#part2-state")[0];
        if (st) st.textContent = countWords(el.value) + " words transcribed";
      } else if (kind === "grammar") {
        App.grammar.answers[el.dataset.key] = el.value;
      } else if (kind === "gen") {
        App.grammarGenState.answers[el.dataset.key] = el.value;
      } else if (kind === "profile") {
        var k = el.dataset.k, v = el.value;
        Store.get().profile[k] = (k === "targetBand" || k === "currentBand") ? parseFloat(v) : (k === "dailyMinutes" ? parseInt(v, 10) : v);
        Store.save();
      } else if (kind === "plan-task") {
        var pl = Store.get().plan; pl.done = pl.done || {};
        if (el.checked) pl.done[el.dataset.key] = 1; else delete pl.done[el.dataset.key];
        Store.save();
      } else if (kind === "vocab-q") {
        App.vparams.q = el.value; Views._debouncedVocab();
      } else if (kind === "vocab-topic") {
        App.vparams.topic = el.value; App.refresh();
      } else if (kind === "vocab-saved") {
        App.vparams.saved = el.checked; App.refresh();
      } else if (kind === "tutor") {
        /* value read on send */
      }
    };
    el.addEventListener("input", handler);
    el.addEventListener("change", handler);
  });
}
var _vocabTimer = null;
Views._debouncedVocab = function () {
  clearTimeout(_vocabTimer);
  _vocabTimer = setTimeout(function () {
    var focused = document.activeElement, key = focused && focused.dataset && focused.dataset.input;
    App.refresh();
    if (key === "vocab-q") {
      var el = $("[data-input=vocab-q]");
      if (el) { el.focus(); el.setSelectionRange(el.value.length, el.value.length); }
    }
  }, 260);
};

/* ------------------------------- keyboard ------------------------------- */
function bindKeys() {
  document.addEventListener("keydown", function (e) {
    if (e.target.tagName === "TEXTAREA" || (e.target.tagName === "INPUT" && e.target.type === "text")) {
      if (e.key === "Enter" && e.ctrlKey) { if (App.route === "runner") App.submitTest(); if (App.route === "writingrun") ACTIONS["evaluate-writing"](); }
      return;
    }
    if (App.route === "runner" && App.test) {
      if (e.key === "ArrowRight") { e.preventDefault(); ACTIONS["next-q"](); }
      if (e.key === "ArrowLeft") { e.preventDefault(); ACTIONS["prev-q"](); }
      if (e.key === "f" || e.key === "F") { var it = App.test.items[App.qIndex]; if (it) { App.flags[it.id] ? delete App.flags[it.id] : App.flags[it.id] = 1; App.replaceRunner(); } }
      if (e.key === "Enter" && e.ctrlKey) App.submitTest();
    }
    if (e.key === "Escape") closeModal();
  });
}

/* --------------------------------- boot ---------------------------------- */
function boot() {
  Bank.build();
  /* seed a couple of saved words so the review queue is demonstrable */
  if (!Store.get().vocab.saved.length) {
    Store.get().vocab.saved = ["mitigate", "ubiquitous", "disparity"];
    Store.save();
  }
  renderShell();
  bindInputs(document);
  bindKeys();
  /* delegated click handling */
  document.addEventListener("click", function (e) {
    var el = e.target.closest("[data-act]");
    if (!el) return;
    var act = el.dataset.act;
    if (act === "go" && el.tagName === "A") e.preventDefault();
    if (ACTIONS[act]) { ACTIONS[act](el); }
  });
  /* re-bind inputs after every render */
  var mo = new MutationObserver(function () {
    bindInputs(document);
  });
  mo.observe($("#view"), { childList: true, subtree: true });
  /* tap the dimmed backdrop to close the mobile menu */
  var bd = $("#backdrop");
  if (bd) bd.addEventListener("click", function () { ACTIONS["close-menu"](); });
  /* import handler */
  document.addEventListener("change", function (e) {
    if (e.target.id !== "import-file" || !e.target.files || !e.target.files[0]) return;
    var fr = new FileReader();
    fr.onload = function () {
      try {
        var data = JSON.parse(fr.result);
        Store.s = data; Store.save(); toast("Data imported."); refreshShell();
      } catch (err) { toast("That file could not be read as JSON."); }
    };
    fr.readAsText(e.target.files[0]);
  });
  /* hash routing */
  window.addEventListener("hashchange", function () {
    var r = window.location.hash.replace("#", "");
    if (r && Views[r] && r !== App.route) App.go(r);
  });
  window.addEventListener("keydown", function (e) {
    if (e.key === "Escape") ACTIONS["close-menu"]();
  });
  var start = window.location.hash.replace("#", "");
  App.route = Views[start] ? start : "dashboard";
  App.render();
  /* automatic study plan on first run */
  if (!Store.get().plan.generatedAt && Store.get().profile.onboarded) {
    StudyPlan.save(StudyPlan.generate());
  }
  var rep = Validator.run();
  if (rep.errors.length) console.warn("Bank validator:", rep.errors.length, "errors,", rep.warnings.length, "warnings");
}
if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot); else boot();
