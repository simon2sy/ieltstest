/* =========================================================================
   IELTS MASTERY — READING BANK (General Training, Passage 3)
   Passage: "Becoming a cycle instructor" — a careers-style article with an
   information panel. 14 questions, which completes the 40-question GT paper
   when read with GT-P1-LIBRARY (13) and GT-P2-GARDEN (13).
   Original text written for this platform.
   ========================================================================= */
(function () {
  var BANK = (window.BANK_READING = window.BANK_READING || { academic: [], general: [] });

  BANK.general.push({
    id: "GT-P3-INSTRUCTOR",
    title: "Becoming a cycle instructor",
    subtitle: "A careers feature from a community sports magazine",
    module: "general",
    part: 3,
    difficulty: "advanced",
    band: "6.5–7.5",
    topic: "Work and training",
    wordCount: 1080,
    estimatedMinutes: 20,
    technique: {
      summary: "Passage 3 of General Training is the longest and most opinionated text in the paper. Expect the writer's views, qualifications and comparisons between options.",
      steps: [
        "Read the questions first and note which ones ask about the writer's opinion rather than facts.",
        "The information panel at the end of the passage answers the matching questions; treat it as a table and enter it in the question order.",
        "For 'which course' matching, check two conditions per option (price AND duration), because the panel is designed so that one condition alone is ambiguous."
      ],
      bullets: "TFNG | MCQ | MATCHFEAT | SENTCOMP"
    },
    text: [
      { label: "A", p: "Teaching adults to ride a bicycle in traffic is a job that most people assume they could do. The reality, according to instructors who have been doing it for years, is that the technical skill is the easy part. Almost every applicant can already ride well, and most arrive confident that they will be teaching beginners on quiet side streets. What they underestimate is the psychological work: adults who cannot ride arrive with decades of embarrassment attached to the activity, and the first two sessions are usually spent dismantling it." },
      { label: "B", p: "There are two routes into the profession in this country. The first is the national instructor qualification, a four-day course run by the cycling federation, which is recognised by every local authority and therefore by every employer. The second is a shorter, cheaper certificate offered by several private training companies. Both are accepted by community groups, but only the national award is accepted for school contracts, where the checks on who works with children are strictest. Instructors who take the private route often find themselves paying for the national course a year later, once a school contract appears." },
      { label: "C", p: "Nor is the work as uniform as outsiders imagine. An instructor's week may contain a family session in a park on Saturday morning, a confident commuter who wants route-planning advice on a Tuesday evening, and — the growth area — electric-assist riders who have the balance to ride but not the judgement to predict how a heavier machine behaves at speed. The last group is, instructors say, the most rewarding and the least well served by existing courses, because the standard syllabus assumes that the problem to solve is balance." },
      { label: "D", p: "Pay is the subject that instructors raise first and complain about last. Rates vary enormously: a local authority contract in a large city may pay comfortably above the national living wage, while weekend work for a private operator is often paid per session with no allowance for travel between sites, so a three-hour booking in a village can cost the instructor half a day. Several of those interviewed described turning down work that would have made them money on paper but left them exhausted and out of pocket in practice." },
      { label: "E", p: "What keeps people in the job is rarely money. Instructors describe the moment when a nervous adult rides unaided across a car park as the reason they continue, and several said the work had improved their own riding more than competitive cycling ever did, because explaining a manoeuvre forces you to understand it precisely. The turnover, though, is real: a third of newly qualified instructors leave within two years, most commonly because they cannot assemble a reliable weekly income from short bookings spread across a county." },
      { label: "F", p: "Anyone considering the profession should think carefully about logistics before paying for a course. Demand is concentrated in school terms, in daylight, and in the largest urban areas; the instructors who thrive tend to be those who either live where the work is or who specialise in a niche such as teaching riders with disabilities, where waiting lists are long and competition is thin. The least successful pattern, mentioned repeatedly, is that of the newly qualified instructor who buys a national qualification, advertises widely on social media, and then discovers that most bookings require a car, a storage solution for equipment and a week of unpaid administration." },
      { label: "G", p: "For all that, the profession is expanding. Councils are under pressure to reduce short car journeys, and cycling budgets, unlike most transport budgets, have grown in real terms for several years. Whether that growth produces secure employment or simply more short, poorly paid bookings remains an open question — and the answer will be decided less by instructors themselves than by the way contracts are written." }
    ],
    panel: {
      title: "Course information panel",
      rows: [
        ["Course", "Federation national award", "Citywide instructor certificate", "Community assistant course"],
        ["Length", "4 days (2 weekends)", "2 days", "1 day"],
        ["Cost", "£480 (includes insurance check)", "£180", "£95"],
        ["Accepted for", "school contracts, council work, community groups", "community groups, private lessons", "volunteer sessions only"],
        ["Paid work allowed", "yes, immediately", "yes, after 10 logged hours", "no — voluntary role"],
        ["Class size taught", "up to 6 riders", "up to 3 riders", "1 rider at a time"]
      ]
    },
    questions: [
      {
        n: 27, type: "TFNG", diff: "intermediate", bandLevel: "Band 6",
        q: "Most applicants for instructor training find the psychological aspect of teaching the hardest part.",
        options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "TRUE", accepted: ["true", "t"],
        ex: { test: "Deciding whether a general statement matches the text's emphasis or exceeds it.", where: "Paragraph A.", quote: "What they underestimate is the psychological work… the first two sessions are usually spent dismantling it.", why: "Paragraph A contrasts the technical skill (the easy part) with the psychological work that applicants underestimate, and it says the early sessions are devoted to it.", mine: "'The hardest part' is supported: the text calls technical skill easy and describes the psychological work as what people underestimate.", trap: "The paragraph also says most applicants can already ride well, tempting an answer of 'FALSE' on the basis of another detail.", next: "Match the whole statement, not just its first half. Two clauses in the question, one clause in the text — check the match before answering." },
        vocab: [["underestimate", "to judge something as less important than it is"], ["dismantle", "to take apart piece by piece"]]
      },
      {
        n: 28, type: "TFNG", diff: "intermediate", bandLevel: "Band 6",
        q: "The shorter private certificate is cheaper than the national qualification.",
        options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "TRUE", accepted: ["true", "t"],
        ex: { test: "Checking a comparison that appears in two separate places.", where: "Paragraph B and the panel.", quote: "The second is a shorter, cheaper certificate offered by several private training companies. / Cost: £480 … £180", why: "The text calls the private route 'shorter, cheaper', and the panel confirms £180 against £480 for the national award.", mine: "'NOT GIVEN' would be wrong because both the text and the panel state the comparison explicitly.", trap: "The comparison is stated in prose and then repeated with figures in the panel — the double statement is designed to look like extra information rather than confirmation.", next: "When a comparison appears twice (prose and a table), take it as confirmation and move on quickly." },
        vocab: [["certificate", "an official document proving a qualification"], ["recognised", "accepted as valid by an authority"]]
      },
      {
        n: 29, type: "TFNG", diff: "advanced", bandLevel: "Band 7",
        q: "Instructors who take the private certificate are usually unable to find any paid work.",
        options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "FALSE", accepted: ["false", "f"],
        ex: { test: "Rejecting an absolute claim that the text contradicts.", where: "Paragraph B.", quote: "Both are accepted by community groups, but only the national award is accepted for school contracts…", why: "Private-certificate holders can work with community groups and give private lessons, so 'unable to find any paid work' is false.", mine: "'NOT GIVEN' is tempting because the text does not list earnings, but it clearly states that private lessons and community work are open to them.", trap: "The words 'often find themselves paying for the national course a year later' suggest difficulty, which is not the same as being unable to work at all.", next: "Watch for absolutes in the question — any, all, never, only. One counter-example in the text makes the statement FALSE rather than NOT GIVEN." },
        vocab: [["absolute claim", "a statement that admits no exceptions"], ["paid work", "employment for which you receive money"]]
      },
      {
        n: 30, type: "TFNG", diff: "advanced", bandLevel: "Band 7",
        q: "Instructors generally agree that their pay is satisfactory.",
        options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "FALSE", accepted: ["false", "f"],
        ex: { test: "Reading a paragraph's structure to find its verdict.", where: "Paragraph D.", quote: "Pay is the subject that instructors raise first and complain about last… Several of those interviewed described turning down work that would have made them money on paper but left them exhausted and out of pocket in practice.", why: "The paragraph documents wide variation and work that leaves instructors out of pocket, so agreement that pay is satisfactory is contradicted.", mine: "'NOT GIVEN' misreads the paragraph: the text does not merely omit opinions about pay, it reports complaints.", trap: "The phrase 'raise first and complain about last' sounds balanced, but the examples that follow are all negative.", next: "When a paragraph opens with a neutral-sounding sentence, read the whole paragraph before trusting the tone of the first line." },
        vocab: [["out of pocket", "having spent more than you earned"], ["living wage", "the minimum income considered adequate to live on"]]
      },
      {
        n: 31, type: "MCQ", diff: "advanced", bandLevel: "Band 7",
        q: "What does the writer say about electric-assist riders?\\nA They need balance training above all.\\nB They are poorly provided for by standard courses.\\nC They are mainly commuters.\\nD They are the fastest-growing group of children taught.",
        options: ["A They need balance training above all.", "B They are poorly provided for by standard courses.", "C They are mainly commuters.", "D They are the fastest-growing group of children taught."],
        answer: "B", accepted: ["b", "they are poorly provided for by standard courses", "poorly served"],
        ex: { test: "Identifying the writer's judgement about a group, not the group's habits.", where: "Paragraph C.", quote: "…the least well served by existing courses, because the standard syllabus assumes that the problem to solve is balance.", why: "The writer states that existing courses serve this group least well, which is option B.", mine: "Choosing A repeats the syllabus assumption the writer is criticising. Choosing D adds 'children', which the text never mentions.", trap: "The final clause of the sentence explains why courses fail, and its word 'balance' pulls readers towards option A.", next: "Where a sentence gives both a verdict and its reason, answer from the verdict and keep the reason as confirmation." },
        vocab: [["electric-assist", "a bicycle with a motor that helps the rider"], ["syllabus", "the planned content of a course"]]
      },
      {
        n: 32, type: "MCQ", diff: "advanced", bandLevel: "Band 7",
        q: "Why do instructors describe weekend work for a private operator as poor value?\\nA The hourly rate is below the living wage.\\nB Travel time between sites is not paid for.\\nC Sessions are cancelled at short notice.\\nD Equipment must be bought by the instructor.",
        options: ["A The hourly rate is below the living wage.", "B Travel time between sites is not paid for.", "C Sessions are cancelled at short notice.", "D Equipment must be bought by the instructor."],
        answer: "B", accepted: ["b", "travel time between sites is not paid for", "no allowance for travel"],
        ex: { test: "Selecting the stated cause of a problem among three plausible ones.", where: "Paragraph D.", quote: "…paid per session with no allowance for travel between sites, so a three-hour booking in a village can cost the instructor half a day.", why: "Unpaid travel is given as the reason a booking can lose money in practice; the paragraph adds that the rate itself may be comfortable.", mine: "Choosing A contradicts the text, which says a large-city council contract may pay above the living wage. Choosing D is mentioned in paragraph F as a general cost, not as the reason weekend work is poor value.", trap: "Three costs appear in the passage (rate, travel, equipment) but only one is attached to the weekend-work example.", next: "For 'why' questions, locate the causal connector ('so', 'because', 'which means') and answer from the clause it introduces." },
        vocab: [["allowance", "money paid to cover an expense"], ["per session", "paid for each individual class"]]
      },
      {
        n: 33, type: "MCQ", diff: "advanced", bandLevel: "Band 7",
        q: "What is the writer's view of the profession's future?\\nA Growth is guaranteed to create secure jobs.\\nB It depends on how contracts are written.\\nC Instructors will be able to control it themselves.\\nD Demand will fall as cycling budgets shrink.",
        options: ["A Growth is guaranteed to create secure jobs.", "B It depends on how contracts are written.", "C Instructors will be able to control it themselves.", "D Demand will fall as cycling budgets shrink."],
        answer: "B", accepted: ["b", "it depends on how contracts are written", "contracts"],
        ex: { test: "Identifying a statement of uncertainty and its condition.", where: "Paragraph G.", quote: "…the answer will be decided less by instructors themselves than by the way contracts are written.", why: "The writer leaves the outcome open and names contract design — not instructors — as the deciding factor.", mine: "Choosing C reverses the final comparison; choosing D contradicts the statement that cycling budgets have grown in real terms.", trap: "The paragraph opens with 'the profession is expanding', which invites the optimistic option A, before the writer withholds judgement.", next: "In closing paragraphs, look for hedged language ('remains an open question', 'depends', 'will be decided by'). Hedges are the writer's view in General Training Passage 3." },
        vocab: [["in real terms", "adjusted for inflation"], ["secure employment", "work with stable pay and conditions"]]
      },
      {
        n: 34, type: "MATCHFEAT", diff: "advanced", bandLevel: "Band 7",
        q: "Which course allows paid work immediately after qualifying?\\nA the Federation national award\\nB the Citywide instructor certificate\\nC the Community assistant course",
        options: ["A the Federation national award", "B the Citywide instructor certificate", "C the Community assistant course"],
        answer: "A", accepted: ["a", "the federation national award", "national award", "federation"],
        ex: { test: "Reading a category row across three options to find one unique match.", where: "Panel, row 'Paid work allowed'.", quote: "yes, immediately / yes, after 10 logged hours / no — voluntary role", why: "Only the Federation award permits paid work immediately; the Citywide certificate requires ten logged hours first.", mine: "Choosing B stops at 'yes' and ignores the condition 'after 10 logged hours'.", trap: "Two options both say 'yes', so a quick glance gives an ambiguous answer; the qualifier decides it.", next: "For panel matching, read the qualifier after the comma in every cell before choosing." },
        vocab: [["qualify", "to complete the training needed for a role"], ["voluntary role", "unpaid work done by choice"]]
      },
      {
        n: 35, type: "MATCHFEAT", diff: "advanced", bandLevel: "Band 6.5",
        q: "Which course is accepted for school contracts?\\nA the Federation national award\\nB the Citywide instructor certificate\\nC the Community assistant course",
        options: ["A the Federation national award", "B the Citywide instructor certificate", "C the Community assistant course"],
        answer: "A", accepted: ["a", "the federation national award", "national award", "federation"],
        ex: { test: "Matching a requirement stated in the prose and repeated in the panel.", where: "Paragraph B and the panel.", quote: "…only the national award is accepted for school contracts… / Accepted for: school contracts, council work, community groups", why: "The national award is the only course listed for school contracts in both the prose and the panel.", mine: "Choosing B confuses 'accepted by community groups' with 'accepted for school contracts'.", trap: "The panel's first cell for the Citywide certificate contains the same word 'community' that appears in the prose about the national award.", next: "When prose and panel both cover a condition, use the panel for precision and the prose for confirmation." },
        vocab: [["contract", "a formal agreement to provide work"], ["checks", "background enquiries before employment"]]
      },
      {
        n: 36, type: "MATCHFEAT", diff: "advanced", bandLevel: "Band 6.5",
        q: "Which course costs less than £100?\\nA the Federation national award\\nB the Citywide instructor certificate\\nC the Community assistant course",
        options: ["A the Federation national award", "B the Citywide instructor certificate", "C the Community assistant course"],
        answer: "C", accepted: ["c", "the community assistant course", "community assistant"],
        ex: { test: "Extracting one figure from a multi-column table.", where: "Panel, row 'Cost'.", quote: "£480 (includes insurance check) / £180 / £95", why: "The Community assistant course costs £95, the only figure below £100.", mine: "Choosing B confuses £180 with £95 — both are three-digit numbers in the same row.", trap: "Three prices in a row, and the qualifying threshold (£100) is not printed anywhere; you must compare for yourself.", next: "In numeric panel questions, underline the threshold word in the question (here 'less than') before scanning the row." },
        vocab: [["threshold", "the level that must be passed or not exceeded"], ["insurance check", "a verification of a rider's or instructor's cover"]]
      },
      {
        n: 37, type: "MATCHFEAT", diff: "advanced", bandLevel: "Band 7",
        q: "Which course is limited to teaching one rider at a time?\\nA the Federation national award\\nB the Citywide instructor certificate\\nC the Community assistant course",
        options: ["A the Federation national award", "B the Citywide instructor certificate", "C the Community assistant course"],
        answer: "C", accepted: ["c", "the community assistant course", "community assistant"],
        ex: { test: "Matching a restriction to the only course that carries it.", where: "Panel, final row.", quote: "up to 6 riders / up to 3 riders / 1 rider at a time", why: "Only the Community assistant course is restricted to one rider at a time; the others allow groups.", mine: "Choosing B because 'up to 3' sounds restrictive; but three riders is a group, not one at a time.", trap: "Class sizes increase from right to left in the table, so the order inverts the usual cheap-to-dear pattern.", next: "Do not assume table columns run in a predictable order — check the header row before reading along a row." },
        vocab: [["restriction", "a limit on what is allowed"], ["header row", "the top row that names each column"]]
      },
      {
        n: 38, type: "SENTCOMP", diff: "advanced", bandLevel: "Band 7",
        q: "A third of newly qualified instructors leave the job within ______ years.", answer: "two", accepted: ["two", "2"],
        ex: { test: "Recording a figure inside a paragraph about retention.", where: "Paragraph E.", quote: "…a third of newly qualified instructors leave within two years…", why: "The figure is two years, given with the proportion (a third) that makes it memorable.", mine: "Writing 'three' repeats the fraction in the sentence; the question already supplies 'a third' in another form.", trap: "Two numbers in one clause — a fraction and a duration.", next: "Separate fractions from durations as you read; questions often convert one into words and ask for the other." },
        vocab: [["turnover", "the rate at which staff leave and are replaced"], ["retention", "the ability to keep staff"]]
      },
      {
        n: 39, type: "SENTCOMP", diff: "advanced", bandLevel: "Band 7",
        q: "Instructors say explaining a manoeuvre improves their own ______.", answer: "riding", accepted: ["riding", "cycling", "technique"],
        ex: { test: "Completing a sentence that summarises a claimed benefit.", where: "Paragraph E.", quote: "…several said the work had improved their own riding more than competitive cycling ever did, because explaining a manoeuvre forces you to understand it precisely.", why: "The benefit named is improved riding, attributed to the need to explain movements precisely.", mine: "Writing 'income' or 'business' — paragraph E is about what keeps people in the job, and this sentence specifically concerns skill.", trap: "A comparative ('more than competitive cycling ever did') in which the rejected comparator is the more striking phrase.", next: "For sentence completions, find the noun the verb 'improves' acts on; comparisons in the same sentence are usually decoration." },
        vocab: [["manoeuvre", "a controlled movement or turn"], ["precisely", "in an exact and detailed way"]]
      },
      {
        n: 40, type: "SENTCOMP", diff: "advanced", bandLevel: "Band 7.5",
        q: "Instructors who succeed tend to live near the work or specialise in a ______ such as teaching riders with disabilities.", answer: "niche", accepted: ["niche", "specialism", "specialty", "speciality"],
        ex: { test: "Recording the writer's positive example of a viable career pattern.", where: "Paragraph F.", quote: "…the instructors who thrive tend to be those who either live where the work is or who specialise in a niche such as teaching riders with disabilities…", why: "Specialising in a niche is the second viable pattern; the example of disability teaching follows 'such as'.", mine: "Writing 'city' or 'school' — location is the first pattern, and the question's 'or' points to the second.", trap: "Two career patterns joined by 'either… or', with the example attached to the second one.", next: "Track 'either… or' carefully: the question usually tests only one half, and the example follows the half being tested." },
        vocab: [["niche", "a small specialised area of work"], ["waiting list", "a queue of people waiting for a service"]]
      }
    ]
  });
})();
