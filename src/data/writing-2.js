/* =========================================================================
   IELTS MASTERY — WRITING BANK 2
   Additional Academic Task 1 (pie chart, table) and Task 2 types
   (advantages/disadvantages, positive/negative development, direct questions).
   ========================================================================= */
(function () {
  var BANK = (window.BANK_WRITING = window.BANK_WRITING || { tasks: [] });

  BANK.tasks.push(
    {
      id: "W-A1-PIE-1",
      module: "academic", task: 1, visualType: "Pie charts",
      title: "Household energy use in two years",
      topicCategory: "Environment",
      difficulty: "intermediate", band: "6.0–6.5",
      timeMinutes: 20, minWords: 150,
      prompt: "The two pie charts below show the proportion of household energy used for different purposes in one country in 2005 and in 2025.\n\n[2005 — heating 54%, water heating 22%, lighting and appliances 17%, cooking 7%]\n[2025 — heating 38%, water heating 24%, lighting and appliances 31%, cooking 7%]",
      modelPlan: [
        "Introduction: two years, one country, one set of categories.",
        "Overview: heating fell sharply and remains the largest single use; appliances and lighting nearly doubled their share; cooking was unchanged.",
        "Body 1: the three categories that changed, with figures.",
        "Body 2: contrast the total pattern — the shift is away from space heating towards electrical devices.",
        "Pie charts are about proportions, not quantities: say 'the proportion of energy used for heating' and avoid implying that total consumption changed."
      ],
      examinerNotes: {
        TA: "Do not describe each pie separately from start to finish — a comparison is expected, and the overview should state the relationship between the two.",
        CC: "Two paragraphs, each with a clear focus: one on change, one on the resulting pattern. Comparisons within a sentence link the pies naturally.",
        LR: "Proportional language: accounted for, represented, made up, the largest share, a negligible proportion, almost doubled.",
        GRA: "'The proportion of energy devoted to heating fell from 54% to 38%' — check article use with percentages and no 'of' where it is not needed."
      },
      samples: null
    },
    {
      id: "W-A1-TABLE-1",
      module: "academic", task: 1, visualType: "Table",
      title: "Public transport use in five cities",
      topicCategory: "Transport",
      difficulty: "advanced", band: "7.0–7.5",
      timeMinutes: 20, minWords: 150,
      prompt: "The table below shows the number of journeys made by public transport in five cities in 2010 and 2024, together with the percentage of those journeys made by rail rather than by bus.\n\n[City — total journeys (millions) 2010 / 2024 — % by rail 2010 / 2024]\n[Harburg — 320 / 410 — 22 / 41]\n[Montela — 780 / 690 — 58 / 61]\n[Riverton — 145 / 260 — 12 / 34]\n[Okawa — 640 / 1,050 — 71 / 66]\n[Santurce — 210 / 205 — 30 / 29]",
      modelPlan: [
        "Introduction: name the two datasets in the table and the period.",
        "Overview: four cities increased total journeys while one declined; rail's share rose markedly in the two smaller systems but changed little in the largest.",
        "Body 1: totals — Okawa's rapid growth (640→1050m), Riverton's proportional growth, Montela's decline, Santurce's stability.",
        "Body 2: rail share — Harburg and Riverton shifted heavily towards rail, whereas Montela, Okawa and Santurce remained stable.",
        "Tables reward selective grouping: pick the most striking contrasts rather than reporting all twenty numbers."
      ],
      examinerNotes: {
        TA: "You cannot report every cell. Selecting and grouping the significant patterns is what earns Band 7+.",
        CC: "Use comparative sentences rather than item-by-item description: 'While Okawa's total rose by more than half, Santurce's was effectively static.'",
        LR: "Rise/fall collocations plus approximation: just over, roughly, in the region of, respectively.",
        GRA: "Be careful with 'respectively' constructions and with comparing proportions versus totals — a common Band 6 error is mixing them."
      },
      samples: null
    },

    /* ---------------- TASK 2: ADVANTAGES / DISADVANTAGES ---------------- */
    {
      id: "W-A2-ADVDIS-1",
      module: "academic", task: 2, essayType: "Advantages / Disadvantages",
      title: "University students living away from home",
      topicCategory: "Education",
      difficulty: "intermediate", band: "6.5–7.0",
      timeMinutes: 40, minWords: 250,
      prompt: "In many countries, students leave their family home to attend university, often in a different city or region.\n\nDo the advantages of this development outweigh the disadvantages?",
      modelPlan: [
        "Introduction: restate the situation, then state which side outweighs the other. 'Do the advantages outweigh…' requires a verdict, not a list.",
        "Body 1 (advantages): independence and self-management, wider social and professional networks, exposure to diversity, greater responsibility for finances and health.",
        "Body 2 (disadvantages): financial strain and debt, isolation and mental-health pressure, reduced family support, higher living costs that exclude poorer students — then rebut where you can.",
        "Conclusion: verdict restated with the strongest single supporting reason.",
        "Do not drift into 'both have pros and cons' — take a position and defend it."
      ],
      examinerNotes: {
        TA: "Parts of the question form a pair: disadvantages must be presented genuinely, even while you argue that advantages dominate.",
        CC: "Mirror the structure: advantage paragraph and disadvantage paragraph should be of similar length so the balance looks deliberate.",
        LR: "Useful items: transition to adulthood, financial burden, support network, take responsibility for, mitigating factor.",
        GRA: "Use concession + main clause: 'Although living costs can be prohibitive, the independence gained…'."
      },
      samples: {
        band6: "Nowadays many students study at a university in another city and they do not live with their family. In my opinion this has more advantages than disadvantages.\n\nThe first advantage is independence. When students live alone, they must cook, clean and manage their money. This helps them to become an adult. Also, they meet many different people from different places, so they learn about other cultures. This is very useful for their future job too, because they make friends and contacts.\n\nHowever, there are some disadvantages. Living away from home is expensive. Students pay rent, food and transport, so they need a part-time job and this takes time from study. Some students feel lonely and stressed, especially in the first year, because their family is far away.\n\nIn conclusion, I think the advantages are bigger. But universities should help students with cheap housing and counselling, so the disadvantages are smaller.",
        band7: "Studying at a university away from home has become the norm in many countries, and the question of whether this benefits students more than it costs them is a reasonable one. I would argue that the advantages clearly outweigh the disadvantages, especially in the long term.\n\nThe strongest advantage is the development of independence. Managing a household, a budget and a timetable without parental supervision forces young people to take responsibility, and these skills persist long after graduation. A second benefit is social range: students who move away encounter people from different regions and backgrounds, which broadens their outlook and, in professional terms, their network of contacts.\n\nAgainst this, the financial and emotional costs are real. Rent and living expenses in university cities are often high, and many students take part-time work that competes with study time; in some cases, the debt accumulated has consequences for years afterwards. There is also a well-documented risk of loneliness, particularly in the first year, when established friendships have been left behind.\n\nIn my view, these disadvantages are serious but they are largely temporary and can be mitigated. Universities can provide affordable accommodation, counselling and structured social activities, while grants reduce the financial pressure. The benefits of independence, by contrast, are cumulative and last a lifetime. For this reason, the advantages outweigh the disadvantages.",
        band8: "Leaving home to study is treated in many societies as a rite of passage, yet it also places a substantial financial and psychological burden on young people at precisely the moment they are least equipped to carry it. On balance, I judge the advantages to outweigh the disadvantages, though not by as wide a margin as is usually assumed.\n\nThe case for moving away rests on two durable gains. The first is functional: students who live independently acquire skills — budgeting, cooking, negotiating with landlords — that a supervised home does not teach, and research on graduate outcomes repeatedly links such self-management to later career resilience. The second is social. A university city concentrates people from different regions and social classes into a single environment, and the networks formed there shape employment opportunities for decades afterwards.\n\nThe costs, however, are not trivial. Housing in university cities is often the most expensive accommodation a young person will ever rent per square metre, and the pressure to work part-time frequently reduces the hours available for study — a burden that falls hardest on students from low-income families, for whom the alternative of living at home is often a financial necessity rather than a preference. Mental-health services in university towns report particular strain in the first year, when support networks are at their weakest.\n\nWhat makes the balance favourable is not that the costs are small but that they are addressable. Targeted grants, guaranteed affordable housing and early pastoral support can remove much of the sting, whereas the independence and networks gained cannot be acquired any other way. The advantages therefore outweigh the disadvantages, provided societies are willing to absorb the transitional costs that make them possible.",
        band9: "The question of whether students gain or lose by leaving home invites a false symmetry. Advantaged students gain almost everything and risk almost nothing; disadvantaged students may gain the same freedoms while risking financial failure. The aggregate verdict — that the advantages outweigh the disadvantages — is therefore true but unhelpful unless it is qualified by who pays the price.\n\nThree advantages are well established. Living independently converts a young person from a dependent into a householder, which accelerates maturity in a way no curriculum can. Proximity to a university's social and professional density multiplies contacts, and contacts translate into opportunity. And distance from a familiar environment, uncomfortable though it is, reliably loosens the assumptions people inherit, which is arguably the principal intellectual benefit of higher education.\n\nThe disadvantages cluster differently. Their financial intensity is concentrated in a subset of students: those without family reserves, who absorb the risk of high urban rents through part-time work that displaces study, or through debt that constrains their later choices. Psychologically, the first year exposes students to isolation at the very moment their longest-standing friendships end, and universities compound the problem by treating mental-health support as an ancillary service rather than core infrastructure.\n\nMy verdict, then, is conditional rather than absolute: the advantages outweigh the disadvantages for those whose institutions and governments have made independent study affordable and supported, and they do not for those who must improvise. The policy conclusion follows directly — a country that expects students to leave home should expect itself to fund the transition, since the evidence suggests the investment pays for itself many times over in graduate capability.",
      }
    },

    /* ---------------- TASK 2: POSITIVE / NEGATIVE DEVELOPMENT ---------------- */
    {
      id: "W-A2-POSNEG-1",
      module: "academic", task: 2, essayType: "Positive / negative development",
      title: "The rise of online shopping",
      topicCategory: "Technology & Society",
      difficulty: "intermediate", band: "6.5–7.0",
      timeMinutes: 40, minWords: 250,
      prompt: "In recent years, a growing number of people have begun to do most of their shopping online rather than in physical shops.\n\nIs this a positive or negative development?",
      modelPlan: [
        "Introduction: describe the trend neutrally, then state in one sentence whether you consider it positive, negative, or positive overall with reservations.",
        "Body 1: the positive case — convenience and price competition for consumers, market access for small businesses, less travel and lower emissions per purchase, accessibility for those with mobility difficulties or in remote areas.",
        "Body 2: the negative case — decline of high streets and the social function of shopping districts, packaging waste and delivery emissions, employment conditions in warehouses, loss of local tax revenue — and your weighing of these.",
        "Conclusion: judgement, plus the condition under which it holds (e.g. if returns and packaging are regulated).",
        "You may argue a mixed verdict, but it must be explicit: 'I consider it broadly positive, though the environmental costs are avoidable.'"
      ],
      examinerNotes: {
        TA: "The question asks you to judge the whole development, not to list two sides equally. Take responsibility for a conclusion.",
        CC: "Use contrast markers with purpose: 'While critics point to…, the more decisive consideration is…'.",
        LR: "Range for this topic: retail footfall, impulse purchase, last-mile delivery, packaging waste, convenience, tax base.",
        GRA: "Describe trends with accurate aspect: 'has grown steadily', 'has been transformed', 'continues to rise'."
      },
      samples: null
    },

    /* ---------------- TASK 2: DIRECT QUESTIONS ---------------- */
    {
      id: "W-A2-DIRECT-1",
      module: "academic", task: 2, essayType: "Direct questions",
      title: "News and trust",
      topicCategory: "Media & Society",
      difficulty: "advanced", band: "7.5–8.0",
      timeMinutes: 40, minWords: 250,
      prompt: "Most people now obtain their news from social media platforms rather than from newspapers, radio or television.\n\nWhat problems does this create for society? How could these problems be reduced?",
      modelPlan: [
        "Introduction: rephrase the trend and state that both questions will be addressed.",
        "Body 1 (problems): fragmented audiences and filter bubbles, speed over accuracy, the collapse of shared factual reference points, difficulty distinguishing reporting from opinion, concentration of power in a few platforms, effects on public trust and health decisions.",
        "Body 2 (reduction): platform regulation and transparency over recommendation algorithms, media literacy in schools, public funding of independent journalism, clear labelling of opinion and paid content, verification standards demonstrably enforced.",
        "Conclusion: the underlying problem is an incentive structure, so both regulation and education are required.",
        "For 'how could' questions, be specific: an example of a measure is worth more than a general call for 'better education'."
      ],
      examinerNotes: {
        TA: "Answer both questions fully. A good structure pairs each problem with its remedy, or groups problems then remedies — but never leaves one question unaddressed.",
        CC: "Use the introduction and topic sentences as a map: 'The principal problems are three…', 'Three responses are available…'.",
        LR: "Precise media vocabulary: misinformation, editorial standards, algorithmic amplification, echo chamber, press freedom, verification.",
        GRA: "Passive constructions are natural for policy ('should be required to', 'could be made public'), but keep some active sentences to show range."
      },
      samples: null
    }
  );

  /* ---------------------------------------------------------------- GT Task 1
     Semi-formal letter: writing to someone you know in an official capacity
     (a landlord, a course tutor, a club secretary). The register sits between
     the formal complaint and the informal note, and IELTS marks it explicitly. */
  BANK.tasks.push({
    id: "W-GT-SEMIFORMAL-1",
    module: "general",
    task: 1,
    formal: false,
    semiFormal: true,
    title: "Request to a landlord about a broken heating system",
    topicCategory: "Accommodation",
    difficulty: "intermediate",
    band: "6.0–7.0",
    timeMinutes: 20,
    minWords: 150,
    prompt: "You rent a flat from a private landlord whom you have met twice and address by their surname. The heating has been unreliable for ten days and a repair was promised last week but nobody has come.\n\nWrite a letter to your landlord. In your letter:\n• describe the problem and when it started\n• explain how it is affecting you\n• suggest what should happen next",
    modelPlan: [
      "Salutation: 'Dear Mr Okafor' — surname only, no first name, but not 'Dear Sir or Madam' either, because you have met.",
      "Opening line: refer to the previous arrangement ('Further to our conversation on 6 May…') so the letter has a shared context.",
      "Paragraph 2: the problem — dates, rooms affected, what you have already tried (bleeding radiators, checking the boiler pressure).",
      "Paragraph 3: the effects — practical, specific and controlled in tone ('I have been heating the flat with an electric heater, which is expensive').",
      "Paragraph 4: a suggestion with a date ('Could you ask the engineer to come before Friday…'), plus an offer to be flexible about access.",
      "Sign-off: 'Kind regards' or 'Best wishes' + first name. 'Yours faithfully' would be too distant; 'Love from' would be too close."
    ],
    examinerNotes: {
      "TA": "Semi-formal letters are marked on covering all three bullets AND on choosing a register between the two extremes. Being too casual ('Hi, the boiler's dead again!') loses marks just as surely as writing like a lawyer.",
      "CC": "Four short paragraphs, each with one job. Use the shared history of the tenancy as the linking thread rather than formal connectors.",
      "LR": "Precise domestic vocabulary earns credit here: boiler, radiator, thermostat, engineer visit, access, deposit, tenancy. Avoid vague words such as 'thing' and 'problem' repeated as the only nouns.",
      "GRA": "Semi-formal writing allows contractions and some conversational phrasing, but keep sentences complete. Requests are usually politer and more complex: 'I would be grateful if you could…' rather than 'Please fix it.'"
    },
    samples: null
  });

  /* -------------------------------------------------- Academic Task 1 (bar chart)
     Added so the bank offers all seven Task 1 visual types as separate tasks:
     line, bar, pie, table, process, map and multiple-visual combination. */
  BANK.tasks.push({
    id: "W-A1-BAR-1",
    module: "academic",
    task: 1,
    visualType: "Bar chart",
    title: "Household water use by room in three countries",
    topicCategory: "Environment",
    difficulty: "intermediate",
    band: "6.0–7.0",
    timeMinutes: 20,
    minWords: 150,
    prompt: "The bar chart below shows the percentage of household water used in four areas of the home — bathroom, toilet, kitchen and garden — in three countries in 2024.\n\n[Area — Litalia / Namoor / Sandria (% of household water)]\n[Bathroom — 42 / 33 / 28]\n[Toilet — 24 / 22 / 26]\n[Kitchen — 18 / 15 / 17]\n[Garden — 16 / 30 / 29]",
    modelPlan: [
      "Introduction: paraphrase the chart's subject, units and year (percentages of household water, three countries, 2024).",
      "Overview: bathing is the largest single use in Litalia, but outdoor use dominates in Namoor and Sandria; toilet and kitchen use are similar across all three.",
      "Body 1 (highest values): Litalia's 42% bathroom share versus 28% in Sandria — a 14-point gap; Namoor sits in between at 33%.",
      "Body 2 (the contrast): garden use reverses the pattern — 16% in Litalia against 30% in Namoor and 29% in Sandria.",
      "Closing comparison: toilet and kitchen percentages cluster between 15% and 26% everywhere, so differences there are minor.",
      "Every figure quoted must come from the chart; describe differences rather than inventing causes (climate, habits) — Task 1 does not explain why."
    ],
    examinerNotes: {
      "TA": "Three countries times four categories is twelve numbers. Band 7 answers group them by pattern — indoor versus outdoor — rather than listing all twelve.",
      "CC": "Signpost the two bodies clearly: begin one with the dominant indoor use, the other with the contrast in garden use. A reversal ('By contrast', 'The opposite pattern appears in…') is the natural link.",
      "LR": "Bar-chart vocabulary is comparative: the largest share, twice as high as, marginally higher than, accounted for, comprised. Avoid 'big' and 'small' without a figure attached.",
      "GRA": "Keep the percentage register consistent: 42 per cent, 42%, or a 42 per cent share — but never mix '42%' with '42 percentages'. Watch comparative structures: 'twice as high as', not 'twice higher than'."
    },
    samples: null
  });
})();
