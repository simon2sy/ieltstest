/* =========================================================================
   IELTS MASTERY — WRITING BANK 1: Academic Task 1 + General Training Task 1
   Each task: prompt, timing, word count, difficulty, topic, model plan,
   examiner notes, and (for four tasks) Band 6 / 7 / 8 / 9 sample answers.
   ========================================================================= */
(function () {
  var BANK = (window.BANK_WRITING = window.BANK_WRITING || { tasks: [] });

  BANK.tasks.push(
    /* ---------------- 1. ACADEMIC TASK 1 — LINE GRAPH ---------------- */
    {
      id: "W-A1-LINE-1",
      module: "academic", task: 1, visualType: "Line graph",
      title: "Household recycling rates in four countries",
      topicCategory: "Environment",
      difficulty: "intermediate", band: "6.0–6.5",
      timeMinutes: 20, minWords: 150,
      prompt: "The line graph below shows the percentage of household waste recycled in four countries between 2005 and 2020.\n\n[Graph data — Recycling rate %: Germany 2005: 46 → 2010: 58 → 2015: 66 → 2020: 69 | United Kingdom 2005: 23 → 2010: 40 → 2015: 44 → 2020: 45 | Japan 2005: 20 → 2010: 21 → 2015: 20 → 2020: 22 | Brazil 2005: 4 → 2010: 8 → 2015: 14 → 2020: 18]",
      modelPlan: [
        "Introduction: paraphrase the question — what the graph shows, which countries, which period (do not copy the prompt).",
        "Overview (must be present): all four rates rose over the period; Germany highest throughout and Brazil lowest but fastest-growing; crucially, Brazil's proportional gain was the largest, yet the absolute gap between Germany and Brazil still widened from 42 to 51 percentage points.",
        "Body 1: the two European countries — Germany's steady climb from 46% to 69%; the UK's rapid rise early on then a plateau after 2015.",
        "Body 2: Japan's stability around 20–22%, contrasted with Brazil's near-quadrupling from 4% to 18%.",
        "Language targets: compared with, rose steadily, plateaued, quadrupled, the gap widened/narrowed, approximately."
      ],
      examinerNotes: {
        TA: "A clear overview is mandatory — it is the first thing the examiner looks for. Repeating the numbers without a summary of the pattern limits TA to Band 5–6.",
        CC: "Use two body paragraphs, each covering a logical pair. Do not describe points one by one in the order they appear.",
        LR: "Aim for variety: 'rose significantly' should appear once, then 'climbed', 'increased steadily', 'edged up', 'quadrupled'.",
        GRA: "Compare using 'whereas' and 'while'; use past tenses throughout because the period ended in 2020. One or two complex sentences per paragraph is enough."
      },
      samples: {
        band6: "The graph shows the percentage of household waste that was recycled in four countries from 2005 to 2020.\n\nIn general, all the countries increased their recycling. Germany was the highest and Brazil was the lowest, but Brazil grew very fast.\n\nGermany started at 46% and went up to 69% in 2020. It was always first. The UK began at 23% and increased to 45%. Most of this growth happened before 2015, then it was almost the same.\n\nJapan stayed around 20% for all the period. It went from 20% to 22% only. Brazil had 4% in 2005 and this number became 18% in 2020. This is more than four times.\n\nSo recycling is more popular everywhere, and the difference between Germany and Brazil is smaller at the end.",
        band7: "The line graph illustrates the proportion of household waste recycled in Germany, the United Kingdom, Japan and Brazil over a fifteen-year period from 2005 to 2020.\n\nOverall, recycling rates increased in all four countries, although the pace of change varied considerably. Germany remained the strongest performer throughout, while Brazil, despite starting from a very low base, recorded the fastest relative growth.\n\nGermany and the United Kingdom both followed an upward trend. Germany's rate rose steadily from 46% in 2005 to 69% by 2020, with the sharpest increase occurring before 2010. The UK showed a similar but more dramatic pattern early on, climbing from 23% to 40% in just five years; after that, growth levelled off and the figure reached only 45% by 2020.\n\nBy contrast, Japanese recycling barely changed, hovering between 20% and 22% across the whole period. Brazil, however, more than quadrupled its rate, from 4% in 2005 to 18% in 2020. Interestingly, this rapid proportional growth did not close the gap with Germany: because Brazil began from such a low base, the difference between the two countries actually widened from 42 percentage points in 2005 to 51 by 2020.",
        band8: "The graph compares household recycling rates in four countries between 2005 and 2020.\n\nWhat stands out is that, while every country improved, the improvements were of two quite different kinds: mature systems such as Germany's made steady incremental gains, whereas Brazil's rate roughly quadrupled from a very low starting point. Germany led throughout, and Japan's rate hardly moved, so the four countries ended the period both more similar in ranking and still far apart in absolute terms.\n\nGermany's figure climbed consistently, from 46% to 69%, with the steepest growth between 2005 and 2010. The United Kingdom followed a comparable trajectory but ran out of momentum: having risen from 23% to 40% in the first five years, it added only five percentage points over the following decade and finished at 45%.\n\nAt the other end of the scale, Japan's rate fluctuated narrowly around one fifth of household waste, ending almost exactly where it began at 22%. Brazil, in contrast, lifted its rate from 4% to 18% — a fourfold increase — although its 2020 figure was still well below Germany's level twenty years earlier, which indicates how much distance remains despite such rapid relative progress.",
        band9: "The graph tracks the share of household waste recycled in four countries over the period 2005–2020.\n\nTwo contrasting stories emerge. The first is convergence at the top: Germany, already recycling 46% of its household waste in 2005, pushed that figure to 69%, while the United Kingdom advanced from 23% to 45%. The second is stagnation and catch-up at the bottom: Japan's rate barely shifted, hovering at roughly a fifth of household waste, whereas Brazil nearly quintupled its rate, from 4% to 18%.\n\nGermany's trajectory is the most consistent. Growth was fastest between 2005 and 2010, when the rate rose twelve percentage points, and then moderated, adding eleven points over the remaining decade. The United Kingdom's curve is more revealing: a steep early rise to 40% by 2010 was followed by a decade in which progress essentially halted, leaving the country fifteen points behind its German counterpart in 2020.\n\nJapan, by contrast, shows remarkable stability, its rate fluctuating within two percentage points of 21% throughout — a pattern that suggests a mature, saturated system rather than a lack of effort. Brazil's data tell the opposite story. Starting from a negligible 4%, it quadrupled its rate by 2020, yet the absolute gap with Germany widened from 42 percentage points to 52 by 2015 before narrowing marginally to 51, which underlines that proportional improvement and convergence are not the same thing."
      }
    },

    /* ---------------- 2. ACADEMIC TASK 1 — PROCESS DIAGRAM ---------------- */
    {
      id: "W-A1-PROC-1",
      module: "academic", task: 1, visualType: "Process diagram",
      title: "How drinking water is produced from seawater",
      topicCategory: "Technology & Environment",
      difficulty: "advanced", band: "7.0–7.5",
      timeMinutes: 20, minWords: 150,
      prompt: "The diagram below shows the process by which drinking water is produced from seawater at a coastal desalination plant.\n\n[Diagram stages: 1 Seawater intake (screens remove large debris) → 2 Pre-treatment (chemicals added; suspended particles settle) → 3 High-pressure pumps (pressure raised to ~60 bar) → 4 Reverse-osmosis membranes (fresh water passes through; brine remains) → 5 Brine returned to sea via diffuser → 6 Post-treatment (minerals added, water disinfected) → 7 Storage in tanks → 8 Distribution to households]",
      modelPlan: [
        "Introduction: one sentence naming the process and its purpose. Use the passive voice — 'seawater is drawn in…'.",
        "No overview heading is needed, but state the number of main stages and the start/end points: seawater in, mineral-enriched drinking water out.",
        "Body: describe stages in order. Use sequencers (first, subsequently, at this point, once, finally) and passive constructions, since the agent is a machine, not a person.",
        "Include the two by-products: debris at the start and brine at stage 5.",
        "Do not explain WHY the process works unless the diagram shows it. No opinions, no evaluation."
      ],
      examinerNotes: {
        TA: "Process tasks reward sequencing and completeness. Miss a stage and TA drops; add opinions and TA is limited because the task is descriptive.",
        CC: "The whole description is chronological — cohesion comes from time markers, not from 'firstly, secondly, thirdly' style listing for every sentence.",
        LR: "Target vocabulary: intake, screened, suspended particles, membrane, brine, disinfected, enriched, diffuser. Use 'is/are + past participle'.",
        GRA: "One or two relative clauses ('which removes…', 'where minerals are added') show range without risking errors."
      },
      samples: {
        band6: "The diagram explains how a desalination plant makes drinking water from sea water.\n\nFirst, sea water comes into the plant through an intake. Big pieces of rubbish are stopped by screens. After this, chemicals are put in the water and the particles go down to the bottom.\n\nNext, the water goes to high pressure pumps. The pressure is about 60 bar. Then the water passes through reverse osmosis membranes. The fresh water goes through the membrane but the salt does not, so brine is left. This brine is sent back to the sea through a diffuser.\n\nAfter that, minerals are added and the water is cleaned with disinfectant. Finally the water is kept in tanks and then it is distributed to houses. So there are eight main steps from sea water to drinking water.",
        band7: "The diagram illustrates the sequence of stages by which drinking water is produced from seawater in a coastal desalination plant.\n\nOverall, the process consists of eight principal stages, beginning with the intake of seawater and ending with distribution to households. Two by-products are produced and disposed of along the way: large debris and brine.\n\nIn the first stage, seawater is drawn into the plant through an intake, where screens remove large pieces of debris. The water then undergoes pre-treatment, during which chemicals are added and suspended particles are allowed to settle. Once the water has been cleaned in this way, it is forced through high-pressure pumps, which raise the pressure to approximately 60 bar.\n\nAt the centre of the process, the pressurised water passes through reverse-osmosis membranes. Fresh water is able to pass through these membranes, whereas salt and other impurities cannot, and the concentrated brine that remains is returned to the sea through a diffuser. Following this, the water is post-treated: minerals are added and the supply is disinfected. Finally, the treated water is stored in tanks before being distributed to households.",
        band8: "The diagram outlines how seawater is converted into drinking water at a coastal desalination plant.\n\nEight stages are involved, moving from intake to household supply. Throughout the process the water is treated mechanically and chemically rather than by hand, and two waste streams — screening debris and brine — are separated out and returned to the environment.\n\nSeawater first enters the plant through an intake, where screens trap large debris. It is then pre-treated with chemicals that cause suspended particles to settle, leaving clearer water to be pumped onwards. At this point the pressure is increased to roughly 60 bar by high-pressure pumps, a step that is essential if the water is to be forced through the membranes that follow.\n\nThe core of the operation is reverse osmosis. As the pressurised water is driven through the membranes, fresh water passes through while dissolved salts are held back, emerging as brine, which is piped back to sea via a diffuser. The freshly separated water is subsequently post-treated, minerals being reintroduced and the supply disinfected to make it safe to drink. It is then held in storage tanks before being distributed to households.",
        band9: "The diagram traces the transformation of seawater into potable water at a coastal desalination facility.\n\nAlthough eight distinct stages are shown, the process resolves into three phases: preparation, separation and conditioning. Seawater enters at the intake and leaves, ultimately, as mineral-enriched drinking water, with debris and brine as the two by-products removed along the way.\n\nThe preparatory phase begins at the intake, where screens intercept large debris before the water is chemically pre-treated, causing suspended particles to settle out. Clarified water is then subjected to intense pressure — approximately 60 bar — generated by high-pressure pumps, a step whose purpose is to overcome the natural osmotic force that would otherwise draw fresh water back towards the salt.\n\nSeparation occurs at the reverse-osmosis membranes. Because the membranes permit water molecules but not dissolved salts to pass, the incoming stream divides into two: fresh water, which continues through the plant, and brine, which is returned to the sea through a diffuser. In the final conditioning phase, minerals are added and the water is disinfected; it is then stored in tanks and distributed to households. The entire sequence is therefore a continuous, machine-driven flow in which the only manual intervention would be monitoring and maintenance."
      }
    },

    /* ---------------- 3. ACADEMIC TASK 1 — MAP ---------------- */
    {
      id: "W-A1-MAP-1",
      module: "academic", task: 1, visualType: "Map",
      title: "Changes to a town centre, 1995 and 2025",
      topicCategory: "Urban Development",
      difficulty: "advanced", band: "7.0–7.5",
      timeMinutes: 20, minWords: 150,
      prompt: "The two maps below show the town of Hartwell in 1995 and in 2025.\n\n[1995: A large cattle market in the north-west; a riverside row of warehouses along the east bank; a single main road crossing the river; playing fields in the south. 2025: The cattle market site is now a housing estate and supermarket; the warehouses have been converted into apartments and offices; a second road bridge has been built to the north; the playing fields remain but a sports centre and car park have been added; a riverside walk links the two bridges.]",
      modelPlan: [
        "Introduction: name the two dates and the location; state that the task is to describe change.",
        "Overview: the town has been extensively redeveloped, with industrial and agricultural land replaced by housing, retail and leisure; the river has become an amenity rather than a transport route.",
        "Body 1: north-west and east — cattle market → estate + supermarket; warehouses → apartments/offices.",
        "Body 2: infrastructure and recreation — second bridge, riverside walk, sports centre and car park; playing fields unchanged.",
        "Map language: was replaced by, was converted into, a second bridge was constructed, to the north of, adjacent to, remained unchanged."
      ],
      examinerNotes: {
        TA: "Every change must be reported; unmentioned features (e.g. the unchanged playing fields) are as important as changes, because contrast shows coverage.",
        CC: "Organise by area (north/village centre/riverside) rather than by date. Two maps means one paragraph per area, not per year.",
        LR: "Map tasks live or die on change verbs and prepositions of place. Avoid 'was changed to' repeatedly.",
        GRA: "Passive voice drives this task. Mix it with active sentences for the features that remain ('the playing fields still occupy…')."
      },
      samples: null
    },

    /* ---------------- 4. ACADEMIC TASK 1 — BAR CHART + TABLE ---------------- */
    {
      id: "W-A1-MULTI-1",
      module: "academic", task: 1, visualType: "Bar chart + table",
      title: "Commuting methods and average journey times",
      topicCategory: "Transport",
      difficulty: "advanced", band: "7.5–8.0",
      timeMinutes: 20, minWords: 150,
      prompt: "The bar chart shows the percentage of commuters using four methods of transport in one city in 2010 and 2025. The table shows the average journey time in minutes by each method in the same two years.\n\n[Bar chart — car 2010: 58%, 2025: 41% | bus 2010: 22%, 2025: 27% | train 2010: 9%, 2025: 18% | bicycle 2010: 11%, 2025: 14%]\n[Table — average journey time (minutes) 2010 / 2025: car 31 / 38; bus 42 / 39; train 27 / 29; bicycle 24 / 23]",
      modelPlan: [
        "Introduction: identify both sources and say they are related (methods and duration).",
        "Overview: car use fell sharply while train and bus use rose; despite the shift, car journeys became longer, and the bicycle remained the fastest method.",
        "Body 1: the percentages — car dominance eroded, train doubled; give exact figures.",
        "Body 2: journey times — relate the two datasets (e.g. more train passengers but almost unchanged times; car times increased as congestion intensified).",
        "Do not invent causes for the data. Report relationships, not explanations."
      ],
      examinerNotes: {
        TA: "Multiple visuals require you to identify a relationship between them — that is what separates Band 7+ from Band 6.",
        CC: "Use referencing to link the two visuals: 'this shift', 'the corresponding change', 'in contrast'.",
        LR: "Comparison language: marginally, substantially, while, whereas, roughly double, on the other hand.",
        GRA: "Be careful with figures: 'the figure for cars' vs 'car users'. Misused comparisons cost accuracy more than simple sentences do."
      },
      samples: null
    },

    /* ---------------- 5. GT TASK 1 — FORMAL LETTER ---------------- */
    {
      id: "W-GT-FORMAL-1",
      module: "general", task: 1, formal: true,
      title: "Complaint about a delayed delivery",
      topicCategory: "Consumer Services",
      difficulty: "intermediate", band: "6.0–7.0",
      timeMinutes: 20, minWords: 150,
      prompt: "You ordered a piece of furniture from a company three weeks ago. It was promised within seven days, but it has still not arrived, and you have been unable to speak to anyone by telephone.\n\nWrite a letter to the manager of the company. In your letter:\n• give details of your order\n• explain how the delay has affected you\n• say what you would like the company to do",
      modelPlan: [
        "Salutation: 'Dear Sir or Madam' (name unknown) or 'Dear Mr/Ms + surname' if given.",
        "Paragraph 1: purpose of writing in one sentence, stated neutrally.",
        "Paragraph 2: order details — reference number, date, product, promised delivery date (invented consistently).",
        "Paragraph 3: the effect — practical consequences, stated factually rather than emotively.",
        "Paragraph 4: the request — a specific, reasonable action with a deadline, plus a closing line and 'Yours faithfully / sincerely'.",
        "Register: no contractions, no exclamation marks, no rhetorical questions."
      ],
      examinerNotes: {
        TA: "The three bullet points must all be covered and the tone must suit a formal complaint — factual, firm, not aggressive.",
        CC: "Each paragraph performs one function. Linking is by progression of content, not by listing words.",
        LR: "Formal complaint lexis: to bring to your attention, on 3 May, despite assurances, I would therefore request, inconvenience, compensate.",
        GRA: "Keep to present perfect and past simple for the story, and use modal verbs carefully in the request ('I would be grateful if you could…')."
      },
      samples: {
        band6: "Dear Sir or Madam,\n\nI am writing to complain about my order. I ordered a sofa from your company three weeks ago and it is still not here.\n\nMy order number is AB4471. I made the order on 2 July and your website said 7 days for delivery. This did not happen. I called your office many times but nobody answered the phone and my emails were not answered too.\n\nThis delay is a big problem for me. I moved to a new flat in June and I have no furniture in my living room. My family came to visit last weekend and we had to sit on the floor.\n\nI want you to deliver the sofa in one week or give me my money back. Please contact me soon.\n\nYours faithfully,\nJ. Okafor",
        band7: "Dear Sir or Madam,\n\nI am writing to bring to your attention a problem with an order I placed with your company on 2 July, for which payment was taken immediately.\n\nThe order, reference AB4471, consisted of a three-seat sofa with an estimated delivery time of seven days. Three weeks have now passed and the sofa has not arrived. In addition, I have been unable to reach your customer service department by telephone on six separate occasions, and two emails sent to your enquiries address remain unanswered.\n\nThe delay has been inconvenient in practical terms. As I moved into my apartment in June, I currently have nowhere to sit in the main living area, and I have had to postpone a family visit that had been arranged for last weekend.\n\nI would therefore ask you to confirm a delivery date within the next five working days. If this is not possible, I would like a full refund and a written explanation of the delay. I would be grateful for a reply within seven days.\n\nYours faithfully,\nJ. Okafor",
        band8: "Dear Sir or Madam,\n\nI am writing to express my dissatisfaction with the service I have received in connection with order AB4471, placed on 2 July.\n\nThe order, for a three-seat sofa, was advertised with a delivery period of seven days, and payment of £640 was taken at the point of ordering. Three weeks later, no delivery has been made and no explanation has been provided. Attempts to resolve the matter by telephone have proved unsuccessful: on six occasions I waited more than twenty minutes without reaching an adviser, and two emails to your enquiries address have gone unanswered for over a week — an absence of communication more frustrating than the delay itself.\n\nThe consequences have been practical rather than merely inconvenient. Having moved into my apartment in June, I have no seating in my living room, and I was obliged to cancel a family gathering planned for the weekend of 19 July.\n\nI would therefore request that you either confirm a delivery date within five working days or arrange a full refund, together with a written explanation of what has occurred. I would appreciate a response within seven days of the date of this letter.\n\nYours faithfully,\nJ. Okafor",
        band9: "Dear Sir or Madam,\n\nI am writing to raise a matter that has now remained unresolved for three weeks: the non-delivery of order AB4471, placed on 2 July and paid for in full on the same day.\n\nThe order consisted of a three-seat sofa, offered with a seven-day delivery period. No delivery has taken place, and no revised date has been communicated. Of greater concern is the difficulty of contacting your company at all: on six occasions I held for over twenty minutes without speaking to an adviser, and two emails sent to your enquiries address have received no reply. For a company trading on reliability, silence of this kind is more damaging than the original delay.\n\nThe practical effect has been considerable. I took possession of my apartment in June in the expectation that the sofa would arrive the following week; the living room remains unfurnished, and a family gathering planned for 19 July had to be cancelled.\n\nI would be grateful if you could either confirm a delivery date within five working days or issue a full refund, together with a written account of why the order has not been fulfilled. Should neither be forthcoming, I will refer the matter to my card provider. I look forward to your reply within seven days.\n\nYours faithfully,\nJ. Okafor"
      }
    },

    /* ---------------- 6. GT TASK 1 — INFORMAL LETTER ---------------- */
    {
      id: "W-GT-INFORMAL-1",
      module: "general", task: 1, formal: false,
      title: "A letter to a friend about moving house",
      topicCategory: "Personal Life",
      difficulty: "beginner", band: "5.5–6.5",
      timeMinutes: 20, minWords: 150,
      prompt: "You have recently moved to a new city to start a new job. Write a letter to an English-speaking friend. In your letter:\n• tell your friend about your new job and the city\n• explain why you have not written for a long time\n• invite your friend to visit you",
      modelPlan: [
        "Salutation: 'Dear Sam,' (first name — informal).",
        "Opening: friendly enquiry about your friend before talking about yourself.",
        "Body: news about the job and the city in a conversational tone, with concrete details.",
        "Body: a short, natural apology for the silence — do not over-apologise.",
        "Closing: a specific invitation with a suggested time, then a warm sign-off ('Take care, / All the best,').",
        "Register: contractions are expected here; phrasal verbs are appropriate; exclamation marks are acceptable in moderation."
      ],
      examinerNotes: {
        TA: "Informal letters still need all three bullets. 'Invite' means making a concrete arrangement, not just saying 'you should come one day'.",
        CC: "Informal letters use more referencing (it, that, there) and short paragraphs. Avoid essay connectives such as 'moreover'.",
        LR: "Conversational lexis: 'settled in', 'still finding my feet', 'drop me a line', 'it'd be great to see you'.",
        GRA: "A few informal structures add authenticity: 'can't wait', ellipsis ('hard to believe it's been three months'), question tags."
      },
      samples: null
    },

    /* ---------------- 7-10. ACADEMIC TASK 2 ---------------- */
    {
      id: "W-A2-OPINION-1",
      module: "academic", task: 2, essayType: "Opinion (agree/disagree)",
      title: "Public money and the arts",
      topicCategory: "Culture & Society",
      difficulty: "advanced", band: "7.0–7.5",
      timeMinutes: 40, minWords: 250,
      prompt: "Some people believe that governments should not spend public money on the arts, such as museums and theatres, and that this funding should be directed to healthcare and education instead.\n\nTo what extent do you agree or disagree with this view?",
      modelPlan: [
        "Introduction: rewrite the issue in your own words, then state a clear position in one sentence. A 'to what extent' question expects a degree, not a simple yes/no: e.g. agree largely, but with one qualification.",
        "Body 1: the strongest argument for the opposing view (healthcare and education are statutory and have measurable outcomes) — then rebut it, showing that arts funding is a tiny share and that cultural institutions contribute economically.",
        "Body 2: your own case — arts funding produces social benefits that markets cannot supply: preservation, access for low-income groups, national identity, arts education feeding the health and education sectors.",
        "Conclusion: restate the position with the qualification, no new arguments.",
        "Cohesion: 'While it is true that…, this argument overlooks…', 'Moreover', 'By contrast'."
      ],
      examinerNotes: {
        TA: "You must answer 'to what extent'. A firmly stated position maintained throughout is what earns the top band; changing position between paragraphs caps TA.",
        CC: "One idea per paragraph, with a topic sentence. Paragraphs of 4–6 sentences are ideal.",
        LR: "Precise societal vocabulary: statutory services, public subsidy, market failure, cultural capital, accessibility, discretionary spending.",
        GRA: "Demonstrate range with concessive clauses ('Although healthcare is undeniably essential…'), conditionals and nominalisation."
      },
      samples: {
        band6: "Today many people think the government should not give money to museums and theatres, and should spend it on hospitals and schools. I agree with this idea but only partly.\n\nFirst, healthcare and education are very important and they are more necessary than art. If a person is ill, a painting cannot help them. Also, schools need money for teachers and books. So I understand why people say arts funding is a waste.\n\nHowever, I think art is also important for society. Museums and theatres teach children about culture and history. If the government stops paying for them, the tickets will be very expensive and only rich people can enjoy them. This will make society more unfair. Also, in my country many tourists come to see museums, so this brings money to the economy.\n\nIn conclusion, I agree that healthcare and education must be the priority, but I do not agree that arts funding should stop completely. The government should spend less on art, but not zero.",
        band7: "It is sometimes argued that governments should stop funding cultural institutions such as museums and theatres, directing the money to healthcare and education instead. While I accept that health and schooling must take priority, I believe that a complete withdrawal of arts funding would be a mistake.\n\nThe argument for redirecting money is understandable. Hospitals and schools provide services that no private market can supply fairly, and their outcomes — life expectancy, literacy, employment — are measurable. When budgets are tight, spending on museums can look like a luxury. This logic is valid as far as it goes, but it overlooks two things. First, arts subsidy typically represents less than one per cent of public spending, so cancelling it would not solve the funding problems of hospitals or schools. Second, cultural institutions generate tourism income that itself supports public services.\n\nA stronger case can be made for keeping public funding in place. Museums preserve a nation's history and make it available to everyone, not only to those who can pay. If admission were set by the market, tickets would rise to whatever wealthier visitors could afford, and access for low-income families and school groups would disappear. Theatres and galleries also support the creative economy, providing employment and skills that feed into related sectors, including the media and design industries that health and education systems rely on for training materials and public information.\n\nIn conclusion, although healthcare and education clearly deserve the largest share of public spending, cutting arts funding altogether would be short-sighted. A reduced but protected subsidy would preserve access and long-term cultural value while leaving the bulk of the budget where it is most urgently needed.",
        band8: "The suggestion that public money should be diverted from the arts towards healthcare and education raises a question not of value but of priority. I largely disagree with the proposal, though I accept that health and education must remain the first claims on any government's budget.\n\nThose who favour redirection rest their case on necessity. Healthcare and schooling are statutory obligations with measurable outcomes, and no market can distribute them fairly; cultural institutions, by contrast, may appear to be discretionary. There is some force in this, but the argument contains two weaknesses. The sums involved are not comparable — arts and culture typically account for a fraction of one per cent of public expenditure — so withdrawal would be an act of symbolism rather than a solution. Moreover, that fraction purchases cultural infrastructure whose benefits are systemic rather than immediate: museums educate schoolchildren, and the creative industries they sustain generate tax revenue that helps pay for hospitals.\n\nMy own objection goes further. Public arts funding exists precisely because markets under-supply cultural goods that have value beyond their price. If institutions such as regional museums were left to the market, admission would be priced for those able and willing to pay the most, and children from poorer families would lose the exposure that shapes later aspiration. National collections would be maintained as tourist attractions rather than as resources for citizens. This is not a hypothetical danger; where funding has been cut sharply elsewhere, opening hours have been reduced and school visits curtailed, which is a redistribution of cultural opportunity away from the least advantaged.\n\nThe most defensible policy, therefore, is neither protection at any cost nor wholesale withdrawal. Health and education should absorb the overwhelming majority of additional spending, while a modest, ring-fenced cultural budget preserves access and long-term public value.",
        band9: "Few budget debates are framed as starkly as this one, and few are as misleadingly framed. The choice presented — subsidise museums, or treat sick children — invites a moral answer to what is in fact an arithmetic question. I disagree with the proposal, not because the arts outrank healthcare, but because the trade-off it describes barely exists and the principle behind it is unsound.\n\nThe arithmetic is straightforward. Cultural subsidy in most developed economies amounts to well under one per cent of public expenditure; in some it is closer to a rounding error. Cancelling it would not fund a single large hospital for a year. If the objective is to strengthen health and education, arts budgets are not where the money is, and targeting them signals seriousness without delivering it. That a policy is symbolically satisfying is not evidence that it is effective.\n\nThe principle is more troubling still. Public funding of culture exists because markets allocate cultural goods efficiently but not fairly: they supply whatever the wealthiest consumers will pay for, and neglect what everyone benefits from knowing. A national collection, a public archive or a subsidised theatre for children is not a private good; it is infrastructure for shared memory and shared aspiration. Priced purely by the market, such institutions do not vanish — they stratify, offering spectacle to tourists and denying participation to citizens.\n\nThis is why the sensible division of responsibility is not between culture and care but between what must be universal and what must remain accessible. Healthcare and education are rightly universal, and no serious advocate of the arts would dispute their priority. Culture is rightly accessible — modestly subsidised so that access does not depend on income. To abandon the second in order to make a gesture towards the first would be to damage one public good without materially improving the other, which is the least defensible form of fiscal policy."
      }
    },
    {
      id: "W-A2-DISCUSSION-1",
      module: "academic", task: 2, essayType: "Discussion (both views)",
      title: "Remote work and the city",
      topicCategory: "Work & Society",
      difficulty: "advanced", band: "7.5–8.0",
      timeMinutes: 40, minWords: 250,
      prompt: "Some people argue that the growth of remote working benefits society, while others believe it damages cities, workplaces and personal development.\n\nDiscuss both these views and give your own opinion.",
      modelPlan: [
        "Introduction: state the debate, then give a clear opinion in the last sentence (required by 'give your own opinion').",
        "Body 1: the pro-remote case — reduced commuting, regional spread of opportunity, accessibility for disabled workers and parents, lower emissions.",
        "Body 2: the anti-remote case — hollowed-out city centres, loss of spontaneous collaboration, weaker mentoring for junior staff, blurred work-life boundaries — and your assessment of which arguments are strongest.",
        "Body 3 (optional but powerful at Band 8+): a synthesis — the problem is not remote work but its unmanaged implementation; hybrid arrangements with purpose-designed offices.",
        "Conclusion: judgement, restated.",
        "Balance does not mean indecision: you must still commit to a view."
      ],
      examinerNotes: {
        TA: "Both views must be covered, and your own view must be identifiable throughout. Omitting one view caps TA at Band 5.",
        CC: "Use clear signalling: 'Those who support X argue…', 'Critics, however, contend…', 'On balance, I am persuaded by…'.",
        LR: "Topic vocabulary: commuting time, labour mobility, spontaneous interaction, mentoring, urban regeneration, discretionary spend.",
        GRA: "Range comes from nominalisation and hedging: 'the erosion of…', 'it is by no means certain that…', 'arguably'."
      },
      samples: {
        band6: "Nowadays many people work from home because of the internet. Some people think this is good for society and other people think it is bad. In this essay I will discuss both sides and give my opinion.\n\nOn one hand, remote work has many advantages. Workers do not need to travel to the office every day, so they save time and money. This is good for the environment because there are fewer cars. Also, people who live far from big cities can get good jobs, so small towns can grow.\n\nOn the other hand, there are problems. If everyone works at home, the city centre shops and cafes lose customers and they close. Companies also lose creativity because colleagues do not meet and talk. New employees cannot learn from older colleagues. Finally, some people work too much at home because there is no clear end of the day.\n\nIn my opinion, remote work is mostly a good thing but companies must organise it carefully. A mix of home and office days is the best solution.",
        band7: "The shift towards remote working has divided opinion. Supporters see it as a liberation of both workers and regions, while critics warn that it erodes cities and undermines professional development. In my view, the benefits are real but they depend almost entirely on how the arrangement is managed.\n\nThose who welcome remote work emphasise its practical gains. Employees save hours of commuting each week and can choose where to live, which spreads opportunity to smaller towns and reduces pressure on expensive urban housing. There are social gains too: parents and disabled workers find the labour market far more accessible when physical attendance is not compulsory, and lower commuting volumes reduce transport emissions.\n\nThe objections deserve equal attention. City-centre businesses that depend on office workers — cafes, shops, transport providers — have suffered where large employers have reduced attendance, and the tax base that funds public services weakens with them. More subtly, workplaces lose the informal contact from which ideas and trust develop; junior employees in particular miss the mentoring that happens in corridors rather than in scheduled meetings. Working from home can also blur the boundary between work and rest, which may explain the rise in reported exhaustion among some remote staff.\n\nOn balance, I am persuaded that the benefits outweigh the drawbacks, but only under two conditions. First, attendance should be organised rather than random: teams benefit from being together on the same days. Second, offices should be redesigned for collaboration rather than for individual desk work, which can be done anywhere. Remote working is not in itself destructive to cities or careers; unsupervised remote working can be.",
        band8: "Remote work has moved within a decade from an occasional accommodation to a routine arrangement in many economies, and the debate about its consequences has kept pace. Advocates present it as a democratising force; sceptics depict it as a solvent of cities and careers. The truth, I would argue, lies less in the technology than in the management around it.\n\nThe case for remote work rests on demonstrable efficiency gains. Commuting is unpaid labour, and its removal returns time to households while cutting transport emissions — two benefits that no employer could plausibly generate by other means. Geography also loosens its grip: workers who cannot relocate can nonetheless compete for urban salaries, and small towns gain residents with urban incomes, which supports local services.\n\nCritics make three objections, of unequal strength. The weakest is that productivity falls; the evidence on this is mixed and strongly conditioned by the nature of the work. The second — the hollowing-out of city centres — is real but narrower than it appears, since dense residential populations also sustain urban commerce, and many cities are adapting by converting offices into housing. The third is the most serious: the erosion of the informal transmission of skill and culture within organisations. A junior lawyer or engineer learns far more from overheard negotiations and unplanned questions than from a well-structured video call, and no technology reproduces that adequately.\n\nMy own position is therefore qualified but clear. Remote working should be embraced as a normal mode of operation, not as the default one. Organisations that require a few shared days in which teams are physically together preserve the social capital that remote arrangements deplete, while individuals retain the autonomy that makes the arrangement attractive. The danger lies not in remote work itself but in treating offices and schedules as matters of individual preference, when they are in fact collective infrastructure.",
        band9: "Whether remote working enriches or impoverishes a society is one of those questions that appears to demand a verdict and is better answered by asking a second question: remote working, arranged how? The evidence assembled over the past decade resists a general conclusion because the variable that matters is not location but coordination.\n\nTaken at face value, the optimists have the easier case. Commuting consumes an unpaid hour or more of most urban working days, and its costs fall regressively on those with the least flexibility in housing. Remove the requirement to be present, and labour markets widen: carers, disabled workers and residents of peripheral regions acquire access they previously lacked, while towns that were exporting their young people begin to retain them. Few policy instruments deliver so much for so little public money.\n\nYet the sceptics' objections are not nostalgic. Urban centres are fiscal entities as well as cultural ones: when occupancy falls, the commercial and property taxes that fund services contract, and the shops that make city life attractive close in sequence. Within organisations, the subtler loss is tacit knowledge — the skills transferred by proximity rather than instruction, and the incidental trust on which later collaboration depends. Neither loss appears in productivity statistics until it has already occurred.\n\nWhat follows from this is not a choice between two positions but a design problem. The arrangement that captures the gains and contains the losses is a deliberately synchronised one: teams co-located for the days when shared work is created and reviewed, and dispersed when the work is individual. Offices would then function as the places where thinking is done together rather than the places where emails are answered. Cities, meanwhile, must accept that their centres will be less exclusively commercial and plan accordingly. Remote working is neither a liberation nor a solvent; it is an opportunity whose consequences we largely choose."
      }
    },
    {
      id: "W-A2-PROBSOL-1",
      module: "academic", task: 2, essayType: "Problem / Solution",
      title: "Food waste in wealthy countries",
      topicCategory: "Environment",
      difficulty: "advanced", band: "7.0–7.5",
      timeMinutes: 40, minWords: 250,
      prompt: "In many developed countries, a significant proportion of food is thrown away by households and supermarkets, even though it is still safe to eat.\n\nWhat are the causes of this problem, and what measures could be taken to reduce it?",
      modelPlan: [
        "Introduction: state the issue, then preview that you will examine both causes and solutions.",
        "Body 1 (causes): cosmetic standards in retail, over-buying driven by promotions and large pack sizes, confusion over date labels, convenience culture, low food prices relative to income.",
        "Body 2 (solutions): matched to each cause — relax cosmetic standards, tax large promotions on perishables, standardise date labelling (removing 'best before' where safety is unaffected), support food redistribution networks and municipal composting.",
        "Conclusion: the causes are economic and informational; the solutions must combine regulation with consumer clarity.",
        "Aim for a clear one-to-one relationship between cause and remedy — this is the structure that scores for coherence."
      ],
      examinerNotes: {
        TA: "Both questions must be answered in proportion. If you write 300 words on causes and two lines on solutions, TA is limited.",
        CC: "Signpost the mapping: 'Each of these causes suggests a corresponding remedy.' Use 'This is principally because…', 'A second factor…', 'If… then…'.",
        LR: "Collocations: surplus food, cosmetic standards, shelf life, redistribution networks, municipal composting, impulse purchasing.",
        GRA: "Conditional structures are natural here: 'If retailers relaxed…, consumers would…'. Mix first and second conditionals."
      },
      samples: null
    },
    {
      id: "W-A2-TWOPART-1",
      module: "academic", task: 2, essayType: "Two-part question",
      title: "Learning languages in later life",
      topicCategory: "Education",
      difficulty: "intermediate", band: "6.5–7.0",
      timeMinutes: 40, minWords: 250,
      prompt: "An increasing number of adults are learning a second language later in life, often for professional reasons.\n\nWhy has this become more common? Is this a positive or a negative development?",
      modelPlan: [
        "Introduction: acknowledge the trend and state clearly that you see it as positive (the second question requires a judgement).",
        "Body 1 (why): labour market globalisation, migration and remote work, employer demand, cheap and flexible online learning, longer healthy lifespans and second careers.",
        "Body 2 (positive/negative): assess — cognitive benefits for older learners, economic participation, cultural openness; acknowledge the risk of superficial learning or credentialism, then show why the benefits outweigh it.",
        "Conclusion: the trend follows from economic change and is on balance beneficial.",
        "Make sure the two parts are visibly separate; examiners check that both are answered."
      ],
      examinerNotes: {
        TA: "Two-part questions are marked on coverage. A single-sentence answer to one question is not enough — each part needs its own developed paragraph.",
        CC: "Use the introduction to signal the structure: 'This essay will consider the reasons for this trend before assessing whether it should be welcomed.'",
        LR: "Useful range: lifelong learning, labour mobility, cognitive resilience, professional advancement, cultural fluency, incentive.",
        GRA: "Report and discuss trends with a mixture: 'has become', 'is increasingly', 'is likely to'."
      },
      samples: null
    }
  );
})();
