/* =========================================================================
   IELTS MASTERY — PRACTICE SETS
   A catalogue of 30 numbered, selectable practice sets for each skill
   (Reading · Listening · Writing · Speaking). Every set is reproducible:
   set #7 always contains the same questions, so a score means something
   and can be compared across attempts.

   • Reading / Listening sets  → real IELTS part format: whole passage(s) /
     whole section(s) with their own question groups, under a time limit.
   • Writing sets              → one task each, plus three full Task 1 + 2
     papers at the end of the list.
   • Speaking sets             → full three-part interviews, plus cue-card and
     Part 3 discussion drills.

   Scoring is not recomputed here — sets are handed to the normal runner,
   which scores them, logs an attempt tagged with the set key, and returns
   the student to the catalogue with the score attached to the card.
   ========================================================================= */
var PracticeSets = (function () {
  var PER_SKILL = 30;

  /* ---- part taxonomy ---------------------------------------------------
     The real test is not four undifferentiated blocks. Each part has a
     different shape — how many speakers, who is talking to whom, and what
     kind of question it throws at you. Sets are grouped by part so a
     student can drill one format at a time, and the catalogue can say what
     they are about to hear before they press play. */
  var PART_META = {
    listening: [
      { key: 1, label: "Part 1", name: "Everyday conversation", speakers: "Two speakers",
        desc: "A transaction in an everyday setting — a booking, an enquiry, a repair call. Facts are dictated once: names, spellings, dates, times and prices.",
        tip: "Predict the gaps before you play. Look at the nouns and numbers already on the form, and hold your pen until the matching word is spoken." },
      { key: 2, label: "Part 2", name: "Monologue", speakers: "One speaker",
        desc: "A single speaker addressing a general audience — a tour guide, a briefing, an announcement. Nobody is asking questions and there is no interaction.",
        tip: "Use the question order as a map of the talk. A monologue never jumps back, so if you miss one gap, mark it and keep writing." },
      { key: 3, label: "Part 3", name: "Academic discussion", speakers: "Two or three speakers",
        desc: "A tutor and students, or a panel, negotiating a plan. Answers are agreed rather than announced, and the first thing said is often the thing that gets changed.",
        tip: "Track who holds the power. The person who evaluates or redirects a proposal is usually carrying the answer." },
      { key: 4, label: "Part 4", name: "Academic lecture", speakers: "One speaker",
        desc: "A continuous lecture on an academic subject, with no signposting from a questioner. Vocabulary is technical and the pace does not let up.",
        tip: "Follow the lecture's own order. Write key words for the argument as it develops, and never go back — there is no second chance in this part." }
    ],
    reading: [
      { key: 1, label: "Passage 1", name: "First passage", speakers: "",
        desc: "The opening passage of the paper. In the Academic module it is usually the most accessible of the three.",
        tip: "Read the question first, then scan for the paraphrase rather than hunting for the exact words. Spend the least time here and bank the marks." },
      { key: 2, label: "Passage 2", name: "Second passage", speakers: "",
        desc: "The middle passage — typically the main argument of the topic, and usually denser than the first.",
        tip: "This is where the main idea lives. Read the introduction and the last paragraph closely; they frame everything between them." },
      { key: 3, label: "Passage 3", name: "Third passage", speakers: "",
        desc: "The final passage, and in Academic the hardest: abstract argument, heavy terminology, and question types such as headings matching that never appear earlier.",
        tip: "Build the structure before the detail. If you can write the shape of each paragraph in four words, the matching questions answer themselves." }
    ],
    writing: [
      { key: 1, label: "Task 1", name: "Task 1 only", speakers: "",
        desc: "A single Task 1: an Academic chart, process or map, or a General Training letter. Report the data, do not give an opinion.",
        tip: "Write an overview — the single most important sentence group in Task 1. Then group the data by feature, not one sentence per bar." },
      { key: 2, label: "Task 2", name: "Task 2 only", speakers: "",
        desc: "A single essay in one of the seven common types: opinion, discussion, problem-solution, advantages-disadvantages, two-part, causes-problems, or past-present-future.",
        tip: "Your position comes first. Two clear body paragraphs that each do one job will always beat four that each do half of four." },
      { key: 3, label: "Full paper", name: "Task 1 + Task 2", speakers: "",
        desc: "A complete 60-minute paper with both tasks under exam timing — the only way to practise the split the examiner actually expects.",
        tip: "Leave twenty minutes for Task 2. Most candidates overrun Task 1 and lose coherence under time pressure on the essay." }
    ],
    speaking: [
      { key: 1, label: "Part 1", name: "Interview", speakers: "Examiner + you",
        desc: "Four or five short questions on familiar topics, with follow-ups. This part scores fluency and ease rather than accuracy under pressure.",
        tip: "Answer in two or three sentences and add a reason. One-sentence answers are what pull a score down to Band 5." },
      { key: 2, label: "Part 2", name: "Long turn", speakers: "You alone",
        desc: "One cue card: one minute of preparation, then one to two minutes of uninterrupted talk, then a one-minute follow-up question.",
        tip: "Use the whole preparation minute to make four quick notes. The examiner is scoring structure, not the content you happened to think of." },
      { key: 3, label: "Part 3", name: "Two-way discussion", speakers: "Examiner + you",
        desc: "Abstract questions that extend the Part 2 topic, with the examiner pushing back and developing your view.",
        tip: "Give a reason, a comparison and an example. This is where range and flexibility separate Band 6 from Band 8." }
    ]
  };

  /* Which set numbers belong to which part. Written out explicitly rather
     than computed so that adding a part or renumbering never silently
     reshuffles every set a student has already scored. */
  var PART_PLAN = {
    reading: [[1, 10], [2, 10], [3, 10]],
    listening: [[1, 8], [2, 8], [3, 8], [4, 6]],
    writing: [[1, 8], [2, 8], [3, 14]],
    speaking: [[1, 12], [2, 9], [3, 9]]
  };
  var planCache = {};
  /** [{ n: 1, part: 1 }, …] — deterministic, cached per skill. */
  function planFor(skill) {
    if (planCache[skill]) return planCache[skill];
    var blocks = PART_PLAN[skill] || [];
    var out = [];
    blocks.forEach(function (b) {
      for (var i = 0; i < b[1]; i++) out.push({ n: out.length + 1, part: b[0] });
    });
    var last = blocks.length ? blocks[blocks.length - 1][0] : 1;
    while (out.length < PER_SKILL) out.push({ n: out.length + 1, part: last });
    return (planCache[skill] = out.slice(0, PER_SKILL));
  }
  /** The part a given set number belongs to. */
  function partForSet(skill, n) {
    var plan = planFor(skill);
    var row = plan[n - 1];
    return row ? row.part : (plan.length ? plan[plan.length - 1].part : 1);
  }
  /** Set numbers belonging to a part, in order. */
  function setsForPart(skill, part) {
    return planFor(skill).filter(function (r) { return r.part === part; }).map(function (r) { return r.n; });
  }
  /** Metadata for one part, or null if the skill has no such part. */
  function partMeta(skill, part) {
    var list = PART_META[skill] || [];
    for (var i = 0; i < list.length; i++) if (list[i].key === part) return list[i];
    return null;
  }

  /* ---- deterministic helpers (same set number → same questions) ---- */
  function hash(str) {
    var h = 2166136261, i;
    for (i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); }
    return h >>> 0;
  }
  function rng(seed) {
    var a = seed >>> 0;
    return function () {
      a = (a + 0x6D2B79F5) | 0;
      var t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  function seededShuffle(arr, seed) {
    var r = rng(seed), a = arr.slice(), i, j, t;
    for (i = a.length - 1; i > 0; i--) { j = Math.floor(r() * (i + 1)); t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  }

  /* ---- objective (reading / listening) helpers ---- */
  function moduleFor(skill) {
    return skill === "listening" ? "academic" : (Store.get().profile.module || "academic");
  }
  function contextsFor(skill, module) {
    if (skill === "listening") return (window.BANK_LISTENING.sections || []).slice();
    return (window.BANK_READING[module] || []).slice();
  }
  function mkItem(ctx, q, skill, module, ctxType) {
    return {
      id: ctx.id + "-" + q.n, skill: skill, module: module, ctxId: ctx.id, ctxType: ctxType,
      ctx: ctx, number: q.n, type: q.type, prompt: q.q, options: q.options || null, wordLimit: q.wordLimit || "",
      answer: q.answer, accepted: q.accepted || [], ex: q.ex, difficulty: q.diff || ctx.difficulty,
      bandLevel: q.bandLevel || ("Band " + ctx.band), topic: ctx.topic || ctx.context,
      source: ctx.title || ctx.context
    };
  }
  function setSize(skill) { return skill === "listening" ? 20 : 20; }
  /** Context order for one set: the anchor passage/section rotates with the set
     number (so sets 1,2,3 start on different material), then the remaining
     contexts follow in a seeded order that varies per set. */
  function orderedContexts(skill, module, n) {
    var ctxs = contextsFor(skill, module);
    if (!ctxs.length) return [];
    var anchor = (n - 1) % ctxs.length;
    var rest = seededShuffle(ctxs.filter(function (_, i) { return i !== anchor; }), hash("rest:" + skill + ":" + module + ":" + n));
    return [ctxs[anchor]].concat(rest);
  }
  function setMinutes(skill, count) { return Math.max(10, Math.round(count * (skill === "listening" ? 1.1 : 1.4))); }

  /** Build the objective test object for (skill, n). Deterministic in n. */
  function buildObjective(skill, n) {
    var module = moduleFor(skill);
    var ctxs = contextsFor(skill, module);
    if (!ctxs.length) return null;
    var size = setSize(skill);
    var ordered = orderedContexts(skill, module, n);
    var items = [], used = [], i, k;
    for (i = 0; i < ordered.length && items.length < size; i++) {
      var c = ordered[i], qs = c.questions || [], need = size - items.length, take;
      if (!qs.length) continue;
      if (i === 0) {
        /* the anchor passage/section is used whole — a proper IELTS part */
        take = qs.slice(0, need);
      } else {
        /* after that, a seeded spread of questions from the next context, kept
           in passage order, so two sets over the same material still differ */
        var pick = seededShuffle(qs, hash("pick:" + skill + ":" + n + ":" + c.id)).slice(0, need);
        take = qs.filter(function (q) { return pick.indexOf(q) > -1; });
      }
      if (!take.length) continue;
      used.push(c);
      for (k = 0; k < take.length; k++) items.push(mkItem(c, take[k], skill, module, skill === "listening" ? "section" : "passage"));
    }
    var types = {}, typeList = [];
    items.forEach(function (it) { if (!types[it.type]) { types[it.type] = 0; typeList.push(it.type); } types[it.type]++; });
    var band = items.reduce(function (a, it) { return Math.max(a, bandNum(it.bandLevel)); }, 0);
    return {
      id: "set-" + (skill === "reading" ? "R" : "L") + "-" + n,
      mode: "set", skill: skill, module: module, setKey: keyFor(skill, n), setNumber: n,
      title: (skill === "reading" ? "Reading" : "Listening") + " Set " + n,
      items: items, contexts: used, timed: true,
      durationSec: setSize(skill) * (skill === "listening" ? 55 : 80),
      meta: {
        count: items.length, minutes: setMinutes(skill, items.length),
        types: typeList, topBand: band,
        parts: used.map(function (c) { return c.title || c.context; })
      }
    };
  }

  /* ---- writing sets ---- */
  function writingSets() {
    var tasks = window.BANK_WRITING.tasks || [];
    var t1 = tasks.filter(function (t) { return t.task === 1; });
    var t2 = tasks.filter(function (t) { return t.task === 2; });
    return { tasks: tasks, t1: t1, t2: t2 };
  }
  function writingDescriptor(n) {
    var w = writingSets(), tasks = w.tasks;
    if (n <= tasks.length) {
      var t = tasks[n - 1];
      return {
        key: keyFor("writing", n), skill: "writing", n: n, kind: "writing",
        title: "Writing Set " + n, subtitle: t.title, taskIds: [t.id],
        format: "Task " + t.task + " · " + (t.visualType || t.essayType || (t.formal === false ? "Informal letter" : "Formal letter")) +
          " · " + t.timeMinutes + " min · " + t.minWords + "+ words",
        tone: t.task === 1 ? "teal" : "violet"
      };
    }
    var idx = n - tasks.length - 1;
    var a = w.t1.length ? w.t1[idx % w.t1.length] : null;
    var b = w.t2.length ? w.t2[idx % w.t2.length] : null;
    return {
      key: keyFor("writing", n), skill: "writing", n: n, kind: "writing",
      title: "Writing Set " + n + " — full paper",
      subtitle: (a ? a.title : "Task 1") + " → " + (b ? b.title : "Task 2"),
      taskIds: [a, b].filter(Boolean).map(function (t) { return t.id; }),
      format: "Task 1 + Task 2 · 60 min · 400+ words", tone: "amber"
    };
  }

  /* ---- speaking sets ---- */
  function speakingDescriptor(n) {
    var sets = window.BANK_SPEAKING.sets || [];
    if (n <= sets.length) {
      var s = sets[n - 1];
      return {
        key: keyFor("speaking", n), skill: "speaking", n: n, kind: "speaking",
        title: "Speaking Set " + n, subtitle: s.part1Topic, setId: s.id, mode: "full",
        format: "Part 1 + Part 2 + Part 3 · ~14 min", tone: "green"
      };
    }
    var idx = n - sets.length - 1;
    var sp = sets[idx % sets.length];
    var mode = idx % 2 === 0 ? "part2" : "part3";
    return {
      key: keyFor("speaking", n), skill: "speaking", n: n, kind: "speaking",
      title: "Speaking Set " + n + (mode === "part2" ? " — cue card drill" : " — Part 3 drill"),
      subtitle: sp.part1Topic, setId: sp.id, mode: mode,
      format: mode === "part2" ? "Part 2 cue card · 1 min prep + 2 min talk" : "Part 3 discussion · ~5 min",
      tone: "teal"
    };
  }

  function keyFor(skill, n) {
    return (skill === "reading" ? "RS" : skill === "listening" ? "LS" : skill === "writing" ? "WS" : "SS") + "-" + n;
  }
  function skillFor(key) {
    var p = String(key || "").split("-")[0];
    return p === "RS" ? "reading" : p === "LS" ? "listening" : p === "WS" ? "writing" : p === "SS" ? "speaking" : null;
  }

  /** Descriptor for an objective set — mirrors the built test exactly. */
  function objectiveDescriptor(skill, n) {
    var t = buildObjective(skill, n);
    if (!t) return null;
    var m = t.meta;
    return {
      key: keyFor(skill, n), skill: skill, n: n, kind: "objective", module: t.module,
      title: (skill === "reading" ? "Reading" : "Listening") + " Set " + n,
      subtitle: m.parts.join("  ·  "),
      format: m.count + " questions · " + m.minutes + " min · " +
        (skill === "listening" ? m.parts.length + " section" + (m.parts.length > 1 ? "s" : "") : m.parts.length + " passage" + (m.parts.length > 1 ? "s" : "")),
      parts: m.parts.length, types: m.types, tone: skill === "reading" ? "teal" : "violet"
    };
  }

  /** Full descriptor (adds question-type chips for objective sets). */
  function descriptor(key) {
    var skill = skillFor(key);
    var n = parseInt(String(key || "").split("-")[1], 10);
    if (!skill || !n) return null;
    if (skill === "writing") return writingDescriptor(n);
    if (skill === "speaking") return speakingDescriptor(n);
    return objectiveDescriptor(skill, n);
  }

  /** 30 descriptors for one skill, in set order. */
  function catalog(skill) {
    var out = [], n;
    for (n = 1; n <= PER_SKILL; n++) {
      var d = skill === "writing" ? writingDescriptor(n)
        : skill === "speaking" ? speakingDescriptor(n)
          : objectiveDescriptor(skill, n);
      if (d) out.push(d);
    }
    return out;
  }

  /** Score history for one set, read from the attempt log. */
  function stats(key) {
    var at = Store.get().attempts.filter(function (a) { return a.setKey === key; });
    var bands = at.filter(function (a) { return a.band != null; });
    var last = at.length ? at[at.length - 1] : null;
    return {
      attempts: at.length,
      last: last, lastBand: last && last.band != null ? last.band : null,
      lastRaw: last ? last.raw : null, lastOutOf: last ? last.outOf : null,
      best: bands.length ? Math.max.apply(null, bands.map(function (a) { return a.band; })) : null,
      ts: last ? last.ts : null
    };
  }

  /** Summary across a skill's 30 sets, for the home-page block. */
  function summary(skill) {
    var cat = catalog(skill), done = 0, bands = [];
    cat.forEach(function (d) {
      var s = stats(d.key);
      if (s.attempts) done++;
      if (s.best != null) bands.push(s.best);
    });
    return { total: cat.length, done: done, best: bands.length ? Math.max.apply(null, bands) : null };
  }

  /** Launch the set described by key — used by the controller action. */
  function launch(key) {
    var d = descriptor(key);
    if (!d) { toast("That set could not be loaded."); return; }
    if (d.kind === "objective") {
      var t = buildObjective(d.skill, d.n);
      if (!t) { toast("Not enough material in the bank for that set yet."); return; }
      App.launchTest(t);
      return;
    }
    if (d.kind === "writing") {
      var tasks = (window.BANK_WRITING.tasks || []).filter(function (x) { return d.taskIds.indexOf(x.id) > -1; });
      if (!tasks.length) { toast("That writing task could not be loaded."); return; }
      Act.openWriting(tasks[0], { setKey: d.key, paper: d.taskIds, paperIndex: 0 });
      return;
    }
    var sets = (window.BANK_SPEAKING.sets || []).filter(function (x) { return x.id === d.setId; });
    if (!sets.length) { toast("That speaking set could not be loaded."); return; }
    Act.startSpeaking({ set: sets[0], mode: d.mode, setKey: d.key });
  }

  function nextKey(key) {
    var skill = skillFor(key);
    var n = parseInt(String(key || "").split("-")[1], 10);
    if (!skill || !n) return null;
    return keyFor(skill, n >= PER_SKILL ? 1 : n + 1);
  }

  return {
    PER_SKILL: PER_SKILL,
    catalog: catalog, descriptor: descriptor, build: buildObjective,
    stats: stats, summary: summary, launch: launch, nextKey: nextKey,
    keyFor: keyFor, skillFor: skillFor
  };
})();
