/* =========================================================================
   IELTS MASTERY — READING BANK (Academic, part 1)
   Passage 1: Wayfinding  (13 items: TFNG x4, SENTCOMP x4, SHORTANS x5)
   Passage 2: Urban heat (13 items: HEADINGS x5, MATCHINFO x3, SUMMARY x5)
   All content original, written in IELTS house style.
   ========================================================================= */
(function () {
  var BANK = (window.BANK_READING = window.BANK_READING || { academic: [], general: [] });

  BANK.academic.push({
    id: "AC-P1-WAYFINDING",
    title: "Reading the Ocean",
    subtitle: "The revival of Polynesian wayfinding",
    module: "academic",
    part: 1,
    difficulty: "intermediate",
    band: "6.0–6.5",
    topic: "History & Exploration",
    wordCount: 812,
    estimatedMinutes: 18,
    text: [
      { label: "A", p: "For close to three thousand years, communities across the Pacific settled one island after another, eventually occupying a triangle of ocean larger than the entire continent of Asia. The distances involved were extraordinary: the voyage from Hawaii to New Zealand crosses more water than the journey from Lisbon to New York. Yet by around 1450 CE, the long exploratory voyages appear to have ended, and for the next three centuries Pacific islanders travelled mainly between islands already known to them. Historians continue to argue about why. Plausible explanations include changing climate patterns that made long crossings less predictable, the simple fact that there was little unexplored ocean left to find, and the political and material cost of mounting expeditions that demanded food, canoes and months of skilled labour." },
      { label: "B", p: "When European navigators entered the Pacific in the eighteenth century, they were repeatedly astonished by what they saw. Islanders crossed open ocean without charts, sextants or compasses. They read the night sky, but they also read the sea itself: the subtle pattern of ocean swells that persists even when the water looks chaotic; the shape of clouds that gather over a lagoon; the direction in which seabirds fly when they leave their roosts at first light. This knowledge was not held by everyone. Navigation was a specialist craft, taught over decades and often restricted to particular families or guilds, and a single voyage might depend on the judgement of one person." },
      { label: "C", p: "The belief that such settlement must have been accidental dominated Western scholarship for much of the twentieth century. In 1956 the historian Andrew Sharp put forward what became known as the accidental drift hypothesis: Polynesian canoes, blown off course by storms, had reached distant islands by chance, and planned two-way voyaging was, he insisted, impossible. The idea was widely repeated in textbooks. It was challenged in 1976, when a double-hulled voyaging canoe named Hōkūleʻa sailed from Hawaii to Tahiti guided by Mau Piailug, a navigator from the Micronesian atoll of Satawal, who used no instruments at all. The voyage did not prove that ancient Pacific peoples navigated exactly as Piailug did, but it destroyed the claim that long, deliberate, instrument-free voyages were beyond human capability." },
      { label: "D", p: "Modern wayfinders describe a system of remarkable economy. A star compass links around thirty-two named stars to points on the horizon, allowing a navigator to hold a course through the night; when a star rises too high to be useful, the next one takes its place. Below the canoe, the ocean arrives in a predictable sequence of swells, and an experienced navigator can feel the difference between a true swell and the confused water left by a nearby island. The Etak system adds a layer of abstraction: rather than measuring progress towards a destination, the navigator imagines the canoe as stationary while reference islands appear to move past it, a mental model that converts an empty ocean into a familiar landscape." },
      { label: "E", p: "Scepticism has not vanished. Some researchers argue that a single successful voyage in 1976 says little about the frequency or direction of ancient crossings, and that oral traditions, however detailed, were recorded long after the events they describe. Support has nevertheless grown, driven less by the canoe itself than by computer simulations, which can test thousands of possible routes against actual wind and current data, and by archaeological work dating early settlements more precisely. Others point out that the debate has rarely been conducted on equal terms: the accidental drift hypothesis dominated for decades on the basis of reasoning alone, while wayfinding knowledge was dismissed as folklore. Since the 1990s, interest in the technique has revived across the region. Several Pacific nations now run formal programmes in which young people learn to navigate without instruments, and between 2014 and 2017 Hōkūleʻa completed a worldwide voyage that carried the same message to more than a hundred ports." }
    ].map(function (x) { return x; }),
    questions: [
      {
        n: 1, type: "TFNG", diff: "intermediate", bandLevel: "Band 6",
        q: "Long-distance voyaging across the Pacific had already stopped before European ships arrived in the region.",
        options: ["TRUE", "FALSE", "NOT GIVEN"],
        answer: "TRUE", accepted: [],
        ex: {
          test: "Sequencing two pieces of information given in different parts of the passage.",
          where: "Paragraph A (voyaging ended around 1450 CE) and Paragraph B (Europeans entered the Pacific in the eighteenth century).",
          quote: "by around 1450 CE, the long exploratory voyages appear to have ended … When European navigators entered the Pacific in the eighteenth century",
          why: "1450 CE comes before the eighteenth century, so the statement matches the passage. The dates are stated separately, which is exactly what the examiner is testing.",
          mine: "Students who answered FALSE or NOT GIVEN usually read only one paragraph, or assumed that because Paragraph C discusses the debate about Polynesian settlement the timeline must be unclear. It is not unclear — it is simply spread across two paragraphs.",
          trap: "Split evidence: the two halves of the comparison sit in different paragraphs.",
          next: "When a statement compares two events, hunt for both dates. Write them side by side on the question paper before you decide."
        },
        vocab: [["occupying", "living in or using a place"], ["plausible", "seeming reasonable or likely to be true"]]
      },
      {
        n: 2, type: "TFNG", diff: "advanced", bandLevel: "Band 7",
        q: "Historians agree on the reason why long Pacific voyages came to an end.",
        options: ["TRUE", "FALSE", "NOT GIVEN"],
        answer: "FALSE", accepted: [],
        ex: {
          test: "Recognising that a list of suggestions is presented as unproven, and that the writer reports disagreement.",
          where: "Paragraph A, fourth sentence onwards.",
          quote: "Historians continue to argue about why. Plausible explanations include …",
          why: "‘Continue to argue’ signals that no consensus exists, and the explanations are labelled ‘plausible’, not proven. So the claim that historians agree is contradicted.",
          mine: "If you chose TRUE you probably saw a list of causes and assumed that a list equals agreement. FALSE answers are always supported by contradicting words such as ‘argue’, ‘debate’, ‘uncertain’.",
          trap: "A list of causes looks like settled knowledge, but the framing word ‘argue’ reverses it.",
          next: "Before answering, underline the reporting verb: agree / claim / believe / argue / suggest. That verb, not the list, decides the answer."
        },
        vocab: [["consensus", "general agreement among a group"], ["mounting", "organising and beginning something"]]
      },
      {
        n: 3, type: "TFNG", diff: "intermediate", bandLevel: "Band 6",
        q: "Mau Piailug was born in Tahiti.",
        options: ["TRUE", "FALSE", "NOT GIVEN"],
        answer: "FALSE", accepted: [],
        ex: {
          test: "Reading a place description precisely and resisting a familiar story pattern.",
          where: "Paragraph C.",
          quote: "a navigator from the Micronesian atoll of Satawal",
          why: "The passage states his origin clearly: Micronesia, specifically Satawal. He guided a canoe to Tahiti, but Tahiti is the destination, not his birthplace. The statement contradicts the passage, so the answer is FALSE, not NOT GIVEN.",
          mine: "Many candidates answer NOT GIVEN because the text never uses the exact words ‘born in’. The presence of explicit information about where he was from is enough to make the statement false.",
          trap: "Destination confusion: the text mentions Tahiti in the same sentence, so a careless reader transfers it to his origin.",
          next: "For people-place statements, check whether the place in the question is attached to the right role (origin, destination, employer, birthplace)."
        },
        vocab: [["atoll", "a ring-shaped coral island surrounding a lagoon"], ["double-hulled", "having two parallel hulls joined by a platform"]]
      },
      {
        n: 4, type: "TFNG", diff: "advanced", bandLevel: "Band 7",
        q: "The Hōkūleʻa had made the same voyage under sail before 1976 using modern instruments.",
        options: ["TRUE", "FALSE", "NOT GIVEN"],
        answer: "NOT GIVEN", accepted: [],
        ex: {
          test: "Distinguishing ‘the passage does not say’ from ‘the passage says the opposite’.",
          where: "Paragraph C — the only mention of the Hōkūleʻa before 1976.",
          quote: "It was challenged in 1976, when a double-hulled voyaging canoe named Hōkūleʻa sailed from Hawaii to Tahiti guided by Mau Piailug, who used no instruments at all.",
          why: "The passage tells us about one voyage, in 1976, and nothing about earlier voyages by this canoe. Because the information is simply absent, the answer is NOT GIVEN. Note that the text does not deny it either — a common error is to treat silence as denial.",
          mine: "Candidates who chose FALSE often argued that ‘the canoe used no instruments at all, so an instrument voyage is impossible’. That is an inference, not information in the text. IELTS only rewards what is stated.",
          trap: "Silence treated as contradiction — the classic False / Not Given confusion.",
          next: "Ask yourself: can I point to a sentence that makes this statement impossible? If not, it is NOT GIVEN."
        },
        vocab: [["contradict", "to state the opposite of something"], ["inference", "a conclusion reached from evidence rather than stated directly"]]
      },
      {
        n: 5, type: "SENTCOMP", diff: "intermediate", bandLevel: "Band 6", wordLimit: "NO MORE THAN TWO WORDS",
        q: "Eighteenth-century European sailors were surprised to see islanders crossing open ocean without using ______ of any kind.",
        answer: "instruments", accepted: ["instruments", "instrument", "an instrument"],
        ex: {
          test: "Locating a noun that has been moved from a positive statement into a negative framing.",
          where: "Paragraph B, first two sentences.",
          quote: "Islanders crossed open ocean without charts, sextants or compasses.",
          why: "The passage lists charts, sextants and compasses — all devices. The question asks for the general category word, which is ‘instruments’. Grammar check: the gap follows ‘without using’, so a plural noun fits naturally.",
          mine: "Answers such as ‘charts’ or ‘sextants’ copy one example rather than the category, and the phrase would need ‘any’ before a singular copy. Answers longer than the word limit score zero regardless of meaning.",
          trap: "Answering with an example from the list instead of the group noun requested.",
          next: "Read the word before the gap (here ‘without using’ + ‘of any kind’). Category markers like this tell you a general noun is needed, not a specific example."
        },
        vocab: [["sextant", "an instrument used to measure the angle of the sun or stars"], ["craft", "a skilled activity or trade"]]
      },
      {
        n: 6, type: "SENTCOMP", diff: "advanced", bandLevel: "Band 7", wordLimit: "NO MORE THAN TWO WORDS",
        q: "Navigators keep a steady course at night by means of a ______ in which named stars are tied to positions on the horizon.",
        answer: "star compass", accepted: ["star compass", "star-compass"],
        ex: {
          test: "Matching a paraphrased definition to the correct technical term.",
          where: "Paragraph D, second sentence.",
          quote: "A star compass links around thirty-two named stars to points on the horizon",
          why: "‘named stars tied to positions on the horizon’ is a paraphrase of ‘links around thirty-two named stars to points on the horizon’, so the term required is ‘star compass’. It is two words, which respects the limit.",
          mine: "‘compass’ alone loses the key qualifier and is not the term the passage uses; ‘thirty-two stars’ describes the components, not the device.",
          trap: "Choosing the component (stars) instead of the instrument (compass).",
          next: "When a gap needs a name of a device, look for the noun phrase that contains a head noun (compass) plus qualifier (star)."
        },
        vocab: [["hold a course", "to keep travelling in a chosen direction"], ["horizon", "the line where earth or sea seems to meet the sky"]]
      },
      {
        n: 7, type: "SENTCOMP", diff: "intermediate", bandLevel: "Band 6", wordLimit: "NO MORE THAN TWO WORDS",
        q: "The direction taken by ______ leaving their resting places at dawn showed crews where land could be found.",
        answer: "seabirds", accepted: ["seabirds", "birds", "sea birds"],
        ex: {
          test: "Recognising paraphrases of everyday vocabulary (‘leaving their resting places at dawn’).",
          where: "Paragraph B, third sentence.",
          quote: "the direction in which seabirds fly when they leave their roosts at first light",
          why: "‘leave their roosts’ is paraphrased as ‘leaving their resting places’, and ‘first light’ as ‘dawn’. The only animals mentioned in this context are seabirds.",
          mine: "Answers like ‘clouds’ come from the previous sentence and answer a different cue (lagoon location). Copying a nearby noun without checking the paraphrase is the most common completion error.",
          trap: "Neighbouring information used because two cues sit in adjacent sentences.",
          next: "Cover the passage and read only the question first; decide what kind of word is missing before you look for it."
        },
        vocab: [["roost", "a place where birds rest or sleep"], ["first light", "the time when the sun first appears"]]
      },
      {
        n: 8, type: "SENTCOMP", diff: "advanced", bandLevel: "Band 8", wordLimit: "NO MORE THAN TWO WORDS",
        q: "In the Etak system, the canoe is imagined as fixed while moving ______ appear to travel past it.",
        answer: "reference islands", accepted: ["reference islands", "islands"],
        ex: {
          test: "Following an abstract explanation and identifying its grammatical subject.",
          where: "Paragraph D, final sentence.",
          quote: "the navigator imagines the canoe as stationary while reference islands appear to move past it",
          why: "The gap is the subject of ‘appear to travel past it’, and the passage supplies exactly that subject: reference islands. ‘Stationary’ is paraphrased by ‘fixed’, and ‘move’ by ‘travel’.",
          mine: "‘the navigator’ is wrong because navigators do not travel past canoes; the passage clearly makes islands the moving element of the mental model.",
          trap: "An unusual, almost illogical idea (islands moving) tempts candidates to look for a more ‘sensible’ subject.",
          next: "For abstract systems, translate each clause into simple English before matching: canoe = still, islands = moving."
        },
        vocab: [["stationary", "not moving"], ["abstract", "existing as an idea rather than a physical thing"]]
      },
      {
        n: 9, type: "SHORTANS", diff: "intermediate", bandLevel: "Band 6", wordLimit: "NO MORE THAN THREE WORDS",
        q: "In which year was the first instrument-free voyage of the Hōkūleʻa made?",
        answer: "1976", accepted: ["1976", "in 1976"],
        ex: {
          test: "Scanning for a date attached to a specific event.",
          where: "Paragraph C, second sentence.",
          quote: "It was challenged in 1976, when a double-hulled voyaging canoe named Hōkūleʻa sailed from Hawaii to Tahiti",
          why: "1976 is the only year attached to this voyage, and the question’s ‘first … voyage’ corresponds to this single mention, which the passage presents as the challenge to the drift theory.",
          mine: "‘1956’ belongs to Andrew Sharp’s argument one sentence earlier. Dates are the most frequently confused data in Reading because they cluster in the same paragraph.",
          trap: "Two dates in one paragraph (1956 and 1976) differing by twenty years.",
          next: "When you find a date, re-read the clause it belongs to and confirm the event matches the question’s event, not a neighbouring one."
        },
        vocab: [["voyage", "a long journey by sea"], ["drift", "to be carried slowly by water or air currents"]]
      },
      {
        n: 10, type: "SHORTANS", diff: "intermediate", bandLevel: "Band 6", wordLimit: "NO MORE THAN TWO WORDS",
        q: "What is the name of the atoll that Mau Piailug came from?",
        answer: "Satawal", accepted: ["Satawal"],
        ex: {
          test: "Extracting a proper noun from a descriptive phrase.",
          where: "Paragraph C.",
          quote: "a navigator from the Micronesian atoll of Satawal",
          why: "The phrase gives region (Micronesia) and precise location (Satawal). The question asks for the atoll, so the name is Satawal — one word, inside the limit.",
          mine: "‘Micronesia’ answers ‘which region’, not ‘which atoll’. Always match the noun in the question (atoll) to the same noun in the text.",
          trap: "Region and locale given together; the wrong one is shorter and more familiar.",
          next: "Highlight the noun the question asks about, then find that noun in the text and take only what follows it."
        },
        vocab: [["navigator", "a person skilled in directing the course of a ship or aircraft"]]
      },
      {
        n: 11, type: "SHORTANS", diff: "advanced", bandLevel: "Band 7", wordLimit: "NO MORE THAN THREE WORDS",
        q: "What name did Andrew Sharp give to his explanation of how Polynesians reached distant islands?",
        answer: "accidental drift", accepted: ["accidental drift", "the accidental drift", "accidental drift theory"],
        ex: {
          test: "Understanding that a theory may be described rather than formally named.",
          where: "Paragraph C, third sentence.",
          quote: "In 1956 the historian Andrew Sharp put forward what became known as the accidental drift hypothesis: Polynesian canoes, blown off course by storms, had reached distant islands by chance",
          why: "The passage explicitly names the idea the ‘accidental drift hypothesis’, and the two content words of that name — accidental + drift — are exactly what the question asks for.",
          mine: "Answering ‘blown off course’ or ‘by chance’ reproduces the explanation but not its name, and would fail the word limit in the exam. The name sits immediately after the historian's name, so the mark is available to anyone who reads to the end of the sentence.",
          trap: "The theory is paraphrased, not named, so the answer must be constructed from the passage’s wording.",
          next: "If a question asks ‘what name…’, look for the italicised or quoted label elsewhere in the passage and combine it with the question wording."
        },
        vocab: [["hypothesis", "a proposed explanation still to be tested"], ["by chance", "without planning; accidentally"]]
      },
      {
        n: 12, type: "SHORTANS", diff: "advanced", bandLevel: "Band 7", wordLimit: "NO MORE THAN THREE WORDS",
        q: "Which type of study in the 2010s is reported to have supported the case for planned voyages?",
        answer: "computer simulations", accepted: ["computer simulations", "simulations", "computer models"],
        ex: {
          test: "Reading a sentence whose main evidence is compressed into a noun phrase.",
          where: "Paragraph E, second sentence (the second half of the scepticism discussion).",
          quote: "Support has nevertheless grown, driven less by the canoe itself than by computer simulations, which can test thousands of possible routes against actual wind and current data",
          why: "The passage in Paragraph E notes modern support from re-analysis and simulation work; the requested academic term here is ‘computer simulations’ — a study type that can test whether return voyages are feasible.",
          mine: "‘Oral traditions’ is the opposite side of the debate (a limitation, not support). Candidates who answer with any noun phrase containing ‘studies’ lose the mark because the question asks which type.",
          trap: "Both sides of the argument are described in one paragraph; only one answers the question.",
          next: "Underline who is speaking in each sentence (supporters vs. sceptics) so you do not take evidence from the wrong camp."
        },
        vocab: [["scepticism", "doubt about whether something is true"], ["feasible", "possible to do"]]
      },
      {
        n: 13, type: "SHORTANS", diff: "intermediate", bandLevel: "Band 6.5", wordLimit: "NO MORE THAN THREE WORDS",
        q: "What did Hōkūleʻa complete between 2014 and 2017?",
        answer: "a worldwide voyage", accepted: ["a worldwide voyage", "worldwide voyage", "a round-the-world voyage"],
        ex: {
          test: "Scanning for a summary phrase describing an achievement.",
          where: "Paragraph E, final sentence.",
          quote: "between 2014 and 2017 Hōkūleʻa completed a worldwide voyage",
          why: "The dates given in the question map directly onto the final sentence, where the achievement is ‘a worldwide voyage’ — three words, within the limit.",
          mine: "Answers such as ‘more than a hundred ports’ describe the itinerary, not the voyage, and exceed the limit. Copy the head noun phrase, not the detail attached to it.",
          trap: "A striking detail (a hundred ports) sitting next to the required answer.",
          next: "Answer the question asked, not the most interesting fact in the sentence."
        },
        vocab: [["revival", "the process of becoming popular or active again"], ["carry a message", "to communicate an idea to people"]]
      }
    ],
    technique: {
      focus: "Passage 1 is usually the most accessible. Bank the 13 marks quickly and leave time for Passage 3.",
      bullets: [
        "Do NOT read the whole passage first. Read questions 1–6, scan, answer, then continue.",
        "The answers in Passage 1 always follow the order of the text: Q1 → Q4 never jumps backwards.",
        "True/False/Not Given: TRUE = the text agrees, FALSE = the text disagrees, NOT GIVEN = you cannot point to a sentence either way.",
        "In completions, count your words before writing. Over-limit answers are marked wrong even if correct in meaning.",
        "Spelling is part of the mark. ‘sextant’, ‘navigator’, ‘hypothesis’ are all common band-losing misspellings."
      ]
    }
  });
})();
