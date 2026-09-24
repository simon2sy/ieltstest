# IELTS Mastery — Platform Architecture

> **Deliverable 1 of 2.** This document is the full technical specification. The implemented
> platform is the single-file application `ielts-platform.html` (built from `src/` by `build.py`).
> Question bank content lives in `src/data/*.js` and is validated by `validate_bank.py` on every build.

---

## 1. Feature Architecture

```
IELTS MASTERY
├── 0. Identity & Context Layer
│   ├── Profile: current band, target band, exam date, daily minutes, test module (A / GT)
│   └── Difficulty governor: Beginner → Intermediate → Advanced → Band 7+ → Band 8+ → Band 9
├── 1. Assessment Core (the "engine" — everything else is a view on top of it)
│   ├── Test Runner .......... timer (count-up / count-down), question grid, flag, prev/next, review, submit
│   ├── Answer Normaliser ... casing, punctuation, articles, number words↔digits, word limits, spelling tolerance
│   ├── Scorer ............... raw → band conversion (A-Reading, GT-Reading, Listening), criterion maths for W/S
│   ├── Explanation Engine ... per-question: what was tested, evidence location, why correct, why your answer
│   │                          was wrong, the trap, how to spot the pattern next time, related vocabulary
│   ├── Analytics Recorder ... writes one immutable attempt record per question after every submit
│   └── Bank Validator ...... structural integrity checks run on every build (see §10)
├── 2. Skill Modules
│   ├── Reading ......... 14 question types, Academic + General Training, 3-passage/40-question full tests
│   ├── Listening ....... 4 sections, 40 questions, TTS-rendered scripts, accent tags, transcript review
│   ├── Writing ......... A-Task 1 (7 visual types), GT-Task 1 (formal/semi/informal), Task 2 (7 essay types)
│   │                     + 4-criterion evaluator with sentence-level rewrites
│   └── Speaking ........ Part 1 / Part 2 (timed cue card) / Part 3, speech capture, 4-criterion evaluator
├── 3. Practice Modes
│   ├── Numbered Practice Sets (20 per skill; reproducible, individually scored, best/latest kept)
│   ├── Quick Practice (5–10 items)     ├── Skill Practice (one skill deep)
│   ├── Question-Type Practice (e.g. 20 × T/F/NG) ├── Weakness Practice (auto-generated from error log)
│   ├── Full Mock Test (complete L+R+W+S simulation) ├── Timed / Untimed Learning mode
│   └── Band Target Mode (band target reshapes pool difficulty, timing and recommendations)
├── 4. Learning Layer
│   ├── Vocabulary Builder ... 60 seed words, full lexical entries, spaced repetition (SM-2 lite)
│   ├── Grammar Builder ...... 13 error categories, mistake-driven exercise generation
│   └── AI Tutor ............. data-aware Q&A over the student's own attempt history
├── 5. Insight Layer
│   ├── Dashboard (band cards, target gap, priority ranking)
│   ├── Progress Analytics (band trend, accuracy by type/difficulty/skill/topic, timing)
│   └── Study Plan Generator (calendar to exam date, auto-rebalanced after every attempt)
└── 6. Platform Services
    ├── Persistence (localStorage with in-memory fallback, JSON export/import)
    ├── Accessibility (keyboard grid, focus states, reduced-motion, ≥16px test body text)
    └── Responsive shell (desktop / laptop / tablet / mobile layouts)
```

**Design principle:** no feature computes its own score. Every module reads and writes through the
Assessment Core, so a Reading attempt, a Listening attempt and a Speaking attempt all land in the
same attempt log, which is what makes weakness detection and study-plan rebalancing possible.

---

## 2. Database / Data Model

The app ships with a portable embedded store (localStorage) and the schema below is written so the
same shapes drop straight into Postgres/Mongo if you move it server-side.

```js
// ---------- QUESTION BANK (static, versioned, read-only at runtime) ----------
Passage {
  id, module: "academic"|"general", title, subtitle, wordCount, difficulty,
  band, topic, text: string, paragraphs: [ {label:"A", text} ]
}
Question {
  id, passageId|sectionId, number, type, prompt, options?, wordLimit?,
  answer, acceptedAnswers: string[],     // normalised comparison set (incl. spelling variants)
  explanation: { whatTested, evidenceRef (e.g. "Paragraph C"), evidenceQuote,
                 whyCorrect, whyYourAnswerWrong, trap, howToSpot },
  difficulty: "beginner"|"intermediate"|"advanced"|"band7"|"band8"|"band9",
  skillTested, topic, vocab: [ {word, gloss} ], estimatedSeconds
}
ListeningSection { id, number, context, speakers, accentTags[], transcript[] , questions[] }
WritingTask { id, module, task: 1|2, visualType?, essayType?, prompt, timeMinutes, minWords,
              difficulty, topic, samples: { band6, band7, band8, band9 }, modelPlan, examinerNotes }
SpeakingSet { part1Topics[], part2 { cueCard, bullets, part3[] } }

// ---------- STUDENT DATA (mutable, one document per student) ----------
Profile { name, module, currentBand, targetBand, examDate, dailyMinutes, createdAt }
Attempt {                              // one row per completed test/activity (immutable)
  id, ts, mode, skill, testId, module, raw, outOf, band, accuracy, timeSpentSec,
  durationPlannedSec, timed: bool, bandTarget, criterionBands?: {TA,CC,LR,GRA},
  breakdown: [ { type, correct, total } ], textMeta? { words, paragraphs, ... }
}
Response { attemptId, questionId, skill, type, topic, difficulty, bandLevel,
           userAnswer, correct: bool, timeMs, attemptNumber }   // the analytics atom
ErrorTag { attemptId, category, subcategory, evidence, correction, ts } // grammar/vocab error log
VocabCard { word, ease, intervalDays, dueAt, reps, lapses, savedAt }
PlanItem { dayIndex, date, focus[], tasks[], estimateMin, status }
Recommendation { ts, priority, skill, type, reason, action }
```

**Indices used by analytics:** `(skill)`, `(type, correct)`, `(difficulty, correct)`, `(ts)`,
`(category)`. Every dashboard number is a pure function of the attempt log — recomputable, testable,
and exportable as JSON.

---

## 3. Page Structure

```
/                        Dashboard — band cards, target gap, priority queue, recent activity
/practice                Practice hub — 8 modes, band-target selector, duration selector
/sets                    Practice Sets — 20 numbered, scored sets per skill (reading/listening/writing/speaking)
/practice/run            Universal runner (reading, listening, quick, type, weakness, set modes)
/mock                    Mock test hub — full simulation, module select, section-by-section or continuous
/reading                 Reading home — Academic/GT, 14 question types, passage library, technique notes
/listening               Listening home — 4 sections, accent guide, note-taking technique, transcript mode
/writing                 Writing home — A Task 1 / GT Task 1 / Task 2, task library, scoring criteria guide
/writing/run             Task prompt → editor (word count, timer) → evaluation report → band samples
/speaking                Speaking home — Part 1/2/3, mock interview, criteria guide, pronunciation tips
/speaking/run            Part 1 warm-up → Part 2 timed cue card → Part 3 discussion → evaluation report
/vocabulary              Word list, filters, saved words, spaced-repetition session, word detail drawer
/grammar                 Error categories, mistake dashboard, exercise generator, rule explanations
/progress                Band trend, accuracy matrices, timing, weakest/strongest types, error log
/study-plan              Goal form → generated calendar → completion tracking → auto-rebalance
/tutor                   AI tutor chat, data-aware answers, quick-action chips
/about                   Scoring methodology, disclaimers, bank validator report
```

---

## 4. User Flow

```
Onboarding ──► set module + current band + target band + exam date + daily minutes
   │
   ├──► Diagnostic (quick 12-item mixed test) ──► baseline 4 skill bands
   │
   ▼
Dashboard ──► Priority list (e.g. Writing → Speaking → Reading) ──► pick an action
   │
   ├─ Practice ──► Runner ──► Submit ──► Result ──► Explanation / Improvement mode
   │                                                   │
   ├─ Mock ─────────► per-skill results ───────────────┤
   │                                                   ▼
   ├─ Vocabulary (SRS queue, 15 words / session)   Analytics Recorder
   ├─ Grammar (errors drive exercise sets)              │
   │                                                    ▼
   └─ Study Plan ◄──── rebalanced plan ◄──── Recommendations Engine
                               │
                               ▼
                          AI Tutor (answers using the same data)
```

Typical weekly loop: **Mock → Result → Weakness Practice ×3 → Mock → compare bands.**

---

## 5. Scoring Logic

### 5.1 Reading / Listening (objective)
```
raw → band via the published-style conversion tables:
Academic Reading  39–40=9.0 | 37–38=8.5 | 35–36=8.0 | 33–34=7.5 | 30–32=7.0 | 27–29=6.5
                  23–26=6.0 | 19–22=5.5 | 15–18=5.0 | 13–14=4.5 | 10–12=4.0 | 6–9=3.5 | 4–5=3.0
GT Reading        40=9.0 | 39=8.5 | 37–38=8.0 | 35–36=7.5 | 32–34=7.0 | 29–31=6.5 | 26–28=6.0 | ...
Listening         (same table as Academic Reading)
```
Answer normalisation before comparison: trim → lowercase → collapse spaces → strip trailing
punctuation → expand `&`/`and` → number-word ↔ numeral (`seven` ⇄ `7`) → drop leading articles in
completion items → accept every listed `acceptedAnswers` variant → word-limit overrun = wrong (with a
flagged reason rather than a silent zero).

### 5.2 Writing (criterion bands, 0–9 in 0.5 steps)
Weighted rubric per criterion with explicit, auditable sub-signals:

| Criterion | Sub-signals measured by the evaluator |
|---|---|
| Task Achievement / Response | word count vs. minimum, overview presence (T1), position clarity (T2), prompt-keyword coverage, data-feature coverage, paragraph count vs. task type, development/depth proxy |
| Coherence & Cohesion | paragraph architecture (intro/body/conclusion), topic-sentence presence, cohesive-device density and variety, referencing (\_this, these, such\_) , repetition of sentence openers, logical progression |
| Lexical Resource | type–token ratio, academic word-list hits, topic-specific collocations, repetition of top content words, "weak phrase" hits, spelling/word-form errors |
| Grammatical Range & Accuracy | clause density, subordinator variety, tense/aspect range, passive use, error density per 100 words by category (articles, prepositions, SVA, tense, countability, word form, fragments, run-ons) |

Overall Writing band = mean of the four criteria, rounded to the nearest 0.5 (IELTS convention).
Every score is presented as **“Estimated IELTS Band”** with the explicit caveat that AI/heuristic
scoring can differ from a trained examiner’s.

### 5.3 Speaking (criterion bands)
Fluency & Coherence ← speech rate, filled-pause ratio, self-correction ratio, mean length of run,
cohesion markers. Lexical Resource ← TTR, topic vocabulary, paraphrase/repair strategies,
over-used fillers. GRA ← clause density, subordinator variety, tense range, agreement/tense errors.
Pronunciation ← word stress/clarity heuristics from the captured transcript + explicit note that true
pronunciation assessment needs acoustic analysis (the report flags this honestly).
Band = mean of four criteria rounded to nearest 0.5.

### 5.4 Overall
```
Overall Band = round0.5( mean(Reading, Listening, Writing, Speaking) )
```
Mock tests show the four skill bands plus the overall figure.

---

## 6. Question-Bank Structure

```
src/data/
  reading-academic.js   passages → questions (all 14 types)
  reading-gt.js         General Training short-text sets
  listening.js          section objects with timed transcript cues + questions
  writing.js            tasks + 4-band sample answers + examiner notes
  speaking.js           Part 1 topic banks, cue cards, Part 3 discussion sets
  vocab.js              lexical entries (SRS-ready)
  grammar.js            rule cards + exercise items across 13 categories
```
Bank record requirements (enforced by `validate_bank.py`, run in CI/build):
1. exactly one intended answer unless the item declares multiple accepted forms;
2. the answer (or a paraphrase of it) demonstrably exists in the passage/transcript;
3. no contradictory evidence in the text;
4. unambiguous wording for completion items (word limit stated);
5. difficulty and band tag present and consistent with the item's linguistic load;
6. explanation object complete (7 fields);
7. no duplicate question IDs.

Test assembly: pools are filtered by (skill, type, difficulty, topic, module) then sampled with a
"recently seen" blacklist so a student does not get the same paper twice unless they press **Retry**.
Full mocks are assembled from tagged pools at exam proportions (13/13/14 for Reading, 10/10/10/10 for
Listening).

**Numbered practice sets** (`PracticeSets`, `src/js/06-sets.js`) are the fixed counterpart to random
assembly. Twenty sets exist per skill and every set is deterministic: set #7 always contains exactly
the same questions, so a retake yields a comparable score. Reading and Listening sets anchor on a
whole passage/section (an IELTS part) and top up from the following context, keeping question order
and the seven-field explanations; Writing sets are single tasks plus three full Task 1 + Task 2
papers; Speaking sets are three-part interviews plus cue-card and Part 3 drills. Submitting any set
writes the normal attempt record with a `setKey`, so `PracticeSets.stats(key)` can report best,
latest and attempt count, and the catalogue card shows the score with a retake button.

---

## 7. AI Evaluation Architecture

```
Student text / transcript
        ▼
① Pre-processor  → normalise, sentence-split, tokenise, tag word class, detect paragraphs
        ▼
② Signal Extractors (deterministic, unit-testable, offline)
   • length & structure      • cohesion markers    • lexical statistics
   • grammar error detectors (13 categories)   • task-response detectors
        ▼
③ Rubric Mapper  → sub-signal scores → band per criterion (band-profile reasoning, not a black box)
        ▼
④ Feedback Composer
   • criterion justification in examiner language
   • sentence-level corrections: weak → better → WHY it is stronger
   • repeated words, weak phrases, better alternatives, suggested rewrites
   • top 3 highest-leverage actions, ranked by band impact
        ▼
⑤ Persistence → criterion bands + error tags written to the attempt log & grammar log
        ▼
⑥ Tutor layer → answers follow-up questions using the stored evidence
```
**Honesty invariant:** every Writing/Speaking result carries the sentence
*“This is an AI-generated estimate, not an official IELTS score.”* No module is allowed to label a
heuristic result as an official band.

---

## 8. UI Component Structure

```
AppShell
 ├─ Sidebar (grouped nav, live preview of band target, collapsible ≤1024px)
 ├─ TopBar  (view title, band target chip, countdown to exam, pause/resume timer)
 └─ View host (one of the routes in §3)
     ├─ Card / StatCard / BandChip / Table / Bar / Sparkline / Donut / TrendLine (inline SVG charts)
     ├─ TestRunner
     │    ├─ SplitPane (passage | questions) — stacks vertically on mobile, passage toggle on small screens
     │    ├─ QuestionCard (number, type chip, prompt, options, input, flag, review state)
     │    ├─ QuestionGrid (answered / flagged / unseen states)
     │    └─ TimerBar (countdown, low-time warning, pause in untimed mode)
     ├─ ResultPanel (band summary, accuracy, per-type bars, weak areas, recommended practice)
     ├─ ExplanationPanel (7-field explanation, evidence quote highlight, "explain again" tutor hook)
     ├─ WritingEditor (prompt, live word count, timer, autosave, evaluate)
     ├─ SpeakingRecorder (mic capture via Web Speech API, cue-card timer, transcript editor fallback)
     ├─ Flashcard (SRS grading: again / hard / good / easy)
     └─ TutorChat (quick-action chips, data-aware replies)
```
All components are plain functions returning HTML strings, styled by a single design-token stylesheet
(colour, spacing, radius, type scale). No external UI framework — the whole app is offline-safe.

**Mobile behaviour.** Below 1024 px the sidebar becomes a slide-in drawer with a dimmed backdrop
(tap outside or navigate to close). Below 640 px the app adds a fixed bottom tab bar
(Home · Sets · Reading · Listening · Writing · Speaking), hides the topbar status chips, grows
touch targets, uses 16px inputs to stop iOS zoom-on-focus, scrolls wide tables sideways, and the
test runner shows a sticky Passage/Audio ⇄ Questions pane switcher instead of a long two-column
scroll. The tab bar is hidden inside writing/speaking test screens so the editor keeps the space,
and on very short landscape screens. Every route fits a 390 px viewport with zero horizontal
overflow (checked per route in the preview suite).

---

## 9. API Architecture

The app is deliberately local-first (single HTML file, no build step at runtime). If serverised, the
client already calls these logical endpoints through the `API` shim:

| Method & path | Purpose | Request → Response |
|---|---|---|
| `GET /api/bank/:skill` | filtered pools | `?type=&difficulty=&module=&topic=&limit=` → `{items[]}` |
| `POST /api/tests/assemble` | build a test | `{skill, mode, bandTarget, excludeRecent[]}` → `{testId, items[]}` |
| `POST /api/attempts` | submit answers | `{testId, responses[]}` → `{attemptId, raw, band, breakdown[]}` |
| `GET /api/attempts?skill=` | history | → `{attempts[]}` |
| `GET /api/analytics/summary` | dashboard numbers | → `{bands, accuracy, weakTypes[], strongTypes[], trend[]}` |
| `POST /api/evaluate/writing` | rubric scoring | `{taskId, text}` → `{criteria{band,justification}, corrections[], rewrites[]}` |
| `POST /api/evaluate/speaking` | rubric scoring | `{setId, transcript, timing}` → `{criteria, fluency, fixes[]}` |
| `POST /api/tutor/ask` | tutor chat | `{question, context}` → `{answer, sources[], actions[]}` |
| `GET/PUT /api/profile`, `/api/plan`, `/api/vocab` | student state | JSON documents (§2) |

Because the client already speaks this shape, swapping the embedded store for HTTP is a one-file change.

---

## 10. Development Roadmap

| Phase | Scope | Status in this build |
|---|---|---|
| **0. Foundation** | design tokens, shell, routing, store with fallback persistence, scoring tables, answer normaliser, bank validator | ✅ done |
| **1. Core test engine** | universal runner (timer, grid, flag, review), objective scorer, result panel, explanation engine, attempt logging | ✅ done |
| **2. Reading** | 14 question types across Academic + GT, full 40-question assembly, improvement mode | ✅ done — 3 Academic passages (40 q) + 3 GT passages (40 q), 13 type labels in data |
| **3. Listening** | 4 sections, 40 items, TTS playback with accent tags, transcript review with trap/paraphrase highlighting | ✅ done — 2 complete tests (8 sections, 80 items), repeat-free across consecutive mocks |
| **4. Writing** | task library, editor, 4-criterion evaluator, 4-band samples, sentence-level rewrites | ✅ done — 16 tasks: 7 Task 1 visual types, GT formal/semi-formal/informal, 7 Task 2 types; 6 with full 4-band samples |
| **5. Speaking** | timed P1/P2/P3 simulation, capture + fallback, 4-criterion evaluator, fluency analytics | ✅ done — 12 topic sets, cue cards, rehearsed-delivery detector |
| **6. Analytics & plan** | dashboard, progress matrices, weakness→exercise generation, study calendar, tutor | ✅ done |
| **7. Content scale-up** | grow pools to 40+ passages, 12 listening tests, 60 writing tasks, 3000 vocab words; wire a hosted LLM behind `/api/evaluate/*` and `/api/tutor/ask` | ⏳ next |
| **8. Accounts & cloud** | auth, Postgres attempt log, cross-device sync, teacher cohort dashboard | ⏳ next |
| **9. Commercial polish** | payments, certificates, audio library with real recorded voices, mobile app shell | ⏳ later |

**Status of this build (last full verification run).** Bank: 160 objective items (80 reading,
80 listening), 16 writing tasks, 12 speaking sets, 60 vocabulary entries, 48 grammar items.
`bash tests/run_all.sh` → **108 logic + 70 render + 24 built-file assertions, 0 failures**:

* bank validator — 0 errors; every answer key is present in its source text, no key breaks its own
  word limit, every question carries all seven explanation fields;
* answer-key self-consistency — every declared answer and every accepted alternative marks correct,
  wrong letters and wrong words are rejected, numerals and number words are interchangeable;
* writing evaluator regression across all six sample sets — the Band 6 sample is lowest in every
  set, the Band 9 sample clears 7.0, and the top three samples stay within 1.5 bands of each other
  (the engine is documented as reliable to roughly ±0.5 up to Band 7.5 and reports “Band 8+” above
  that instead of a false precise figure);
* practice sets — 20 reproducible sets per skill, deterministic builds (the same set number always
  yields the same questions), set-tagged scoring and best/latest statistics;
* render suite — every screen with data present, a full mock taken and submitted, a practice set
  launched and scored then the next set followed, result page, transcript review, writing and
  speaking reports, and no dead buttons (all 49 `data-act` verbs have handlers);
* built-file suite — the shipped `ielts-platform.html` boots and renders every route inside a
  390 px, no-storage, no-speech browser stub, warns the student when progress cannot be saved, and
  contains zero external URLs.

---

### Scoring honesty statement (must appear in the product)
> Reading and Listening results are objective and reproducible. Writing and Speaking results are
> **AI-generated estimates** produced by the rubric engine in §7; they are intended for practice
> guidance only and may differ from an official IELTS examiner’s score.
