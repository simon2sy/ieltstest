/* =========================================================================
   IELTS MASTERY — EVALUATION LAYER
   GramCheck (13 error categories) → WritingEval (4 IELTS criteria) →
   SpeakingEval (4 criteria + fluency analytics) → Vocab SRS → Tutor
   ========================================================================= */

/* ------------------------- grammar / usage checker ---------------------- */
var GramCheck = {
  STOW: "a an the and or but if of to in on at for with by from as is are was were be been being this that these those it its they them their we our you your i he she his her not no do does did have has had will would can could should may might must there here about into over under again more most some such than then too very s t d ll re ve m o".split(" "),
  PATTERNS: [
    { cat: "Countable / uncountable nouns", re: /\b(informations|advices|researches|equipments|furnitures|knowledges|evidences|softwares|feedbacks|staffs|homeworks|transports)\b/gi, msg: "Uncountable noun written in the plural.", fix: function (m) { return m.replace(/s$/, ""); } },
    { cat: "Countable / uncountable nouns", re: /\bmany (information|advice|research|equipment|furniture|knowledge|evidence)\b/gi, msg: "'Many' cannot be used with an uncountable noun.", fix: function (m) { return m.replace(/^many/i, "much"); } },
    { cat: "Countable / uncountable nouns", re: /\b(less) (people|cars|students|jobs|families)\b/gi, msg: "'Less' is for uncountable nouns; countable plurals take 'fewer'.", fix: function (m) { return m.replace(/^less/i, "fewer"); } },
    { cat: "Countable / uncountable nouns", re: /\b(much) (people|cars|students|jobs|families|children)\b/gi, msg: "'Much' is for uncountable nouns; countable plurals take 'many'.", fix: function (m) { return m.replace(/^much/i, "many"); } },
    { cat: "Prepositions", re: /\bdepend(s|ed|ing)? of\b/gi, msg: "'Depend' is followed by 'on'.", fix: function (m) { return m.replace(/of$/i, "on"); } },
    { cat: "Prepositions", re: /\bresponsible of\b/gi, msg: "'Responsible' takes 'for'.", fix: function () { return "responsible for"; } },
    { cat: "Prepositions", re: /\b(interested on|interested for)\b/gi, msg: "'Interested' takes 'in'.", fix: function () { return "interested in"; } },
    { cat: "Prepositions", re: /\bdiscuss about\b/gi, msg: "'Discuss' is a transitive verb: no preposition needed.", fix: function () { return "discuss"; } },
    { cat: "Prepositions", re: /\b(in the other hand|on the other side)\b/gi, msg: "The fixed phrase is 'on the other hand'.", fix: function () { return "on the other hand"; } },
    { cat: "Prepositions", re: /\baccording to me\b/gi, msg: "'According to' cannot refer to the writer's own opinion.", fix: function () { return "in my view"; } },
    { cat: "Prepositions", re: /\bconsists? on\b/gi, msg: "'Consist' takes 'of'.", fix: function (m) { return m.replace(/on$/i, "of"); } },
    { cat: "Prepositions", re: /\barrive to\b/gi, msg: "'Arrive' takes 'at' (a place) or 'in' (a city/country).", fix: function () { return "arrive at"; } },
    { cat: "Articles", re: /\ba ([aeiou])\w+/gi, msg: "'A' before a vowel sound should be 'an' (check for exceptions such as 'a university').", guard: function (m) { return !/^a (univ|uni|unit|unique|user|usual|useful|europ|one|ewe|ubiquit)/i.test(m); }, fix: function (m) { return "an" + m.slice(1); } },
    { cat: "Articles", re: /\ban ([bcdfgjklmnpqrstvwxyz])\w+/gi, msg: "'An' before a consonant sound should be 'a' (check for exceptions such as 'an hour').", guard: function (m) { return !/^an (hour|honest|honour|honor|heir|mp|mba|x-ray)/i.test(m); }, fix: function (m) { return "a" + m.slice(2); } },
    { cat: "Articles", re: /\b(in|on|at) the (society|nature|future|modern life)\b/gi, msg: "Abstract general nouns take no article: 'in society', 'in nature'.", fix: function (m) { return m.replace(/ the /i, " "); } },
    { cat: "Subject-verb agreement", re: /\b(people|children|men|women|students|researchers|countries|cities) (is|was|has|does)\b/gi, msg: "Plural subject with a singular verb.", guard: function (m, i, text) {
        var before = text.slice(Math.max(0, i - 26), i).toLowerCase();
        /* "…theatre for children is…", "…one of those students is…" — the plural is not the subject */
        return !/(for|of|with|to|from|by|in|on|at|among|between|about|than|that)\s+(the\s+|a\s+|an\s+|his\s+|her\s+|their\s+|its\s+)?$/.test(before) && !/\bone of\s+(the\s+)?$/.test(before);
      }, fix: function (m) { return m.replace(/ (is|was|has|does)$/i, function (v) { return ({ " is": " are", " was": " were", " has": " have", " does": " do" })[v.toLowerCase()]; }); } },
    { cat: "Subject-verb agreement", re: /\b(everyone|everybody|someone|somebody|nobody|each) (are|were|have)\b/gi, msg: "These pronouns are singular.", fix: function (m) { return m.replace(/ (are|were|have)$/i, function (v) { return ({ " are": " is", " were": " was", " have": " has" })[v.toLowerCase()]; }); } },
    { cat: "Subject-verb agreement", re: /\bthere (is|was) (many|several|two|three|four|five|a lot of|\d+)\b/gi, msg: "'There is/ was' with a plural noun; use 'there are/ were'.", fix: function (m) { return m.replace(/^there (is|was)/i, function (v) { return /is/i.test(v) ? "there are" : "there were"; }); } },
    { cat: "Subject-verb agreement", re: /\bone of the (\w+s) (are|were)\b/gi, msg: "'One of the…' is singular, so the verb must be singular.", fix: function (m) { return m.replace(/ (are|were)/i, function (v) { return /are/i.test(v) ? " is" : " was"; }); } },
    { cat: "Verb tense", re: /\bsince (\d{4}|\w+ \d{4})[^.]{0,60}\b(was|were|had|did|increased|decreased|fell|rose)\b/gi, msg: "'Since' with an unfinished period requires the present perfect.", fix: null },
    { cat: "Verb tense", re: /\bin (\d{4})\b[^.]{0,50}\b(has|have) (increased|decreased|risen|fallen|grown)\b/gi, msg: "A finished past time expression cannot take the present perfect.", fix: null },
    { cat: "Modals", re: /\b(must|can|should|will|may) to\b/gi, msg: "Modal verbs are followed by the bare infinitive — no 'to'.", fix: function (m) { return m.replace(/ to$/i, ""); } },
    { cat: "Modals", re: /\bmore (better|easier|worse|higher|larger)\b/gi, msg: "Double comparative.", fix: function (m) { return m.replace(/more /i, ""); } },
    { cat: "Modals", re: /\bmost (easiest|best|worst|highest|largest)\b/gi, msg: "Double superlative.", fix: function (m) { return m.replace(/most /i, ""); } },
    { cat: "Word forms", re: /\b(economical|economic) (growth|development|problems?)\b/gi, msg: "'Economic' = relating to the economy; 'economical' = saving money.", fix: function () { return "economic growth"; } },
    { cat: "Word forms", re: /\benvironment (problems?|issues?)\b/gi, msg: "Wrong word form: use 'environmental problems'.", fix: function (m) { return m.replace(/^environment/i, "environmental"); } },
    { cat: "Word forms", re: /\b(increase|decrease|rise|fall|grow) (significant|substantial|dramatic|sharp)\b/gi, msg: "A verb needs an adverb, not an adjective.", fix: function (m) { return m.replace(/(significant|substantial|dramatic|sharp)$/i, function (w) { return w + "ly"; }); } },
    { cat: "Word forms", re: /\b(successful|rapid|dramatic|steady|gradual) (increase|decrease|rise|fall|growth)\b/gi, msg: "A noun is modified by an adjective — this is correct; check you have not written an adverb here.", fix: null, silent: true },
    { cat: "Passive voice", re: /\b(was|were|is|are) (build|built|make|made|do|done|give|given|take|taken) by\b/gi, msg: "Check the passive participle form.", fix: null },
    { cat: "Complex sentences", re: /^(because|although|even though|which|since)\b/i, frag: true, msg: "This sentence begins with a subordinator and may be a fragment — check that a main clause follows.", fix: null },
    { cat: "Run-on sentences", re: /,\s*(however|therefore|moreover|furthermore|thus|consequently)\b/gi, msg: "A conjunctive adverb cannot join two clauses after a comma; use a semicolon or full stop.", fix: function (m) { return m.replace(/^,\s*/i, ". ").replace(/^\. (\w)/, function (_, c) { return ". " + c.toUpperCase(); }); } },
    { cat: "Complex sentences", re: /\b(and|but|so) (and|but|so)\b/gi, msg: "Redundant conjunction.", fix: function () { return "and"; } },
    { cat: "Sentence fragments", re: /\b(There are many reasons|This is because)\s*$/i, msg: "Sentence appears incomplete.", fix: null, silent: true }
  ],
  MISSPELLINGS: {
    recieve: "receive", seperate: "separate", definately: "definitely", enviroment: "environment",
    goverment: "government", developement: "development", occured: "occurred", begining: "beginning",
    becuase: "because", untill: "until", thier: "their", alot: "a lot", wich: "which",
    neccessary: "necessary", acomodation: "accommodation", oppurtunity: "opportunity",
    knowlege: "knowledge", responsability: "responsibility", sucess: "success", arguement: "argument",
    benifit: "benefit", commited: "committed", enviromental: "environmental", techonology: "technology"
  },
  WEAK: {
    "a lot of": ["a considerable number of", "a great deal of", "substantial quantities of"],
    "lots of": ["numerous", "a wide range of"],
    "things": ["factors", "elements", "aspects", "considerations"],
    "stuff": ["material", "resources", "equipment"],
    "good": ["beneficial", "effective", "valuable", "favourable"],
    "bad": ["detrimental", "harmful", "unfavourable", "adverse"],
    "very": ["considerably", "markedly", "highly", "exceptionally"],
    "big": ["substantial", "considerable", "significant"],
    "get": ["obtain", "receive", "acquire", "become"],
    "kids": ["children", "young people"],
    "I think": ["In my view", "It is arguable that", "I would argue that"],
    "In my opinion": ["In my view", "From my perspective", "I would argue that"],
    "Nowadays": ["In recent decades", "Over the past twenty years"],
    "and so on": ["and comparable examples", "among others"],
    "etc.": ["and similar cases", "and so forth"]
  },
  sentences: function (text) {
    var clean = String(text || "").replace(/\s+/g, " ").trim();
    if (!clean) return [];
    return clean.split(/(?<=[.!?])\s+(?=[A-Z"'(])/).map(function (s) { return s.trim(); }).filter(function (s) { return s.length > 1; });
  },
  check: function (text) {
    var out = [];
    this.PATTERNS.forEach(function (p) {
      var re = new RegExp(p.re.source, p.re.flags.indexOf("g") > -1 ? p.re.flags : p.re.flags + "g");
      var m;
      while ((m = re.exec(text)) !== null) {
        var keep = true;
        if (p.guard) { try { keep = p.guard(m[0], m.index, text); } catch (e) { keep = true; } }
        if (keep && !p.silent) out.push({ category: p.cat, match: m[0], index: m.index, message: p.msg, suggestion: p.fix ? p.fix(m[0]) : null, kind: "usage" });
        if (m.index === re.lastIndex) re.lastIndex++;
      }
    });
    var words = String(text).toLowerCase().match(/[a-z']+/g) || [];
    words.forEach(function (w, i) {
      if (GramCheck.MISSPELLINGS[w]) out.push({ category: "Spelling", match: w, index: i, message: "Common misspelling.", suggestion: GramCheck.MISSPELLINGS[w], kind: "spelling" });
    });
    /* sentences that are fragments or run-ons */
    this.sentences(text).forEach(function (s) {
      var w = countWords(s);
      if (w > 45) out.push({ category: "Run-on sentences", match: s.slice(0, 60) + "…", index: 0, message: "Sentence of " + w + " words — too long for comfortable reading and a common source of grammar slips.", suggestion: "Split into two sentences at a natural break (look for ', and', ', but' or ', which').", kind: "structure" });
      var startsSub = /^(because|although|even though|which|since)\b/i.test(s);
      var hasMain = /\b(is|are|was|were|has|have|had|can|could|would|should|will|may|might|must|do|does|did|leads?|makes?|gives?|shows?|means?)\b/i.test(s);
      var frag = startsSub && !/,/.test(s) && w < 26;
      if (frag && w < 26) out.push({ category: "Sentence fragments", match: s, index: 0, message: "Subordinate clause used as a complete sentence.", suggestion: "Join it to a main clause, e.g. '" + s.replace(/^(Because|Although|While|Even though|Which|That|Since)\s+/i, "").replace(/^(\w)/, function (c) { return c.toUpperCase(); }) + ", and this has consequences for policy.'", kind: "structure" });
    });
    /* deduplicate */
    var seen = {};
    return out.filter(function (e) {
      var k = e.category + "|" + e.match;
      if (seen[k]) return false; seen[k] = 1; return true;
    });
  },
  /** applies safe automatic fixes to produce an improved version of a sentence */
  autoFix: function (sentence) {
    var out = sentence;
    this.PATTERNS.forEach(function (p) {
      if (!p.fix) return;
      out = out.replace(new RegExp(p.re.source, p.re.flags.replace("g", "")), function (m) { return p.fix(m); });
    });
    Object.keys(this.MISSPELLINGS).forEach(function (bad) {
      out = out.replace(new RegExp("\\b" + bad + "\\b", "gi"), GramCheck.MISSPELLINGS[bad]);
    });
    return out;
  }
};

/* ----------------------------- writing engine --------------------------- */
var WritingEval = {
  SUBORDINATORS: ["although", "though", "even though", "while", "whereas", "because", "since", "if", "unless", "provided", "so that", "in order to", "which", "who", "whose", "that is why", "despite", "in spite of", "whether", "as long as"],
  COHESIVE: ["however", "moreover", "furthermore", "in addition", "therefore", "thus", "consequently", "as a result", "on the other hand", "in contrast", "by contrast", "for example", "for instance", "such as", "firstly", "secondly", "finally", "in conclusion", "to conclude", "overall", "in general", "similarly", "nevertheless", "nonetheless", "by comparison", "this suggests", "in other words", "yet", "though", "while", "whereas", "and so", "for that reason", "in short", "ultimately", "equally", "that said", "by the same token", "consider", "in practice", "precisely because", "not because", "which is why", "on balance", "in turn", "at the same time", "the consequence", "what follows", "for this reason", "as a consequence", "in the same way", "rather than", "this is why", "that is why", "this means", "which means", "by extension", "in effect", "and yet", "at the same time", "if anything"],
  REFERENCE: ["this", "these", "such", "it", "they", "their", "which", "the former", "the latter", "the figure"],
  AWL: ["analyse", "approach", "area", "assess", "assume", "authority", "available", "benefit", "concept", "consist", "constitute", "context", "contract", "create", "data", "define", "derive", "distribute", "economy", "environment", "establish", "estimate", "evident", "export", "factor", "finance", "formula", "function", "identify", "income", "indicate", "individual", "interpret", "involve", "issue", "labour", "legal", "legislate", "major", "method", "occur", "percent", "period", "policy", "principle", "proceed", "process", "require", "research", "respond", "role", "section", "sector", "significant", "similar", "source", "specific", "structure", "theory", "vary", "achieve", "acquire", "administration", "affect", "appropriate", "aspect", "assist", "category", "chapter", "commission", "community", "complex", "compute", "conclude", "conduct", "consequent", "construct", "consume", "credit", "culture", "design", "distinct", "element", "equate", "evaluate", "feature", "final", "focus", "impact", "injure", "institute", "invest", "item", "journal", "maintain", "normal", "obtain", "participate", "perceive", "positive", "potential", "previous", "primary", "purchase", "range", "region", "regulate", "relevant", "reside", "resource", "restrict", "secure", "seek", "select", "site", "strategy", "survey", "text", "tradition", "transfer"],
  THESAURUS: {
    increase: "rise, growth, upsurge", decrease: "decline, reduction, fall", important: "significant, crucial, pivotal",
    big: "substantial, considerable", small: "marginal, modest", problem: "issue, challenge, difficulty",
    people: "individuals, citizens, the public", show: "illustrate, demonstrate, indicate", think: "believe, consider, argue",
    many: "numerous, a substantial number of", good: "beneficial, effective, valuable", bad: "detrimental, harmful",
    change: "shift, transformation, alteration", help: "assist, support, facilitate", use: "utilise, employ, apply",
    because: "owing to, as a result of, due to", but: "however, whereas, nevertheless", also: "moreover, in addition, furthermore"
  },
  analyse: function (text, task) {
    var s = String(text || "");
    var cleaned = s.replace(/\r/g, "");
    var paragraphs = cleaned.split(/\n\s*\n/).map(function (p) { return p.trim(); }).filter(Boolean);
    if (paragraphs.length < 2 && countWords(cleaned) > 120) paragraphs = [cleaned];
    var sentences = GramCheck.sentences(cleaned);
    var words = countWords(cleaned);
    var tokens = (cleaned.toLowerCase().match(/[a-z']+/g) || []);
    var content = tokens.filter(function (w) { return w.length > 3 && GramCheck.STOW.indexOf(w) === -1; });
    var uniqContent = Object.keys(groupBy(content, function (w) { return w.replace(/(tion|s|es|ing|ed)$/, ""); }));
    var ttr = content.length ? uniqContent.length / content.length : 0;
    var rootTTR = content.length ? uniqContent.length / Math.sqrt(content.length) : 0;
    var awlHits = tokens.filter(function (w) { return WritingEval.AWL.indexOf(w.replace(/(s|es|ed|ing)$/, "")) > -1; }).length;
    var rep = sortBy(Object.keys(groupBy(content, function (w) { return w; })).map(function (w) {
      return { word: w, n: content.filter(function (x) { return x === w; }).length };
    }), function (r) { return -r.n; }).filter(function (r) { return r.n >= 3; }).slice(0, 8);
    var subord = this.SUBORDINATORS.filter(function (m) { return new RegExp("\\b" + m.replace(/ /g, "\\s+"), "i").test(cleaned); });
    var cohesive = this.COHESIVE.filter(function (m) { return new RegExp(m.replace(/ /g, "\\s+"), "i").test(cleaned); });
    var cohesiveOcc = 0;
    this.COHESIVE.forEach(function (m) { cohesiveOcc += (cleaned.match(new RegExp(m.replace(/ /g, "\\s+"), "gi")) || []).length; });
    var refs = this.REFERENCE.filter(function (m) { return new RegExp("\\b" + m + "\\b", "i").test(cleaned); });
    var refOcc = 0;
    this.REFERENCE.forEach(function (m) { refOcc += (cleaned.match(new RegExp("\\b" + m + "\\b", "gi")) || []).length; });
    var passive = (cleaned.match(/\b(is|are|was|were|be|been|being)\s+\w+(ed|en)\b/gi) || []).length;
    var errors = GramCheck.check(s);
    var sentLens = sentences.map(countWords);
    var stats = {
      words: words, sentences: sentences.length, paragraphs: paragraphs.length,
      avgSentLen: sentences.length ? round1(mean(sentLens)) : 0,
      longSentences: sentLens.filter(function (n) { return n > 40; }).length,
      shortSentences: sentLens.filter(function (n) { return n < 8; }).length,
      clauseDensity: sentences.length ? round1(1 + (cleaned.match(/\b(which|who|that|although|though|while|whereas|because|since|if|unless|when|where)\b/gi) || []).length / sentences.length) : 1,
      ttr: round1(ttr * 100) / 100, rootTTR: round1(rootTTR * 100) / 100, awlHits: awlHits, passive: passive,
      subordinators: subord, cohesive: cohesive, cohesiveOcc: cohesiveOcc, cohesionDensity: sentences.length ? round1((cohesiveOcc / sentences.length) * 100) / 100 : 0,
      references: refs, refOcc: refOcc, refDensity: sentences.length ? round1((refOcc / sentences.length) * 100) / 100 : 0,
      sentVariation: sentLens.length > 1 ? round1(Math.sqrt(mean(sentLens.map(function (n) { return Math.pow(n - mean(sentLens), 2); })))) : 0,
      repeated: rep, errors: errors,
      errorRate: words ? round1((errors.length / words) * 100) : 0
    };
    /* sentence openers repetition */
    var openers = groupBy(sentences.map(function (x) { return (x.match(/^[A-Za-z']+/) || [""])[0].toLowerCase(); }), function (x) { return x; });
    stats.repeatedOpeners = Object.keys(openers).filter(function (k) { return openers[k].length >= 3 && k; }).map(function (k) { return { opener: k, n: openers[k].length }; });

    /* --- task response signals --- */
    var tr = { checks: [], score: 0 };
    var promptWords = (String(task.prompt || "").toLowerCase().match(/[a-z]{5,}/g) || []).filter(function (w) { return GramCheck.STOW.indexOf(w) === -1; });
    var promptUniq = Object.keys(groupBy(promptWords, function (w) { return w.replace(/(s|es|ed|ing)$/, ""); }));
    var lower = cleaned.toLowerCase();
    var covered = promptUniq.filter(function (w) { return lower.indexOf(w.slice(0, Math.max(5, w.length - 3))) > -1; });
    var coverage = promptUniq.length ? covered.length / promptUniq.length : 1;
    tr.coverage = coverage;
    tr.checks.push({ k: "Addresses the prompt topic", ok: coverage >= (task.module === "general" && task.task === 1 ? 0.4 : 0.55), detail: pct(coverage) + "% of the prompt's key content words appear in your answer." });
    tr.checks.push({ k: "Meets the word requirement", ok: words >= task.minWords, detail: words + " words written; the task requires at least " + task.minWords + "." });
    tr.checks.push({ k: "Uses paragraphs", ok: stats.paragraphs >= (task.task === 1 ? 3 : 4), detail: stats.paragraphs + " paragraphs detected." });
    var isLetter = task.module === "general" && task.task === 1;
    var hasConcl = /(in conclusion|to conclude|to sum up|in short|on balance|ultimately|overall,)/i.test(cleaned);
    if (!hasConcl && paragraphs.length >= 4) {
      var lastP = paragraphs[paragraphs.length - 1];
      hasConcl = countWords(lastP) <= 130 && /(therefore|thus|should|must|is not|would be|for this reason|the most)/i.test(lastP);
    }
    if (isLetter) {
      var salutation = /(dear\s+(sir|madam|mr|ms|mrs|dr)?[^,\n]*,)/i.test(cleaned);
      var signoff = /(yours (faithfully|sincerely)|best wishes|kind regards|take care|all the best|see you soon)/i.test(cleaned);
      var purpose = /(i am writing|i'm writing|i would (therefore )?(like|request|ask)|would you|could you|please)/i.test(cleaned);
      tr.checks.push({ k: "Letter format (salutation and sign-off)", ok: salutation && signoff, detail: (salutation ? "Salutation present. " : "No salutation found. ") + (signoff ? "Sign-off present." : "No sign-off found (Yours faithfully / Yours sincerely / Take care).") });
      tr.checks.push({ k: "Purpose and request are explicit", ok: purpose, detail: purpose ? "The reason for writing and the action requested are stated." : "State why you are writing early, and what you want the reader to do." });
      var bullets = (String(task.prompt).match(/^\s*[•\-]/gm) || []).length || 3;
      var letterPara = paragraphs.length >= 4;
      tr.checks.push({ k: "All bullet points covered", ok: letterPara, detail: paragraphs.length + " paragraph(s) for " + bullets + " required points." });
    } else {
      tr.checks.push({ k: "Clear conclusion", ok: hasConcl, detail: hasConcl ? "Conclusion signalled." : "No conclusion marker found (in conclusion / to conclude / to sum up)." });
    }
    if (task.task === 1 && !isLetter) {
      var hasOverview = /(overall|in general|broadly speaking|it is clear that)/i.test(cleaned);
      tr.checks.push({ k: "Overview statement (required for Task 1)", ok: hasOverview, detail: hasOverview ? "An overview is present." : "No overview found. Without it, Task Achievement cannot exceed Band 6." });
      var hasFigures = (cleaned.match(/\d+(\.\d+)?%?/g) || []).length;
      tr.checks.push({ k: "Supports with data", ok: hasFigures >= 5, detail: hasFigures + " figures cited from the visual." });
    } else if (task.task === 2) {
      var hasPosition = /(i (believe|agree|disagree|argue|would argue|contend|consider|judge|regard|am convinced|am persuaded|am of the view|support|oppose)|in my (view|opinion|judgement|assessment)|this essay (will argue|argues)|my (position|own position|view|verdict|conclusion) is|i largely|i partly|on balance|i am persuaded|(advantages?|benefits?|drawbacks?) (clearly )?(outweigh|are outweighed by)|the evidence (suggests|indicates) that)/i.test(cleaned);
      tr.checks.push({ k: "Clear position", ok: hasPosition, detail: hasPosition ? "Your position is stated explicitly." : "No clear position marker found (e.g. 'In my view…'). This limits Task Response." });
      var twoSided = /(on the one hand|some people|critics|those who|supporters|opponents)/i.test(cleaned) && /(however|on the other hand|by contrast|while)/i.test(cleaned);
      tr.checks.push({ k: "Develops ideas, not just lists", ok: /(for example|for instance|such as|this is because|which means|which is why|in practice|the evidence|research|studies show|a case in point|consider|imagine|data|survey|reports? |figures|the figures|in effect|for this reason|this is why)/i.test(cleaned), detail: "Evidence or explanation markers detected." });
      if (/discuss both/i.test(task.prompt)) tr.checks.push({ k: "Covers both views (required)", ok: twoSided, detail: twoSided ? "Both sides are represented." : "The task asks for both views; one appears to be missing." });
      if (/problem|solution|cause/i.test(task.prompt)) tr.checks.push({ k: "Causes and solutions covered", ok: /(solution|measure|tackle|address|reduce|action)/i.test(cleaned), detail: "Remedies language detected where required." });
      var bodyDev = paragraphs.slice(1, -1).map(countWords);
      tr.checks.push({ k: "Body paragraphs developed", ok: bodyDev.length && Math.min.apply(null, bodyDev) >= 55, detail: "Body paragraph lengths: " + (bodyDev.join(", ") || "none") + " words." });
    }
    tr.score = tr.checks.filter(function (c) { return c.ok; }).length / tr.checks.length;
    stats.tr = tr;

    /* weak phrases */
    stats.weak = [];
    Object.keys(GramCheck.WEAK).forEach(function (w) {
      var re = new RegExp("\\b" + w.replace(/[.]/g, "\\.") + "\\b", "gi");
      var n = (cleaned.match(re) || []).length;
      if (n) stats.weak.push({ phrase: w, n: n, better: GramCheck.WEAK[w] });
    });
    stats.weak.sort(function (a, b) { return b.n - a.n; });
    return stats;
  },

  bandFrom: function (score, cap, floor) {
    var b;
    if (score >= 0.93) b = 9.0; else if (score >= 0.83) b = 8.0; else if (score >= 0.68) b = 7.0;
    else if (score >= 0.54) b = 6.0; else if (score >= 0.4) b = 5.0; else b = 4.0;
    if (floor != null) b = Math.max(b, floor);
    if (cap != null) b = Math.min(b, cap);
    return b;
  },

  evaluate: function (text, task) {
    var st = this.analyse(text, task);
    var w = st.words;
    /* ---- Task Achievement / Response ---- */
    var taCap = 9, taFloor = 3.0, taNotes = [];
    var bodyDev = st.paragraphs > 2 ? paragraphs(wordsOf(text)).slice(1, -1).map(countWords) : [];
    function wordsOf(x) { return x; }
    function paragraphs(x) { return String(x).replace(/\r/g, "").split(/\n\s*\n/).map(function (p) { return p.trim(); }).filter(Boolean); }
    if (w < 60) { taCap = 4.0; taNotes.push("Under 60 words: the task is not attempted in a way that can be assessed fairly."); }
    else if (w < task.minWords * 0.75) { taCap = 5.0; taNotes.push("Well under the " + task.minWords + "-word minimum — penalised heavily in the real test."); }
    else if (w < task.minWords) { taCap = 6.0; taNotes.push("Slightly under the " + task.minWords + "-word minimum."); }
    var overviewCheck = st.tr.checks.filter(function (c) { return /Overview/.test(c.k); })[0];
    if (task.task === 1 && overviewCheck && !overviewCheck.ok) { taCap = Math.min(taCap, 6.0); }
    if (task.task === 2 && !st.tr.checks.filter(function (c) { return /position/i.test(c.k); })[0].ok) { taCap = Math.min(taCap, 6.0); }
    var paraScore = st.paragraphs >= 5 ? 1 : st.paragraphs === 4 ? 0.85 : st.paragraphs === 3 ? 0.6 : 0.25;
    var isLetterTask = task.module === "general" && task.task === 1;
    var devScore;
    if (task.task === 2) devScore = bodyDev.length ? Math.min(1, Math.min.apply(null, bodyDev) / 65) : 0.4;
    else if (isLetterTask) devScore = st.paragraphs >= 4 ? 1 : st.paragraphs === 3 ? 0.7 : 0.4;
    else devScore = (st.tr.checks.filter(function (c) { return /data|figures/i.test(c.k); })[0] || { ok: false }).ok ? 1 : 0.5;
    var taScore = 0.30 * st.tr.score + 0.20 * Math.min(1, st.tr.coverage / 0.7) + 0.20 * Math.min(1, w / (task.minWords * 1.1)) + 0.15 * paraScore + 0.15 * devScore;
    var ta = this.bandFrom(taScore, taCap, taFloor);

    /* ---- Coherence & Cohesion ---- */
    /* cohesion is judged on both volume (occurrences relative to sentence count)
       and variety (distinct device kinds) so that dense but marker-light expert
       writing is not penalised for style alone */
    var reqCoh = Math.max(3, Math.round(st.sentences * 0.25)), reqRef = Math.max(3, Math.round(st.sentences * 0.3));
    var cohScore = 0.5 * Math.min(1, st.cohesiveOcc / reqCoh) + 0.5 * Math.min(1, st.cohesive.length / 5);
    var refScore = 0.5 * Math.min(1, st.refOcc / reqRef) + 0.5 * Math.min(1, st.references.length / 5);
    var ccScore = 0.22 * cohScore + 0.22 * refScore + 0.22 * paraScore +
      0.20 * Math.min(1, st.clauseDensity / 2.0) + 0.14 * Math.min(1, st.sentVariation / 8);
    if (st.repeatedOpeners.length) ccScore -= 0.06;
    ccScore = clamp(ccScore, 0, 1);
    var cc = this.bandFrom(ccScore, w < 100 ? 5.0 : undefined);

    /* ---- Lexical Resource ---- */
    var weakPen = st.weak.length <= 1 ? 1 : st.weak.length <= 3 ? 0.72 : 0.45;
    var repPen = st.repeated.length <= 3 ? 1 : st.repeated.length <= 5 ? 0.8 : 0.6;
    var lexScore = 0.30 * Math.min(1, st.rootTTR / 8) + 0.25 * Math.min(1, st.awlHits / 12) +
      0.20 * weakPen + 0.15 * repPen +
      0.10 * (st.errors.filter(function (e) { return e.category === "Spelling" || e.category === "Word forms"; }).length ? 0.3 : 1);
    var lr = this.bandFrom(lexScore, w < 100 ? 5.0 : undefined);

    /* ---- Grammatical Range & Accuracy ---- */
    var graErr = st.errorRate;
    var graScore = 0.28 * Math.min(1, st.clauseDensity / 2.0) + 0.22 * Math.min(1, st.subordinators.length / 6) +
      0.12 * Math.min(1, st.passive / 2) + 0.38 * clamp(1 - graErr / 9, 0, 1);
    var graCap = w < 100 ? 5.0 : graErr > 10 ? 6.0 : graErr > 7 ? 7.0 : undefined;
    var gra = this.bandFrom(graScore, graCap);

    var overall = roundHalf(mean([ta, cc, lr, gra]));

    /* ---- feedback ---- */
    var crit = [
      {
        name: "Task Achievement / Task Response", band: ta,
        why: "Task-response signals met: " + st.tr.checks.filter(function (c) { return c.ok; }).length + " of " + st.tr.checks.length + " (" +
          st.tr.checks.filter(function (c) { return c.ok; }).map(function (c) { return c.k; }).join("; ") + "). " + taNotes.join(" ") +
          (st.tr.checks.filter(function (c) { return !c.ok; }).length ? " Still missing: " + st.tr.checks.filter(function (c) { return !c.ok; }).map(function (c) { return c.k.toLowerCase(); }).join(", ") + "." : "")
      },
      {
        name: "Coherence and Cohesion", band: cc,
        why: "You used " + st.cohesive.length + " distinct cohesive devices across " + st.sentences + " sentences (" + (st.cohesive.slice(0, 6).join(", ") || "none detected") + "), with " + st.paragraphs + " paragraph(s) and " + st.references.length + " referencing expressions. " +
          (st.repeatedOpeners.length ? "Watch repeated sentence openers: " + st.repeatedOpeners.map(function (o) { return "'" + o.opener + "' ×" + o.n; }).join(", ") + ". " : "") +
          "Average sentence length is " + st.avgSentLen + " words with " + st.longSentences + " over-long sentence(s)."
      },
      {
        name: "Lexical Resource", band: lr,
        why: "Lexical variety (root type–token ratio) is " + st.rootTTR + " with " + st.awlHits + " academic word-list items. " +
          (st.repeated.length ? "Most repeated content words: " + st.repeated.slice(0, 5).map(function (r) { return r.word + "×" + r.n; }).join(", ") + ". " : "") +
          (st.weak.length ? "Imprecise phrases appear " + st.weak.reduce(function (a, b) { return a + b.n; }, 0) + " time(s) — see the upgrades below." : "No high-frequency weak phrases detected.")
      },
      {
        name: "Grammatical Range and Accuracy", band: gra,
        why: "Clause density is " + st.clauseDensity + " per sentence with " + st.subordinators.length + " different subordinating structures (" + (st.subordinators.slice(0, 6).join(", ") || "few detected") + ") and " + st.passive + " passive construction(s). " +
          "Detected error rate: " + st.errorRate + " per 100 words (" + st.errors.length + " flagged issues)."
      }
    ];

    /* corrections */
    var corrections = st.errors.map(function (e) {
      var sent = GramCheck.sentences(text).filter(function (s) { return s.toLowerCase().indexOf(String(e.match).toLowerCase().slice(0, 18)) > -1; })[0] || e.match;
      return {
        category: e.category, issue: e.message, original: sent,
        corrected: e.suggestion ? GramCheck.autoFix(sent) : GramCheck.autoFix(sent),
        why: e.suggestion ? "Replace '" + e.match + "' with '" + e.suggestion + "'." : "Revise this structure: " + e.message
      };
    });

    /* weak phrases → better alternatives */
    var upgrades = st.weak.map(function (x) {
      var sent = GramCheck.sentences(text).filter(function (s) { return new RegExp("\\b" + x.phrase + "\\b", "i").test(s); })[0] || "";
      var better = sent ? sent.replace(new RegExp("\\b" + x.phrase + "\\b", "gi"), x.better[0]) : "";
      return { phrase: x.phrase, count: x.n, options: x.better, original: sent, better: better, why: "'" + x.phrase + "' is imprecise and high-frequency; examiners register it as Band 6 vocabulary. '" + x.better[0] + "' is more specific and raises the register without changing your meaning." };
    });

    /* rewrites: apply safe fixes + split long sentences + tighten repetitions */
    var rewrites = [];
    GramCheck.sentences(text).forEach(function (s) {
      var fixed = GramCheck.autoFix(s);
      if (fixed !== s && countWords(s) > 6) rewrites.push({ type: "Grammar correction", before: s, after: fixed, why: "Mechanical error corrected; the meaning is untouched, so this is a free accuracy gain." });
    });
    GramCheck.sentences(text).forEach(function (s) {
      if (countWords(s) > 40) {
        var parts = s.split(/,\s+(and|but|which|so)\s+/i);
        if (parts.length >= 3) {
          var a = parts[0] + "."; var b = parts[2].charAt(0).toUpperCase() + parts[2].slice(1);
          rewrites.push({ type: "Sentence splitting", before: s, after: a + " In addition, " + b, why: "A 40+ word sentence usually contains two ideas. Splitting them improves Coherence and Cohesion and reduces the chance of a grammar slip being counted against you." });
        }
      }
    });
    st.repeated.slice(0, 2).forEach(function (r) {
      var alt = WritingEval.THESAURUS[r.word];
      if (!alt) return;
      var sent = GramCheck.sentences(text).filter(function (s) { return new RegExp("\\b" + r.word, "i").test(s); })[0];
      if (!sent) return;
      var variants = alt.split(",").map(function (x) { return x.trim(); });
      rewrites.push({
        type: "Lexical replacement", before: sent,
        after: sent.replace(new RegExp("\\b" + r.word + "\\b", "i"), variants[0]),
        why: "'" + r.word + "' appears " + r.n + " times. Replacing one occurrence with '" + variants[0] + "' (or " + variants.slice(1).join(", ") + ") demonstrates lexical range without repeating a memorised word."
      });
    });
    /* weak phrase → precise alternative, expressed as a rewritten sentence */
    st.weak.slice(0, 3).forEach(function (x) {
      var sent = GramCheck.sentences(text).filter(function (s) { return new RegExp("\\b" + x.phrase + "\\b", "i").test(s); })[0];
      if (!sent) return;
      var better = sent.replace(new RegExp("\\b" + x.phrase + "\\b", "gi"), x.better[0]);
      better = GramCheck.autoFix(better);
      if (better !== sent && rewrites.length < 8) {
        rewrites.push({
          type: "Imprecision",
          before: sent,
          after: better,
          why: "'" + x.phrase + "' appears " + x.n + " time(s). '" + x.better[0] + "' is more precise, so the sentence carries more information per word — which is exactly what the Lexical Resource criterion measures. Compare: 'a lot of people' states a vague quantity, whereas '" + x.better[0] + " people' commits to a scale."
        });
      }
    });
    rewrites = rewrites.slice(0, 8);

    /* top actions ranked by band impact */
    var actions = [];
    if (w < task.minWords) actions.push({ p: 1, text: "Add " + (task.minWords + 30 - w) + " words. Under-length answers lose Task Response marks regardless of quality — one extra developed example is usually enough." });
    st.tr.checks.filter(function (c) { return !c.ok; }).forEach(function (c, i) { actions.push({ p: Math.min(3, i + 1), text: "Fix: " + c.k + " — " + c.detail }); });
    if (st.weak.length) actions.push({ p: 2, text: "Replace " + st.weak.slice(0, 3).map(function (x) { return "'" + x.phrase + "'"; }).join(", ") + " with the precise alternatives listed below." });
    if (st.repeatedOpeners.length) actions.push({ p: 3, text: "Vary sentence openings: '" + st.repeatedOpeners[0].opener + "' starts " + st.repeatedOpeners[0].n + " sentences." });
    if (st.errors.length) actions.push({ p: 2, text: "Correct the " + st.errors.length + " flagged accuracy issues — they cost you directly in Grammatical Range and Accuracy." });

    return {
      stats: st, criteria: crit, overall: overall,
      corrections: corrections, upgrades: upgrades, rewrites: rewrites,
      actions: actions.sort(function (a, b) { return a.p - b.p; }).slice(0, 5),
      words: w,
      bandNote: overall >= 8 ? "This estimate is in the Band 8+ range. The rubric engine separates bands reliably up to about Band 7.5; above that it cannot reliably distinguish an 8 from a 9, so treat this as 'Band 8+' rather than a precise figure." : null,
      disclaimer: "Estimated IELTS Band — produced by automated rubric analysis, not by a trained examiner. Use it for practice guidance only. Estimates are typically accurate to within about half a band in the 5.0–7.5 range."
    };
  }
};

/* ---------------------------- speaking engine --------------------------- */
var SpeakingEval = {
  FILLERS: ["um", "uh", "er", "erm", "ah", "like", "you know", "i mean", "basically", "actually", "sort of", "kind of", "well"],
  LINKERS: ["so", "because", "but", "and", "however", "although", "which", "that's why", "for example", "on the other hand", "i suppose", "to be honest", "generally speaking"],
  evaluate: function (input) {
    var transcript = String(input.transcript || "");
    var cue = input.cueCard || "";
    var seconds = input.seconds || 0;
    var words = countWords(transcript);
    var lower = transcript.toLowerCase();
    var sentences = GramCheck.sentences(transcript);
    var tokens = lower.match(/[a-z']+/g) || [];
    var utterances = transcript.split(/\n+/).filter(function (x) { return countWords(x) > 2; });
    var minutes = Math.max(0.15, seconds / 60);
    var wpm = seconds > 5 ? Math.round(words / minutes) : null;

    /* filler + hesitation analysis */
    var fillerHits = [];
    this.FILLERS.forEach(function (f) {
      var re = new RegExp("\\b" + f.replace(/ /g, "\\s+") + "\\b", "gi");
      var m = lower.match(re);
      if (m) fillerHits.push({ filler: f, n: m.length });
    });
    fillerHits.sort(function (a, b) { return b.n - a.n; });
    var fillerTotal = fillerHits.reduce(function (a, b) { return a + b.n; }, 0);
    var fillerRate = words ? fillerTotal / words : 0;

    /* repetition */
    var content = tokens.filter(function (w) { return w.length > 3 && GramCheck.STOW.indexOf(w) === -1; });
    var rep = sortBy(Object.keys(groupBy(content, function (w) { return w; })).map(function (w) {
      return { word: w, n: content.filter(function (x) { return x === w; }).length };
    }), function (r) { return -r.n; }).filter(function (r) { return r.n >= 3; }).slice(0, 8);

    /* self-correction & repairs */
    var repairs = (lower.match(/\b(i mean|sorry|rather|let me rephrase|what i meant|actually not)\b/g) || []).length;
    var ttrUnique = Object.keys(groupBy(content, function (w) { return w.replace(/(s|es|ing|ed)$/, ""); }));
    var rootTTR = content.length ? round1((ttrUnique.length / Math.sqrt(content.length)) * 100) / 100 : 0;
    var mlr = utterances.length ? round1(mean(utterances.map(countWords))) : (sentences.length ? round1(mean(sentences.map(countWords))) : 0);
    var subord = WritingEval.SUBORDINATORS.filter(function (m) { return new RegExp("\\b" + m.replace(/ /g, "\\s+"), "i").test(lower); });
    var linkers = this.LINKERS.filter(function (m) { return new RegExp("\\b" + m.replace(/ /g, "\\s+"), "i").test(lower); });
    var tenseVariety = ["is", "are", "was", "were", "have", "had", "would", "will", "can", "could"].filter(function (t) { return new RegExp("\\b" + t + "\\b", "i").test(lower); }).length;
    var errors = GramCheck.check(transcript);
    var errorRate = words ? round1((errors.length / words) * 100) : 0;

    /* topic relevance to the cue card */
    var cueWords = ((cue + " " + (input.bullets || []).join(" ")).toLowerCase().match(/[a-z]{4,}/g) || []).filter(function (w) { return GramCheck.STOW.indexOf(w) === -1; });
    var cueCovered = Object.keys(groupBy(cueWords, function (w) { return w; })).filter(function (w) { return lower.indexOf(w.slice(0, Math.max(4, w.length - 2))) > -1; });
    var relevance = cueWords.length ? cueCovered.length / Object.keys(groupBy(cueWords, function (w) { return w; })).length : 0.6;

    /* rehearsed-answer detector */
    var rehearsedSignals = 0;
    if (fillerTotal === 0 && words > 120) rehearsedSignals++;
    if (repairs === 0 && words > 150) rehearsedSignals++;
    if (rootTTR > 8.2 && words > 130) rehearsedSignals++;

    /* criteria bands */
    var fc = 5.0;
    if (wpm != null) {
      var pace = wpm >= 110 && wpm <= 175 ? 1 : wpm >= 90 && wpm <= 200 ? 0.6 : 0.25;
      var fill = fillerRate <= 0.03 ? 1 : fillerRate <= 0.06 ? 0.7 : fillerRate <= 0.1 ? 0.4 : 0.15;
      var mlrScore = mlr >= 12 ? 1 : mlr >= 8 ? 0.7 : mlr >= 5 ? 0.4 : 0.2;
      fc = mean([pace, fill, mlrScore, Math.min(1, linkers.length / 5)]);
    } else {
      fc = mean([Math.min(1, words / 180), fillerRate <= 0.05 ? 0.9 : 0.5, Math.min(1, mlr / 12), Math.min(1, linkers.length / 5)]);
    }
    var lrScore = mean([Math.min(1, rootTTR / 8.5), Math.min(1, relevance / 0.8), rep.length > 4 ? 0.5 : rep.length > 2 ? 0.7 : 0.95, Math.min(1, (words / 140))]);
    var graScore = mean([Math.min(1, subord.length / 5), Math.min(1, tenseVariety / 6), clamp(1 - errorRate / 9, 0, 1), Math.min(1, mlr / 12)]);
    var pronScore = mean([Math.min(1, words / 150), clamp(1 - errorRate / 12, 0, 1), Math.min(1, (mlr + linkers.length) / 14)]);
    var toBand = function (s, cap) { var b = s >= 0.95 ? 9 : s >= 0.85 ? 8 : s >= 0.7 ? 7 : s >= 0.55 ? 6 : s >= 0.4 ? 5 : 4; return cap ? Math.min(b, cap) : b; };
    var cap = words < 60 ? 5.0 : words < 100 ? 6.0 : undefined;
    var crit = [
      { name: "Fluency and Coherence", band: toBand(fc, cap), why: (wpm != null ? "Speech rate approximately " + wpm + " words per minute (a comfortable IELTS range is about 110–170). " : "No timing data captured, so fluency is judged from the transcript only. ") + "Filled pauses: " + fillerTotal + " (" + pct(fillerRate) + "% of words). Mean length of run: " + mlr + " words. Cohesive markers used: " + linkers.length + "." },
      { name: "Lexical Resource", band: toBand(lrScore, cap), why: "Lexical variety index " + rootTTR + ", topic coverage of the cue card " + pct(relevance) + "%. " + (rep.length ? "Repeated content words: " + rep.slice(0, 5).map(function (r) { return r.word + "×" + r.n; }).join(", ") + ". " : "") + (fillerHits.length ? "Most-used filler: '" + fillerHits[0].filler + "' (" + fillerHits[0].n + " times) — examiners hear this as vocabulary avoidance." : "") },
      { name: "Grammatical Range and Accuracy", band: toBand(graScore, cap), why: "Subordinating structures: " + subord.length + " (" + (subord.slice(0, 5).join(", ") || "few") + "). Tense/aspect variety: " + tenseVariety + " forms. Flagged grammar issues: " + errors.length + " (" + errorRate + " per 100 words)." },
      { name: "Pronunciation", band: toBand(pronScore, cap), why: "Limited evidence: pronunciation cannot be assessed accurately from a transcript. This estimate is based on intelligibility proxies (length, structural clarity, word-level accuracy). Record your answers and listen for word stress and final consonants — that self-check is more reliable than this number." }
    ];
    var overall = words < 25 ? null : roundHalf(mean(crit.map(function (c) { return c.band; })));

    /* suggested improved answers from the student's own words */
    var improvements = [];
    if (rep.length) improvements.push({ type: "Vocabulary upgrade", before: "you repeated '" + rep[0].word + "' " + rep[0].n + " times", after: "use " + (WritingEval.THESAURUS[rep[0].word] || "a synonym such as 'significant', 'notable'"), why: "Repetition is the fastest way examiners hear a limited vocabulary. Varying one word lifts Lexical Resource without adding new grammar." });
    if (fillerTotal) improvements.push({ type: "Filler reduction", before: "Replace '" + fillerHits[0].filler + "' with a short thinking device", after: "That's an interesting question — I suppose… / Well, the first thing that comes to mind is…", why: "Linking phrases hold the floor while you think, and unlike 'um' they count as cohesion, so they earn credit rather than costing you." });
    if (mlr < 10 && sentences.length) improvements.push({ type: "Extend short answers", before: sentences[0].slice(0, 90), after: sentences[0] + " The reason I say that is that …, and in my experience …", why: "Answers of fewer than 10 words give the examiner nothing to assess. Adding 'because' plus an example doubles the evidence available for your band." });
    if (subord.length < 3) improvements.push({ type: "Add complex structures", before: "Simple sentences dominate", after: "Use 'although …', 'which means …', 'if … then …' at least twice per answer", why: "Grammatical Range is scored on variety, not only accuracy. Two subordinate clauses per answer is often the difference between Band 6 and Band 7." });
    if (errors.length) improvements.push({ type: "Accuracy fixes", before: errors.slice(0, 2).map(function (e) { return e.match; }).join(", "), after: errors.slice(0, 2).map(function (e) { return e.suggestion || e.message; }).join("; "), why: "Recurring small errors are counted across the whole test, so fixing two repeated patterns can move accuracy a full half band." });

    return {
      criteria: crit, overall: overall, words: words, wpm: wpm,
      fillerHits: fillerHits, fillerTotal: fillerTotal, fillerRate: fillerRate,
      repetitions: rep, repairs: repairs, mlr: mlr, subordinators: subord, linkers: linkers,
      errors: errors, improvements: improvements, rehearsed: rehearsedSignals >= 2,
      disclaimer: "Estimated IELTS Band — automated estimate from a transcript, not an examiner's judgement. Pronunciation in particular cannot be scored reliably without acoustic analysis."
    };
  }
};

/* ----------------------------- vocabulary SRS --------------------------- */
var Vocab = {
  all: function () { return window.BANK_VOCAB.words; },
  find: function (w) { return this.all().filter(function (x) { return x.word === w; })[0]; },
  saved: function () { return Store.get().vocab.saved || []; },
  isSaved: function (w) { return this.saved().indexOf(w) > -1; },
  toggle: function (w) {
    var s = Store.get(); var i = s.vocab.saved.indexOf(w);
    if (i > -1) s.vocab.saved.splice(i, 1); else s.vocab.saved.push(w);
    Store.save(); return this.isSaved(w);
  },
  due: function () {
    var srs = Store.get().vocab.srs || {}, now = Date.now(),
      saved = (Store.get().vocab.saved || []);
    return saved.filter(function (w) { var c = srs[w]; return !c || !c.dueAt || c.dueAt <= now; });
  },
  queue: function () {
    var due = this.due().map(function (w) { return Vocab.find(w); }).filter(Boolean);
    var rest = this.all().filter(function (w) { return Vocab.isSaved(w.word) && due.indexOf(w) === -1; });
    return due.concat(sample(rest, Math.max(0, 10 - due.length)));
  },
  grade: function (w, g) {  /* g: 1 again, 2 hard, 3 good, 4 easy */
    var s = Store.get(), srs = s.vocab.srs;
    var c = srs[w] || { ease: 2.5, intervalDays: 0, reps: 0, lapses: 0 };
    if (g === 1) { c.intervalDays = 0; c.ease = Math.max(1.3, c.ease - 0.2); c.lapses++; }
    else {
      c.ease = clamp(c.ease + (g === 4 ? 0.15 : g === 3 ? 0 : -0.15), 1.3, 3.0);
      c.intervalDays = c.reps === 0 ? (g === 2 ? 1 : 2) : Math.max(1, Math.round(c.intervalDays * c.ease * (g === 2 ? 0.6 : 1)));
      c.reps++;
    }
    c.dueAt = Date.now() + c.intervalDays * 86400000;
    srs[w] = c;
    if (s.vocab.learned.indexOf(w) === -1) s.vocab.learned.push(w);
    Store.save();
  }
};

/* -------------------------------- tutor --------------------------------- */
var Tutor = {
  intents: [
    {
      id: "tfng",
      match: /(not given|true.?false|false .{0,12}not given|ng\b)/i,
      answer: function () {
        var a = Analytics.typeAccuracy("reading").filter(function (t) { return t.type === "TFNG"; })[0];
        return "**TRUE / FALSE / NOT GIVEN — the exact test**\n\n" +
          "TRUE: a sentence in the passage makes the statement correct (it may use completely different words — paraphrase is normal).\n" +
          "FALSE: a sentence makes the statement impossible; the passage directly contradicts it.\n" +
          "NOT GIVEN: no sentence either confirms or contradicts it. The information is simply absent.\n\n" +
          "The decisive question is not 'is this true in the real world?' but 'can I point to the sentence that settles it?' If you cannot, it is NOT GIVEN — even if it sounds unlikely.\n\n" +
          "Two habits that fix most errors:\n" +
          "1. Underline the exact claim first. Statements with 'all', 'only', 'the first', 'mainly' fail most often.\n" +
          "2. When you hesitate between FALSE and NOT GIVEN, look for a contradiction. If your reason for FALSE is 'this seems exaggerated', it is NOT GIVEN.\n\n" +
          (a ? "Your current T/F/NG accuracy: " + pct(a.accuracy) + "% over " + a.total + " questions." : "Complete a T/F/NG drill and I will track your accuracy by type.");
      }
    },
    {
      id: "improve",
      match: /(6\.5|band .{0,6}(7|8)|improve|get to band|jump|higher band)/i,
      answer: function () {
        var b = Analytics.bands(), p = Store.get().profile, pr = Analytics.priorities();
        var s = "**Your route from your current profile to Band " + p.targetBand.toFixed(1) + "**\n\nCurrent estimates: " +
          SKILLS.map(function (k) { return k.charAt(0).toUpperCase() + k.slice(1) + " " + (b[k] == null ? "—" : b[k].toFixed(1)); }).join(" · ") +
          (b.overall ? " → overall " + b.overall.toFixed(1) : "") + "\n\nPriority order:\n" +
          pr.map(function (x) { return (x.rank) + ". " + x.skill.charAt(0).toUpperCase() + x.skill.slice(1) + " — " + x.reason; }).join("\n") +
          "\n\nWhere half a band usually hides:\n" +
          "• Writing: an overview/position sentence you can point to, and 55+ words of development per body paragraph.\n" +
          "• Speaking: answers under 10 words. Extend with 'because' + example and you add evidence for three criteria at once.\n" +
          "• Reading: accuracy collapses on matching tasks, not on True/False. Drill those at 1.5 minutes per question.\n" +
          "• Listening: spelling and word limits, not comprehension. Losing 2 marks to '30th' versus '30' is a scoring error, not a language error.";
        return s;
      }
    },
    {
      id: "essay",
      match: /(check my (essay|writing|task)|review my (essay|writing)|mark my)/i,
      answer: function () {
        return "Open **Writing → choose a task → write or paste your answer → Evaluate**. You will get:\n\n" +
          "• Estimated band for Task Achievement/Response, Coherence & Cohesion, Lexical Resource, Grammar\n" +
          "• Sentence-level corrections showing weak → better, with the reason\n" +
          "• Repeated words with alternatives, weak phrases with upgrades, suggested rewrites\n" +
          "• The top 5 highest-impact changes, ranked\n\n" +
          "Write at least " + (Store.get().profile.module === "general" ? "150 words for Task 1 (letter) and 250 for Task 2" : "150 words for Task 1 (report) and 250 for Task 2") + " — under-length answers are capped regardless of quality.";
      }
    },
    {
      id: "part2",
      match: /(part 2|cue card|speaking question|talk for)/i,
      answer: function () {
        var sets = window.BANK_SPEAKING.sets;
        var s = sets[Math.floor(Math.random() * sets.length)];
        return "**Cue card:** " + s.part2.cueCard + "\n\nYou should say:\n" + s.part2.bullets.map(function (b) { return "• " + b; }).join("\n") +
          "\n\nStructure that scores: (1) one sentence setting the scene, (2) two or three concrete details, (3) one contrast or surprise ('what I didn't expect was…'), (4) a final sentence answering 'why it matters'. Aim for 210–260 words in two minutes.\n\nWhen you ready, run the full simulation in Speaking → Full mock interview.";
      }
    },
    {
      id: "weak",
      match: /(weak|worst|struggl|mistake|error pattern|my problem)/i,
      answer: function () {
        var w = Analytics.weakTypes(2), g = Analytics.grammarErrors(), s = "";
        if (w.length) {
          s += "**Your weakest question types**\n" + w.slice(0, 5).map(function (t) { return "• " + t.label + " — " + pct(t.accuracy) + "% accuracy over " + t.total + " questions"; }).join("\n") + "\n\n";
          s += "Pattern diagnosis: " + this.diagnose(w) + "\n\nOpen **Practice → Weakness practice** and I will build a set from exactly these types.";
        } else s += "You have no weak types logged yet (or fewer than two attempts per type). Run a 20-question mixed set and I will find the pattern.";
        if (g.length) s += "\n\n**Grammar patterns needing work**\n" + g.slice(0, 4).map(function (x) { return "• " + x.category + " — " + x.count + " logged error(s)"; }).join("\n");
        return s;
      },
      diagnose: function (w) {
        var names = w.map(function (t) { return t.type; });
        var out = [];
        if (names.indexOf("TFNG") > -1) out.push("In True/False/Not Given you are treating silence as contradiction — that is the classic False/Not Given confusion.");
        if (names.indexOf("HEADINGS") > -1) out.push("For headings, you are matching repeated words instead of the paragraph's controlling idea.");
        if (names.indexOf("SUMMARY") > -1) out.push("In summary completion you are paraphrasing your own answer instead of copying the passage's exact word.");
        if (names.indexOf("MATCHINFO") > -1) out.push("Matching information requires two ideas in the question to appear together — you may be matching one keyword.");
        if (names.indexOf("MCQ") > -1) out.push("In multiple choice you are choosing a statement that is true in the passage rather than the one that answers the question.");
        return out.length ? out.join(" ") : "Keep drilling — the sample is still small.";
      }
    },
    {
      id: "score",
      match: /(how is .{0,14}(scored|marked|calculated)|score out of|raw score|band conversion|conversion table|scoring work)/i,
      answer: function () {
        var b = Analytics.bands();
        return "**How scoring works here**\n\n" +
          "Reading and Listening: raw marks out of 40 converted through the standard IELTS-style tables (Academic and General Training tables differ for Reading). Your current estimates: Reading " +
          (b.reading == null ? "—" : b.reading.toFixed(1)) + ", Listening " + (b.listening == null ? "—" : b.listening.toFixed(1)) + ".\n\n" +
          "Writing and Speaking: four criteria scored 0–9 in half-band steps, averaged and rounded to the nearest 0.5. These are **estimated bands produced by an automated rubric engine** — they are not official scores and an examiner may differ. Treat them as a direction of travel, not a verdict.\n\n" +
          "Overall: the mean of the four skill bands, rounded to the nearest 0.5.";
      }
    },
    {
      id: "plan",
      match: /(study plan|schedule|how should i (study|prepare)|exam date)/i,
      answer: function () {
        var p = Store.get().profile;
        var days = clamp(daysBetween(Date.now(), new Date(p.examDate + "T00:00:00")), 0, 400);
        return "Your plan is built from your own data, not from a template.\n\n" +
          "• Target: Band " + p.targetBand.toFixed(1) + " · Exam in " + days + " days · " + p.dailyMinutes + " minutes/day\n" +
          "• Priority rotation: " + Analytics.priorities().slice(0, 3).map(function (x) { return x.skill; }).join(" → ") + "\n" +
          "• Weak-type drills: " + (Analytics.weakTypes(2).slice(0, 3).map(function (t) { return t.label; }).join(", ") || "none logged yet") + "\n\n" +
          "Open **Study Plan → Generate**. The plan re-weights every time you complete a test, so the weakest skill receives the most sessions.";
      }
    },
    {
      id: "grammar",
      match: /(grammar|article|preposition|tense|agreement|conditional|passive|clause)/i,
      answer: function () {
        var g = Analytics.grammarErrors();
        if (!g.length) return "I have not logged any grammar errors from your writing yet. Write one Task 2 essay or complete a Grammar exercise set and your recurring patterns will appear here, with targeted exercises generated from them.";
        var top = g[0];
        return "**Your most frequent grammar pattern: " + top.category + "** (" + top.count + " logged errors)\n\n" +
          "Why it costs marks: Grammatical Range and Accuracy is scored on the proportion of error-free sentences as well as variety. Two repeated patterns cost more than ten one-off slips.\n\n" +
          "Fix protocol:\n1. Read the rule card on the Grammar page for " + top.category + ".\n2. Complete the generated 6-item set.\n3. Rewrite one paragraph from your last essay applying only that rule, then re-evaluate.\n\n" +
          (top.examples[0] ? "Example from your writing: '" + top.examples[0].match + "' → " + (top.examples[0].suggestion || top.examples[0].message) : "");
      }
    },
    {
      id: "listening",
      match: /(listening|transcript|section 3|section 4|accent)/i,
      answer: function () {
        var a = Analytics.typeAccuracy("listening");
        return "**Listening strategy**\n\n" +
          "1. Read the gaps before audio starts and label what each one needs: name, number, date, place, or noun. You are listening for a category, not a sentence.\n" +
          "2. Expect a correction: 'I said February — sorry, it's March.' The second version always wins.\n" +
          "3. Spelling matters. Copy the word exactly as the transcript shows it in review; 'fortnight', 'maintenance', 'breeze' all lose marks when misspelled.\n" +
          "4. In matching questions, the person who comments on an idea is usually not the person who proposed it.\n\n" +
          (a.length ? "Your Listening accuracy by type: " + a.map(function (t) { return t.label + " " + pct(t.accuracy) + "%"; }).join(" · ") : "Complete a Listening test and I will break accuracy down by question type.");
      }
    },
    {
      id: "reading",
      match: /(reading|skim|scan|time management|heading)/i,
      answer: function () {
        return "**Reading strategy by question order**\n\n" +
          "• Passage 1 (13 questions, ~17 min): bank the marks. Answers follow passage order.\n" +
          "• Passage 2: matching tasks do NOT follow order. Locate first, answer second.\n" +
          "• Passage 3: expect opinion language. Before choosing an MCQ option, mark each one as true-in-passage or answers-the-question.\n\n" +
          "Time budget: 17 / 20 / 23 minutes. If you spend over 90 seconds on one question, flag it, guess with a reason, and return at the end.\n\n" +
          (Analytics.weakTypes(2)[0] ? "Your weakest type right now is " + Analytics.weakTypes(2)[0].label + "." : "");
      }
    }
  ],
  ask: function (q) {
    var text = String(q || "").trim();
    if (!text) return { answer: "Ask me anything about your preparation, your scores, or a question you got wrong.", actions: [] };
    for (var i = 0; i < this.intents.length; i++) {
      if (this.intents[i].match.test(text)) return { answer: this.intents[i].answer.call(this.intents[i]), id: this.intents[i].id, actions: [] };
    }
    /* generic, data-aware fallback */
    var b = Analytics.bands(), p = Store.get().profile;
    var s = "Here is where you stand, based on your own attempt data:\n\n" +
      SKILLS.map(function (k) { return "• " + k.charAt(0).toUpperCase() + k.slice(1) + ": " + (b[k] == null ? "not yet estimated" : b[k].toFixed(1)); }).join("\n") +
      (b.overall ? "\n• Overall estimate: " + b.overall.toFixed(1) : "") +
      "\n• Target: " + p.targetBand.toFixed(1) + " · Exam: " + p.examDate + "\n\n" +
      "I can help with specific questions, for example:\n" +
      "• \"Why is this answer False instead of Not Given?\"\n" +
      "• \"How can I improve from Band 6.5 to 7.5?\"\n" +
      "• \"Practice my weak areas\"\n" +
      "• \"Explain this grammar mistake\"\n• \"Give me a Part 2 speaking question\"";
    return { answer: s, actions: [] };
  }
};
