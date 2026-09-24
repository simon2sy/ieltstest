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
