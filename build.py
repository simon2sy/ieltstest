#!/usr/bin/env python3
"""
build.py — assembles the single-file IELTS Mastery platform.

Order matters: data banks first, then core, evaluation, views, controller.
Output: ielts-platform.html (fully offline, no external requests).
"""
import glob
import os
import re

ROOT = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(ROOT, "src")
OUT = os.path.join(ROOT, "ielts-platform.html")

DATA_ORDER = [
    "reading-academic-1.js", "reading-academic-2.js", "reading-academic-3.js",
    "reading-gt.js", "reading-gt-2.js", "listening-1.js", "listening-2.js",
    "writing-t1.js", "writing-2.js", "speaking.js", "vocab.js", "grammar.js",
]
JS_ORDER = ["01-core.js", "06-sets.js", "02-eval.js", "03-views-a.js", "04-views-b.js", "05-app.js"]


def read(path):
    with open(path, encoding="utf-8") as fh:
        return fh.read()


def main():
    css = read(os.path.join(SRC, "styles.css"))

    data_parts = []
    for name in DATA_ORDER:
        p = os.path.join(SRC, "data", name)
        if not os.path.exists(p):
            raise SystemExit("missing data file: " + name)
        data_parts.append("/* ---- %s ---- */\n%s" % (name, read(p)))

    js_parts = []
    for name in JS_ORDER:
        p = os.path.join(SRC, "js", name)
        if not os.path.exists(p):
            raise SystemExit("missing js file: " + name)
        js_parts.append("/* ================ %s ================ */\n%s" % (name, read(p)))

    html = """<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>IELTS Mastery — Practice, Scoring &amp; Analytics Platform</title>
<meta name="description" content="A complete IELTS preparation platform: Reading, Listening, Writing and Speaking practice with scoring, explanations, weakness detection and a personalized study plan. Writing and Speaking scores are AI estimates.">
<style>
%(css)s
</style>
</head>
<body>
<noscript><div style="padding:24px;font-family:sans-serif">IELTS Mastery requires JavaScript: the test engine, scoring and analytics all run in your browser, and your data never leaves the device.</div></noscript>
<script>
%(data)s
</script>
<script>
%(js)s
</script>
</body>
</html>
""" % {"css": css, "data": "\n".join(data_parts), "js": "\n".join(js_parts)}

    with open(OUT, "w", encoding="utf-8") as fh:
        fh.write(html)

    kb = len(html.encode("utf-8")) / 1024.0
    print("built %s  (%.0f KB)" % (OUT, kb))
    counts = {
        "passages/reading sets": len(re.findall(r"questions: \[", html)),
        "reading+listening items": len(re.findall(r"\n\s+n: \d+, type: \"", html)),
        "writing tasks": html.count("examinerNotes") // 2,   # the key is written once per task
        "speaking sets": html.count("part2: {"),
        "listening tests": html.count('id: "L-TEST-'),
    }
    for k, v in counts.items():
        print("  %-26s %s" % (k, v))


if __name__ == "__main__":
    main()
