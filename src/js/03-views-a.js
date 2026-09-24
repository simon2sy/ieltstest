/* =========================================================================
   IELTS MASTERY — VIEWS A
   App shell + router registry → dashboard → practice hub → mock →
   universal test runner (reading & listening) → results & explanations
   ========================================================================= */
var App = {
  route: "dashboard",
  params: {},
  test: null, answers: {}, flags: {}, qIndex: 0,
  timer: { id: null, start: 0, elapsed: 0, duration: 0, paused: false },
  review: false, submitted: false, result: null, showTranscript: false,
  menuOpen: false,
  go: function (route, params) {
    if (this.timer.id) { clearInterval(this.timer.id); this.timer.id = null; }
    Listening.stop();
    this.route = route; this.params = params || {};
    window.scrollTo(0, 0);
    this.render();
    if (window.innerWidth <= 1024) this.menuOpen = false;
  },
  refresh: function () {
    var s = $("#view"); if (s) s.innerHTML = this.html() + mobileTabsHTML();
    this.after(); window.scrollTo(0, 0);
  },
  render: function () {
    $("#view").innerHTML = this.html() + mobileTabsHTML();
    this.after();
    /* leave the mobile drawer closed whenever the route changes */
    if (window.innerWidth <= 1024) {
      var sb = $("#sidebar"), bd = $("#backdrop");
      if (sb) sb.classList.remove("open");
      if (bd) bd.classList.remove("show");
    }
  },
  after: function () {
    /* scroll the current question into view inside the runner */
    var cur = $$(".qcard.current")[0];
    if (cur && this._scrollTo) { cur.scrollIntoView({ block: "nearest", behavior: "smooth" }); this._scrollTo = false; }
  },
  html: function () { return (Views[this.route] || Views.dashboard).call(Views); }
};

/* ------------------------------ navigation ------------------------------ */
var NAV = [
  { g: "Overview", items: [["dashboard", "Dashboard", "▦"], ["practice", "Practice", "◎"], ["sets", "Practice Sets", "⊞"], ["mock", "Mock Tests", "◈"]] },
  { g: "Skills", items: [["reading", "Reading", "▤"], ["listening", "Listening", "◉"], ["writing", "Writing", "✎"], ["speaking", "Speaking", "◐"]] },
  { g: "Builders", items: [["vocabulary", "Vocabulary", "◫"], ["grammar", "Grammar", "❖"], ["tutor", "AI Tutor", "✦"]] },
  { g: "Insight", items: [["progress", "Progress", "▧"], ["plan", "Study Plan", "▤"], ["about", "Scoring & Bank", "◉"]] }
];
function navHTML() {
  var p = Store.get().profile, b = Analytics.bands();
  var examDays = clamp(daysBetween(Date.now(), new Date(p.examDate + "T00:00:00")), 0, 999);
  return '<div class="brand"><div class="logo">IE</div><div><b>IELTS Mastery</b><span>Practice Platform</span></div><button class="sidebar-close" data-act="close-menu" aria-label="Close navigation menu" title="Close menu">×</button></div>' +
    NAV.map(function (g) {
      return '<div class="nav-group">' + g.g + "</div><nav class=\"nav\">" + g.items.map(function (i) {
        return '<a href="#' + i[0] + '" data-act="go" data-route="' + i[0] + '" class="' + (App.route === i[0] ? "active" : "") + '"><span class="ic">' + i[2] + "</span>" + i[1] + "</a>";
      }).join("") + "</nav>";
    }).join("") +
    '<div class="side-card"><h5>Your targets</h5>' +
    '<div class="row" style="justify-content:space-between"><span>Current est.</span><b>' + (b.overall == null ? "—" : b.overall.toFixed(1)) + "</b></div>" +
    '<div class="row" style="justify-content:space-between"><span>Target</span><b>' + p.targetBand.toFixed(1) + "</b></div>" +
    '<div class="row" style="justify-content:space-between"><span>Exam in</span><b>' + examDays + " days</b></div>" +
    '<div class="row" style="justify-content:space-between"><span>Daily study</span><b>' + p.dailyMinutes + " min</b></div>" +
    '<button class="btn sm block" style="margin-top:10px" data-act="open-profile">Edit goals</button></div>' +
    '<div class="side-card"><h5>Attempt log</h5>' +
    '<div class="row" style="justify-content:space-between"><span>Tests completed</span><b>' + Store.get().attempts.length + "</b></div>" +
    '<div class="row" style="justify-content:space-between"><span>Questions answered</span><b>' + Store.get().responses.length + "</b></div>" +
    '<div class="row" style="justify-content:space-between"><span>Words saved</span><b>' + (Store.get().vocab.saved || []).length + "</b></div>" +
    "</div>";
}
function topbarHTML() {
  var titles = {
    dashboard: ["Dashboard", "Your current estimated bands, priorities and next actions"],
    practice: ["Practice", "Choose a mode: quick, skill, question-type, weakness, timed or untimed"],
    sets: ["Practice Sets", "30 numbered, scored sets for every skill"],
    mock: ["Mock Tests", "Full exam simulation across all four skills"],
    reading: ["Reading", "Academic and General Training passages, 14 question types"],
    listening: ["Listening", "Four sections, 40 questions, transcripts with trap analysis"],
    writing: ["Writing", "Academic Task 1, GT Task 1 and Task 2 with band samples"],
    speaking: ["Speaking", "Part 1, Part 2 cue cards and Part 3 discussions"],
    vocabulary: ["Vocabulary", "Academic word list entries with spaced repetition"],
    grammar: ["Grammar", "13 error categories, mistakes drive your exercises"],
    progress: ["Progress", "Accuracy by type, difficulty and timing over time"],
    plan: ["Study Plan", "A calendar generated from your own performance data"],
    tutor: ["AI Tutor", "Answers that use your attempt data"],
    about: ["Scoring, Bank & Method", "How scores are produced, and what the bank validator checks"],
    runner: ["Test in progress", "Answer all questions, then submit for scoring"],
    result: ["Result", "Estimated band, breakdown and improvement guidance"],
    writingrun: ["Writing task", "Plan, write, evaluate"],
    speakingrun: ["Speaking test", "Part 1 → Part 2 → Part 3"]
  };
  var t = titles[App.route] || ["IELTS Mastery", ""];
  var b = Analytics.bands();
  return '<button class="menu-btn" data-act="toggle-menu" aria-label="Open menu">☰</button><div><h1>' + esc(t[0]) + '</h1><div class="sub">' + esc(t[1]) + "</div></div>" +
    '<div class="spacer"></div>' +
    '<span class="chip teal tb-chip">Target ' + Store.get().profile.targetBand.toFixed(1) + "</span>" +
    '<span class="chip tb-chip">Est. overall ' + (b.overall == null ? "—" : b.overall.toFixed(1)) + "</span>";
}

/* Mobile bottom tab bar — fixed navigation for phones, hidden on desktop. */
var MOBILE_TABS = [["dashboard", "▦", "Home"], ["sets", "⊞", "Sets"], ["reading", "▤", "Reading"], ["listening", "◉", "Listen"], ["writing", "✎", "Write"], ["speaking", "◐", "Speak"]];
function mobileTabsHTML() {
  var runnerLike = App.route === "runner" || App.route === "writingrun" || App.route === "speakingrun";
  if (runnerLike) return "";
  return '<nav class="mtabs" id="mtabs">' + MOBILE_TABS.map(function (t) {
    return '<a href="#' + t[0] + '" data-act="go" data-route="' + t[0] + '" class="' + (App.route === t[0] ? "active" : "") + '"><span class="ic">' + t[1] + "</span><span>" + t[2] + "</span></a>";
  }).join("") + "</nav>";
}

/* -------------------------------- Views --------------------------------- */
var Views = {};

/* When the platform is opened inside a sandboxed preview or private-browsing
   window, localStorage can be unavailable. Tell the student plainly instead of
   letting them think their progress is being saved. */
function storageWarning() {
  if (Store.ok !== false) return "";
  return '<div class="note rose" style="margin-bottom:16px"><span class="ic">!</span><div>' +
    "<b>Progress will not be saved in this window.</b> The browser has blocked local storage for this page " +
    "(this happens in embedded previews, private-browsing modes and some school networks). Everything else works: " +
    "you can take tests, get scored and read feedback, but the record disappears when you close the tab. " +
    "Open the downloaded <code>ielts-platform.html</code> file directly in your browser, or use the " +
    "<b>Export data</b> button on the Progress page, to keep your history.</div></div>";
}

Views.dashboard = function () {
  var p = Store.get().profile, b = Analytics.bands();
  if (!p.onboarded) return Views.onboarding();
  var prio = Analytics.priorities(), recs = Analytics.recommendedPractice(4);
  var atts = Store.get().attempts.slice(-6).reverse();
  var tp = Analytics.timing(), vp = Analytics.vocabProgress();
  var allResp = Store.get().responses, acc = allResp.length ? allResp.filter(function (r) { return r.correct; }).length / allResp.length : 0;
  var plan = Store.get().plan;
  var nextPlan = plan && plan.days ? plan.days.filter(function (d) { return new Date(d.date) >= new Date(new Date().toDateString()); })[0] : null;
  return '' +
    storageWarning() +
    '<div class="grid g4" style="margin-bottom:16px">' +
    SKILLS.map(function (s) {
      var v = b[s], gap = v == null ? null : round1(p.targetBand - v);
      var cls = v == null ? "" : gap <= 0 ? "good" : gap <= 0.5 ? "warn" : "bad";
      return '<div class="card tight"><div class="stat ' + cls + '"><div class="k">' + s + '</div><div class="v">' + (v == null ? "—" : v.toFixed(1)) + '</div>' +
        '<div class="d">' + (v == null ? "no attempts yet" : (gap <= 0 ? "at target" : gap.toFixed(1) + " below target")) + "</div></div></div>";
    }).join("") +
    "</div>" +
    '<div class="grid g3">' +
    '<div class="card"><div class="card-h"><h2>Overall estimate</h2></div>' +
    '<div class="band-hero"><div><div class="big">' + (b.overall == null ? "—" : b.overall.toFixed(1)) + '</div><div class="lbl">Estimated IELTS Band</div></div>' +
    '<div style="flex:1"><div class="row" style="justify-content:space-between"><span class="small">Target ' + p.targetBand.toFixed(1) + '</span><span class="small muted">' + (b.overall == null ? "" : (b.overall >= p.targetBand ? "Target reached" : "Gap " + round1(p.targetBand - b.overall))) + '</span></div>' +
    '<div class="bar"><i style="width:' + clamp(((b.overall || 0) / 9) * 100, 3, 100) + '%"></i></div>' +
    '<div class="small muted" style="margin-top:6px">' + (b.overall == null ? "Complete at least two skill tests to generate an overall estimate." : bandDescriptor(b.overall) + " · based on " + Store.get().attempts.length + " completed attempts") + '</div>' +
    '<div class="small" style="margin-top:10px">Accuracy ' + pct(acc) + '% · Avg. session ' + Math.round(tp.avgSeconds / 60) + ' min · Words saved ' + vp.saved + '</div></div></div>' +
    '<div class="note" style="margin-top:12px"><span class="ic">ⓘ</span><div><b>Estimated bands.</b> Reading and Listening scores are objective; Writing and Speaking scores are AI-generated estimates and may differ from an official examiner\'s.</div></div>' +
    "</div>" +
    '<div class="card"><div class="card-h"><h2>Priority order</h2><div class="spacer"></div><span class="chip grey">auto-ranked</span></div>' +
    prio.map(function (x) {
      return '<div class="priority p' + Math.min(3, x.rank) + '"><div class="rank">' + x.rank + '</div><div><div class="b">' + x.skill.charAt(0).toUpperCase() + x.skill.slice(1) + "</div><div class=\"small muted\">" + esc(x.reason) + "</div></div></div>";
    }).join("") +
    '<button class="btn primary block" data-act="start-weakness">Start weakness practice →</button></div>' +
    "</div>" +
    '<div class="grid g2">' +
    '<div class="card"><div class="card-h"><h2>Recommended next practice</h2></div>' +
    (recs.length ? recs.map(function (r) {
      return '<div class="stack" style="padding:12px 0;border-bottom:1px dashed var(--line-2)"><div class="b">' + esc(r.title) + '</div><div class="small muted">' + esc(r.reason) + '</div><div class="small">' + esc(r.detail) + '</div>' +
        (r.skill === "grammar" ? '<button class="btn sm" style="margin-top:8px" data-act="go" data-route="grammar">Open Grammar</button>' :
          r.skill === "vocabulary" ? '<button class="btn sm" style="margin-top:8px" data-act="go" data-route="vocabulary">Open Vocabulary</button>' :
            '<button class="btn sm primary" style="margin-top:8px" data-act="quick-start" data-skill="' + r.skill + '" data-types="' + (r.types || []).join(",") + '" data-count="20">Start drill</button>') +
        "</div>";
    }).join("") : '<div class="empty"><div class="big">◎</div>Complete a test and personalised recommendations appear here.</div>') +
    "</div>" +
    '<div class="card"><div class="card-h"><h2>Recent activity</h2><div class="spacer"></div><button class="btn sm" data-act="go" data-route="progress">Full analytics</button></div>' +
    (atts.length ? '<table class="tbl"><thead><tr><th>Date</th><th>Mode</th><th>Skill</th><th>Raw</th><th>Band</th><th>Time</th><th></th></tr></thead><tbody>' +
      atts.map(function (a) {
        return "<tr><td>" + fmtDateTime(a.ts) + "</td><td>" + esc(a.mode) + "</td><td>" + esc(a.skill) + "</td><td>" + (a.raw != null ? a.raw + "/" + a.outOf : "—") + "</td><td><b>" + (a.band == null ? "—" : a.band.toFixed(1)) + "</b></td><td>" + fmtTime(a.timeSpentSec) + '</td><td><button class="btn sm" data-act="view-attempt" data-id="' + a.id + '">Detail</button></td></tr>';
      }).join("") + "</tbody></table>" : '<div class="empty"><div class="big">▦</div>No attempts yet. Start with a diagnostic test.</div>') +
    '<div class="row" style="margin-top:12px"><button class="btn primary" data-act="start-diagnostic">Take the 12-question diagnostic</button>' +
    (nextPlan ? '<button class="btn" data-act="go" data-route="plan">Today\'s plan: ' + esc(nextPlan.tasks[0].text.slice(0, 40)) + "…</button>" : "") + "</div>" +
    "</div></div>";
};

Views.onboarding = function () {
  var p = Store.get().profile;
  return '<div class="card" style="max-width:760px;margin:0 auto">' +
    storageWarning() +
    '<h2>Set up your preparation profile</h2>' +
    '<p class="muted">Everything on this platform — difficulty of questions, timing, priorities and your study plan — is driven by these five settings. You can change them at any time.</p>' +
    '<div class="grid g2">' +
    '<div class="field"><label>Test module</label><select id="ob-module"><option value="academic"' + (p.module === "academic" ? " selected" : "") + '>Academic</option><option value="general"' + (p.module === "general" ? " selected" : "") + ">General Training</option></select></div>" +
    '<div class="field"><label>Current estimated band</label><select id="ob-cur">' + [4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9].map(function (x) { return '<option value="' + x + '"' + (x === p.currentBand ? " selected" : "") + ">Band " + x.toFixed(1) + "</option>"; }).join("") + "</select></div>" +
    '<div class="field"><label>Target band</label><select id="ob-tar">' + [6, 6.5, 7, 7.5, 8, 8.5, 9].map(function (x) { return '<option value="' + x + '"' + (x === p.targetBand ? " selected" : "") + ">Band " + x.toFixed(1) + "</option>"; }).join("") + "</select></div>" +
    '<div class="field"><label>Exam date</label><input type="date" id="ob-date" value="' + p.examDate + '"></div>' +
    '<div class="field"><label>Daily study time (minutes)</label><select id="ob-min">' + [30, 45, 60, 90, 120].map(function (x) { return '<option value="' + x + '"' + (x === p.dailyMinutes ? " selected" : "") + ">" + x + " minutes</option>"; }).join("") + "</select></div>" +
    '<div class="field"><label>Your name (optional)</label><input type="text" id="ob-name" value="' + esc(p.name) + '" placeholder="e.g. Aarav"></div>' +
    "</div>" +
    '<button class="btn primary lg" data-act="save-onboarding">Save and start</button>' +
    '<div class="note" style="margin-top:14px"><span class="ic">ⓘ</span><div>Reading and Listening results are objective. Writing and Speaking results are AI-generated <b>estimates</b> and are not official IELTS scores.</div></div>' +
    "</div>";
};

Views.practice = function () {
  var p = Store.get().profile, types = { reading: Bank.typesBy("reading"), listening: Bank.typesBy("listening") };
  var b = Analytics.bands();
  return '<div class="grid g2"><div class="card"><h2>Quick start</h2>' +
    '<p class="muted small">Sets are drawn from the question pools, filtered by your band target (' + p.targetBand.toFixed(1) + ') and never repeat a question you have already seen unless the pool is exhausted.</p>' +
    '<div class="field"><label>Skill</label><select id="pr-skill"><option value="reading">Reading</option><option value="listening">Listening</option><option value="mixed">Mixed objective (Reading + Listening)</option></select></div>' +
    '<div class="grid g2"><div class="field"><label>Session length</label><select id="pr-count"><option value="5">5 questions (quick)</option><option value="10" selected>10 questions</option><option value="20">20 questions</option><option value="40">40 questions</option></select></div>' +
    '<div class="field"><label>Mode</label><select id="pr-timed"><option value="1">Timed (exam pace)</option><option value="0">Untimed learning mode</option></select></div></div>' +
    '<div class="row"><button class="btn primary" data-act="start-custom">Start practice</button>' +
    '<button class="btn" data-act="start-diagnostic">12-question diagnostic</button>' +
    '<button class="btn teal" data-act="start-bandsweep">Band-sweep challenge (mixed difficulty)</button></div></div>' +
    '<div class="card"><h2>Practice modes</h2>' +
    [["Quick Practice", "5–10 questions across the skills you choose, with full explanations.", [["quick-start", "data-skill=reading data-count=10", "Reading ×10"], ["quick-start", "data-skill=listening data-count=10", "Listening ×10"]]],
    ["Question-Type Practice", "Drill one question type until the pattern is automatic — e.g. 20 True/False/Not Given items.", []],
    ["Weakness Practice", "Built from your error log: the types where your accuracy is lowest.", [["start-weakness", "", "Build from my mistakes"]]],
    ["Full Mock Test", "Reading + Listening under exam timing, then Writing and Speaking.", [["start-mock", "", "Start full mock"]]],
    ["Band Target Mode", "Questions matched to your target band so practice difficulty keeps pace with your goal.", [["start-bandsweep", "", "Start band-matched set"]]]
    ].map(function (m) {
      return '<div class="stack" style="padding:11px 0;border-bottom:1px dashed var(--line-2)"><div class="b">' + m[0] + '</div><div class="small muted">' + m[1] + '</div>' +
        (m[2].length ? '<div class="row tight">' + m[2].map(function (x) { return '<button class="btn sm" data-act="' + x[0] + '" ' + x[1] + ">" + x[2] + "</button>"; }).join("") + "</div>" : "") + "</div>";
    }).join("") +
    "</div></div>" +
    '<div class="grid g2"><div class="card"><div class="card-h"><h3>Question-type drills — Reading</h3><div class="spacer"></div><span class="chip grey">' + types.reading.length + " types</span></div>" +
    '<div class="pill-row">' + types.reading.map(function (t) { return '<button class="btn sm" data-act="quick-start" data-skill="reading" data-types="' + t.type + '" data-count="20">' + t.label + " ×20"; }).join("") + "</div></div>" +
    '<div class="card"><div class="card-h"><h3>Question-type drills — Listening</h3><div class="spacer"></div><span class="chip grey">' + types.listening.length + " types</span></div>" +
    '<div class="pill-row">' + types.listening.map(function (t) { return '<button class="btn sm" data-act="quick-start" data-skill="listening" data-types="' + t.type + '" data-count="20">' + t.label + " ×20"; }).join("") + "</div></div></div>" +
    '<div class="card"><div class="card-h"><h3>Practice by difficulty ladder</h3></div><div class="pill-row">' +
    ["beginner", "intermediate", "advanced", "band7", "band8", "band9"].map(function (d) {
      var n = Bank.filter({ difficulty: d }).length;
      return '<button class="btn sm" data-act="practice-difficulty" data-difficulty="' + d + '"' + (n ? "" : " disabled") + ">" + d + " (" + n + ")</button>";
    }).join("") + '</div><div class="small muted" style="margin-top:8px">Difficulty is based on linguistic complexity and reasoning load, not on obscure vocabulary. Beginner ≈ Band 4.5–5.5, Band 9 items mirror the hardest published passages.</div></div>' +
    setsSummaryCardHTML();
};

Views.mock = function () {
  var b = Analytics.bands();
  return '<div class="grid g2"><div class="card"><h2>Full mock test</h2>' +
    '<p class="small muted">A complete simulation: Reading (60 min, 40 questions), Listening (30 min, 40 questions), then a Writing task and a Speaking interview. Reading and Listening are scored objectively; Writing and Speaking are AI estimates.</p>' +
    '<ul class="small"><li><b>Reading</b> — ' + (Store.get().profile.module === "general" ? "2–3 passages, General Training pool" : "3 passages, Academic pool") + "</li>" +
    "<li><b>Listening</b> — 4 sections, 40 questions, spoken audio with accent variation</li>" +
    "<li><b>Writing</b> — one Task 1 and one Task 2 task</li>" +
    "<li><b>Speaking</b> — a full interview: Part 1 → cue card → Part 3</li></ul>" +
    '<div class="row"><button class="btn primary lg" data-act="start-mock">Start objective sections (90 min)</button>' +
    '<button class="btn" data-act="start-mock-section" data-section="reading">Reading only</button>' +
    '<button class="btn" data-act="start-mock-section" data-section="listening">Listening only</button></div></div>' +
    '<div class="card"><h2>Section-by-section simulation</h2>' +
    '<p class="small muted">Recommended while you build stamina: sit one section under true exam conditions, review it, then sit the next the following day.</p>' +
    [["reading", "Reading — 3 passages, 40 questions, 60 minutes", "60 min"],
    ["listening", "Listening — 4 sections, 40 questions, ~30 minutes", "30 min"],
    ["writing", "Writing — Task 1 + Task 2, 60 minutes", "60 min"],
    ["speaking", "Speaking — 11–14 minutes, three parts", "14 min"]].map(function (x) {
      return '<div class="row" style="justify-content:space-between;padding:10px 0;border-bottom:1px dashed var(--line-2)"><div><div class="b">' + x[1] + '</div><div class="small muted">Estimated band recorded automatically' + (x[0] === "writing" || x[0] === "speaking" ? " (AI estimate)" : "") + '</div></div><button class="btn sm" data-act="' + (x[0] === "writing" ? "go-writing-random" : x[0] === "speaking" ? "go-speaking-random" : "start-mock-section") + '" data-section="' + x[0] + '">Start</button></div>';
    }).join("") + "</div></div>" +
    '<div class="card"><div class="card-h"><h3>Previous mock attempts</h3></div>' +
    (Store.get().attempts.filter(function (a) { return a.mode === "full" || a.mode === "mock-section"; }).length
      ? '<table class="tbl"><thead><tr><th>Date</th><th>Skill</th><th>Raw</th><th>Estimated band</th><th>Time</th><th></th></tr></thead><tbody>' +
      Store.get().attempts.filter(function (a) { return a.mode === "full" || a.mode === "mock-section"; }).slice(-8).reverse().map(function (a) {
        return "<tr><td>" + fmtDateTime(a.ts) + "</td><td>" + esc(a.skill) + "</td><td>" + (a.raw != null ? a.raw + "/" + a.outOf : "—") + "</td><td><b>" + (a.band == null ? "—" : a.band.toFixed(1)) + "</b></td><td>" + fmtTime(a.timeSpentSec) + '</td><td><button class="btn sm" data-act="view-attempt" data-id="' + a.id + '">Open</button></td></tr>';
      }).join("") + "</tbody></table>"
      : '<div class="empty">No mock attempts yet. Start with the objective sections.</div>') + "</div>";
};

/* ---------------------------- practice sets ----------------------------- */
var SETSKILLS = [["reading", "Reading", "▤"], ["listening", "Listening", "◉"], ["writing", "Writing", "✎"], ["speaking", "Speaking", "◐"]];
function setBannerHTML(setKey, extra) {
  if (!setKey) return "";
  extra = extra || {};
  var d = PracticeSets.descriptor(setKey);
  var s = PracticeSets.stats(setKey);
  var setNumber = d ? d.n : "";
  return '<div class="card tight" style="margin-bottom:16px;border-color:var(--brand)"><div class="row" style="justify-content:space-between;align-items:flex-start"><div><div class="badge">Practice set ' + setNumber + '</div><div class="b" style="margin-top:6px">' + esc(d ? d.title : "Practice set") + (extra.label ? " · " + esc(extra.label) : "") + '</div>' +
    '<div class="small muted">Set number ' + setNumber + " · " + s.attempts + " attempt" + (s.attempts > 1 ? "s" : "") + (s.best != null ? " · best band " + s.best.toFixed(1) : "") + '</div></div>' +
    '<div class="row tight">' + (extra.nextAct ? '<button class="btn sm primary" data-act="' + extra.nextAct + '">' + (extra.nextLabel || "Next") + '</button>' : "") +
    '<button class="btn sm" data-act="go" data-route="sets" data-skill="' + (d ? d.skill : "reading") + '">All practice sets</button></div></div></div>';
}
function setsSummaryCardHTML() {
  var rows = SETSKILLS.map(function (s) {
    var sum = PracticeSets.summary(s[0]);
    return '<div class="row" style="justify-content:space-between;padding:10px 0;border-bottom:1px dashed var(--line-2)"><div><div class="b">' + s[2] + " " + s[1] + '</div><div class="small muted">' + sum.done + "/" + sum.total + " sets attempted" + (sum.best != null ? " · best band " + sum.best.toFixed(1) : " · no scores yet") + '</div></div><button class="btn sm" data-act="go" data-route="sets" data-skill="' + s[0] + '">Open ' + PracticeSets.PER_SKILL + " sets</button></div>";
  }).join("");
  return '<div class="card"><div class="card-h"><h3>Numbered practice sets</h3><div class="spacer"></div><span class="chip">' + PracticeSets.PER_SKILL + " per skill</span></div>" +
    '<p class="small muted">Twenty fixed, scored sets for every skill. Retake a set as often as you like — each attempt is scored and the card keeps your best result, so improvement is measurable set by set.</p>' + rows + "</div>";
}
function setsBlockHTML(skill) {
  var sum = PracticeSets.summary(skill);
  var cat = PracticeSets.catalog(skill).map(function (d) { return { d: d, s: PracticeSets.stats(d.key) }; });
  var fresh = cat.filter(function (x) { return !x.s.attempts; });
  var show = fresh.length >= 3 ? fresh.slice(0, 6) : cat.slice(0, 6);
  var chips = show.map(function (x) {
    return '<button class="btn sm" data-act="open-set" data-key="' + x.d.key + '">Set ' + x.d.n + (x.s.lastBand != null ? " · " + x.s.lastBand.toFixed(1) : "") + "</button>";
  }).join("");
  return   '<div class="card"><div class="card-h"><h3>Practice sets — ' + PracticeSets.PER_SKILL + ' scored ' + esc(skill) + ' tests</h3><div class="spacer"></div><span class="chip ' + (sum.done === sum.total ? "green" : "grey") + '">' + sum.done + "/" + sum.total + " attempted" + (sum.best != null ? " · best " + sum.best.toFixed(1) : "") + '</span></div>' +
    '<p class="small muted">' + PracticeSets.PER_SKILL + ' fixed sets, each scored and reproducible. Your best and latest score stays on every set, so you can practise more and watch the number move.</p>' +
    '<div class="pill-row">' + chips + '</div>' +
    '<div class="row" style="margin-top:10px"><button class="btn primary" data-act="go" data-route="sets" data-skill="' + skill + '">See all ' + PracticeSets.PER_SKILL + " sets</button></div></div>";
}
function setCardHTML(d) {
  var s = PracticeSets.stats(d.key);
  var chips = (d.types || []).slice(0, 4).map(function (t) { return '<span class="chip grey">' + esc(TYPELABEL[t] || t) + "</span>"; }).join("");
  if ((d.types || []).length > 4) chips += '<span class="chip grey">+' + (d.types.length - 4) + " more</span>";
  var scoreLine = s.attempts
    ? '<div class="row tight" style="margin-top:8px"><span class="chip ' + (s.best != null && s.best >= 7 ? "green" : "teal") + '">Best ' + (s.best == null ? "—" : s.best.toFixed(1)) + '</span>' +
      '<span class="chip grey">Last ' + (s.lastBand == null ? "—" : s.lastBand.toFixed(1)) + '</span>' +
      '<span class="small muted">' + s.attempts + " attempt" + (s.attempts > 1 ? "s" : "") + (s.lastRaw != null ? " · last " + s.lastRaw + "/" + s.lastOutOf : "") + "</span></div>"
    : '<div class="small muted" style="margin-top:8px">Not attempted yet</div>';
  return '<div class="card tight" style="display:flex;flex-direction:column">' +
    '<div class="row" style="justify-content:space-between;align-items:flex-start"><div><span class="badge">Set ' + d.n + '</span><div class="b" style="margin-top:6px">' + esc(d.skill) + " practice set</div></div><span class=\"chip " + (d.tone || "grey") + "\">" + esc(d.format) + "</span></div>" +
    '<div class="b" style="margin-top:8px">' + esc(d.subtitle || d.title) + "</div>" +
    (chips ? '<div class="pill-row" style="margin-top:6px">' + chips + "</div>" : "") +
    scoreLine +
    '<div style="flex:1"></div>' +
    '<button class="btn ' + (s.attempts ? "" : "primary ") + 'sm block" style="margin-top:10px" data-act="open-set" data-key="' + d.key + '">' + (s.attempts ? "Retake practice" : "Start practice") + "</button></div>";
}
Views.sets = function () {
  var skill = App.params.skill || App.setSkill || "reading";
  App.setSkill = skill;
  var cat = PracticeSets.catalog(skill);
  var sum = PracticeSets.summary(skill);
  var isWS = skill === "writing" || skill === "speaking";
  var tabs = SETSKILLS.map(function (s) {
    return '<button class="btn sm ' + (s[0] === skill ? "primary" : "") + '" data-act="sets-skill" data-skill="' + s[0] + '">' + s[2] + " " + s[1] + " (" + PracticeSets.PER_SKILL + ")</button>";
  }).join("");
  return '<div class="card"><div class="card-h"><h2>Practice sets</h2><div class="spacer"></div><span class="chip ' + (sum.done === sum.total ? "green" : "grey") + '">' + sum.done + "/" + sum.total + " attempted" + (sum.best != null ? " · best " + sum.best.toFixed(1) : "") + "</span></div>" +
    '<p class="small muted">' + PracticeSets.PER_SKILL + ' numbered sets for every skill. Each set is fixed — Set 7 always contains exactly the same questions — so a retake produces a score you can compare honestly, and the card keeps your best and latest result. ' +
    (isWS ? "Writing and Speaking sets are scored by the rubric engine, so the band is an AI estimate." : "Reading and Listening sets are scored objectively against the answer key and converted through the IELTS band table.") + "</p>" +
    '<div class="pill-row">' + tabs + "</div></div>" +
    '<div class="grid g4" style="margin-top:16px">' + cat.map(setCardHTML).join("") + "</div>" +
    '<div class="note" style="margin-top:16px"><span class="ic">ⓘ</span><div>Sets are drawn from the same bank, so a second set over the same material is a retake rather than new content. Scores are recorded in your attempt log like any other test and feed the same analytics.</div></div>';
};

/* ------------------------------- runner --------------------------------- */
function timerbarHTML() {
  var t = App.timer, test = App.test;
  var answered = Object.keys(App.answers).filter(function (k) { return String(App.answers[k] || "").trim(); }).length;
  var total = test.items.length;
  var display = t.duration ? Math.max(0, t.duration - t.elapsed) : t.elapsed;
  var cls = t.duration && (t.duration - t.elapsed) < 120 ? "low" : "";
  return '<div class="timerbar">' +
    '<span class="chip ' + (test.timed ? "" : "teal") + '">' + (test.timed ? "Timed" : "Untimed learning") + "</span>" +
    '<span class="timer ' + cls + '">' + fmtTime(display) + (t.duration ? "" : " elapsed") + "</span>" +
    '<span class="chip grey tb-chip">' + esc(test.title) + "</span>" +
    '<div class="tb-progress"><div class="row" style="justify-content:space-between"><span class="small muted">Answered ' + answered + "/" + total + '</span><span class="small muted">' + (App.flags ? Object.keys(App.flags).length : 0) + ' flagged</span></div><div class="bar"><i style="width:' + (total ? (answered / total) * 100 : 0) + '%"></i></div></div>' +
    '<button class="btn sm" data-act="toggle-pause">' + (t.paused ? "Resume" : "Pause") + "</button>" +
    '<button class="btn sm" data-act="go" data-route="practice">Exit</button>' +
    '<button class="btn sm primary" data-act="submit-test">Submit test</button></div>' +
    (App.review ? reviewHTML() : "");
}
function reviewHTML() {
  var test = App.test;
  var unanswered = test.items.filter(function (i) { return !String(App.answers[i.id] || "").trim(); });
  var flagged = test.items.filter(function (i) { return App.flags[i.id]; });
  return '<div class="card tight" style="border-color:#f0c419;background:#fffdf5"><div class="row" style="justify-content:space-between">' +
    '<div><b>Review before submitting</b><div class="small muted">Unanswered: ' + unanswered.length + " · Flagged: " + flagged.length + "</div></div>" +
    '<div class="row tight">' + common.btn("Submit now", "submit-test", "primary sm") + common.btn("Keep working", "toggle-review", "sm") + "</div></div>" +
    (unanswered.length ? '<div class="small" style="margin-top:8px">Unanswered: ' + unanswered.slice(0, 12).map(function (i) { return "Q" + i.number; }).join(", ") + (unanswered.length > 12 ? "…" : "") + "</div>" : "") + "</div>";
}
var common = {
  btn: function (label, act, cls, extra) { return '<button class="btn ' + (cls || "") + '" data-act="' + act + '" ' + (extra || "") + ">" + label + "</button>"; },
  qinput: function (it, val) {
    var opts = itemOptions(it);
    if (opts && opts.length) {
      return opts.map(function (o, i) {
        var letter = String.fromCharCode(65 + i);
        var sel = String(val || "").trim() === o || String(val || "").trim() === letter;
        return '<label class="opt ' + (sel ? "sel" : "") + '"><input type="radio" name="q-' + it.id + '" data-answer="' + it.id + '" value="' + esc(o) + '" ' + (sel ? "checked" : "") + "><span>" + esc(o) + "</span></label>";
      }).join("");
    }
    return '<div class="answerline"><input type="text" data-answer="' + it.id + '" value="' + esc(val || "") + '" placeholder="Type your answer">' +
      common.btn(App.flags[it.id] ? "★ Flagged" : "☆ Flag", "flag", "sm", 'data-id="' + it.id + '"') + "</div>";
  },
  qcard: function (it, idx) {
    var val = App.answers[it.id] || "";
    return '<div class="qcard ' + (App.flags[it.id] ? "flagged " : "") + (App.qIndex === idx ? "current" : "") + '" data-q="' + idx + '" data-qid="' + it.id + '">' +
      '<div class="qhead"><span class="qnum">' + it.number + '</span><span class="chip grey">' + (TYPELABEL[it.type] || it.type) + '</span><span class="chip violet">' + esc(it.difficulty) + "</span>" +
      (it.wordLimit ? '<span class="chip amber">' + esc(it.wordLimit) + "</span>" : "") +
      '<div class="spacer"></div>' + (itemOptions(it) ? common.btn(App.flags[it.id] ? "★" : "☆", "flag", "sm", 'data-id="' + it.id + '"') : "") + "</div>" +
      '<div class="qprompt">' + esc((it.options && it.options.length) ? it.prompt : promptStem(it.prompt)).replace(/\n/g, "<br>") + "</div>" + common.qinput(it, val) + "</div>";
  }
};

Views.runner = function () {
  var test = App.test;
  if (!test) return '<div class="card"><div class="empty">No test loaded. <br><br><button class="btn primary" data-act="go" data-route="practice">Choose practice</button></div></div>';
  var noteHTML = test.note ? '<div class="note amber" style="margin:0 0 12px"><span class="ic">\u24d8</span><div>' + esc(test.note) + "</div></div>" : "";
  var ctx = test.items[App.qIndex] ? test.items[App.qIndex].ctx : test.contexts[0];
  var ctxType = test.items[App.qIndex] ? test.items[App.qIndex].ctxType : "passage";
  var reader = "";
  if (ctxType === "passage") {
    reader = '<div class="reader" id="reader"><h3>' + esc(ctx.title) + "</h3><div class=\"meta\">" + esc(ctx.subtitle || "") + " · " + ctx.wordCount + " words · " + esc(ctx.topic) + " · " + esc(ctx.difficulty) + ' · ~' + ctx.estimatedMinutes + " min</div>" +
      '<div class="passage">' + ctx.text.map(function (p) { return "<p><span class=\"plabel\">" + p.label + "</span>" + esc(p.p) + "</p>"; }).join("") + "</div>" +
      (ctx.technique ? '<div class="note" style="margin-top:14px"><span class="ic">✎</span><div><b>Technique:</b> ' + esc(ctx.technique.focus) + "</div></div>" : "") + "</div>";
  } else if (ctxType === "section") {
    reader = '<div class="reader" id="reader"><h3>Section ' + ctx.number + " — " + esc(ctx.context) + "</h3>" +
      '<div class="meta">' + esc(ctx.speakers.join(" · ")) + " · Accents: " + esc(ctx.accent.join(", ")) + " · " + esc(ctx.difficulty) + "</div>" +
      '<div class="note"><span class="ic">🔊</span><div><b>Audio.</b> Use the controls below. In the real test you hear the recording once, so try to answer in a single pass. Transcripts stay locked until you submit.</div></div>' +
      '<div class="row" style="margin:12px 0"><button class="btn primary" data-act="play" data-rate="1">▶ Play section</button>' +
      '<button class="btn" data-act="play" data-rate="0.85">▶ Slower</button>' +
      '<button class="btn" data-act="stop-audio">■ Stop</button>' +
      '<span class="chip grey" id="audio-state">ready</span></div>' +
      '<div class="small muted">' + esc(ctx.notes) + "</div>" +
      '<div class="note amber" style="margin-top:12px"><span class="ic">⚠</span><div id="speech-warn">If no sound plays, your browser has no speech synthesis voice installed. Use <b>“Reveal transcript”</b> in untimed mode to practise from the script — the questions and traps still work exactly the same way.</div></div>' +
      '<div class="row" style="margin-top:10px"><button class="btn sm" data-act="toggle-transcript-pre">' + (App.showTranscript ? "Hide transcript" : "Reveal transcript (practice mode)") + "</button></div>" +
      (App.showTranscript ? '<div style="margin-top:10px">' + ctx.transcript.map(function (l) { return '<div class="transcript-line"><div class="who">' + esc(l.sp) + "</div><div>" + esc(l.line) + "</div></div>"; }).join("") + "</div>" : "") + "</div>";
  }
  var pageStart = Math.floor(App.qIndex / 5) * 5;
  var pageItems = test.items.slice(pageStart, pageStart + 5);
  var grouped = "", lastCtx = null;
  pageItems.forEach(function (it) {
    var i = test.items.indexOf(it);
    if (it.ctxId !== lastCtx) {
      var c = it.ctxType === "passage" ? "Passage: " + it.ctx.title : "Section " + it.ctx.number + ": " + it.ctx.context;
      grouped += '<div class="upper" style="margin:14px 0 6px">' + esc(c) + "</div>";
      lastCtx = it.ctxId;
    }
    grouped += common.qcard(it, i);
  });
  var grid = '<div class="card tight"><div class="row" style="justify-content:space-between"><b class="small">Questions ' + (pageStart + 1) + "–" + Math.min(pageStart + 5, test.items.length) + ' of ' + test.items.length + '</b><span class="small muted">green = answered</span></div>' +
    '<div class="qgrid" style="margin-top:8px">' + test.items.map(function (it, i) {
      var done = String(App.answers[it.id] || "").trim();
      return '<button class="' + (done ? "done " : "") + (App.flags[it.id] ? "flag " : "") + (App.qIndex === i ? "cur" : "") + '" data-act="jump" data-i="' + i + '">' + it.number + "</button>";
    }).join("") + "</div>" +
    '<div class="row" style="margin-top:10px"><button class="btn sm" data-act="prev-page"' + (pageStart === 0 ? " disabled" : "") + '>← Previous 5</button><button class="btn sm" data-act="next-page"' + (pageStart + 5 >= test.items.length ? " disabled" : "") + '>Next 5 →</button>' +
    (ctxType === "passage" ? '<button class="btn sm" data-act="scroll-reader">↑ Passage</button>' : "") + "</div>" +
    '<div class="small muted kbd-hint" style="margin-top:8px">Keyboard: <span class="kbd">←</span> <span class="kbd">→</span> move · <span class="kbd">F</span> flag · <span class="kbd">Ctrl</span>+<span class="kbd">Enter</span> review</div></div>';
  /* On phones the passage pane and the questions pane become two tabs, so the
     student can flip between the text and the questions without endless scrolling. */
  var pane = App.pane || (window.innerWidth <= 900 ? "questions" : "passage");
  var mobileToggle = '<div class="pane-toggle"><button class="' + (pane === "questions" ? "" : "primary") + '" data-act="toggle-pane" data-pane="passage">📖 ' + (ctxType === "passage" ? "Passage" : "Audio") + '</button><button class="' + (pane === "questions" ? "primary" : "") + '" data-act="toggle-pane" data-pane="questions">❓ Questions</button></div>';
  return noteHTML + timerbarHTML() + mobileToggle +
    '<div class="runner pane-' + pane + '">' + reader + '<div><div class="qwrap">' + grouped + "</div>" + grid + "</div></div>";
};

/* ---------------------------- listening audio --------------------------- */
var Listening = {
  playing: false, cancelled: false, voices: [],
  loadVoices: function () {
    if (!window.speechSynthesis) return;
    this.voices = window.speechSynthesis.getVoices() || [];
  },
  available: function () { return !!(window.speechSynthesis && window.SpeechSynthesisUtterance); },
  pick: function (accent, sp) {
    if (!this.voices.length) this.loadVoices();
    var v = this.voices;
    var want = /british|uk|gb/i.test(accent) ? /en(-|_)GB/i : /austral/i.test(accent) ? /en(-|_)AU/i :
      /scottish/i.test(accent) ? /en(-|_)GB/i : /indian/i.test(accent) ? /en(-|_)IN/i : /american|us/i.test(accent) ? /en(-|_)US/i : null;
    var cands = v.filter(function (x) { return /^en/i.test(x.lang); });
    var found = want ? cands.filter(function (x) { return want.test(x.lang) || want.test(x.name); }) : [];
    if (!found.length) found = cands;
    if (!found.length) return null;
    /* distribute speakers across available voices so lines sound distinct */
    var h = 0; for (var i = 0; i < String(sp).length; i++) h += String(sp).charCodeAt(i);
    return found[h % found.length];
  },
  play: function (section, rate, onLine, onDone) {
    var self = this;
    if (!this.available()) { toast("Speech synthesis is unavailable in this browser — use Reveal transcript."); if (onDone) onDone(); return; }
    this.stop();
    this.playing = true; this.cancelled = false;
    var i = 0;
    function next() {
      if (self.cancelled || i >= section.transcript.length) {
        self.playing = false;
        var st = $("#audio-state"); if (st) st.textContent = "finished";
        if (onDone) onDone();
        return;
      }
      var line = section.transcript[i];
      var u = new SpeechSynthesisUtterance(line.line);
      var v = self.pick(section.accent.join(","), line.sp);
      if (v) u.voice = v;
      u.rate = rate || 1;
      u.pitch = /female|caller|priya|receptionist|presenter|tutor|anna/i.test(line.sp) ? 1.06 : 0.92;
      u.onend = function () { if (onLine) onLine(i); i++; setTimeout(next, 260); };
      u.onerror = function () { i++; setTimeout(next, 200); };
      var st = $("#audio-state"); if (st) st.textContent = "playing " + (i + 1) + "/" + section.transcript.length;
      try { window.speechSynthesis.speak(u); } catch (e) { self.playing = false; toast("Audio could not start: " + e.message); }
    }
    next();
  },
  stop: function () {
    this.cancelled = true; this.playing = false;
    try { if (window.speechSynthesis) window.speechSynthesis.cancel(); } catch (e) { }
    var st = $("#audio-state"); if (st) st.textContent = "stopped";
  }
};

/* ------------------------------- results -------------------------------- */
function recordAttempt(test, results) {
  var s = Store.get(), p = s.profile;
  var attempt = {
    id: uid("att"), ts: Date.now(), mode: test.mode, skill: test.skill, module: test.module,
    testId: test.id, title: test.title, raw: results.raw, outOf: results.outOf,
    band: results.band, accuracy: results.accuracy, timeSpentSec: App.timer.elapsed,
    durationPlannedSec: test.durationSec, timed: test.timed, bandTarget: test.bandTarget,
    breakdown: results.breakdown,
    setKey: test.setKey || null, setNumber: test.setNumber || null
  };
  s.attempts.push(attempt);
  results.detail.forEach(function (d) {
    if (!d.answered && d.skipped) return;
    s.responses.push({
      attemptId: attempt.id, questionId: d.item.id, skill: d.item.skill, type: d.item.type,
      topic: d.item.topic, difficulty: d.item.difficulty, bandLevel: d.item.bandLevel,
      userAnswer: d.user, correct: d.correct, timeMs: 0,
      attemptNumber: s.responses.filter(function (r) { return r.questionId === d.item.id; }).length + 1
    });
    s.seen[d.item.id] = Date.now();
  });
  Store.save();
  return attempt;
}
function scoreTest(test, answers) {
  var detail = [], byType = {};
  test.items.forEach(function (it) {
    var user = String(answers[it.id] == null ? "" : answers[it.id]).trim();
    var r = checkObjective(user, it);
    detail.push({ item: it, user: user, correct: !!r.correct, note: r.note, over_limit: r.over_limit, answered: !!user });
    var k = it.type;
    byType[k] = byType[k] || { type: k, label: TYPELABEL[k] || k, correct: 0, total: 0 };
    byType[k].total++;
    if (r.correct) byType[k].correct++;
  });
  var raw = detail.filter(function (d) { return d.correct; }).length;
  var outOf = test.items.length;
  var skill = test.skill === "mixed" ? "reading" : test.skill;
  var res = {
    raw: raw, outOf: outOf, accuracy: outOf ? raw / outOf : 0,
    band: rawToBand(raw, outOf, skill, test.module),
    breakdown: Object.keys(byType).map(function (k) { return byType[k]; }).sort(function (a, b) { return (a.correct / a.total) - (b.correct / b.total); }),
    detail: detail,
    readingBand: null, listeningBand: null
  };
  if (test.skill === "mixed") {
    var ri = detail.filter(function (d) { return d.item.skill === "reading"; });
    var li = detail.filter(function (d) { return d.item.skill === "listening"; });
    res.readingBand = ri.length ? rawToBand(ri.filter(function (d) { return d.correct; }).length, ri.length, "reading", test.module) : null;
    res.listeningBand = li.length ? rawToBand(li.filter(function (d) { return d.correct; }).length, li.length, "listening", test.module) : null;
    res.rawBySkill = { reading: [ri.filter(function (d) { return d.correct; }).length, ri.length], listening: [li.filter(function (d) { return d.correct; }).length, li.length] };
  }
  return res;
}

Views.result = function () {
  var r = App.result, test = App.test;
  if (!r) return '<div class="card"><div class="empty">No result to display.</div></div>';
  var weak = r.breakdown.filter(function (b) { return b.correct / b.total < 0.75; });
  var strong = r.breakdown.filter(function (b) { return b.correct / b.total >= 0.8; });
  var recs = Analytics.recommendedPractice(3);
  var b = Analytics.bands();
  return setBannerHTML(test.setKey, { nextAct: "next-set", nextLabel: "Next set →" }) + '<div class="card"><div class="band-hero">' +
    '<div><div class="big">' + r.band.toFixed(1) + '</div><div class="lbl">Estimated IELTS Band</div><div class="small muted" style="margin-top:4px">' + esc(bandDescriptor(r.band)) + "</div></div>" +
    '<div style="flex:1;min-width:220px">' +
    '<div class="row" style="justify-content:space-between"><span>Raw score</span><b>' + r.raw + " / " + r.outOf + "</b></div>" +
    (test.skill === "mixed" ? '<div class="row" style="justify-content:space-between"><span>Reading</span><b>' + (r.readingBand || 0).toFixed(1) + '</b></div><div class="row" style="justify-content:space-between"><span>Listening</span><b>' + (r.listeningBand || 0).toFixed(1) + "</b></div>" : "") +
    '<div class="row" style="justify-content:space-between"><span>Accuracy</span><b>' + pct(r.accuracy) + "%</b></div>" +
    '<div class="row" style="justify-content:space-between"><span>Time taken</span><b>' + fmtTime(App.timer.elapsed) + "</b></div>" +
    '<div class="row" style="justify-content:space-between"><span>Mode</span><b>' + (test.timed ? "Timed" : "Untimed learning") + "</b></div>" +
    '<div class="row" style="justify-content:space-between"><span>Skill focus</span><b>' + esc(test.skill) + "</b></div>" +
    "</div></div>" +
    '<div class="note amber" style="margin-top:14px"><span class="ic">ⓘ</span><div><b>Estimated band.</b> Raw marks were converted through the ' + (test.module === "general" && test.skill === "reading" ? "General Training" : "Academic") + ' conversion table' + (r.outOf < 40 ? " and scaled to a 40-mark equivalent, so this is a closer estimate than a full test would give" : "") + '. Writing and Speaking results on this platform are AI estimates, not official scores.</div></div></div>' +

    '<div class="grid g2"><div class="card"><div class="card-h"><h3>Accuracy by question type</h3></div>' +
    r.breakdown.map(function (x) {
      var p = x.total ? x.correct / x.total : 0;
      return '<div style="margin-bottom:11px"><div class="row" style="justify-content:space-between"><span class="small">' + esc(x.label) + '</span><span class="small b">' + x.correct + "/" + x.total + " · " + pct(p) + '%</span></div><div class="bar ' + (p < 0.6 ? "rose" : p < 0.8 ? "amber" : "teal") + '"><i style="width:' + Math.max(3, p * 100) + '%"></i></div></div>';
    }).join("") + "</div>" +
    '<div class="card"><div class="card-h"><h3>Diagnosis</h3></div>' +
    (weak.length ? '<div class="upper">Weak areas</div><ul class="small">' + weak.map(function (w) { return "<li><b>" + esc(w.label) + "</b> — " + pct(w.correct / w.total) + "% (" + w.correct + "/" + w.total + ")</li>"; }).join("") + "</ul>" : '<div class="note green"><span class="ic">✓</span><div>No weak areas in this set — every question type was answered at 75% or above.</div></div>') +
    (strong.length ? '<div class="upper" style="margin-top:10px">Strong areas</div><ul class="small">' + strong.map(function (w) { return "<li>" + esc(w.label) + " — " + pct(w.correct / w.total) + "%</li>"; }).join("") + "</ul>" : "") +
    '<div class="upper" style="margin-top:10px">Recommended next practice</div>' +
    (recs.length ? recs.map(function (x) { return '<div class="small" style="padding:6px 0;border-bottom:1px dashed var(--line-2)"><b>' + esc(x.title) + "</b><br>" + esc(x.reason) + "</div>"; }).join("") : '<div class="small muted">Log more attempts for targeted recommendations.</div>') +
    '<div class="row" style="margin-top:12px"><button class="btn primary" data-act="start-weakness">Drill my weak types</button><button class="btn" data-act="retry-test">Retry this test</button><button class="btn" data-act="go" data-route="progress">Progress</button></div>' +
    "</div></div>" +

    (Store.get().attempts.length >= 4 ? '<div class="card"><div class="card-h"><h3>Band trend</h3></div>' + sparkline(Analytics.trend(test.skill === "mixed" ? null : test.skill), { min: 4, max: 9 }) + "</div>" : "") +

    '<div class="card"><div class="card-h"><h2>Question-by-question review</h2><div class="spacer"></div><span class="chip grey">' + r.detail.filter(function (d) { return d.correct; }).length + " correct · " + r.detail.filter(function (d) { return !d.answered; }).length + " unanswered</span></div>" +
    '<p class="small muted">Every item shows what was being tested, where the answer was, why it is correct, why your answer was wrong, the trap that caused the mistake, and how to recognise the pattern next time.</p>' +
    r.detail.map(function (d) { return explanationHTML(d); }).join("") + "</div>" +

    (App.showTranscript ? "" : "") +
    (test.items.some(function (i) { return i.ctxType === "section"; }) ? '<div class="card"><div class="card-h"><h2>Transcript review</h2><div class="spacer"></div><button class="btn sm" data-act="toggle-transcript">Toggle transcript</button></div>' +
      (App.showTranscript ? transcriptReviewHTML(test, r) : '<div class="small muted">Reveal the transcript to see where each answer appeared, which lines were distractors, and how the speaker paraphrased the question.</div>') + "</div>" : "");
};

function explanationHTML(d) {
  var it = d.item, ex = it.ex || {};
  var yours = !d.answered ? "(not answered)" : esc(d.user);
  return '<div class="qcard"><div class="qhead"><span class="qnum">' + it.number + '</span>' +
    '<span class="chip ' + (d.correct ? "green" : "rose") + '">' + (d.correct ? "Correct" : "Incorrect") + "</span>" +
    '<span class="chip grey">' + esc(TYPELABEL[it.type] || it.type) + "</span>" +
    '<span class="chip violet">' + esc(it.bandLevel || it.difficulty) + "</span>" +
    '<div class="spacer"></div><span class="small muted">' + esc(it.source) + "</span></div>" +
    '<div class="qprompt">' + esc(it.prompt) + "</div>" +
    '<div class="row tight"><span class="chip ' + (d.correct ? "green" : "rose") + '">Your answer: ' + yours + "</span>" +
    '<span class="chip green">Correct answer: ' + esc(it.answer) + "</span>" +
    (d.note ? '<span class="chip amber">' + esc(d.note) + "</span>" : "") +
    ((it.accepted || []).length ? '<span class="chip grey">Also accepted: ' + esc(it.accepted.join(" / ")) + "</span>" : "") + "</div>" +
    '<div class="explain">' +
    [["What was tested", ex.test], ["Where the answer was", ex.where], ["Evidence", ex.quote ? "QUOTE" : ""], ["Why it is correct", ex.why],
    ["Why your answer was wrong", ex.mine], ["The trap", ex.trap], ["Next time", ex.next]].map(function (row) {
      if (!row[1]) return "";
      if (row[2] === "QUOTE") return '<div class="ex-row"><div class="ex-k">' + row[0] + '</div><div class="ex-v"><div class="quote">' + esc(ex.quote) + "</div></div></div>";
      return '<div class="ex-row"><div class="ex-k">' + row[0] + '</div><div class="ex-v">' + esc(row[1]) + "</div></div>";
    }).join("") +
    ((it.vocab || []).length ? '<div class="ex-row"><div class="ex-k">Related vocabulary</div><div class="ex-v">' + it.vocab.map(function (v) { return "<b>" + esc(v[0]) + "</b> — " + esc(v[1]); }).join(" · ") + "</div></div>" : "") +
    "</div>" +
    '<div class="row tight" style="margin-top:10px"><button class="btn sm" data-act="ask-about" data-q="Why is the answer to question ' + it.number + " \\\"" + esc(it.answer) + "\\\" and not what I wrote?\">Ask the tutor about this</button>" +
    '<span class="small muted">Skill tested: ' + esc(ex.test ? (ex.test.split(".")[0]) : "") + "</span></div></div>";
}

function transcriptReviewHTML(test, r) {
  /* Rejection and correction signals: in IELTS listening, distractors are almost
     always a fact the speaker then withdraws ("not five, as the old handbook says"),
     a change of direction ("actually", "rather than") or a polite refusal
     ("I'm afraid"). Marking those lines teaches the pattern rather than the answer. */
  var REJECT = /(\bnot\b|\brather than\b|\binstead of\b|i'?m afraid|\bactually\b|\bsorry\b|\bno, |\bdon'?t\b|\bdoesn'?t\b|\bisn'?t\b|\bwasn'?t\b|\bcan'?t\b|\bwon'?t\b|\bnever\b|\bexcept\b|\bunfortunately\b|\bwrong\b|\bold\b|\bno longer\b|\bcorrection\b)/i;
  var out = "";
  var sections = (test.contexts || []).filter(function (c) { return c.transcript; });
  if (!sections.length) return "";
  sections.forEach(function (sec) {
    var items = test.items.filter(function (i) { return i.ctxId === sec.id; });
    var hits = {}, dis = {}, hitIdx = [];
    items.forEach(function (it) {
      var key = String(it.answer).toLowerCase().replace(/[^a-z0-9 ]/g, "").trim();
      var words = key.split(" ").filter(function (w) { return w.length > 3; });
      if (key.length < 3 && !words.length) return;
      sec.transcript.forEach(function (l, idx) {
        var low = l.line.toLowerCase();
        var match = key.length > 3 ? (low.indexOf(key) > -1 || (words.length && words.every(function (w) { return low.indexOf(w) > -1; }))) : new RegExp("\\b" + key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "\\b").test(low);
        if (match) { hits[idx] = hits[idx] || []; hits[idx].push(it.number); if (hitIdx.indexOf(idx) === -1) hitIdx.push(idx); }
      });
    });
    sec.transcript.forEach(function (l, idx) {
      if (hits[idx] || !REJECT.test(l.line)) return;
      var near = hitIdx.some(function (h) { return Math.abs(h - idx) <= 5; });
      if (near) dis[idx] = 1;
    });
    out += '<div class="upper" style="margin:14px 0 6px">Section ' + sec.number + " — " + esc(sec.context) + "</div>";
    sec.transcript.forEach(function (l, idx) {
      var cls = hits[idx] ? "hit" : dis[idx] ? "dist" : "";
      out += '<div class="transcript-line ' + cls + '"><div class="who">' + esc(l.sp) + "</div><div>" + esc(l.line) +
        (hits[idx] ? '<span class="tag ans">answer Q' + hits[idx].join(", ") + "</span>" : "") +
        (dis[idx] ? '<span class="tag dis">distractor signal: a fact withdrawn or corrected</span>' : "") + "</div></div>";
    });
    out += '<div class="small muted" style="margin:8px 0 4px">Highlighting is generated by matching each answer key to the script, so you can see the exact words the speaker used — and how close the distractors sat.</div>';
  });
  out += '<div class="legend" style="margin-top:10px"><span><i style="background:#fff8dc;border:1px solid #f2e0a8"></i>answer location</span><span><i style="background:#fdf2f5;border:1px solid #f6d7e0"></i>distractor signal — a fact the speaker withdrew or corrected</span><span>Spelling and word limits are part of the mark — check your answer against the exact script wording.</span></div>';
  return out;
}
