/* =========================================================================
   IELTS MASTERY — READING BANK (Academic, part 3)
   Passage 3: Aeroponics — 14 items (MCQ x5, MATCHEND x4, FLOWCHART x5)
   ========================================================================= */
(function () {
  var BANK = (window.BANK_READING = window.BANK_READING || { academic: [], general: [] });

  BANK.academic.push({
    id: "AC-P3-AEROPONICS",
    title: "Roots in Thin Air",
    subtitle: "Aeroponics and the search for a disease-free seed potato",
    module: "academic",
    part: 3,
    difficulty: "advanced",
    band: "7.5–8.0",
    topic: "Science & Agriculture",
    wordCount: 921,
    estimatedMinutes: 22,
    text: [
      { label: "A", p: "A potato plant grown in a field spends most of its energy on leaves, stems and roots, and only a fraction on the tubers that farmers actually harvest. It also competes with weeds, is exposed to whatever weather arrives, and, crucially, can be re-infected with viruses carried by aphids that overwinter in nearby crops. Because potatoes are propagated not from true seed but from tubers, any virus present in a mother plant is passed directly to its offspring, and yields decline with each generation of re-use. This is why seed potato production has traditionally depended on cool, windy regions where aphid populations stay low, a geographical accident that has shaped the economics of the crop for a century." },
      { label: "B", p: "Aeroponics offers an escape from geography. In this system, plants are suspended with their roots enclosed in a dark chamber and are fed through a fine mist of water and dissolved nutrients, applied in short bursts every few minutes. Nothing touches the roots except air and droplets. The technique is not new — it was explored in the nineteenth century as a way of studying root growth, and later refined by researchers who needed to observe roots without digging them up — but its commercial application to seed potatoes is recent. The advantage for seed production is that the entire operation can be housed indoors, behind insect-proof screens, in a building that can be built anywhere, including close to the farms that need the seed." },
      { label: "C", p: "The biology that made the system attractive is straightforward. A potato plant can be grown from a small cutting taken from a virus-free parent that has been tested in a laboratory. Suspended in mist, the cutting does not need to produce a large tuber; instead, it grows many times the usual number of small tubers, each of which can be harvested, stored and planted. In trials, this multiplication has produced several times the harvest of conventional methods from the same floor area, and the small size of aeroponic tubers has turned out to be an advantage rather than a defect, because they can be planted without being cut, which reduces the risk of transferring disease through a shared knife." },
      { label: "D", p: "Set against these results are the costs. An aeroponic facility is a factory: it needs a sealed building, a pump that never fails, filters, sensors and a reliable supply of electricity and clean water, and skilled staff who can recognise a blockage or an infection before it spreads through a whole batch. When a misting nozzle clogs at night, roots can dry out within hours, and because the plants share one nutrient reservoir, a single contaminated batch can become a system-wide incident. Capital costs per square metre are therefore high, and the equipment demands maintenance schedules that smallholder cooperatives — the group most often named as beneficiaries — can rarely fund on their own." },
      { label: "E", p: "Independent assessments have generally been cautious. An analysis of published trials concluded that aeroponic seed production is technically proven for potatoes but that the economic case depends almost entirely on local prices for certified seed and on the reliability of the local electricity supply; where power is intermittent, the authors noted, a generator and fuel become part of the calculation and the advantage narrows sharply. Another review found that many reported yields came from small experimental units and that scaling to commercial volumes involves problems of airflow, temperature control and labour that trials do not reveal. Several institutions are responding by developing hybrid models in which aeroponic mini-tubers are produced centrally and then multiplied by farmers in the field, using the expensive technology only where it adds the most value." },
      { label: "F", p: "What the debate exposes is a pattern familiar from other agricultural technologies. A method that performs impressively in a controlled trial may perform quite differently on a farm without a dependable grid, and the gap between the two is usually described as a problem of adoption rather than of engineering. Some researchers argue that this framing is itself misleading, because it places responsibility on farmers rather than on the design of the technology. The more useful question, they suggest, is not whether aeroponics works, but where in the seed supply chain a capital-intensive, climate-independent method produces the greatest benefit for the least risk — a question of systems rather than of crops." }
    ],
    questions: [
      {
        n: 27, type: "MCQ", diff: "advanced", bandLevel: "Band 7.5",
        q: "According to Paragraph A, why does re-planting a potato crop tend to reduce yields?",
        options: [
          "A Because tubers produced in a second year are smaller.",
          "B Because viruses are carried over from one generation to the next.",
          "C Because the plants compete with weeds more severely.",
          "D Because aphids eat the developing tubers."
        ],
        answer: "B", accepted: ["B", "Because viruses are carried over from one generation to the next."],
        ex: {
          test: "Selecting the cause that the passage states over three closely competing causes that are mentioned but do not explain yield decline.",
          where: "Paragraph A, third sentence.",
          quote: "any virus present in a mother plant is passed directly to its offspring, and yields decline with each generation of re-use",
          why: "Option B restates the explicit causal chain: virus in mother plant → passed to offspring → declining yields. The words ‘with each generation of re-use’ in the passage match ‘re-planting’ in the question.",
          mine: "Option C is tempting because weeds are mentioned, but the passage never links weeds to yield decline across generations. Option D misplaces aphids: they carry viruses, they do not eat tubers in this text. Option A invents a comparison of tuber size that the passage makes only about aeroponic tubers later.",
          trap: "Three true statements from the same paragraph, only one of which answers the question asked.",
          next: "For MCQ, mark each option T (true in the passage), F (not stated) or A (answers the question). Only A earns the mark."
        },
        vocab: [["propagated", "grown or produced from a parent plant"], ["overwinter", "to survive through the winter"]]
      },
      {
        n: 28, type: "MCQ", diff: "advanced", bandLevel: "Band 7",
        q: "What does the writer say about the age of the aeroponic technique?",
        options: [
          "A It was invented by potato researchers in the 1990s.",
          "B Its basic principle has been known for well over a century.",
          "C It was developed from an earlier system used to grow rice.",
          "D It was discovered accidentally during the study of aphids."
        ],
        answer: "B", accepted: ["B"],
        ex: {
          test: "Separating the age of the method from the age of its commercial application — the passage distinguishes these explicitly.",
          where: "Paragraph B, third sentence.",
          quote: "The technique is not new — it was explored in the nineteenth century as a way of studying root growth — but its commercial application to seed potatoes is recent.",
          why: "Nineteenth-century exploration is 'well over a century' ago, so option B matches. The concession after 'but' concerns commercial use, which the question does not ask about.",
          mine: "Option A results from reading the second half of the sentence and ignoring the first clause. The signal ‘but’ warns you that two different timeframes are being contrasted.",
          trap: "A sentence containing two time references, only one of which answers the question.",
          next: "When a sentence contains ‘but’, the question usually targets one half. Identify which half the question is about before choosing."
        },
        vocab: [["commercial application", "use for business or profit"], ["refine", "to improve something through small changes"]]
      },
      {
        n: 29, type: "MCQ", diff: "advanced", bandLevel: "Band 7.5",
        q: "In Paragraph C, the small size of aeroponic tubers is presented as",
        options: [
          "A a limitation that must be overcome before planting.",
          "B an unexpected benefit that reduces the spread of disease.",
          "C a reason why the system requires fewer staff.",
          "D evidence that the technique cannot replace field production."
        ],
        answer: "B", accepted: ["B"],
        ex: {
          test: "Recognising a rhetorical move: something that appears negative is re-framed as positive.",
          where: "Paragraph C, final sentence.",
          quote: "the small size of aeroponic tubers has turned out to be an advantage rather than a defect, because they can be planted without being cut, which reduces the risk of transferring disease through a shared knife",
          why: "‘Has turned out to be an advantage rather than a defect’ is precisely ‘an unexpected benefit’, and the benefit given is reduced disease transfer, so option B is supported by both halves of the sentence.",
          mine: "Option A uses the word ‘defect’ from the passage but reverses its logic — the writer says it is not a defect. Option D is a general claim about the technology that Paragraph C does not make.",
          trap: "Answer options that borrow the passage's vocabulary but invert its argument.",
          next: "Cover the options and predict the answer from the passage first. Then find the option that matches your prediction."
        },
        vocab: [["defect", "a fault or weakness"], ["batch", "a group of things produced together"]]
      },
      {
        n: 30, type: "MCQ", diff: "advanced", bandLevel: "Band 8",
        q: "Which risk does the writer emphasise most strongly in Paragraph D?",
        options: [
          "A The nutrient solution may become too concentrated.",
          "B Farmers may plant the tubers at the wrong depth.",
          "C One mechanical failure can damage an entire crop.",
          "D Staff may be unwilling to work in sealed buildings."
        ],
        answer: "C", accepted: ["C"],
        ex: {
          test: "Distinguishing the emotionally loaded example from the systematic risk the paragraph develops.",
          where: "Paragraph D, third and fourth sentences.",
          quote: "When a misting nozzle clogs at night, roots can dry out within hours, and because the plants share one nutrient reservoir, a single contaminated batch can become a system-wide incident.",
          why: "Both examples given — a clogged nozzle and a contaminated reservoir — are cases of one local problem becoming a whole-system failure. Option C generalises exactly this pattern and is reinforced by 'Capital costs … are therefore high'.",
          mine: "Option A is plausible in real agriculture but is never mentioned. Option D contradicts the passage, which says staff must be skilled, not unwilling. Candidates who choose a 'reasonable-sounding' option are using world knowledge rather than the text.",
          trap: "Realistic distractors that are not in the passage at all.",
          next: "For 'which risk' questions, count how many sentences the paragraph spends on each risk. The most emphasised risk is almost always the one illustrated twice."
        },
        vocab: [["reservoir", "a large store of liquid"], ["contaminated", "made impure or infected"]]
      },
      {
        n: 31, type: "MCQ", diff: "advanced", bandLevel: "Band 8",
        q: "What is the main point of Paragraph F?",
        options: [
          "A That farmers are usually responsible for the failure of new technologies.",
          "B That controlled trials are the best way to judge agricultural innovation.",
          "C That the success of a technology should be judged by its place in the wider system.",
          "D That aeroponics has already failed to benefit small farms."
        ],
        answer: "C", accepted: ["C"],
        ex: {
          test: "Identifying the writer's conclusion rather than the view the writer reports and rejects.",
          where: "Paragraph F, final sentence.",
          quote: "The more useful question … is not whether aeroponics works, but where in the seed supply chain a capital-intensive, climate-independent method produces the greatest benefit for the least risk — a question of systems rather than of crops.",
          why: "The last sentence states the writer's position: evaluate technology by its role in the system, not in isolation. Option C is a direct paraphrase of 'a question of systems'.",
          mine: "Option A reflects 'some researchers argue' — a reported view the writer then qualifies, so it is not the main point. Option B is contradicted by the paragraph's scepticism about trial results.",
          trap: "A reported opinion (attributed to researchers) sitting in the same paragraph as the writer's own view.",
          next: "Check the subject of each sentence. If the paragraph says 'some researchers argue', that is not the writer's conclusion."
        },
        vocab: [["framing", "the way an issue is presented"], ["capital-intensive", "requiring a lot of money to start or run"]]
      },
      {
        n: 32, type: "MATCHEND", diff: "advanced", bandLevel: "Band 7",
        q: "Seed potato production is traditionally located in cool, windy regions because",
        options: [
          "A tubers are easier to lift from light, dry soil.",
          "B such regions are close to the largest markets.",
          "C planting can begin earlier than in warm areas.",
          "D aphid numbers there remain low.",
          "E viruses cannot survive in cold weather.",
          "F transport costs are lower than elsewhere."
        ],
        answer: "D", accepted: ["D"],
        ex: {
          test: "Completing a cause-and-effect sentence whose cause is stated in a subordinate clause.",
          where: "Paragraph A, final sentence.",
          quote: "seed potato production has traditionally depended on cool, windy regions where aphid populations stay low, a geographical accident that has shaped the economics of the crop for a century",
          why: "The passage gives exactly one reason: low aphid populations. Option D matches word for word. Note that the passage does not say cold weather kills viruses — only that fewer aphids means less virus transmission.",
          mine: "Option E is the classic over-reading. ‘Cool, windy’ plus a virus discussion leads candidates to construct a causal chain that the passage deliberately does not supply.",
          trap: "An ending that completes the sentence logically in real-world terms but is not supported by the passage.",
          next: "For sentence endings, check that your choice is stated, not merely plausible. IELTS tests reading, not reasoning about agriculture."
        },
        vocab: [["geographical accident", "a feature that happens to exist in one place"], ["shaped", "strongly influenced"]]
      },
      {
        n: 33, type: "MATCHEND", diff: "advanced", bandLevel: "Band 7.5",
        q: "The aeroponic system can be located almost anywhere because",
        options: [
          "A the plants are grown in complete darkness.",
          "B no soil or natural light from outside needs to enter the growing area.",
          "C the crop can be harvested without human contact.",
          "D the building does not need a power supply.",
          "E the system can operate without nutrients.",
          "F it does not require any form of water."
        ],
        answer: "B", accepted: ["B"],
        ex: {
          test: "Inferring a consequence of a described physical setup rather than locating a sentence that states it directly.",
          where: "Paragraph B, final sentence, read together with the description of the system.",
          quote: "the entire operation can be housed indoors, behind insect-proof screens, in a building that can be built anywhere",
          why: "Everything the plants need — water, nutrients, enclosure — is supplied inside a sealed building; roots are in a dark chamber, and the sun is replaced by indoor conditions. Because the crop does not depend on soil or outside light, geography becomes irrelevant. That reasoning supports option B, which is also consistent with ‘indoors, behind insect-proof screens’.",
          mine: "Option D contradicts the passage, which specifies ‘a reliable supply of electricity’. Option A is partially true of the root chamber but is not the reason the facility can be built anywhere.",
          trap: "A partially accurate statement that does not answer the ‘because’ of the question.",
          next: "For ‘because’ endings, every element of your option must be present in the passage's explanation — not just one detail."
        },
        vocab: [["enclosed", "surrounded or sealed in"], ["insect-proof", "designed to keep insects out"]]
      },
      {
        n: 34, type: "MATCHEND", diff: "advanced", bandLevel: "Band 8",
        q: "Independent reviews of aeroponics have concluded that its economic value",
        options: [
          "A depends greatly on the price of certified seed and the local power supply.",
          "B has been proved in every country where trials have taken place.",
          "C is limited to research institutions rather than commercial farms.",
          "D relies on farmers being trained in laboratory techniques.",
          "E increases as equipment becomes more complex.",
          "F cannot be assessed until further field trials are completed."
        ],
        answer: "A", accepted: ["A"],
        ex: {
          test: "Summarising a conditional argument in which an ‘almost entirely’ qualifier is decisive.",
          where: "Paragraph E, second sentence.",
          quote: "the economic case depends almost entirely on local prices for certified seed and on the reliability of the local electricity supply",
          why: "Option A keeps both conditions and softens ‘almost entirely’ into ‘greatly’, which preserves the meaning. Paragraph E is explicitly attributed to independent assessments, matching the question's ‘independent reviews’.",
          mine: "Option F looks cautious and therefore safe, but the passage says the method is ‘technically proven’, so the reviewers did reach conclusions. Option B overstates: the reviews are described as cautious, not universal.",
          trap: "A qualifier (‘almost entirely’, ‘technically proven but’) removed by an option that sounds academic.",
          next: "Watch degree words: prove / suggest / depend on / may. Changing the strength of a claim changes the answer."
        },
        vocab: [["qualifier", "a word that limits the strength of a statement"], ["intermittent", "stopping and starting again"]]
      },
      {
        n: 35, type: "MATCHEND", diff: "advanced", bandLevel: "Band 8",
        q: "Some critics of the ‘problem of adoption’ argument believe that",
        options: [
          "A farmers should be trained in maintenance before equipment is installed.",
          "B trials should be repeated in at least three different climates.",
          "C asking how farmers can adapt puts the blame in the wrong place.",
          "D agricultural research funding has been misdirected for decades.",
          "E technology transfer between countries should be restricted.",
          "F economics and biology should be studied separately."
        ],
        answer: "C", accepted: ["C"],
        ex: {
          test: "Following a second-order argument: a critique of how a problem is framed.",
          where: "Paragraph F, third and fourth sentences.",
          quote: "Some researchers argue that this framing is itself misleading, because it places responsibility on farmers rather than on the design of the technology.",
          why: "The critics claim the ‘adoption’ framing shifts responsibility onto farmers. Option C paraphrases this exactly: putting the blame in the wrong place.",
          mine: "Option A is a practical-sounding solution that no one in the passage proposes. ‘Adoption’ problems do involve training in everyday life, which makes this distractor feel natural — but IELTS rewards only textual support.",
          trap: "A distractor that is logical for readers who know about agricultural extension work.",
          next: "Before matching endings, underline the grammatical subject of the original sentence. Here it is a group of critics, so the ending must be what they believe."
        },
        vocab: [["framing", "the way something is described"], ["misleading", "giving a wrong impression"]]
      },
      {
        n: 36, type: "FLOWCHART", diff: "advanced", bandLevel: "Band 7.5", wordLimit: "Choose ONE WORD ONLY from the passage for each gap",
        q: "Gap 1 — A small cutting is taken from a parent plant that has been tested and found free of ______ .",
        answer: "virus", accepted: ["virus", "viruses"],
        ex: {
          test: "Locating a noun in a process description where the paraphrase is ‘free of’ for ‘virus-free’.",
          where: "Paragraph C, second sentence.",
          quote: "A potato plant can be grown from a small cutting taken from a virus-free parent that has been tested in a laboratory.",
          why: "‘Tested and found free of virus’ expands the compound adjective ‘virus-free’. The flowchart keeps ‘small cutting’ and ‘parent’ from the passage, confirming the location.",
          mine: "Answers such as ‘aphids’ or ‘disease’ exceed the specification or are not the tested entity: the laboratory tests the parent plant for viruses, and aphids are the carriers in the field, not the thing being eliminated here.",
          trap: "The carrier (aphid) competing with the pathogen (virus).",
          next: "In flow-charts, keep the passage's own sequence markers (a small cutting taken from … tested … grown) and fill gaps only from the matching sentence."
        },
        vocab: [["cutting", "a small piece of a plant used to grow a new one"], ["virus-free", "containing no viruses"]]
      },
      {
        n: 37, type: "FLOWCHART", diff: "advanced", bandLevel: "Band 7.5", wordLimit: "Choose ONE WORD ONLY from the passage for each gap",
        q: "Gap 2 — The roots are enclosed in a dark ______ and receive water and nutrients as a fine mist.",
        answer: "chamber", accepted: ["chamber"],
        ex: {
          test: "Recognising a technical container noun in a paraphrase-heavy description.",
          where: "Paragraph B, second sentence.",
          quote: "plants are suspended with their roots enclosed in a dark chamber and are fed through a fine mist of water and dissolved nutrients",
          why: "The gap retains the exact wording of the passage — ‘enclosed in a dark …’ — so the noun ‘chamber’ is a direct copy. ‘Mist’ is already given in the gap sentence, so it cannot be the answer.",
          mine: "Answering ‘mist’ is the most common error, because the sentence mentions a fine mist immediately after the gap; but the gap needs the physical space in which the roots sit.",
          trap: "A repeated word from the same sentence placed as bait.",
          next: "Never use a word already printed in the summary. If your answer appears in the question text, look again."
        },
        vocab: [["suspended", "hung so as not to touch anything"], ["dissolved", "mixed into a liquid until it disappears"]]
      },
      {
        n: 38, type: "FLOWCHART", diff: "advanced", bandLevel: "Band 8", wordLimit: "Choose ONE WORD ONLY from the passage for each gap",
        q: "Gap 3 — In an aeroponic unit, each plant produces many more small ______ than it would in a field.",
        answer: "tubers", accepted: ["tubers"],
        ex: {
          test: "Understanding a contrast between conventional and aeroponic productivity.",
          where: "Paragraph C, third sentence.",
          quote: "the cutting does not need to produce a large tuber; instead, it grows many times the usual number of small tubers",
          why: "The flowchart's ‘many more small’ mirrors ‘many times the usual number of small’. The noun is tubers and it is a direct copy from the passage.",
          mine: "‘Cuttings’ belongs to the previous step of the flowchart. Following the process order prevents this error.",
          trap: "A word from an adjacent step of the same process.",
          next: "Trace the flowchart arrow by arrow; each gap belongs to one sentence, not to the previous one."
        },
        vocab: [["tuber", "a thick underground stem that stores food, such as a potato"], ["multiplication", "the process of increasing in number"]]
      },
      {
        n: 39, type: "FLOWCHART", diff: "advanced", bandLevel: "Band 8", wordLimit: "Choose ONE WORD ONLY from the passage for each gap",
        q: "Gap 4 — Because the tubers are small, they can be planted without being cut, which lowers the risk of disease spreading by a shared ______ .",
        answer: "knife", accepted: ["knife"],
        ex: {
          test: "Tracking a causal chain across two clauses and completing its endpoint.",
          where: "Paragraph C, final sentence.",
          quote: "they can be planted without being cut, which reduces the risk of transferring disease through a shared knife",
          why: "‘Lower’ paraphrases ‘reduces’, ‘disease spreading’ paraphrases ‘transferring disease’, and ‘shared’ is retained exactly — so the missing noun is knife.",
          mine: "Answers such as ‘batch’ come from Paragraph D and belong to a different cause of disease spread. ‘Tool’ is a reasonable synonym but is not what the passage says.",
          trap: "A synonym that would make sense but is not in the text; completions from the passage demand the text's own word.",
          next: "Use the passage's word, not your own. IELTS marks the exact word in completion tasks."
        },
        vocab: [["transfer", "to move from one place or thing to another"], ["hygiene", "practices that keep things clean and safe"]]
      },
      {
        n: 40, type: "FLOWCHART", diff: "advanced", bandLevel: "Band 8", wordLimit: "Choose ONE WORD ONLY from the passage for each gap",
        q: "Gap 5 — Under the hybrid model, mini-tubers are produced at a central site and then multiplied by farmers in the ______ before being planted.",
        answer: "field", accepted: ["field", "fields"],
        ex: {
          test: "Selecting the location noun that distinguishes the hybrid model from the fully indoor system.",
          where: "Paragraph E, final sentence.",
          quote: "aeroponic mini-tubers are produced centrally and then multiplied by farmers in the field",
          why: "The final sentence of Paragraph E supplies both halves of the flowchart step: ‘produced centrally’ and ‘multiplied by farmers in the field’. The gap is the location, so ‘field’ is correct.",
          mine: "‘Laboratory’ is tempting because the expensive technology is called 'the expensive technology' rather than a laboratory, and the first cutting is tested in one. But the hybrid model's second stage is deliberately moved outdoors.",
          trap: "Two locations in the passage (laboratory, field) belonging to different stages.",
          next: "For process questions about models or variants, note where each stage happens. Location words are frequently the answer."
        },
        vocab: [["hybrid model", "a system combining two different approaches"], ["smallholder", "a farmer with a small area of land"]]
      }
    ],
    technique: {
      focus: "Passage 3 carries the highest difficulty and the most opinion language. Expect abstract nouns and attributed views.",
      bullets: [
        "MCQ options are often all true; the mark goes to the one that answers the question asked.",
        "Track who says what: 'some researchers argue' is not the writer's view.",
        "Sentence endings must be supported in the passage, not merely logical in the real world.",
        "Flow-chart gaps are usually direct copies — one word, exact spelling from the passage.",
        "If you are short of time, do the flow-chart first (order follows the passage) and leave global MCQs to the end."
      ]
    }
  });
})();
