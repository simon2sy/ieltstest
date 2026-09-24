/* =========================================================================
   IELTS MASTERY — READING BANK (General Training)
   GT Set 1: Library notice — 13 items (TFNG x5, SENTCOMP x4, SHORTANS x4)
   GT Set 2: Community garden article — 13 items (MCQ x4, MATCHFEAT x4, SUMMARY x5)
   ========================================================================= */
(function () {
  var BANK = (window.BANK_READING = window.BANK_READING || { academic: [], general: [] });

  BANK.general.push({
    id: "GT-P1-LIBRARY",
    title: "Riverbend Community Library",
    subtitle: "Membership, borrowing and facilities",
    module: "general",
    part: 1,
    difficulty: "beginner",
    band: "5.0–5.5",
    topic: "Everyday Services",
    wordCount: 604,
    estimatedMinutes: 15,
    text: [
      { label: "A", p: "Membership is free for anyone who lives, works or studies in the Riverbend district, and costs $24 a year for other residents. Applications are made in person at the ground-floor desk and require one document showing your name and address, such as a utility bill, a tenancy agreement or a letter from your employer. Membership cards are issued immediately; there is no waiting period. Young people under 16 may join with the signature of a parent or guardian, and children under 6 are issued a card without a photograph." },
      { label: "B", p: "Members may borrow up to twelve items at a time. Books are lent for three weeks and may be renewed twice, provided no other member has requested them. DVDs and language kits are lent for one week and cannot be renewed. Items may be returned to any branch in the district, and a night return slot beside the main entrance is available when the building is closed. Overdue items are charged at 30 cents per item per day, to a maximum of $8 per item. Members who owe more than $15 cannot borrow until the amount is paid, although they may continue to use the reading rooms." },
      { label: "C", p: "The first-floor reading room is open to members and non-members alike, and no card is needed to study there. Free Wi-Fi is available throughout the building; the password is displayed at the information desk and is changed on the first Monday of each month. Printing and photocopying cost 15 cents per page for black and white and 45 cents for colour, and are payable at the desk rather than at the machines. Six computers in the corner of the reading room can be booked for sessions of up to two hours, free of charge, up to seven days in advance." },
      { label: "D", p: "Weekly activities include a story session for pre-school children on Tuesday mornings, a conversation group for adults learning English on Thursday evenings, and a repair café on the first Saturday of the month, where volunteers help visitors mend small household items. The repair café does not accept electrical goods. A quiet study area is maintained on the second floor during all opening hours; mobile phone calls are not permitted there, and food and drink are restricted to the café on the ground floor. Guide dogs are welcome throughout the building." },
      { label: "E", p: "The library accepts donations of books in good condition, except for encyclopedias and textbooks more than ten years old. Donated items are either added to the collection or sold at the monthly book sale, which supports the children's reading programme. Volunteers are always needed, particularly for the repair café and the holiday reading scheme; anyone interested should speak to the duty manager, and no previous experience is required." }
    ],
    questions: [
      {
        n: 1, type: "TFNG", diff: "beginner", bandLevel: "Band 5",
        q: "All new members pay $24 to join the library.",
        options: ["TRUE", "FALSE", "NOT GIVEN"],
        answer: "FALSE", accepted: [],
        ex: {
          test: "Reading a conditional correctly — membership cost depends on where you live, work or study.",
          where: "Paragraph A, first sentence.",
          quote: "Membership is free for anyone who lives, works or studies in the Riverbend district, and costs $24 a year for other residents.",
          why: "The statement says ALL new members pay, but the passage exempts a large group. Because the text directly contradicts the statement, the answer is FALSE, not NOT GIVEN.",
          mine: "Candidates who answer NOT GIVEN have seen the $24 figure and stopped reading. The first clause changes everything — IELTS frequently hides the contradiction before the number.",
          trap: "A prominent number that applies only to one group.",
          next: "When a statement contains ALL, EVERY or ONLY, look for exceptions. One exception makes the statement FALSE."
        },
        vocab: [["resident", "a person who lives in a particular place"], ["in person", "by going somewhere yourself"]]
      },
      {
        n: 2, type: "TFNG", diff: "beginner", bandLevel: "Band 5",
        q: "Membership cards for children under 6 do not include a photograph.",
        options: ["TRUE", "FALSE", "NOT GIVEN"],
        answer: "TRUE", accepted: [],
        ex: {
          test: "Locating a small exception in a paragraph full of rules.",
          where: "Paragraph A, final sentence.",
          quote: "children under 6 are issued a card without a photograph.",
          why: "The statement reports the same rule in the same terms, so it agrees with the passage.",
          mine: "Some candidates over-think and look for a general rule about photographs; the passage mentions photographs only in this one sentence, so there is nothing to contradict.",
          trap: "A detail buried in the last sentence of a rules paragraph.",
          next: "Scan for the noun in the statement (card, photograph) rather than reading the paragraph again from the top."
        },
        vocab: [["guardian", "a person legally responsible for a child"], ["issued", "officially given out"]]
      },
      {
        n: 3, type: "TFNG", diff: "intermediate", bandLevel: "Band 5.5",
        q: "DVDs may be renewed once if no one else wants them.",
        options: ["TRUE", "FALSE", "NOT GIVEN"],
        answer: "FALSE", accepted: [],
        ex: {
          test: "Applying a 'cannot' rule to a specific item category.",
          where: "Paragraph B, third sentence.",
          quote: "DVDs and language kits are lent for one week and cannot be renewed.",
          why: "The passage is absolute for DVDs — no renewal at all — so even one renewal contradicts it. The condition about other members requesting items applies to books only.",
          mine: "The phrase ‘provided no other member has requested them’ sits in the previous sentence and applies to books. Candidates often carry that condition forward to DVDs and answer TRUE or NOT GIVEN.",
          trap: "A condition attached to the previous sentence that looks as if it applies to everything.",
          next: "Check the subject of each sentence. Renewal rules for books and for media are given in separate sentences with different conditions."
        },
        vocab: [["renew", "to extend the period of a loan"], ["branch", "one of several offices of an organisation"]]
      },
      {
        n: 4, type: "TFNG", diff: "intermediate", bandLevel: "Band 5.5",
        q: "A member who owes $10 can still borrow books.",
        options: ["TRUE", "FALSE", "NOT GIVEN"],
        answer: "TRUE", accepted: [],
        ex: {
          test: "Comparing a threshold in the statement with the threshold in the passage.",
          where: "Paragraph B, final sentence.",
          quote: "Members who owe more than $15 cannot borrow until the amount is paid",
          why: "$10 is not more than $15, so this member is unaffected by the restriction and may borrow. The statement therefore agrees with the passage.",
          mine: "Students who answer FALSE usually read the restriction as applying to any debt. The word ‘more than’ is the whole test here — it sets a threshold, not a general ban.",
          trap: "Numeric thresholds: below/above, more than/at least, up to/over.",
          next: "Write the exact figure and the exact comparison sign on your question paper: $10 < $15 → allowed."
        },
        vocab: [["overdue", "not returned by the due date"], ["maximum", "the largest allowed amount"]]
      },
      {
        n: 5, type: "TFNG", diff: "intermediate", bandLevel: "Band 6",
        q: "The repair café will repair any small household item, including electrical goods.",
        options: ["TRUE", "FALSE", "NOT GIVEN"],
        answer: "FALSE", accepted: [],
        ex: {
          test: "Handling the inclusive word ‘including’ in a statement against an explicit exclusion in the passage.",
          where: "Paragraph D, third sentence.",
          quote: "The repair café does not accept electrical goods.",
          why: "The statement claims electrical goods are included, the passage excludes them. A direct contradiction gives FALSE.",
          mine: "Some candidates hesitate because the passage says the café helps visitors mend 'small household items' — which sounds inclusive — and then select NOT GIVEN. The following sentence resolves the doubt, so the information is definitely present.",
          trap: "A generalising sentence followed one sentence later by the exception that defeats it.",
          next: "Always read one sentence past an apparent match: exclusions often follow introductions."
        },
        vocab: [["volunteer", "a person who works without payment"], ["mend", "to repair something"]]
      },
      {
        n: 6, type: "SENTCOMP", diff: "intermediate", bandLevel: "Band 5.5", wordLimit: "NO MORE THAN THREE WORDS AND/OR A NUMBER from the passage",
        q: "Overdue items are charged at ______ per item per day.",
        answer: "30 cents", accepted: ["30 cents", "thirty cents"],
        ex: {
          test: "Extracting a price with its unit of currency.",
          where: "Paragraph B, fifth sentence.",
          quote: "Overdue items are charged at 30 cents per item per day",
          why: "The question copies the passage structure exactly, so only the number and unit are missing. ‘30 cents’ is three words at most, so it satisfies the limit whether written as digits or words.",
          mine: "‘$8’ is the maximum charge, not the daily rate — a plausible-looking number in the same sentence. Answering cents without the number, or giving the maximum, both lose the mark.",
          trap: "Two figures in one sentence: the daily rate and the cap.",
          next: "When a sentence contains two numbers, read the words between them: the first is usually the rate, the second the limit."
        },
        vocab: [["per item per day", "for each item for each day"], ["cap", "an upper limit"]]
      },
      {
        n: 7, type: "SENTCOMP", diff: "intermediate", bandLevel: "Band 5.5", wordLimit: "NO MORE THAN THREE WORDS AND/OR A NUMBER from the passage",
        q: "The Wi-Fi password is changed on the ______ of each month.",
        answer: "first Monday", accepted: ["first Monday", "1st Monday"],
        ex: {
          test: "Matching a frequency expression to a part of the month.",
          where: "Paragraph C, second sentence.",
          quote: "the password is displayed at the information desk and is changed on the first Monday of each month",
          why: "The question simply deletes the day on which the change happens. Answer: first Monday.",
          mine: "‘Monday’ alone is insufficient — the passage specifies which Monday, and the word limit allows both words. Answers like ‘first week’ are not what the passage says.",
          trap: "A partial copy of the answer (the weekday without the qualifier).",
          next: "In completions, never shorten an answer below the words the passage uses; taking only part of a noun phrase usually fails."
        },
        vocab: [["displayed", "shown in a place where it can be seen"], ["available", "able to be used"]]
      },
      {
        n: 8, type: "SENTCOMP", diff: "intermediate", bandLevel: "Band 6", wordLimit: "NO MORE THAN THREE WORDS AND/OR A NUMBER from the passage",
        q: "Computer sessions in the reading room may last for a maximum of ______ .",
        answer: "two hours", accepted: ["two hours", "2 hours"],
        ex: {
          test: "Linking the paraphrase ‘maximum of’ to ‘up to’ in the passage.",
          where: "Paragraph C, final sentence.",
          quote: "Six computers in the corner of the reading room can be booked for sessions of up to two hours, free of charge, up to seven days in advance.",
          why: "‘maximum of two hours’ = ‘up to two hours’. The distractor ‘seven days’ is how far in advance you can book, not how long you may stay.",
          mine: "Answers of ‘seven days’ come from the same sentence and answer a different question. Reading the question stem twice before scanning prevents this.",
          trap: "Two quantities in one sentence attached to different nouns (duration vs. advance booking).",
          next: "Decide what the gap measures (time? distance? cost?) before you look, then match the noun after the number."
        },
        vocab: [["in advance", "before the time something happens"], ["book", "to reserve something for your use"]]
      },
      {
        n: 9, type: "SENTCOMP", diff: "beginner", bandLevel: "Band 5", wordLimit: "NO MORE THAN THREE WORDS AND/OR A NUMBER from the passage",
        q: "The library does not accept donations of ______ more than ten years old.",
        answer: "textbooks", accepted: ["textbooks", "encyclopedias and textbooks"],
        ex: {
          test: "Reading an exclusion in a final paragraph that also contains an offer of volunteering.",
          where: "Paragraph E, first sentence.",
          quote: "The library accepts donations of books in good condition, except for encyclopedias and textbooks more than ten years old.",
          why: "The gap follows the structure of the passage exactly; the item restricted by the ten-year rule is textbooks (and encyclopedias, which are excluded regardless of age).",
          mine: "‘Books’ is too general — the library accepts books in good condition. ‘Volunteers’ belongs to the following sentence and is not a donation type.",
          trap: "A wider category (books) competing with the specific category that carries the restriction.",
          next: "When a sentence contains ‘except’, the exceptional items are usually what the question tests."
        },
        vocab: [["donation", "something given to help an organisation"], ["collection", "the group of items a library owns"]]
      },
      {
        n: 10, type: "SHORTANS", diff: "beginner", bandLevel: "Band 5", wordLimit: "NO MORE THAN TWO WORDS AND/OR A NUMBER from the passage",
        q: "On which day of the week is the conversation group held?",
        answer: "Thursday", accepted: ["Thursday", "Thursday evenings", "on Thursday"],
        ex: {
          test: "Scanning for a weekday attached to a named activity.",
          where: "Paragraph D, second sentence.",
          quote: "a conversation group for adults learning English on Thursday evenings",
          why: "One activity, one day. The question asks only for the day, and the answer is Thursday.",
          mine: "‘Tuesday’ is the story session for pre-school children. Two weekly activities in the same sentence make day-swapping the most likely error.",
          trap: "Parallel structures — three activities, three days — in one sentence.",
          next: "Underline the activity name in the question and scan for that name, not for a day."
        },
        vocab: [["conversation group", "a meeting for practising spoken language"], ["session", "a period of organised activity"]]
      },
      {
        n: 11, type: "SHORTANS", diff: "intermediate", bandLevel: "Band 5.5", wordLimit: "NO MORE THAN TWO WORDS from the passage",
        q: "What is the maximum number of items a member may borrow at one time?",
        answer: "twelve", accepted: ["twelve", "12", "twelve items"],
        ex: {
          test: "Extracting a borrowing limit from a paragraph of mixed restrictions.",
          where: "Paragraph B, first sentence.",
          quote: "Members may borrow up to twelve items at a time.",
          why: "The question mirrors the sentence; the number is the answer. Numerals and number words are both accepted in IELTS.",
          mine: "‘Three weeks’ is the loan period and ‘$8’ the maximum fine — both are numbers in the same paragraph but neither answers the question.",
          trap: "Multiple numbers in the same paragraph: 12 items, 3 weeks, 1 week, 30 cents, $8, $15.",
          next: "Cover the paragraph and read the question's noun (items) first, then scan for that noun and the number beside it."
        },
        vocab: [["at a time", "in one go"], ["provided", "on condition that"]]
      },
      {
        n: 12, type: "SHORTANS", diff: "intermediate", bandLevel: "Band 6", wordLimit: "NO MORE THAN THREE WORDS from the passage",
        q: "Which monthly event raises money for a children's programme?",
        answer: "the book sale", accepted: ["book sale", "the book sale", "monthly book sale"],
        ex: {
          test: "Matching a fundraising purpose to the event that generates the money.",
          where: "Paragraph E, second sentence.",
          quote: "sold at the monthly book sale, which supports the children's reading programme",
          why: "‘Raises money for’ = ‘supports’ (via sales proceeds), and the monthly event is the book sale.",
          mine: "‘The repair café’ is a monthly event too, but it mends items and does not fundraise. Two monthly events, one purpose.",
          trap: "Two monthly activities mentioned in the passage; only one is financial.",
          next: "Match the function word (raises money, supports), not just the frequency word (monthly)."
        },
        vocab: [["fundraising", "collecting money for a cause"], ["proceeds", "the money received from sales"]]
      },
      {
        n: 13, type: "SHORTANS", diff: "beginner", bandLevel: "Band 5", wordLimit: "NO MORE THAN THREE WORDS from the passage",
        q: "Who should a person wanting to volunteer speak to?",
        answer: "the duty manager", accepted: ["duty manager", "the duty manager"],
        ex: {
          test: "Identifying the correct job title among several people mentioned.",
          where: "Paragraph E, final sentence.",
          quote: "anyone interested should speak to the duty manager, and no previous experience is required.",
          why: "The passage names one contact for volunteering: the duty manager. The label appears in the same sentence as the instruction, which confirms the match.",
          mine: "‘Duty manager’ is easily confused with ‘information desk’ in Paragraph C, but that is where the Wi-Fi password is displayed, not where volunteers apply.",
          trap: "Multiple staff roles in different paragraphs (desk staff, volunteers, duty manager).",
          next: "For 'who' questions, scan for the action word in the question (speak to / contact) rather than for people's titles."
        },
        vocab: [["duty manager", "the person in charge during a particular shift"], ["scheme", "an organised programme or plan"]]
      }
    ],
    technique: {
      focus: "General Training Reading Section 1 is about everyday documents. Precision with numbers, days and conditions wins marks quickly.",
      bullets: [
        "TFNG in GT is usually about exceptions and thresholds: all / only / more than / up to.",
        "Answers are almost always copied directly from the text — do not paraphrase.",
        "Watch for parallel lists (three activities, three days) where swapping details is the trap.",
        "Respect the word limit exactly: 'NO MORE THAN THREE WORDS AND/OR A NUMBER' means four words is wrong.",
        "Manage time: Section 1 should take around 15 minutes, leaving more time for the longer Section 3 passage."
      ]
    }
  });

  BANK.general.push({
    id: "GT-P2-GARDEN",
    title: "Growing Together",
    subtitle: "How community gardens changed three neighbourhoods",
    module: "general",
    part: 2,
    difficulty: "intermediate",
    band: "6.0–6.5",
    topic: "Community & Environment",
    wordCount: 726,
    estimatedMinutes: 20,
    text: [
      { label: "A", p: "When the council announced in 2011 that a derelict strip of land beside the railway in Eastbrook would be sold for housing, a group of about forty residents responded with a counter-proposal: a community garden. The land had been used as a dumping ground for two decades. The residents' case was practical rather than sentimental. They argued that a garden would cost the council almost nothing to maintain, that it would reduce fly-tipping, and that the produce grown there could be distributed to households in the two streets nearest the site. The council agreed to a five-year lease, renewable on review." },
      { label: "B", p: "The first year was harder than anyone expected. Roughly half of the volunteers who signed up in March had stopped attending by August, and the committee learned that enthusiasm arrives faster than patience. A second problem was water: the site had no mains supply, and the nearest standpipe was ninety metres away, so volunteers carried containers by hand through the summer. At the end of the first season the committee recorded only eleven kilograms of edible produce — less than many members spent on seeds and tools. Rather than abandoning the project, the committee changed its approach: plots were allocated to individual households, each responsible for its own crops, while shared areas were limited to what everyone would help maintain — a herb bed, fruit bushes and a shed." },
      { label: "C", p: "Devolving responsibility transformed the garden's productivity. With households tending their own plots, the total harvest in the third year reached four hundred and sixty kilograms, and, importantly, it was distributed differently: surplus courgettes, beans and tomatoes were left on a table at the gate, and it became normal for neighbours to take what they needed and leave what they did not. Council officers who had expected a maintenance burden found instead that the site required fewer visits than the empty plots on the other side of the road, where grass had to be cut four times a year." },
      { label: "D", p: "Similar stories emerged from a study of seventeen community gardens in three cities. The most successful projects shared three features: an agreement in writing about who was responsible for what, a core group of at least six people willing to take on administrative work rather than gardening, and a relationship with a local institution — a school, a clinic, a place of worship — that could provide continuity when individuals moved away. Projects that relied on a single enthusiastic founder were the most likely to collapse within two years, usually when that person changed jobs or lost interest." },
      { label: "E", p: "The benefits are not only agricultural. Researchers who surveyed members in six gardens found that participants reported improvements in diet, and that older members mentioned social contact more often than fresh vegetables as their main reason for attending. Some health services now refer patients to gardening schemes, and in one city a scheme for people recovering from long-term illness was reported to reduce visits to general practitioners. The evidence base remains modest, and researchers caution that volunteers who join a garden may already be healthier than those who do not, which makes it difficult to separate cause from effect." },
      { label: "F", p: "Urban land, though, is rarely available for long. In Eastbrook the five-year lease was extended twice, but two of the seventeen gardens in the study were lost when development began, and in both cases the gardeners had no legal right to remain. Compensation, where it was offered at all, covered tools and sheds but nothing for the years of soil improvement. Some groups now negotiate long-term agreements before they plant a single seed, and campaigners argue that councils should be legally required to offer alternative land. Until that happens, the lesson from Eastbrook is that a garden survives not because the land is secure, but because enough people treat it as theirs." }
    ],
    questions: [
      {
        n: 14, type: "MCQ", diff: "intermediate", bandLevel: "Band 6",
        q: "Why did the residents propose a garden to the council?",
        options: [
          "A They wanted to preserve the land as a nature reserve.",
          "B They argued it would be cheap for the council and would benefit local households.",
          "C They hoped to sell the produce commercially.",
          "D They were promised funding by a local charity."
        ],
        answer: "B", accepted: ["B"],
        ex: {
          test: "Distinguishing a practical argument from emotional or commercial motives.",
          where: "Paragraph A, third to fifth sentences.",
          quote: "They argued that a garden would cost the council almost nothing to maintain, that it would reduce fly-tipping, and that the produce grown there could be distributed to households in the two streets nearest the site.",
          why: "Option B combines the two main arguments the residents made: low cost to the council and produce for local households. The paragraph explicitly says their case was 'practical rather than sentimental', which rules out option A.",
          mine: "Option A is excluded by the writer's own framing, and option C contradicts ‘distributed to households’. Candidates often choose C because community gardens sometimes sell produce — but here it is given away.",
          trap: "A motive that is realistic in the real world but explicitly excluded by the text.",
          next: "Look for framing sentences such as ‘practical rather than sentimental’ — they exist to eliminate options."
        },
        vocab: [["derelict", "empty and in poor condition"], ["fly-tipping", "illegally dumping waste"]]
      },
      {
        n: 15, type: "MCQ", diff: "intermediate", bandLevel: "Band 6",
        q: "What was the main reason the garden became more productive in its third year?",
        options: [
          "A A piped water supply was installed.",
          "B More people volunteered than in the first year.",
          "C Individual households became responsible for their own plots.",
          "D The council provided free seeds and tools."
        ],
        answer: "C", accepted: ["C"],
        ex: {
          test: "Identifying the cause the writer attributes to the change, not the problem that preceded it.",
          where: "Paragraph C, first sentence, which links back to the end of Paragraph B.",
          quote: "Devolving responsibility transformed the garden's productivity. With households tending their own plots, the total harvest in the third year reached four hundred and sixty kilograms",
          why: "The passage names one cause in its topic sentence: devolving responsibility, i.e. households tending their own plots. Option C restates it.",
          mine: "Option A describes the first-year problem (no mains supply), and nothing in the passage says it was solved. Option D is not mentioned at all — the passage says members spent money on seeds and tools themselves.",
          trap: "A problem from Paragraph B offered as if it were the solution.",
          next: "For 'why did X happen' questions, find the sentence with a change verb (transformed, led to, resulted in) and read backwards."
        },
        vocab: [["devolve", "to give responsibility to a lower level"], ["surplus", "an amount left over"]]
      },
      {
        n: 16, type: "MCQ", diff: "intermediate", bandLevel: "Band 6.5",
        q: "What does the study of seventeen gardens show about projects that depend on one enthusiastic founder?",
        options: [
          "A They usually produce less food than other gardens.",
          "B They are most likely to close within two years.",
          "C They attract more volunteers than group-led projects.",
          "D They are cheaper for councils to support."
        ],
        answer: "B", accepted: ["B"],
        ex: {
          test: "Connecting a study finding to the exact group it describes.",
          where: "Paragraph D, final sentence.",
          quote: "Projects that relied on a single enthusiastic founder were the most likely to collapse within two years, usually when that person changed jobs or lost interest.",
          why: "The sentence states the finding directly: such projects collapse within two years. Option B paraphrases 'collapse' as 'close'.",
          mine: "Option A sounds plausible because the gardens that failed were less productive in the earlier example, but the study does not measure output. The study's finding is about survival, not yield.",
          trap: "A finding from one project's anecdote borrowed to answer a question about a seventeen-garden study.",
          next: "Keep different evidence separate: Eastbrook's first year, the three-city study and the health survey each answer different questions."
        },
        vocab: [["continuity", "the state of continuing without interruption"], ["collapse", "to fail suddenly"]]
      },
      {
        n: 17, type: "MCQ", diff: "advanced", bandLevel: "Band 7",
        q: "Why do researchers warn that the health benefits of gardening are difficult to prove?",
        options: [
          "A Health services collect no data on garden members.",
          "B Gardens are usually located in unhealthy neighbourhoods.",
          "C People who join gardens may already be healthier than those who do not.",
          "D Most members are too young to develop health problems."
        ],
        answer: "C", accepted: ["C"],
        ex: {
          test: "Understanding a selection-bias argument expressed in a single clause.",
          where: "Paragraph E, final sentence.",
          quote: "researchers caution that volunteers who join a garden may already be healthier than those who do not, which makes it difficult to separate cause from effect.",
          why: "Option C is a near-exact restatement. The phrase 'separate cause from effect' is the reason the benefit cannot be proved, and the passage attaches that reason to the baseline health of volunteers.",
          mine: "Option D reverses the passage, which mentions older members as an important group. Option A is not discussed; the passage says some health services refer patients, not that no data exist.",
          trap: "A plausible methodological criticism that the passage never makes.",
          next: "For 'why' questions, the answer is normally in the clause introduced by because / which / so. Locate the connector, then read the clause."
        },
        vocab: [["caution", "to warn about a risk"], ["cause and effect", "the relationship between an action and its result"]]
      },
      {
        n: 18, type: "MATCHFEAT", diff: "intermediate", bandLevel: "Band 6.5",
        q: "Which paragraph explains a way that a garden's produce is shared with the wider community?",
        options: ["A", "B", "C", "D", "E", "F"],
        answer: "C", accepted: ["Paragraph C"],
        ex: {
          test: "Locating a mechanism of distribution rather than a statement of intent.",
          where: "Paragraph C, second sentence.",
          quote: "surplus courgettes, beans and tomatoes were left on a table at the gate, and it became normal for neighbours to take what they needed",
          why: "Paragraph A mentions that produce could be distributed to nearby households, but that is a proposal. Only Paragraph C shows the sharing actually happening — the table at the gate.",
          mine: "Candidates often choose Paragraph A because it contains the word ‘distributed’. IELTS distinguishes intention from practice.",
          trap: "Proposal versus implementation — the same idea appears in two paragraphs at different stages.",
          next: "Note the tense of each paragraph: future/conditional forms (would, could) signal plans; past forms signal completed actions."
        },
        vocab: [["surplus", "more than is needed"], ["allocate", "to give something to a particular person or purpose"]]
      },
      {
        n: 19, type: "MATCHFEAT", diff: "intermediate", bandLevel: "Band 6.5",
        q: "Which paragraph mentions that some projects failed because a key individual left?",
        options: ["A", "B", "C", "D", "E", "F"],
        answer: "D", accepted: ["Paragraph D"],
        ex: {
          test: "Recognising a cause-and-effect summary of group behaviour.",
          where: "Paragraph D, final sentence.",
          quote: "were the most likely to collapse within two years, usually when that person changed jobs or lost interest",
          why: "‘A key individual left’ summarises ‘changed jobs or lost interest’. No other paragraph describes project failure at all.",
          mine: "Paragraph F also discusses loss — but of land, not of people. Check whether the cause is a person or a place.",
          trap: "Two paragraphs containing failure, for different reasons.",
          next: "Read the question's subject carefully: ‘a key individual’ excludes Paragraph F, which is about leases."
        },
        vocab: [["rely on", "to depend on"], ["administrative", "relating to organising and managing"]]
      },
      {
        n: 20, type: "MATCHFEAT", diff: "advanced", bandLevel: "Band 7",
        q: "Which paragraph reports a result that surprised local officials?",
        options: ["A", "B", "C", "D", "E", "F"],
        answer: "C", accepted: ["Paragraph C"],
        ex: {
          test: "Inferring surprise from an expectation that was contradicted.",
          where: "Paragraph C, final sentence.",
          quote: "Council officers who had expected a maintenance burden found instead that the site required fewer visits than the empty plots on the other side of the road",
          why: "‘Had expected’ + ‘found instead’ is the grammatical signature of an expectation that proved wrong — i.e. a surprise. Council officers are the local officials.",
          mine: "Paragraph B also contains surprise (‘harder than anyone expected’), but there the expectation belonged to the volunteers, not to officials, and the outcome was negative.",
          trap: "Two sentences use ‘expected’, only one involves officials and a positive reversal.",
          next: "Treat 'expected … but found' as a fixed pattern meaning surprise; then check WHO held the expectation."
        },
        vocab: [["maintenance burden", "the cost and work of keeping something in good condition"], ["grant", "money given for a particular purpose"]]
      },
      {
        n: 21, type: "MATCHFEAT", diff: "advanced", bandLevel: "Band 7",
        q: "Which paragraph explains what gardeners lost when land was taken for development?",
        options: ["A", "B", "C", "D", "E", "F"],
        answer: "F", accepted: ["Paragraph F"],
        ex: {
          test: "Matching a question about losses to the paragraph describing compensation.",
          where: "Paragraph F, second sentence.",
          quote: "Compensation, where it was offered at all, covered tools and sheds but nothing for the years of soil improvement.",
          why: "The loss described is the unvalued improvement of the soil — the years of work that compensation ignored. No other paragraph deals with the loss of a site.",
          mine: "Paragraph D mentions gardens being lost in the study, but it gives no detail about what the gardeners lost. The question asks about the loss in detail, which only Paragraph F supplies.",
          trap: "A general mention (D) versus the specific information requested (F).",
          next: "If two paragraphs are close, choose the one that answers the whole question, including any detail words such as ‘what they lost’."
        },
        vocab: [["compensation", "money paid because of loss or damage"], ["lease", "a legal agreement to use land or property"]]
      },
      {
        n: 22, type: "SUMMARY", diff: "intermediate", bandLevel: "Band 6.5", wordLimit: "Choose ONE WORD ONLY from the passage for each gap",
        q: "Gap 1 — The community garden in Eastbrook was created on land that had previously been a ______ ground.",
        options: null,
        answer: "dumping", accepted: ["dumping"],
        ex: {
          test: "Retrieving a compound noun from the opening description.",
          where: "Paragraph A, second sentence.",
          quote: "The land had been used as a dumping ground for two decades.",
          why: "The summary keeps the collocation ‘dumping ground’, so the missing word is the modifier ‘dumping’. One word only, as the instructions require.",
          mine: "‘Derelict’ describes the land's condition, not its previous use, and the collocation ‘derelict ground’ is not in the passage.",
          trap: "An adjacent adjective that fits the gap grammatically but not the intended collocation.",
          next: "Read the word after the gap too (‘ground’). Compound nouns such as ‘dumping ground’ are frequently tested in summary tasks."
        },
        vocab: [["dumping ground", "a place where waste is left"], ["counter-proposal", "an alternative plan offered in response"]]
      },
      {
        n: 23, type: "SUMMARY", diff: "intermediate", bandLevel: "Band 6", wordLimit: "Choose ONE WORD ONLY from the passage for each gap",
        q: "Gap 2 — In the first year, volunteers stopped attending and water had to be carried because there was no ______ supply.",
        options: null,
        answer: "mains", accepted: ["mains"],
        ex: {
          test: "Recognising a British English utility term used in the passage.",
          where: "Paragraph B, third sentence.",
          quote: "the site had no mains supply, and the nearest standpipe was ninety metres away",
          why: "The gap keeps the exact phrase ‘no … supply’ from the passage, where the missing attribute is ‘mains’.",
          mine: "‘Water’ is already implied by the sentence's context and would produce ‘water supply’, which is not what the passage says — and water appears as a separate word in the sentence, so it is not the gap's target.",
          trap: "A semantically reasonable word that produces a different collocation from the passage.",
          next: "Check whether your word is already present in the question; if a synonym appears nearby, the answer is usually the more specific term."
        },
        vocab: [["mains supply", "water or power supplied through pipes or cables"], ["standpipe", "an outdoor tap connected to a water main"]]
      },
      {
        n: 24, type: "SUMMARY", diff: "intermediate", bandLevel: "Band 6.5", wordLimit: "Choose ONE WORD ONLY from the passage for each gap",
        q: "Gap 3 — The committee changed its system by giving each ______ its own plot.",
        options: null,
        answer: "household", accepted: ["household", "households"],
        ex: {
          test: "Identifying the unit of allocation, which is deliberately not a synonym for ‘family’.",
          where: "Paragraph B, final sentence.",
          quote: "plots were allocated to individual households, each responsible for its own crops",
          why: "The passage's word is ‘households’. The summary reuses ‘individual’ and ‘own’, so only the noun is missing.",
          mine: "‘Volunteer’ is wrong because the placement of volunteers was the failing system, not the reform. ‘Family’ is a synonym learners often import, but IELTS requires the passage's word.",
          trap: "A near-synonym that fits meaning but not the marking key.",
          next: "In completion summaries, always transfer the passage's exact noun, even when a synonym sounds better."
        },
        vocab: [["plot", "a small area of land used for growing"], ["herb bed", "a planted area for culinary or medicinal plants"]]
      },
      {
        n: 25, type: "SUMMARY", diff: "advanced", bandLevel: "Band 7", wordLimit: "Choose ONE WORD ONLY from the passage for each gap",
        q: "Gap 4 — Successful projects usually depend on a relationship with a local institution that can provide ______ .",
        options: null,
        answer: "continuity", accepted: ["continuity"],
        ex: {
          test: "Extracting the abstract noun that explains why institutions matter.",
          where: "Paragraph D, second sentence.",
          quote: "a relationship with a local institution — a school, a clinic, a place of worship — that could provide continuity when individuals moved away",
          why: "The summary preserves the whole phrase ‘provide … when individuals moved away’ is omitted but the requirement remains: institutions supply continuity. The answer is a direct copy.",
          mine: "‘Funding’ and ‘land’ are the practical things institutions often supply in the real world, but neither is stated in this sentence; choosing by expectation rather than by text is the error.",
          trap: "A realistic guess that is not in the passage.",
          next: "Search for the verb in the question (‘provide’) and read the noun that follows it in the passage."
        },
        vocab: [["continuity", "continuing steadily over time"], ["place of worship", "a building used for religious services"]]
      },
      {
        n: 26, type: "SUMMARY", diff: "advanced", bandLevel: "Band 7", wordLimit: "Choose ONE WORD ONLY from the passage for each gap",
        q: "Gap 5 — Although participants reported better diets, the evidence for health benefits is limited and researchers warn that cause and ______ are hard to separate.",
        options: null,
        answer: "effect", accepted: ["effect"],
        ex: {
          test: "Completing a fixed academic collocation rather than a content word.",
          where: "Paragraph E, final sentence.",
          quote: "which makes it difficult to separate cause from effect",
          why: "The summary inverts the collocation (‘cause and effect’ vs ‘cause from effect’) but the pair of nouns is fixed, so the answer is ‘effect’.",
          mine: "‘Result’ is the closest everyday synonym but breaks the collocation. IELTS summary gaps are frequently fixed phrases: cause and effect, supply and demand, trial and error.",
          trap: "A synonym that cannot complete a fixed phrase.",
          next: "Learn academic collocations as units: if one half is in the question, the other half is almost certainly the answer."
        },
        vocab: [["evidence base", "the body of research supporting a claim"], ["modest", "not large in size or amount"]]
      }
    ],
    technique: {
      focus: "GT Section 2/3 articles blend narrative with research findings. Separate anecdote from study evidence.",
      bullets: [
        "Track which paragraph reports a plan and which reports a completed action — question setters exploit this.",
        "In summary completions, direct copies are common; do not upgrade the vocabulary yourself.",
        "Watch for fixed collocations (dumping ground, mains supply, cause and effect).",
        "MATCHFEAT/MATCHINFO answers may repeat in a set, so do not cross out options you have used.",
        "If a question asks 'why', find the connector word (because, so, which) and read the clause it introduces."
      ]
    }
  });
})();
