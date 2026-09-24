#!/usr/bin/env bash
# Run every test suite for the IELTS Mastery platform.
#   1. logic tests    — question bank, answer keys, band tables, evaluators, assembly
#   2. render tests   — every screen, a full mock run, submission, reports
#   3. preview tests  — the built single-file app inside a hostile browser stub
set -e
cd "$(dirname "$0")/.."
# pick a working Python: on Windows the `python3` shim may exist but fail to run
PY=python3
python3 -c 'import sys' >/dev/null 2>&1 || PY=python
echo "### building single-file app"
"$PY" build.py
echo
echo "### 1/3 logic tests"
node tests/run_tests.js | tail -3
echo
echo "### 2/3 render tests"
node tests/render_test.js | tail -3
echo
echo "### 3/3 built-file preview tests"
node tests/preview_test.js | tail -3
