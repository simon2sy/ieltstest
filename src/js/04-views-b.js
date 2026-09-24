/* =========================================================================
   IELTS MASTERY — VIEWS B
   Reading · Listening · Writing (home + editor + report) ·
   Speaking (home + interview + report) · Vocabulary · Grammar ·
   Progress · Study Plan · AI Tutor · Scoring/Bank
   ========================================================================= */

/* -------------------------------- reading ------------------------------- */
Views.reading = function () {
  var mod = Store.get().profile.module;
  var acad = window.BANK_READING.academic, gen = window.BANK_READING.general;
  var typesR = Bank.typesBy("reading");
  var b = Analytics.bands();
  return '<div class="grid g3" style="margin-bottom:16px">' +
    '<div class="card tight"><div class="stat"><div class="k">Estimated Reading band</div><div class="v">' + (b.reading == null ? "—" : b.reading.toFixed(1)) + '</div><div class="d">' + (mod === "general" ? "General Training table" : "Academic table") + "</div></div></div>" +
    '<div class="card tight"><div class="stat"><div class="k">Passage bank</div><div class="v">' + (acad.length + gen.length) + '</div><div class="d">' + acad.length + " Academic · " + gen.length + " General Training</div></div></div>" +
    '<div class="card tight"><div class="stat"><div class="k">Question types supported</div><div class="v">14</div><div class="d">' + typesR.length + " currently seeded with items</div></div></div></div>" +

    '<div class="card"><div class="card-h"><h2>Full reading test</h2><div class="spacer"></div><span class="chip">' + (mod === "general" ? "General Training" : "Academic") + "</span></div>" +
    '<p class="small muted">' + (mod === "general" ? "Two or three passages, 40 questions, 60 minutes — the GT conversion table applies, so the band for the same raw score is higher than in Academic." : "Three passages, 40 questions, 60 minutes, answers following the standard Academic conversion table.") + "</p>" +
    '<div class="row"><button class="btn primary" data-act="start-reading-full">Start 40-question test (timed)</button>' +
    '<button class="btn" data-act="start-reading-full" data-timed="0">Same test untimed (learning mode)</button>' +
    '<button class="btn teal" data-act="start-mock-section" data-section="reading">Exam simulation</button></div></div>' +

    '<div class="grid g2"><div class="card"><div class="card-h"><h3>Practice by question type</h3></div>' +
    '<div class="pill-row">' + typesR.map(function (t) { return '<button class="btn sm" data-act="quick-start" data-skill="reading" data-types="' + t.type + '" data-count="20">' + t.label + " ×20</button>"; }).join("") + "</div>" +
    '<div class="note" style="margin-top:12px"><span class="ic">✎</span><div><b>Order rules:</b> completions, True/False/Not Given and multiple choice follow passage order. Matching headings, matching information and matching features do not — locate first, then answer.</div></div></div>' +

    '<div class="card"><div class="card-h"><h3>Passage library</h3><div class="spacer"></div><span class="chip grey">' + (acad.length + gen.length) + " passages</span></div>" +
    acad.concat(gen).map(function (p) {
      var n = p.questions.length;
      return '<div style="padding:9px 0;border-bottom:1px dashed var(--line-2)"><div class="row" style="justify-content:space-between"><div><div class="b">' + esc(p.title) + '</div><div class="small muted">' + esc(p.subtitle || "") + " · " + esc(p.topic) + " · " + n + " Q · " + esc(p.band) + '</div></div><button class="btn sm" data-act="start-passage" data-id="' + p.id + '">Practise</button></div></div>';
    }).join("") + "</div></div>" +

    '<div class="card"><div class="card-h"><h3>All 14 reading question types</h3></div><div class="grid g3">' +
    Object.keys(TYPELABEL).map(function (k) {
      var has = Bank.filter({ skill: "reading", type: k }).length;
      return '<div class="stat" style="padding:10px"><div class="b small">' + TYPELABEL[k] + '</div><div class="small muted">' + (has ? has + " items seeded" : "supported — pool being expanded") + "</div></div>";
    }).join("") + "</div></div>" +
    setsBlockHTML("reading");
};

/* ------------------------------- listening ------------------------------- */
Views.listening = function () {
  var b = Analytics.bands(), secs = window.BANK_LISTENING.sections;
  var typesL = Bank.typesBy("listening");
  return '<div class="grid g3" style="margin-bottom:16px">' +
    '<div class="card tight"><div class="stat"><div class="k">Estimated Listening band</div><div class="v">' + (b.listening == null ? "—" : b.listening.toFixed(1)) + '</div><div class="d">40-item conversion table</div></div></div>' +
    '<div class="card tight"><div class="stat"><div class="k">Sections in bank</div><div class="v">' + secs.length + '</div><div class="d">' + (secs.length * 10) + " questions seeded</div></div></div>" +
    '<div class="card tight"><div class="stat"><div class="k">Accents</div><div class="v">' + Object.keys(groupBy(([]).concat.apply([], secs.map(function (s) { return s.accent; })), function (x) { return x; })).length + '</div><div class="d">British · Scottish · American · Australian · Indian English</div></div></div></div>' +

    '<div class="card"><div class="card-h"><h2>Full listening test</h2><div class="spacer"></div><span class="chip">4 sections · 40 questions · ~30 min</span></div>' +
    '<p class="small muted">Sections follow the real test pattern: Section 1 a transactional conversation, Section 2 a monologue for a general audience, Section 3 an academic tutorial, Section 4 an academic lecture. Each section is spoken with speech synthesis, with different voices for different speakers.</p>' +
    '<div class="note amber"><span class="ic">🔊</span><div>Audio uses your browser\'s built-in speech voices. If none is installed, use <b>untimed mode → reveal transcript</b>: the questions, traps and explanations are identical.</div></div>' +
    '<div class="row" style="margin-top:12px"><button class="btn primary" data-act="start-listening-full">Start 40-question test</button>' +
    '<button class="btn" data-act="start-listening-full" data-timed="0">Untimed (transcript allowed)</button>' +
    '<button class="btn teal" data-act="start-mock-section" data-section="listening">Exam simulation</button></div></div>' +

    '<div class="grid g2"><div class="card"><div class="card-h"><h3>Practise one section</h3></div>' +
    secs.map(function (s) {
      return '<div class="row" style="justify-content:space-between;padding:9px 0;border-bottom:1px dashed var(--line-2)"><div><div class="b">Section ' + s.number + " — " + esc(s.context.slice(0, 58)) + (s.context.length > 58 ? "…" : "") + '</div><div class="small muted">' + esc(s.accent.join(", ")) + " · " + s.questions.length + " questions · " + esc(s.band) + '</div></div><button class="btn sm" data-act="start-section" data-id="' + s.id + '">Play & answer</button></div>';
    }).join("") + "</div>" +
    '<div class="card"><div class="card-h"><h3>Question types & technique</h3></div>' +
    '<div class="pill-row">' + typesL.map(function (t) { return '<button class="btn sm" data-act="quick-start" data-skill="listening" data-types="' + t.type + '" data-count="20">' + t.label + "</button>"; }).join("") + "</div>" +
    '<div class="hr"></div><div class="upper">Method for every listening question</div><ol class="small">' +
    "<li>Read the gap before audio begins and label what it needs: name, number, date, place, noun.</li>" +
    "<li>Expect correction language: ‘sorry’, ‘actually’, ‘I should correct that’. The second version wins.</li>" +
    "<li>Numbers and spelling are marks. Write them immediately, don't reconstruct later.</li>" +
    "<li>In matching tasks, the person who comments is usually not the person who proposed.</li>" +
    "<li>Check the word limit before writing. Over-limit answers score zero even when correct.</li>" +
    "</ol></div></div>" +
    setsBlockHTML("listening");
};

/* -------------------------------- writing -------------------------------- */
Views.writing = function () {
  var tasks = window.BANK_WRITING.tasks;
  var b = Analytics.bands();
  var at1 = tasks.filter(function (t) { return t.module === "academic" && t.task === 1; });
  var gt1 = tasks.filter(function (t) { return t.task === 1 && t.module === "general"; });
  var t2 = tasks.filter(function (t) { return t.task === 2; });
  function taskRow(t) {
    return '<div style="padding:10px 0;border-bottom:1px dashed var(--line-2)"><div class="row" style="justify-content:space-between"><div style="flex:1"><div class="b">' + esc(t.title) + '</div><div class="small muted">' + esc(t.visualType || t.essayType || (t.formal === false ? "Informal letter" : "Formal letter")) + " · " + esc(t.topicCategory) + " · " + t.minWords + "+ words · " + t.timeMinutes + " min · " + esc(t.band) + (t.samples ? ' · <span class="chip green">4 band samples</span>' : "") + '</div></div><button class="btn sm" data-act="open-writing" data-id="' + t.id + '">Write</button></div></div>';
  }
  return '<div class="grid g3" style="margin-bottom:16px">' +
    '<div class="card tight"><div class="stat"><div class="k">Estimated Writing band</div><div class="v">' + (b.writing == null ? "—" : b.writing.toFixed(1)) + '</div><div class="d">AI estimate across four criteria</div></div></div>' +
    '<div class="card tight"><div class="stat"><div class="k">Tasks available</div><div class="v">' + tasks.length + '</div><div class="d">' + at1.length + " Task 1 visual · " + gt1.length + " GT letter · " + t2.length + " Task 2</div></div></div>" +
    '<div class="card tight"><div class="stat"><div class="k">Band samples</div><div class="v">' + tasks.filter(function (t) { return t.samples; }).length * 4 + '</div><div class="d">Band 6 · 7 · 8 · 9 written answers</div></div></div></div>' +

    '<div class="note"><span class="ic">ⓘ</span><div><b>How your Writing score is produced.</b> The engine measures task coverage, structure, cohesion, lexical range and 13 grammar error categories, then maps those signals to the four official criteria. It is an <b>AI-generated estimate</b> for practice guidance — a trained examiner may score the same essay differently, especially for Task Response nuance.</div></div>' +

    '<div class="grid g3" style="margin-top:16px">' +
    '<div class="card"><div class="card-h"><h3>Academic Task 1</h3><span class="chip grey">' + at1.length + " tasks</span></div>" + at1.map(taskRow).join("") + "</div>" +
    '<div class="card"><div class="card-h"><h3>General Training Task 1</h3><span class="chip grey">' + gt1.length + " tasks</span></div>" + (gt1.length ? gt1.map(taskRow).join("") : '<div class="small muted">Set your module to General Training in your goals.</div>') +
    '<div class="hr"></div><div class="upper">Letter register rules</div><ul class="small"><li><b>Formal</b> (to a company, official): Dear Sir or Madam / Yours faithfully; no contractions; no exclamation marks.</li><li><b>Semi-formal</b> (to a landlord, colleague you know slightly): Dear Mr/Ms + surname / Yours sincerely.</li><li><b>Informal</b> (to a friend): first name, contractions expected, phrasal verbs, exclamation marks allowed sparingly.</li></ul></div>' +
    '<div class="card"><div class="card-h"><h3>Task 2</h3><span class="chip grey">' + t2.length + " tasks</span></div>" + t2.map(taskRow).join("") +
    '<div class="hr"></div><div class="upper">Essay type → structure</div><ul class="small">' +
    "<li><b>Opinion</b>: state position in the introduction, rebut the opposing case, restate in conclusion.</li>" +
    "<li><b>Discussion</b>: both views developed, then your verdict — must not be fence-sitting.</li>" +
    "<li><b>Advantages / Disadvantages</b>: answer the ‘outweigh’ question explicitly.</li>" +
    "<li><b>Problem / Solution</b>: match each cause to a remedy so the structure scores for progression.</li>" +
    "<li><b>Two-part / Direct questions</b>: one developed paragraph per question — coverage is the mark.</li>" +
    "<li><b>Positive / Negative</b>: judge the development as a whole, with a condition attached.</li></ul></div></div>" +
    '<div class="card"><div class="card-h"><h3>Band descriptors used by the evaluator</h3></div><table class="tbl"><thead><tr><th>Criterion</th><th>What raises it</th><th>What caps it</th></tr></thead><tbody>' +
    "<tr><td>Task Achievement / Response</td><td>An explicit overview (T1) or position (T2); every part of the question answered; 55+ words of development per body paragraph.</td><td>Under-length answers (cap 5.0 below 75% of the minimum), no overview (cap 6.0), no position (cap 6.0).</td></tr>" +
    "<tr><td>Coherence &amp; Cohesion</td><td>Four to five paragraphs, 6+ distinct cohesive devices, referencing instead of repetition, no repeated sentence openers.</td><td>Two paragraphs only, or a list of points with no paragraphing.</td></tr>" +
    "<tr><td>Lexical Resource</td><td>Varied content words, academic items used accurately, precise replacements for ‘good / big / thing’.</td><td>High-frequency imprecise vocabulary, spelling and word-form errors.</td></tr>" +
    "<tr><td>Grammatical Range &amp; Accuracy</td><td>1.8+ clauses per sentence, several subordinating structures, some passive, error rate below 3 per 100 words.</td><td>Errors above 8 per 100 words, fragments, run-ons, or accuracy bought with nothing but simple sentences.</td></tr>" +
    "</tbody></table></div>" +
    setsBlockHTML("writing");
};

Views.writingrun = function () {
  var w = App.writing;
  if (!w.task) return '<div class="card"><div class="empty">Choose a task first.<br><br><button class="btn primary" data-act="go" data-route="writing">Back to Writing</button></div></div>';
  var t = w.task, el = w.elapsed || 0;
  if (w.report) return writingReportHTML(w.report, t);
  var limit = t.timeMinutes * 60;
  return '<div class="timerbar"><span class="chip">' + esc(t.task === 1 ? "Task 1" : "Task 2") + '</span><span class="chip grey">' + esc(t.title) + "</span>" +
    '<span class="timer ' + (limit - el < 120 ? "low" : "") + '">' + fmtTime(Math.max(0, limit - el)) + " remaining</span>" +
    '<span class="timer" style="font-size:14px">' + countWords(w.text || "") + " words <span class=\"muted\">/ " + t.minWords + " min</span></span>" +
    '<div class="spacer"></div><button class="btn sm" data-act="writing-samples">Band samples</button>' +
    '<button class="btn sm primary" data-act="evaluate-writing">Evaluate my writing</button>' +
    '<button class="btn sm" data-act="go" data-route="writing">Exit</button></div>' +
    (w.showSamples ? samplesHTML(t) : "") +
    '<div class="grid g2"><div class="card"><div class="card-h"><h3>Task</h3><span class="chip grey">' + esc(t.task === 1 ? "Report" : "Essay") + '</span><span class="chip">min ' + t.minWords + " words</span></div>" +
    '<div class="passage" style="font-family:var(--ff);font-size:15px">' + esc(t.prompt).replace(/\n/g, "<br>") + "</div>" +
    '<div class="hr"></div><div class="upper">Examiner notes</div>' +
    Object.keys(t.examinerNotes || {}).map(function (k) {
      return '<div class="ex-row"><div class="ex-k">' + (k === "TA" ? "Task" : k === "CC" ? "Cohesion" : k === "LR" ? "Lexis" : "Grammar") + '</div><div class="ex-v">' + esc(t.examinerNotes[k]) + "</div></div>";
    }).join("") +
    '<div class="hr"></div><button class="btn sm" data-act="toggle-plan">' + (w.showPlan ? "Hide" : "Show") + " model plan</button>" +
    (w.showPlan ? '<ol class="small" style="margin-top:10px">' + t.modelPlan.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ol>" : "") + "</div>" +
    '<div class="card"><div class="card-h"><h3>Your answer</h3><div class="spacer"></div><span class="small muted">Autosaved locally</span></div>' +
    '<textarea id="writing-text" data-input="writing" rows="22" placeholder="Write your ' + (t.task === 1 ? "report" : "essay") + ' here…">' + esc(w.text || "") + "</textarea>" +
    '<div class="row" style="margin-top:10px"><button class="btn primary" data-act="evaluate-writing">Evaluate my writing</button>' +
    '<button class="btn" data-act="writing-clear">Clear</button><span class="small muted">' + countWords(w.text || "") + " words</span></div>" +
    '<div class="note" style="margin-top:12px"><span class="ic">ⓘ</span><div>Write at least ' + t.minWords + " words. Answers under " + Math.round(t.minWords * 0.75) + " words are capped at Band 5 in Task Achievement regardless of quality.</div></div>" +
    "</div></div>";
};

function samplesHTML(t) {
  if (!t.samples) return '<div class="note amber"><span class="ic">✎</span><div>Full four-band samples are provided for the line-graph Task 1, the process Task 1, the formal letter, the opinion essay and the discussion essay. For this task, use the model plan and examiner notes on the left.</div></div>';
  var bands = ["band6", "band7", "band8", "band9"];
  return '<div class="card"><div class="card-h"><h3>Band 6 / 7 / 8 / 9 sample answers</h3><div class="spacer"></div><span class="chip grey">read them comparatively — the differences are structural, not just lexical</span></div><div class="grid g4">' +
    bands.map(function (bk) {
      return '<div class="stat" style="max-height:420px;overflow:auto"><div class="b">' + bk.replace("band", "Band ") + '</div><div class="small muted">' + countWords(t.samples[bk]) + ' words</div><div class="small" style="white-space:pre-wrap;margin-top:8px">' + esc(t.samples[bk]) + "</div></div>";
    }).join("") + "</div></div>";
}

function writingSetExtra() {
  var w = App.writing || {}, paper = w.paper || [], idx = w.paperIndex || 0;
  var more = paper.length > idx + 1;
  return { nextAct: more ? "writing-next" : "next-set", nextLabel: more ? "Next task →" : "Next set →", label: paper.length > 1 ? "task " + (idx + 1) + " of " + paper.length : "" };
}
function writingReportHTML(rep, t) {
  return setBannerHTML(App.writing.setKey, writingSetExtra()) + '<div class="card"><div class="band-hero"><div><div class="big">' + rep.overall.toFixed(1) + '</div><div class="lbl">Estimated IELTS Band — Writing</div>' +
    '<div class="small muted" style="margin-top:4px">' + countWords(App.writing.text) + " words · " + fmtTime(App.writing.elapsed || 0) + " used of " + t.timeMinutes + " minutes</div></div>" +
    '<div style="flex:1;min-width:240px">' + rep.criteria.map(function (c) {
      return '<div style="margin-bottom:9px"><div class="row" style="justify-content:space-between"><span class="small">' + esc(c.name) + '</span><span class="b">' + c.band.toFixed(1) + '</span></div><div class="bar ' + (c.band < 6 ? "rose" : c.band < 7 ? "amber" : "teal") + '"><i style="width:' + (c.band / 9) * 100 + '%"></i></div></div>';
    }).join("") + "</div></div>" +
    '<div class="note amber" style="margin-top:14px"><span class="ic">ⓘ</span><div>' + esc(rep.disclaimer) + "</div></div>" +
    (rep.bandNote ? '<div class="note rose" style="margin-top:10px"><span class="ic">!</span><div>' + esc(rep.bandNote) + "</div></div>" : "") + "</div>" +

    '<div class="grid g2"><div class="card"><div class="card-h"><h3>Criterion justifications</h3></div>' +
    rep.criteria.map(function (c) {
      return '<div style="padding:10px 0;border-bottom:1px dashed var(--line-2)"><div class="row" style="justify-content:space-between"><b>' + esc(c.name) + '</b><span class="band-chip">' + c.band.toFixed(1) + "</span></div><div class=\"small\" style=\"margin-top:6px\">" + esc(c.why) + "</div></div>";
    }).join("") + "</div>" +

    '<div class="card"><div class="card-h"><h3>Top actions, ranked by band impact</h3></div>' +
    rep.actions.map(function (a) {
      return '<div class="priority p' + Math.min(3, a.p) + '"><div class="rank">' + a.p + '</div><div class="small">' + esc(a.text) + "</div></div>";
    }).join("") +
    '<div class="hr"></div><div class="upper">Task-response checklist</div>' +
    rep.stats.tr.checks.map(function (c) {
      return '<div class="row" style="justify-content:space-between;padding:5px 0"><span class="small">' + (c.ok ? "✓" : "✗") + " " + esc(c.k) + '</span><span class="small muted">' + esc(c.detail) + "</span></div>";
    }).join("") + "</div></div>" +

    (rep.rewrites.length ? '<div class="card"><div class="card-h"><h2>Specific corrections and rewrites</h2><div class="spacer"></div><span class="chip grey">' + rep.rewrites.length + " rewrites</span></div>" +
      rep.rewrites.map(function (r) {
        return '<div style="padding:12px 0;border-bottom:1px dashed var(--line-2)"><span class="chip violet">' + esc(r.type) + '</span>' +
          '<div class="quote" style="margin-top:8px;border-left-color:var(--rose);background:#fdf5f7">' + esc(r.before) + "</div>" +
          '<div class="quote" style="margin-top:8px">' + esc(r.after) + "</div>" +
          '<div class="small muted" style="margin-top:6px"><b>Why the second is stronger:</b> ' + esc(r.why) + "</div></div>";
      }).join("") + "</div>" : "") +

    '<div class="grid g2">' +
    (rep.upgrades.length ? '<div class="card"><div class="card-h"><h3>Weak phrases → better alternatives</h3></div>' + rep.upgrades.map(function (u) {
      return '<div style="padding:10px 0;border-bottom:1px dashed var(--line-2)"><div class="row" style="justify-content:space-between"><b>“' + esc(u.phrase) + '” ×' + u.count + '</b><span class="chip rose">imprecise</span></div>' +
        (u.original ? '<div class="small" style="margin-top:6px;color:var(--rose)">You wrote: ' + esc(u.original.slice(0, 190)) + "</div>" : "") +
        '<div class="small" style="margin-top:4px">Better: <b>' + esc(u.options.join(" / ")) + "</b></div>" +
        '<div class="small muted" style="margin-top:4px">' + esc(u.why) + "</div></div>";
    }).join("") + "</div>" : "") +
    '<div class="card"><div class="card-h"><h3>Repeated words and lexical range</h3></div>' +
    (rep.stats.repeated.length ? '<table class="tbl"><thead><tr><th>Word</th><th>Uses</th><th>Alternatives</th></tr></thead><tbody>' +
      rep.stats.repeated.map(function (r) {
        var alt = (WritingEval.THESAURUS[r.word] || "—");
        return "<tr><td><b>" + esc(r.word) + "</b></td><td>" + r.n + "</td><td>" + esc(alt) + "</td></tr>";
      }).join("") + "</tbody></table>" : '<div class="small muted">No content word appears three or more times — good lexical range.</div>') +
    '<div class="hr"></div><div class="row"><span class="stat" style="flex:1;padding:9px"><div class="k">Root TTR</div><div class="v" style="font-size:19px">' + rep.stats.rootTTR + '</div></div>' +
    '<span class="stat" style="flex:1;padding:9px"><div class="k">Academic items</div><div class="v" style="font-size:19px">' + rep.stats.awlHits + '</div></div>' +
    '<span class="stat" style="flex:1;padding:9px"><div class="k">Clauses/sentence</div><div class="v" style="font-size:19px">' + rep.stats.clauseDensity + '</div></div>' +
    '<span class="stat" style="flex:1;padding:9px"><div class="k">Errors /100w</div><div class="v" style="font-size:19px">' + rep.stats.errorRate + '</div></div></div></div></div>' +

    (rep.corrections.length ? '<div class="card"><div class="card-h"><h3>Grammar and spelling errors (' + rep.corrections.length + ')</h3></div><table class="tbl"><thead><tr><th>Category</th><th>Issue</th><th>Suggested correction</th></tr></thead><tbody>' +
      rep.corrections.map(function (c) {
        return "<tr><td>" + esc(c.category) + "</td><td>" + esc(c.issue) + "<div class=\"small muted\" style=\"margin-top:4px\">" + esc(c.original.slice(0, 160)) + "</div></td><td class=\"small\">" + esc(c.why) + "</td></tr>";
      }).join("") + "</tbody></table>" +
      '<div class="row" style="margin-top:10px"><button class="btn sm" data-act="log-grammar">Log these mistakes to Grammar builder</button></div></div>' : "") +

    '<div class="card"><div class="card-h"><h3>Compare with the band samples</h3></div>' +
    '<table class="tbl"><thead><tr><th>Sample</th><th>Words</th><th>Clauses/sentence</th><th>Academic items</th><th>Cohesive devices</th></tr></thead><tbody>' +
    ["band6", "band7", "band8", "band9"].map(function (bk) {
      if (!t.samples || !t.samples[bk]) return "";
      var st = WritingEval.analyse(t.samples[bk], t);
      var hi = bk === "band9" ? " style='background:#f0fbf5'" : "";
      return "<tr" + hi + "><td><b>" + bk.replace("band", "Band ") + "</b></td><td>" + st.words + "</td><td>" + st.clauseDensity + "</td><td>" + st.awlHits + "</td><td>" + st.cohesive.length + "</td></tr>";
    }).join("") +
    "<tr style='background:#eef2ff'><td><b>Your answer</b></td><td>" + rep.stats.words + "</td><td>" + rep.stats.clauseDensity + "</td><td>" + rep.stats.awlHits + "</td><td>" + rep.stats.cohesive.length + "</td></tr>" +
    "</tbody></table><div class=\"small muted\" style=\"margin-top:8px\">The gap between your row and the Band 8 row shows exactly which lever to pull first.</div>" +
    '<div class="row" style="margin-top:12px"><button class="btn primary" data-act="retry-writing">Rewrite and re-evaluate</button><button class="btn" data-act="go" data-route="writing">Another task</button><button class="btn" data-act="go" data-route="grammar">Grammar builder</button></div></div>';
}

/* -------------------------------- speaking ------------------------------- */
Views.speaking = function () {
  var sets = window.BANK_SPEAKING.sets, b = Analytics.bands();
  return '<div class="grid g3" style="margin-bottom:16px">' +
    '<div class="card tight"><div class="stat"><div class="k">Estimated Speaking band</div><div class="v">' + (b.speaking == null ? "—" : b.speaking.toFixed(1)) + '</div><div class="d">AI estimate from four criteria</div></div></div>' +
    '<div class="card tight"><div class="stat"><div class="k">Topic sets</div><div class="v">' + sets.length + '</div><div class="d">Part 1 · cue card · Part 3</div></div></div>' +
    '<div class="card tight"><div class="stat"><div class="k">Speech capture</div><div class="v">' + ((window.SpeechRecognition || window.webkitSpeechRecognition) ? "Mic" : "Typed") + '</div><div class="d">' + ((window.SpeechRecognition || window.webkitSpeechRecognition) ? "Browser speech recognition available" : "Your browser has no speech recognition — type or paste your spoken answer") + "</div></div></div></div>" +

    '<div class="note"><span class="ic">ⓘ</span><div><b>How this is scored.</b> Fluency &amp; Coherence, Lexical Resource, Grammatical Range &amp; Accuracy and Pronunciation are estimated from your transcript and timing, label by label: speech rate, filled pauses, mean length of run, lexical variety, clause density and error rate. Pronunciation cannot be judged properly from a transcript, so its score is flagged as low-confidence. <b>Memorised answers are penalised</b>: fluent-but-featureless delivery with no hesitation, no self-correction and unusual lexical uniformity is detected and reported.</div></div>' +

    '<div class="card"><div class="card-h"><h2>Full mock interview</h2><div class="spacer"></div><span class="chip">11–14 minutes</span></div>' +
    '<p class="small muted">Part 1 (4–5 minutes of personal questions) → Part 2 (1 minute preparation, 2 minutes speaking, timed) → Part 3 (4–5 minutes of discussion linked to the cue card).</p>' +
    '<div class="row"><button class="btn primary lg" data-act="start-speaking" data-mode="full">Start mock interview</button>' +
    '<button class="btn" data-act="start-speaking" data-mode="part2">Part 2 only (cue card + timer)</button>' +
    '<button class="btn" data-act="start-speaking" data-mode="part3">Part 3 discussion only</button></div></div>' +

    '<div class="card"><div class="card-h"><h3>Topic sets</h3></div><div class="grid g3">' +
    sets.map(function (s) {
      return '<div class="stat"><div class="b">' + esc(s.part1Topic) + '</div><div class="small muted">' + esc(s.band) + " · " + s.part1.length + " Part 1 questions · " + s.part3.length + " Part 3 questions</div>" +
        '<div class="small" style="margin-top:8px">' + esc(s.part2.cueCard) + "</div>" +
        '<div class="row tight" style="margin-top:10px"><button class="btn sm primary" data-act="start-speaking" data-mode="full" data-set="' + s.id + '">Full</button>' +
        '<button class="btn sm" data-act="start-speaking" data-mode="part2" data-set="' + s.id + '">Cue card</button></div></div>';
    }).join("") + "</div></div>" +

    '<div class="card"><div class="card-h"><h3>Band descriptors — what the examiner is listening for</h3></div><table class="tbl"><thead><tr><th>Criterion</th><th>Band 6 sounds like</th><th>Band 7–8 sounds like</th></tr></thead><tbody>' +
    "<tr><td>Fluency &amp; Coherence</td><td>Willing to speak at length but with noticeable pauses and some self-repair; uses basic connectors.</td><td>Speaks at length with only content-related hesitation; uses a range of discourse markers naturally.</td></tr>" +
    "<tr><td>Lexical Resource</td><td>Adequate vocabulary for the topic, some paraphrase, occasional imprecision.</td><td>Flexible, precise vocabulary including idiomatic and less common items; paraphrases effortlessly.</td></tr>" +
    "<tr><td>Grammatical Range &amp; Accuracy</td><td>Mix of simple and complex forms; complex forms contain errors.</td><td>Wide range of structures used flexibly; most sentences error-free.</td></tr>" +
    "<tr><td>Pronunciation</td><td>Generally intelligible; some features of first language reduce clarity at times.</td><td>Easy to understand throughout; stress and intonation convey meaning.</td></tr>" +
    "</tbody></table><div class=\"small muted\" style=\"margin-top:8px\">Self-check protocol: record a 2-minute answer, listen once for content, once for fillers, once for tense and agreement. Three passes of 2 minutes beats twenty minutes of reading tips.</div></div>" +
    setsBlockHTML("speaking");
};

Views.speakingrun = function () {
  var sp = App.speaking;
  if (!sp.set) return '<div class="card"><div class="empty">Choose a topic set first.<br><br><button class="btn primary" data-act="go" data-route="speaking">Back to Speaking</button></div></div>';
  var s = sp.set;
  if (sp.report) return speakingReportHTML(sp.report, s);
  var part = sp.part;
  var micAvailable = !!(window.SpeechRecognition || window.webkitSpeechRecognition);
  var head = '<div class="timerbar"><span class="chip">' + esc(s.part1Topic) + '</span>' +
    '<span class="chip grey">' + (part === 1 ? "Part 1 — introduction" : part === 2 ? "Part 2 — long turn" : "Part 3 — discussion") + "</span>" +
    (part === 2 ? '<span class="timer ' + (sp.phaseTimer < 30 && sp.phase === "speak" ? "low" : "") + '">' + (sp.phase === "prep" ? "Preparation: " : sp.phase === "speak" ? "Speaking: " : "") + fmtTime(sp.phaseTimer || 0) + "</span>" : '<span class="timer">' + fmtTime(sp.elapsed || 0) + "</span>") +
    '<div class="spacer"></div><button class="btn sm" data-act="go" data-route="speaking">Exit</button></div>';
  var captureNote = '<div class="note ' + (micAvailable ? "teal" : "amber") + '"><span class="ic">' + (micAvailable ? "🎙" : "⌨") + '</span><div>' +
    (micAvailable ? "Click <b>Start microphone</b> to dictate your answer, or type it. The transcript is what the evaluator analyses — speak naturally; hesitation and filler words are measured, not penalised automatically." :
      "This browser does not expose speech recognition. Speak your answer aloud, then type or paste what you said — the analysis of fluency, vocabulary and grammar is identical.") + "</div></div>";
  var body = "";
  if (part === 1) {
    body = '<div class="card"><div class="card-h"><h2>Part 1 — Introduction and interview</h2><span class="chip grey">4–5 minutes</span></div>' + captureNote +
      s.part1.map(function (q, i) {
        return '<div class="qcard" style="margin-top:12px"><div class="qprompt"><span class="qnum" style="display:inline-grid;margin-right:8px">' + (i + 1) + "</span>" + esc(q) + "</div>" +
          '<div class="row tight"><button class="btn sm" data-act="mic" data-i="' + i + '">🎙 Start microphone</button>' +
          '<span class="small muted" id="mic-state-' + i + '"></span></div>' +
          '<textarea data-input="sp-answer" data-i="' + i + '" rows="3" placeholder="Answer in three or four sentences: a direct answer, a reason, and an example.">' + esc((sp.answers && sp.answers[i]) || "") + "</textarea></div>";
      }).join("") +
      '<div class="row" style="margin-top:14px"><button class="btn primary" data-act="speaking-next" data-next="2">Go to Part 2 →</button>' +
      '<button class="btn" data-act="evaluate-speaking">Evaluate what I have</button></div></div>';
  } else if (part === 2) {
    body = '<div class="card"><div class="card-h"><h2>Part 2 — Individual long turn</h2><span class="chip amber">1 min preparation · 2 min speaking</span></div>' +
      '<div class="stat" style="margin-bottom:12px"><div class="k">Cue card</div><div class="v" style="font-size:19px">' + esc(s.part2.cueCard) + '</div>' +
      "<ul class=\"small\" style=\"margin:10px 0 0\">" + s.part2.bullets.map(function (b) { return "<li>" + esc(b) + "</li>"; }).join("") + "</ul></div>" +
      '<div class="row"><button class="btn primary" data-act="part2-prep">Start 1-minute preparation</button>' +
      '<button class="btn teal" data-act="part2-speak">Start 2-minute answer</button>' +
      '<button class="btn" data-act="part2-stop">Stop timer</button>' +
      '<span class="small muted" id="part2-state"></span></div>' +
      captureNote +
      '<textarea data-input="sp-part2" rows="9" placeholder="Your transcript (dictated or typed). Aim for 210–260 words — that is 2 minutes at a natural pace.">' + esc(sp.part2Text || "") + "</textarea>" +
      '<div class="small muted" style="margin-top:6px">' + countWords(sp.part2Text || "") + " words · spoken for " + fmtTime(sp.part2Seconds || 0) + "</div>" +
      '<div class="row" style="margin-top:14px"><button class="btn primary" data-act="speaking-next" data-next="3">Go to Part 3 →</button>' +
      '<button class="btn" data-act="evaluate-speaking">Evaluate</button></div></div>';
  } else {
    body = '<div class="card"><div class="card-h"><h2>Part 3 — Two-way discussion</h2><span class="chip grey">4–5 minutes</span></div>' + captureNote +
      s.part3.map(function (q, i) {
        return '<div class="qcard" style="margin-top:12px"><div class="qprompt"><span class="qnum" style="display:inline-grid;margin-right:8px">' + (i + 1) + "</span>" + esc(q) + "</div>" +
          '<div class="row tight"><button class="btn sm" data-act="mic" data-i="a' + i + '">🎙 Start microphone</button><span class="small muted" id="mic-state-a' + i + '"></span></div>' +
          '<textarea data-input="sp-answer3" data-i="' + i + '" rows="4" placeholder="Give an opinion, justify it, and support it with an example or a contrast.">' + esc(((sp.answers3 || [])[i]) || "") + "</textarea></div>";
      }).join("") +
      '<div class="row" style="margin-top:14px"><button class="btn primary" data-act="evaluate-speaking">See my estimated band</button></div></div>';
  }
  var useful = '<div class="card"><div class="card-h"><h3>Useful language for this set</h3></div><div class="pill-row">' +
    s.usefulLanguage.map(function (u) { return '<span class="chip grey">' + esc(u) + "</span>"; }).join("") + "</div>" +
    '<div class="hr"></div><div class="upper">Examiner note</div><div class="small">' + esc(s.examinerNotes) + "</div></div>";
  return head + '<div class="grid g2" style="align-items:start"><div>' + body + "</div><div>" + useful +
    '<div class="card"><div class="card-h"><h3>Answer shape that scores</h3></div><ol class="small">' +
    "<li><b>Answer directly</b> — one short sentence that responds to the question.</li>" +
    "<li><b>Justify</b> — 'because…', 'the reason is…', 'which means…'.</li>" +
    "<li><b>Illustrate</b> — a specific example from your own experience.</li>" +
    "<li><b>Evaluate or contrast</b> — 'although', 'on the other hand', 'it depends on'.</li></ol>" +
    '<div class="note amber" style="margin-top:10px"><span class="ic">⚠</span><div>Do not recite memorised paragraphs. The evaluator detects scripted delivery (no hesitation, no self-correction, uniform sentence rhythm) and reports it, and a real examiner will change the topic.</div></div></div></div></div>';
};

function speakingReportHTML(rep, s) {
  var ban = App.speaking && App.speaking.setKey ? setBannerHTML(App.speaking.setKey, { nextAct: "next-set", nextLabel: "Next set →" }) : "";
  return '<div class="card"><div class="band-hero"><div><div class="big">' + (rep.overall == null ? "—" : rep.overall.toFixed(1)) + '</div><div class="lbl">Estimated IELTS Band — Speaking</div>' +
    '<div class="small muted" style="margin-top:4px">' + rep.words + " words · " + (rep.wpm ? rep.wpm + " words/min" : "no timing data") + " · set: " + esc(s.part1Topic) + "</div></div>" +
    '<div style="flex:1;min-width:240px">' + rep.criteria.map(function (c) {
      return '<div style="margin-bottom:9px"><div class="row" style="justify-content:space-between"><span class="small">' + esc(c.name) + '</span><span class="b">' + c.band.toFixed(1) + "</span></div><div class=\"bar " + (c.band < 6 ? "rose" : c.band < 7 ? "amber" : "teal") + '"><i style="width:' + (c.band / 9) * 100 + '%"></i></div></div>';
    }).join("") + "</div></div>" +
    (rep.rehearsed ? '<div class="note rose" style="margin-top:12px"><span class="ic">⚠</span><div><b>Scripted delivery suspected.</b> Your answers contained no filled pauses, no self-corrections and unusually uniform lexical variety. Examiners treat this as evidence of a memorised answer and may discount the response — try answering new questions with only a 20-second plan.</div></div>' : "") +
    '<div class="note amber" style="margin-top:12px"><span class="ic">ⓘ</span><div>' + esc(rep.disclaimer) + "</div></div></div>" +

    '<div class="grid g2"><div class="card"><div class="card-h"><h3>Criterion justifications</h3></div>' + rep.criteria.map(function (c) {
      return '<div style="padding:10px 0;border-bottom:1px dashed var(--line-2)"><div class="row" style="justify-content:space-between"><b>' + esc(c.name) + '</b><span class="band-chip">' + c.band.toFixed(1) + '</span></div><div class="small" style="margin-top:6px">' + esc(c.why) + "</div></div>";
    }).join("") + "</div>" +
    '<div class="card"><div class="card-h"><h3>Fluency analytics</h3></div>' +
    '<div class="grid g2" style="gap:9px">' +
    [["Speech rate", rep.wpm ? rep.wpm + " wpm" : "—", rep.wpm ? (rep.wpm < 100 ? "slow — aim 110–170" : rep.wpm > 185 ? "rushed — slow down slightly" : "in the natural range") : "no timing captured"],
    ["Filled pauses", rep.fillerTotal + " (" + pct(rep.fillerRate) + "%)", rep.fillerRate > 0.06 ? "high — replace with linking phrases" : "controlled"],
    ["Self-corrections", String(rep.repairs), rep.repairs > 4 ? "frequent rephrasing — plan the sentence first" : "natural repair rate"],
    ["Mean length of run", rep.mlr + " words", rep.mlr < 8 ? "short — extend answers with reasons" : "good continuous speech"]].map(function (r) {
      return '<div class="stat" style="padding:10px"><div class="k">' + r[0] + '</div><div class="v" style="font-size:19px">' + esc(r[1]) + '</div><div class="small muted">' + esc(r[2]) + "</div></div>";
    }).join("") + "</div>" +
    (rep.fillerHits.length ? '<div class="hr"></div><div class="upper">Filler words detected</div>' + rep.fillerHits.map(function (f) { return barRow('"' + f.filler + '"', f.n, rep.fillerHits[0].n, "amber"); }).join("") : "") +
    (rep.repetitions.length ? '<div class="hr"></div><div class="upper">Repetition analysis</div>' + rep.repetitions.slice(0, 6).map(function (r) { return '<span class="chip rose">' + esc(r.word) + " ×" + r.n + "</span> "; }).join("") + '<div class="small muted" style="margin-top:6px">Each repeated content word is a missed opportunity to show range. Substitute at least half of them.</div>' : "") +
    '<div class="hr"></div><div class="upper">Sentence complexity & grammar range</div>' +
    '<div class="small">Subordinating structures used: ' + (rep.subordinators.join(", ") || "few detected") + "</div>" +
    '<div class="small">Discourse markers used: ' + (rep.linkers.join(", ") || "few detected") + "</div>" +
    (rep.errors.length ? '<div class="small" style="margin-top:8px"><b>Flagged grammar issues:</b> ' + rep.errors.slice(0, 5).map(function (e) { return esc(e.match) + " → " + esc(e.suggestion || e.message); }).join("; ") + "</div>" : "") +
    "</div></div>" +

    '<div class="card"><div class="card-h"><h2>Suggested improvements, with reasons</h2></div>' +
    rep.improvements.map(function (i) {
      return '<div style="padding:11px 0;border-bottom:1px dashed var(--line-2)"><span class="chip violet">' + esc(i.type) + '</span>' +
        '<div class="quote" style="margin-top:8px;border-left-color:var(--rose);background:#fdf5f7">' + esc(i.before) + "</div>" +
        '<div class="quote" style="margin-top:8px">' + esc(i.after) + "</div>" +
        '<div class="small muted" style="margin-top:6px"><b>Why:</b> ' + esc(i.why) + "</div></div>";
    }).join("") +
    (rep.improvements.length ? "" : '<div class="note green"><span class="ic">✓</span><div>No systematic weaknesses detected in this answer set. Next step: increase question difficulty — try the environment or city sets, which demand more abstract Part 3 language.</div></div>') +
    '<div class="row" style="margin-top:14px"><button class="btn primary" data-act="retry-speaking">Answer again (different set)</button><button class="btn" data-act="go" data-route="progress">Progress</button><button class="btn" data-act="go" data-route="grammar">Grammar builder</button></div></div>';
}

/* ------------------------------ vocabulary ------------------------------- */
Views.vocabulary = function () {
  var words = Vocab.all(), v = Store.get().vocab, due = Vocab.due();
  var f = App.vparams || (App.vparams = { q: "", topic: "", saved: false });
  var filtered = words.filter(function (w) {
    if (f.q && (w.word + w.meaning).toLowerCase().indexOf(f.q.toLowerCase()) === -1) return false;
    if (f.topic && w.topic !== f.topic) return false;
    if (f.saved && !Vocab.isSaved(w.word)) return false;
    return true;
  });
  var topics = Object.keys(groupBy(words, function (w) { return w.topic; }));
  return '<div class="grid g4" style="margin-bottom:16px">' +
    '<div class="card tight"><div class="stat"><div class="k">Words in bank</div><div class="v">' + words.length + '</div><div class="d">' + topics.length + " topic areas</div></div></div>" +
    '<div class="card tight"><div class="stat"><div class="k">Saved</div><div class="v">' + (v.saved || []).length + '</div><div class="d">your personal list</div></div></div>' +
    '<div class="card tight"><div class="stat ' + (due.length ? "warn" : "") + '"><div class="k">Due for review</div><div class="v">' + due.length + '</div><div class="d">spaced repetition</div></div></div>' +
    '<div class="card tight"><div class="stat"><div class="k">Learned</div><div class="v">' + (v.learned || []).length + '</div><div class="d">reviewed at least once</div></div></div></div>' +

    '<div class="card"><div class="card-h"><h2>Spaced repetition session</h2><div class="spacer"></div><button class="btn primary" data-act="srs-start">Start ' + Math.min(12, Math.max(1, due.length || 10)) + "-word session</button></div>" +
    '<p class="small muted">Words you save enter a review queue scheduled by an SM-2 style algorithm: each word is shown, you rate how well you knew it, and the next review is scheduled further ahead the stronger your recall. Due today: ' + due.length + ".</p>" +
    (App.srs && App.srs.active ? srsHTML() : "") + "</div>" +

    '<div class="card"><div class="card-h"><h2>Word list</h2><div class="spacer"></div>' +
    '<input type="text" style="max-width:220px" placeholder="Search word or meaning" data-input="vocab-q" value="' + esc(f.q) + '">' +
    '<select style="max-width:170px" data-input="vocab-topic"><option value="">All topics</option>' + topics.map(function (t) { return '<option value="' + esc(t) + '"' + (f.topic === t ? " selected" : "") + ">" + esc(t) + "</option>"; }).join("") + "</select>" +
    '<label class="row small" style="gap:6px;margin:0"><input type="checkbox" data-input="vocab-saved"' + (f.saved ? " checked" : "") + "> saved only</label>" +
    '<span class="chip grey">' + filtered.length + " shown</span></div>" +
    '<table class="tbl"><thead><tr><th>Word</th><th>Meaning</th><th>Topic</th><th>Band</th><th></th></tr></thead><tbody>' +
    filtered.slice(0, 120).map(function (w) {
      return '<tr><td><b>' + esc(w.word) + '</b><div class="small muted">' + esc(w.pos) + " · " + esc(w.ipa) + "</div></td><td class=\"small\">" + esc(w.meaning) + "</td><td><span class=\"chip grey\">" + esc(w.topic) + '</span></td><td><span class="chip">' + esc(w.band) + '</span></td><td><div class="row tight"><button class="btn sm" data-act="vocab-open" data-word="' + esc(w.word) + '">Open</button>' +
        '<button class="btn sm ' + (Vocab.isSaved(w.word) ? "teal" : "") + '" data-act="vocab-save" data-word="' + esc(w.word) + '">' + (Vocab.isSaved(w.word) ? "Saved" : "Save") + "</button></div></td></tr>";
    }).join("") + "</tbody></table></div>";
};

function srsHTML() {
  var q = App.srs.queue, i = App.srs.i;
  if (i >= q.length) return '<div class="note green" style="margin-top:12px"><span class="ic">✓</span><div>Session complete — ' + q.length + " words reviewed. Next reviews are scheduled in your queue.</div><button class=\"btn sm\" style=\"margin-top:8px\" data-act=\"srs-end\">Close</button></div>";
  var w = q[i];
  if (!w) return '<div class="small muted">No words queued. Save words from the list below to build a queue.</div>';
  return '<div class="flashcard" style="margin-top:14px"><div class="face">' +
    '<div class="row" style="justify-content:space-between"><span class="chip grey">' + (i + 1) + " / " + q.length + '</span><span class="chip">' + esc(w.band) + "</span></div>" +
    '<h2 style="margin-top:10px">' + esc(w.word) + '</h2><div class="small muted">' + esc(w.pos) + " · " + esc(w.ipa) + "</div>" +
    (App.srs.reveal ? '<div class="hr"></div><div><b>Meaning:</b> ' + esc(w.meaning) + "</div>" +
      "<div style=\"margin-top:6px\"><b>Synonyms:</b> " + esc(w.synonyms.join(", ")) + "</div>" +
      "<div><b>Antonyms:</b> " + esc(w.antonyms.join(", ")) + "</div>" +
      "<div style=\"margin-top:6px\"><b>Collocations:</b> " + esc(w.collocations.join(" · ")) + "</div>" +
      '<div class="quote" style="margin-top:8px">' + esc(w.ieltsExample) + "</div>" +
      '<div class="row" style="margin-top:12px"><button class="btn rose" data-act="srs-grade" data-g="1">Again</button>' +
      '<button class="btn" data-act="srs-grade" data-g="2">Hard</button>' +
      '<button class="btn teal" data-act="srs-grade" data-g="3">Good</button>' +
      '<button class="btn primary" data-act="srs-grade" data-g="4">Easy</button></div>'
      : '<button class="btn primary" style="margin-top:18px" data-act="srs-reveal">Reveal meaning</button>') +
    "</div></div>";
}

Views.vocabulary_word = function () { return Views.vocabulary(); };

/* -------------------------------- grammar -------------------------------- */
Views.grammar = function () {
  var cats = window.BANK_GRAMMAR.categories, errs = Analytics.grammarErrors();
  var g = App.grammar || (App.grammar = { cat: null, answers: {}, checked: false });
  var cat = cats.filter(function (c) { return c.id === g.cat; })[0];
  return '<div class="grid g3" style="margin-bottom:16px">' +
    '<div class="card tight"><div class="stat"><div class="k">Error categories tracked</div><div class="v">' + cats.length + '</div><div class="d">' + cats.reduce(function (a, c) { return a + c.items.length; }, 0) + " exercise items</div></div></div>" +
    '<div class="card tight"><div class="stat ' + (errs.length ? "warn" : "") + '"><div class="k">Your logged errors</div><div class="v">' + Store.get().errorTags.length + '</div><div class="d">from Writing and Grammar tasks</div></div></div>' +
    '<div class="card tight"><div class="stat"><div class="k">Top pattern</div><div class="v" style="font-size:17px">' + (errs[0] ? esc(errs[0].category) : "—") + '</div><div class="d">' + (errs[0] ? errs[0].count + " occurrences" : "write an essay to populate") + "</div></div></div></div>" +

    '<div class="card"><div class="card-h"><h2>Exercises generated from your mistakes</h2><div class="spacer"></div>' +
    '<button class="btn primary" data-act="grammar-generate">' + (errs.length ? "Build a set from my " + errs.length + " error categories" : "Build a mixed set") + "</button></div>" +
    '<p class="small muted">Every grammar error logged from your writing is stored by category. The generator assembles a set weighted towards your most frequent categories, so you practise the rule you actually break.</p>' +
    (App.grammarGenerated ? grammarSetHTML(App.grammarGenerated) : "") + "</div>" +

    '<div class="grid g2"><div class="card"><div class="card-h"><h3>Categories</h3></div>' +
    cats.map(function (c) {
      var n = errs.filter(function (e) { return e.category === c.category; })[0];
      return '<div class="row" style="justify-content:space-between;padding:8px 0;border-bottom:1px dashed var(--line-2)"><div><b class="small">' + esc(c.category) + "</b>" + (n ? ' <span class="chip rose">' + n.count + " errors</span>" : "") + '</div><button class="btn sm" data-act="grammar-open" data-id="' + c.id + '">' + (g.cat === c.id ? "Open" : "Study") + "</button></div>";
    }).join("") + "</div>" +
    (cat ? '<div class="card"><div class="card-h"><h3>' + esc(cat.category) + '</h3><div class="spacer"></div><button class="btn sm" data-act="grammar-open" data-id="">Close</button></div>' +
      '<div class="note"><span class="ic">❖</span><div><b>Rule:</b> ' + esc(cat.rule) + "</div></div>" +
      cat.items.map(function (it, i) {
        var key = cat.id + "-" + i;
        var sel = g.answers[key];
        return '<div class="qcard" style="margin-top:12px"><div class="qprompt">' + esc(it.q) + "</div>" +
          it.options.map(function (o) {
            var cls = "";
            if (g.checked) { if (o === it.answer) cls = "ok"; else if (o === sel) cls = "no"; }
            else if (o === sel) cls = "sel";
            return '<label class="opt ' + cls + '"><input type="radio" name="' + key + '" data-input="grammar" data-key="' + key + '" value="' + esc(o) + '"' + (sel === o ? " checked" : "") + "><span>" + esc(o) + "</span></label>";
          }).join("") +
          (g.checked ? '<div class="explain"><div class="ex-row"><div class="ex-k">Why</div><div class="ex-v">' + esc(it.why) + "</div></div></div>" : "") + "</div>";
      }).join("") +
      '<div class="row" style="margin-top:12px"><button class="btn primary" data-act="grammar-check">Check answers</button></div></div>' : "") +
    "</div>";
};

function grammarSetHTML(set) {
  var g = App.grammarGenState || (App.grammarGenState = { answers: {}, checked: false });
  return '<div class="grid g2" style="margin-top:12px">' + set.map(function (it, i) {
    var key = "gen-" + i, sel = g.answers[key];
    return '<div class="qcard"><div class="qhead"><span class="qnum">' + (i + 1) + '</span><span class="chip violet">' + esc(it.category) + "</span></div>" +
      '<div class="qprompt">' + esc(it.q) + "</div>" + it.options.map(function (o) {
        var cls = g.checked ? (o === it.answer ? "ok" : o === sel ? "no" : "") : (o === sel ? "sel" : "");
        return '<label class="opt ' + cls + '"><input type="radio" name="' + key + '" data-input="gen" data-key="' + key + '" value="' + esc(o) + '"' + (sel === o ? " checked" : "") + "><span>" + esc(o) + "</span></label>";
      }).join("") + (g.checked ? '<div class="small muted" style="margin-top:8px">' + esc(it.why) + "</div>" : "") + "</div>";
  }).join("") + "</div>" +
    '<div class="row" style="margin-top:12px"><button class="btn primary" data-act="grammar-check-gen">Check answers</button>' +
    (g.checked ? '<button class="btn" data-act="grammar-log">Log wrong answers to my error profile</button>' : "") + "</div>";
}

/* ------------------------------- progress -------------------------------- */
Views.progress = function () {
  var b = Analytics.bands(), p = Store.get().profile;
  var byType = Analytics.typeAccuracy(), byDiff = Analytics.difficultyAccuracy();
  var resp = Store.get().responses, acc = resp.length ? resp.filter(function (r) { return r.correct; }).length / resp.length : 0;
  var atts = Store.get().attempts;
  var errs = Analytics.grammarErrors(), vp = Analytics.vocabProgress();
  return '<div class="grid g4" style="margin-bottom:16px">' +
    '<div class="card tight"><div class="stat"><div class="k">Questions answered</div><div class="v">' + resp.length + '</div><div class="d">across ' + atts.length + " attempts</div></div></div>" +
    '<div class="card tight"><div class="stat ' + (acc >= 0.7 ? "good" : acc >= 0.5 ? "warn" : "bad") + '"><div class="k">Overall accuracy</div><div class="v">' + pct(acc) + '%</div><div class="d">' + resp.filter(function (r) { return r.correct; }).length + " correct</div></div></div>" +
    '<div class="card tight"><div class="stat"><div class="k">Avg. session length</div><div class="v">' + Math.round(Analytics.timing().avgSeconds / 60) + 'm</div><div class="d">planned time vs actual is compared on each result page</div></div></div>' +
    '<div class="card tight"><div class="stat"><div class="k">Vocabulary</div><div class="v">' + vp.saved + '</div><div class="d">' + vp.learned + " reviewed · " + vp.due + " due</div></div></div></div>" +

    '<div class="grid g2"><div class="card"><div class="card-h"><h3>Band progression</h3><div class="spacer"></div><span class="chip grey">estimate, recency-weighted</span></div>' +
    SKILLS.map(function (s) {
      var t = Analytics.trend(s);
      return '<div style="margin-bottom:12px"><div class="row" style="justify-content:space-between"><b class="small">' + s.charAt(0).toUpperCase() + s.slice(1) + '</b><span class="small muted">' + (b[s] == null ? "—" : "now " + b[s].toFixed(1)) + " · target " + p.targetBand.toFixed(1) + "</span></div>" + sparkline(t, { min: 4, max: 9 }) + "</div>";
    }).join("") + "</div>" +

    '<div class="card"><div class="card-h"><h3>Accuracy by question type</h3></div>' +
    (byType.length ? byType.map(function (t) {
      var cls = t.accuracy < 0.6 ? "rose" : t.accuracy < 0.8 ? "amber" : "teal";
      return barRow(t.label + "  (" + t.correct + "/" + t.total + ")", pct(t.accuracy) + "%", 100, cls);
    }).join("") : '<div class="small muted">Complete some objective practice to populate this matrix.</div>') + "</div></div>" +

    '<div class="grid g3"><div class="card"><div class="card-h"><h3>Accuracy by difficulty</h3></div>' +
    (byDiff.length ? byDiff.map(function (d) { return barRow(d.difficulty + " (" + d.total + ")", pct(d.accuracy) + "%", 100, d.accuracy < 0.6 ? "rose" : "teal"); }).join("") : '<div class="small muted">No data yet.</div>') +
    '<div class="small muted" style="margin-top:8px">If accuracy drops sharply at Band 7+ but is high at beginner level, your ceiling is reasoning load rather than vocabulary. Move to untimed mode on advanced sets and study the explanations.</div></div>' +
    '<div class="card"><div class="card-h"><h3>Strong / weak types</h3></div>' +
    '<div class="upper">Weakest</div>' + (Analytics.weakTypes(2).slice(0, 5).map(function (t) { return '<div class="row" style="justify-content:space-between"><span class="small">' + esc(t.label) + '</span><span class="chip rose">' + pct(t.accuracy) + "%</span></div>"; }).join("") || '<div class="small muted">none logged</div>') +
    '<div class="upper" style="margin-top:10px">Strongest</div>' + (Analytics.strongTypes(2).slice(0, 5).map(function (t) { return '<div class="row" style="justify-content:space-between"><span class="small">' + esc(t.label) + '</span><span class="chip green">' + pct(t.accuracy) + "%</span></div>"; }).join("") || '<div class="small muted">none logged</div>') +
    '<div class="hr"></div><button class="btn primary block" data-act="start-weakness">Drill my weakest types</button></div>' +
    '<div class="card"><div class="card-h"><h3>Grammar error profile</h3></div>' +
    (errs.length ? errs.slice(0, 8).map(function (e) { return barRow(e.category, e.count, errs[0].count, "amber"); }).join("") : '<div class="small muted">No grammar errors logged yet. Evaluate a writing task to build this profile.</div>') +
    '<div class="row" style="margin-top:10px"><button class="btn sm" data-act="go" data-route="grammar">Open Grammar builder</button></div></div></div>' +

    '<div class="card"><div class="card-h"><h3>Complete attempt log</h3><div class="spacer"></div>' +
    '<button class="btn sm" data-act="export-data">Export JSON</button><button class="btn sm" data-act="go" data-route="about">Import / reset</button></div>' +
    (atts.length ? '<table class="tbl"><thead><tr><th>Date</th><th>Mode</th><th>Skill</th><th>Raw</th><th>Band</th><th>Accuracy</th><th>Time</th><th>Timed</th><th></th></tr></thead><tbody>' +
      atts.slice().reverse().slice(0, 40).map(function (a) {
        return "<tr><td>" + fmtDateTime(a.ts) + "</td><td>" + esc(a.mode) + "</td><td>" + esc(a.skill) + '</td><td>' + (a.raw == null ? "—" : a.raw + "/" + a.outOf) + "</td><td><b>" + (a.band == null ? "—" : a.band.toFixed(1)) + "</b></td><td>" + pct(a.accuracy || 0) + "%</td><td>" + fmtTime(a.timeSpentSec) + "</td><td>" + (a.timed ? "yes" : "no") + '</td><td><button class="btn sm" data-act="view-attempt" data-id="' + a.id + '">Detail</button></td></tr>';
      }).join("") + "</tbody></table>" : '<div class="empty">No attempts recorded yet.</div>') + "</div>";
};

/* ------------------------------- study plan ------------------------------ */
Views.plan = function () {
  var p = Store.get().profile, plan = Store.get().plan;
  var days = plan && plan.days ? plan.days : [];
  var done = (plan && plan.done) || {};
  var today = new Date().toISOString().slice(0, 10);
  return '<div class="card"><div class="card-h"><h2>Your goal settings</h2></div>' +
    '<div class="grid g4">' +
    '<div class="field"><label>Module</label><select data-input="profile" data-k="module"><option value="academic"' + (p.module === "academic" ? " selected" : "") + ">Academic</option><option value=\"general\"" + (p.module === "general" ? " selected" : "") + ">General Training</option></select></div>" +
    '<div class="field"><label>Target band</label><select data-input="profile" data-k="targetBand">' + [6, 6.5, 7, 7.5, 8, 8.5, 9].map(function (x) { return '<option value="' + x + '"' + (x === p.targetBand ? " selected" : "") + ">Band " + x.toFixed(1) + "</option>"; }).join("") + "</select></div>" +
    '<div class="field"><label>Exam date</label><input type="date" data-input="profile" data-k="examDate" value="' + p.examDate + '"></div>' +
    '<div class="field"><label>Daily study time</label><select data-input="profile" data-k="dailyMinutes">' + [30, 45, 60, 90, 120].map(function (x) { return '<option value="' + x + '"' + (x === p.dailyMinutes ? " selected" : "") + ">" + x + " min</option>"; }).join("") + "</select></div>" +
    "</div>" +
    '<div class="row"><button class="btn primary" data-act="generate-plan">' + (days.length ? "Regenerate plan" : "Generate my plan") + "</button>" +
    '<span class="small muted">' + (days.length ? days.length + " days scheduled · generated " + fmtDateTime(plan.generatedAt) : "The plan re-weights automatically from your latest results.") + "</span></div></div>" +

    (days.length ? (function () {
      var todayIdx = -1;
      days.forEach(function (d, i) { if (d.date === today) todayIdx = i; });
      return '<div class="grid g2" style="align-items:start"><div>' +
        days.slice(0, 14).map(function (d, i) {
          var isToday = d.date === today;
          return '<div class="dayplan"' + (isToday ? ' style="border-color:var(--primary);box-shadow:0 0 0 3px var(--primary-l)"' : "") + ">" +
            '<div class="dh"><div><b>Day ' + d.day + " · " + new Date(d.date + "T00:00:00").toLocaleDateString(undefined, { weekday: "short", day: "numeric", month: "short" }) + "</b>" + (isToday ? ' <span class="chip">today</span>' : "") + '</div><span class="chip grey">' + d.totalMin + " min</span></div>" +
            '<div class="tasks">' + d.tasks.map(function (t, ti) {
              var key = d.day + "-" + ti;
              return '<label class="task"><input type="checkbox" data-input="plan-task" data-key="' + key + '"' + (done[key] ? " checked" : "") + '><span class="sk">' + esc(t.skill) + "</span><span>" + esc(t.text) + " <span class=\"muted small\">(" + t.min + " min)</span></span></label>";
            }).join("") + "</div></div>";
        }).join("") + "</div>" +
        '<div class="card"><h3>Plan logic</h3><ol class="small">' +
        "<li>The highest-priority skill (largest gap to target) is scheduled most often, rotating across the top three priorities.</li>" +
        "<li>Your weakest question types are inserted as drills rather than general practice.</li>" +
        "<li>Every other day adds grammar work drawn from your logged error categories.</li>" +
        "<li>Vocabulary review is scheduled daily because spacing matters more than volume.</li>" +
        "<li>Every seventh day is a review day: re-read the explanations for every question you got wrong that week.</li>" +
        "<li>Regenerating after each result re-weights everything, so the plan tracks your changing profile.</li></ol>" +
        '<div class="hr"></div><div class="upper">Progress through this plan</div>' +
        '<div class="bar" style="height:12px"><i style="width:' + clamp((Object.keys(done).filter(function (k) { return done[k]; }).length / Math.max(1, days.reduce(function (a, d) { return a + d.tasks.length; }, 0))) * 100, 2, 100) + '%"></i></div>' +
        '<div class="small muted" style="margin-top:6px">' + Object.keys(done).filter(function (k) { return done[k]; }).length + " of " + days.reduce(function (a, d) { return a + d.tasks.length; }, 0) + " tasks complete</div></div></div>";
    })() : '<div class="card"><div class="empty"><div class="big">▤</div>No plan yet. Set your goal above and generate one.</div></div>');
};

/* -------------------------------- tutor ---------------------------------- */
Views.tutor = function () {
  var msgs = Store.get().tutor || [];
  return '<div class="card"><div class="card-h"><h2>AI Tutor</h2><div class="spacer"></div><span class="chip teal">uses your attempt data</span>' +
    '<button class="btn sm" data-act="tutor-clear">Clear chat</button></div>' +
    '<div class="quick">' +
    ["Why is my answer False instead of Not Given?",
      "How can I improve from Band 6.5 to 7.5?",
      "Check my Task 2 essay",
      "Give me a Part 2 speaking question",
      "Practice my weak areas",
      "Explain my most common grammar mistake",
      "How is my score calculated?"].map(function (q) {
        return '<button data-act="tutor-ask" data-q="' + esc(q) + '">' + esc(q) + "</button>";
      }).join("") + "</div>" +
    '<div class="chat" id="chat" style="margin-top:14px">' +
    (msgs.length ? msgs.map(function (m) {
      return '<div class="msg ' + (m.role === "me" ? "me" : "ai") + '">' + m.text.replace(/\*\*(.+?)\*\*/g, "<b>$1</b>") + "</div>";
    }).join("") : '<div class="msg ai">Hello. I can see your attempt history, so my answers use your own accuracy, band estimates and error log. Ask me anything — or tap one of the questions above.</div>') +
    "</div>" +
    '<div class="row" style="margin-top:12px"><input type="text" id="tutor-input" placeholder="Ask about a question, a band, a plan, a grammar rule…" data-input="tutor"><button class="btn primary" data-act="tutor-send">Send</button></div></div>' +
    '<div class="card"><div class="card-h"><h3>What the tutor can see</h3></div><div class="grid g3">' +
    '<div class="stat"><div class="k">Bands</div><div class="v" style="font-size:19px">R ' + fmtBand(Analytics.bands().reading) + " · L " + fmtBand(Analytics.bands().listening) + " · W " + fmtBand(Analytics.bands().writing) + " · S " + fmtBand(Analytics.bands().speaking) + "</div></div>" +
    '<div class="stat"><div class="k">Weakest types</div><div class="v" style="font-size:15px">' + (Analytics.weakTypes(2).slice(0, 3).map(function (t) { return t.label; }).join("<br>") || "—") + "</div></div>" +
    '<div class="stat"><div class="k">Grammar log</div><div class="v" style="font-size:15px">' + (Analytics.grammarErrors().slice(0, 3).map(function (g) { return g.category + " (" + g.count + ")"; }).join("<br>") || "—") + "</div></div>" +
    "</div></div>";
};
function fmtBand(v) { return v == null ? "—" : v.toFixed(1); }

/* --------------------------------- about --------------------------------- */
Views.about = function () {
  var rep = Validator.run();
  var bank = Bank.items.length;
  return '<div class="grid g4" style="margin-bottom:16px">' +
    '<div class="card tight"><div class="stat"><div class="k">Objective items</div><div class="v">' + bank + '</div><div class="d">reading + listening</div></div></div>' +
    '<div class="card tight"><div class="stat ' + (rep.errors.length ? "bad" : "good") + '"><div class="k">Validator errors</div><div class="v">' + rep.errors.length + '</div><div class="d">structural integrity checks</div></div></div>' +
    '<div class="card tight"><div class="stat"><div class="k">Warnings</div><div class="v">' + rep.warnings.length + '</div><div class="d">manual review suggested</div></div></div>' +
    '<div class="card tight"><div class="stat"><div class="k">Bank version</div><div class="v" style="font-size:17px">' + APP.version + '</div><div class="d">' + fmtDate(APP.started) + " build</div></div></div></div>" +

    '<div class="grid g2"><div class="card"><h2>Scoring methodology</h2>' +
    '<div class="upper">Reading &amp; Listening — objective</div><p class="small">Raw marks out of 40 are converted with the standard-style tables. Academic and General Training Reading use different tables (General Training is more generous for the same raw score). Practice sets shorter than 40 items are scaled to a 40-mark equivalent and labelled as an estimate.</p>' +
    '<table class="tbl"><thead><tr><th>Raw (Academic R / Listening)</th><th>Band</th><th>Raw (General Training R)</th></tr></thead><tbody>' +
    [["39–40", "9.0", "40"], ["37–38", "8.5", "39"], ["35–36", "8.0", "37–38"], ["33–34", "7.5", "35–36"], ["30–32", "7.0", "32–34"], ["27–29", "6.5", "29–31"], ["23–26", "6.0", "26–28"], ["19–22", "5.5", "23–25"], ["15–18", "5.0", "19–22"]].map(function (r) {
      return "<tr><td>" + r[0] + "</td><td><b>" + r[1] + "</b></td><td>" + r[2] + "</td></tr>";
    }).join("") + "</tbody></table>" +
    '<div class="upper" style="margin-top:14px">Writing &amp; Speaking — AI estimate</div>' +
    '<p class="small">Four criteria are scored 0–9 in half-band steps from measurable signals, averaged, then rounded to the nearest 0.5 (IELTS convention). Every such result is labelled <b>Estimated IELTS Band</b>.</p>' +
    '<div class="note rose"><span class="ic">!</span><div><b>Honesty statement.</b> Writing and Speaking scores on this platform are produced by an automated rubric engine, not by a trained examiner. They are useful as a progress signal and for the specific corrections they generate, but they can differ from an official IELTS result. Never present them as official.</div></div>' +
    '<div class="upper" style="margin-top:14px">Overall band</div><p class="small">The unweighted mean of the four skill bands, rounded to the nearest 0.5.</p></div>' +

    '<div class="card"><h2>Question bank &amp; quality assurance</h2>' +
    '<p class="small">Every item is checked programmatically before the app renders it. The validator verifies single-answer integrity, presence of a full seven-field explanation, option consistency, duplicate IDs, and that each key word is attested in its source passage or transcript.</p>' +
    '<div class="upper">Coverage</div>' +
    '<table class="tbl"><tbody>' +
    [["Reading passages", rep.coverage.passages], ["Listening sections", rep.coverage.sections], ["Reading question types", rep.coverage.readingTypes + " / 14"],
    ["Listening question types", rep.coverage.listeningTypes], ["Writing tasks", rep.coverage.writingTasks], ["Speaking sets", rep.coverage.speakingSets],
    ["Vocabulary entries", rep.coverage.vocabWords], ["Grammar exercise items", rep.coverage.grammarItems]].map(function (r) {
      return "<tr><td>" + r[0] + "</td><td class='right b'>" + r[1] + "</td></tr>";
    }).join("") + "</tbody></table>" +
    '<div class="upper" style="margin-top:14px">Difficulty distribution</div>' +
    Object.keys(rep.byDifficulty).map(function (d) { return barRow(d, rep.byDifficulty[d], Math.max.apply(null, Object.keys(rep.byDifficulty).map(function (k) { return rep.byDifficulty[k]; })), "teal"); }).join("") +
    (rep.errors.length ? '<div class="upper" style="margin-top:12px">Validator errors</div><div class="small" style="max-height:160px;overflow:auto">' + rep.errors.slice(0, 40).map(esc).join("<br>") + "</div>" : '<div class="note green" style="margin-top:12px"><span class="ic">✓</span><div>All integrity checks passed: every item has a single intended answer, a complete explanation, consistent options and an attested key word.</div></div>') +
    (rep.warnings.length ? '<div class="upper" style="margin-top:12px">Review flags (' + rep.warnings.length + ')</div><div class="small" style="max-height:140px;overflow:auto">' + rep.warnings.slice(0, 30).map(esc).join("<br>") + "</div>" : "") +
    "</div></div>" +

    '<div class="card"><h2>Your data</h2><p class="small">Everything is stored locally in this browser. Export a JSON snapshot to move it between devices.</p>' +
    '<div class="row"><button class="btn" data-act="export-data">Export my data (JSON)</button>' +
    '<button class="btn" data-act="import-data">Import JSON…</button>' +
    '<button class="btn rose" data-act="reset-data">Reset all data</button>' +
    '<span class="small muted">' + Store.get().attempts.length + " attempts · " + Store.get().responses.length + " responses · " + Store.get().errorTags.length + " error tags</span></div>" +
    '<input type="file" id="import-file" class="hidden" accept="application/json">' +
    '<div class="hr"></div><div class="upper">Sources of truth used by each module</div>' +
    '<div class="small">• Band tables: standard-style raw-score conversions for Academic Reading, General Training Reading and Listening.<br>• Difficulty ladder: beginner ≈ Band 4.5–5.5, intermediate ≈ 6.0–6.5, advanced ≈ 7.0–7.5, then Band 7+, 8+, 9 items with abstract reasoning and attributed opinion.<br>• Writing rubric signals and speaking rubric signals are documented in the architecture file accompanying this build.</div></div>';
};
