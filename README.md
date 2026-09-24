# IELTS Mastery — practice, scoring and analytics platform

A single-file, offline IELTS preparation platform covering all four skills. Everything —
all passages, transcripts, questions, model answers and samples — is **original content
written for this project**. No copyrighted IELTS material is reproduced.

The layout is fully responsive: on phones the app gets a fixed bottom tab bar, a slide-in
menu with a dimmed backdrop, a passage/questions pane switcher in the test runner,
touch-sized buttons and inputs, and side-scrolling tables — every screen fits a 390 px
viewport without horizontal scrolling.

**Deliverable:** `ielts-platform.html` (~650 KB). Open it in any modern browser, online or
offline. It needs no server, no build step and no network access; the whole app, the question
bank and the styles are inlined.

---

## What is in the box

| Area | Contents |
|---|---|
| **Reading — Academic** | 3 passages (13 + 13 + 14 = 40 questions) across parts 1–3, bands 6.0–8.0 |
| **Reading — General Training** | 3 passages (13 + 13 + 14 = 40 questions), bands 5.0–7.5 |
| **Listening** | 2 complete tests, 4 sections each (80 questions), full transcripts, timings and voices |
| **Writing** | 16 tasks: 7 Academic Task 1 visual types (line, bar, pie, table, process, map, multiple), GT Task 1 formal / semi-formal / informal, and 7 Task 2 essay types — band 6/7/8/9 samples on six of them |
| **Speaking** | 12 topic sets: Part 1 questions, Part 2 cue cards with bullets and follow-up, Part 3 discussions, useful language, examiner warnings |
| **Vocabulary** | 60 academic entries with collocations, IELTS example sentences and a spaced-repetition queue (4 grades, 1/3/7/14-day intervals) |
| **Grammar** | 13 error categories, 48 items, plus an exercise generator driven by the errors found in *your* writing |
| **Question types** | 13 reading/listening type labels in data (TFNG, headings, matching, summary, flow-chart, form, note, MCQ, short answer, …) |
| **Practice sets** | 20 numbered sets per skill (80 in total). Reading and Listening sets are IELTS-format (whole passage / section groups, timed), Writing sets are single tasks plus full Task 1 + 2 papers, Speaking sets are full interviews plus cue-card and Part 3 drills. Each set is reproducible, individually selectable and scored, and keeps a best / latest result so you can retake it and compare |
| **Analytics** | Band estimates per skill, accuracy by type and by difficulty, weak/strong types, priority ranking, timing, progress graph, per-question history |
| **Study plan** | Generated from your data and exam date: one page per day with tasks, rotating the top three priorities |
| **AI-style feedback** | Writing and Speaking rubrics with concrete corrections, weak→better rewrites and an explanation of *why* the better version is stronger |

## Scoring honesty

Objective Reading and Listening scores use a standard published-style raw→band conversion
table (see `ARCHITECTURE.md` §5). Writing and Speaking are scored by a **rubric engine**, not by
a human examiner: every automated score is labelled **“Estimated IELTS Band”**, the report says
plainly that it may differ from an official examiner, and estimates above Band 8 are shown as
“Band 8+” because the engine cannot reliably separate 8 from 9.

## Verified before shipping

`bash tests/run_all.sh` runs three suites (all green):

* **Logic (108 assertions)** — question-bank validator (no duplicate ids, every answer key
  exists in its source, no answer breaks its own word limit, every question carries the
  required seven-field explanation), answer-key self-consistency (every declared answer *and*
  every accepted alternative is marked correct; wrong letters and words are rejected),
  band tables, writing-band regression across the six sample sets, Speaking evaluator,
  test assembly (40 + 40 mock, GT and Academic routing, no-repeat behaviour), the practice-set
  catalogue (20 reproducible sets per skill, deterministic builds, set-tagged scoring), analytics,
  plan generation and the tutor, plus task-type coverage checks.
* **Render (70 assertions)** — every screen renders with data present, a full mock is taken and
  submitted, a practice set is launched, scored and followed to the next set, the result page and
  transcript review are produced, writing and speaking reports are generated, and **no button in
  the UI is dead** (all 49 `data-act` verbs have handlers).
* **Built-file preview (24 assertions)** — the real `ielts-platform.html` is executed in a
  hostile browser stub (390 px viewport, `localStorage` throwing, no speech APIs) to confirm it
  boots, renders every screen, warns the student that progress cannot be saved, and contains
  **no external URLs** of any kind.

## Workspace

```
ielts-platform.html          ← the deliverable (open this)
ARCHITECTURE.md              ← the 10-part design document (schemas, routes, scoring, roadmap)
build.py                     ← assembles the single file from src/
src/styles.css               ← design tokens + component styles
src/js/01-core.js            ← store, band tables, answer checking, bank, validator, analytics, plan
src/js/02-eval.js            ← grammar detector, writing rubric, speaking rubric, SRS, tutor
src/js/03-views-a.js         ← shell, dashboard, practice, mock, runner, result, audio engine
src/js/04-views-b.js         ← reading, listening, writing, speaking, vocabulary, grammar, progress, plan, tutorsrc/js/05-app.js            ← controller: actions, timers, launch/submit, keyboard, boot
src/js/06-sets.js            ← practice-set catalogue: 20 reproducible sets per skill + scoring
src/data/*.js                ← the question bank (passages, transcripts, tasks, cue cards, lexicon)
tests/run_tests.js           ← logic suite
tests/render_test.js         ← render suite
tests/preview_test.js        ← built-file suite
tests/run_all.sh             ← build + all three suites
```

## Rebuilding

```bash
python3 build.py        # writes ielts-platform.html
bash tests/run_all.sh   # build + verify
```

## Known limits (stated rather than hidden)

* One Academic reading paper and one GT reading paper exist, so a *second* full reading mock
  reuses passages; the listening bank already supports two repeat-free mocks because it holds
  two complete tests. Adding a second reading paper is a content task, not a code change.
* The 20 practice sets per skill are drawn from that same bank, so different set numbers vary the
  anchor passage/section and the questions taken from it, but two sets over the same passage are
  not wholly new material. The sets are built so a retake of the *same* set is reproducible, which
  is what makes the recorded score comparable.
* Nothing above Band 7.5 exists for Reading/Listening yet, and the app says so on screen when
  you ask for the Band 9 range.
* Writing/Speaking scores are estimates produced from measurable features (length, cohesion,
  lexical range, clause complexity, error counts, fluency metrics). They are useful for
  ranking your own attempts and for pointing at specific weaknesses — not for predicting an
  official result.
* Audio is generated by the browser's speech engine, so voices vary by device; a transcript
  fallback is always available when no voice is installed.
