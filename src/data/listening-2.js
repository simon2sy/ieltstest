/* =========================================================================
   IELTS MASTERY — LISTENING BANK (Test 2, Sections 1–2)
   Section 1: Enquiry about an evening language course (form + note completion)
   Section 2: Volunteer briefing at a city museum (MCQ + matching + notes)
   Original transcripts written for this platform. Every key is verifiable in
   the transcript and carries a 7-field explanation.
   ========================================================================= */
(function () {
  var BANK = (window.BANK_LISTENING = window.BANK_LISTENING || { tests: [], sections: [] });

  var S1 = {
    id: "L2-S1",
    testId: "L-TEST-2",
    number: 1,
    context: "A man telephones Ridgeway Language Centre to ask about evening courses.",
    speakers: ["Receptionist (female, British)", "Caller (male, Canadian)"],
    accent: ["British (northern)", "Canadian"],
    difficulty: "beginner",
    band: "5.0–5.5",
    notes: "Section 1 answers are usually facts dictated once: a spelling, a price, a date. Write as you listen and never leave a gap empty — a guess costs nothing.",
    transcript: [
      { t: 0, sp: "Receptionist", line: "Good afternoon, Ridgeway Language Centre, this is Marie. How can I help you?" },
      { t: 6, sp: "Caller", line: "Hi, I saw your advert for evening courses. I'd like to know more about the Spanish classes." },
      { t: 13, sp: "Receptionist", line: "Of course. Can I take your details first? Name and email?" },
      { t: 18, sp: "Caller", line: "Sure. It's Owen Hartley — that's H-A-R-T-L-E-Y." },
      { t: 25, sp: "Receptionist", line: "Hartley, thank you. And your email address?" },
      { t: 29, sp: "Caller", line: "It's owen.hartley at brenmar dot co dot uk. Brenmar is spelt B-R-E-N-M-A-R." },
      { t: 38, sp: "Receptionist", line: "Got it. Now, the Spanish course runs on two evenings. Beginners meet on Tuesdays, and the intermediate group on Thursdays." },
      { t: 48, sp: "Caller", line: "I did two years at school, so intermediate, probably. What time does it start?" },
      { t: 55, sp: "Receptionist", line: "Thursdays, seven o'clock until nine. The beginners' class is a half hour earlier." },
      { t: 63, sp: "Caller", line: "And how many weeks does it run?" },
      { t: 67, sp: "Receptionist", line: "Ten weeks, though the last session is a mock exam rather than a normal class." },
      { t: 74, sp: "Caller", line: "How much is it?" },
      { t: 77, sp: "Receptionist", line: "Two hundred and forty pounds in total, or you can pay in three instalments of eighty-five. The instalment route works out slightly dearer, so most people pay in one go." },
      { t: 90, sp: "Caller", line: "I'll pay the full amount, then. Do I need to buy a textbook?" },
      { t: 96, sp: "Receptionist", line: "The course book is included in the fee. You'll only need a notebook, and we lend dictionaries if you want one." },
      { t: 105, sp: "Caller", line: "Is there a placement test? I'm not sure intermediate is the right level." },
      { t: 111, sp: "Receptionist", line: "There is, but it's online and takes about twenty minutes. Everyone has to do it before the first class, even the beginners." },
      { t: 121, sp: "Caller", line: "Fine. And where exactly are the classes?" },
      { t: 125, sp: "Receptionist", line: "Room twelve on the ground floor. That's the building on Millgate, not the one by the station — people turn up at the wrong site constantly." },
      { t: 136, sp: "Caller", line: "Millgate. Right. One last thing: is there parking?" },
      { t: 141, sp: "Receptionist", line: "There's a small car park behind the building, but it's free only after six. If you arrive at half five you'd have to use the multi-storey across the road." },
      { t: 153, sp: "Caller", line: "That's fine, I'll come by bus. Thanks for your help." }
    ],
    questions: [
      {
        n: 1, type: "FORM", diff: "beginner", bandLevel: "Band 5",
        q: "Student name: Owen ______", answer: "Hartley", accepted: ["hartley", "hartly"],
        ex: { test: "Writing down a surname that the speaker spells out — a guaranteed Section 1 item.", where: "Caller's third turn (00:18).", quote: "It's Owen Hartley — that's H-A-R-T-L-E-Y.", why: "The caller spells the surname letter by letter, and it is then repeated by the receptionist.", mine: "Writing 'Hardley' or 'Heartley' from the sound alone — the spelling, not the pronunciation, decides the mark.", trap: "'Hartley' and 'Hardley' sound almost identical in connected speech, and only the dictated letters separate them.", next: "Copy letters as they are dictated, then read the word back against the letters once more before moving on." },
        vocab: [["spell out", "to say the letters of a word separately"], ["placement test", "a test that decides your level"]]
      },
      {
        n: 2, type: "FORM", diff: "beginner", bandLevel: "Band 5",
        q: "Email: owen.hartley@______.co.uk — provider name", answer: "Brenmar", accepted: ["brenmar", "brenner"],
        ex: { test: "Recording a proper noun that is dictated after the email address.", where: "Caller (00:29).", quote: "It's owen.hartley at brenmar dot co dot uk. Brenmar is spelt B-R-E-N-M-A-R.", why: "The domain name is 'brenmar', and the caller spells it immediately afterwards, so there is no ambiguity.", mine: "Typing 'Brenner' — a common surname — because the mind supplies a familiar word instead of the dictated letters.", trap: "A name that resembles a real word; only the spelling sequence is reliable.", next: "When a speaker spells something after saying it, treat the spelling as the answer and ignore your first guess." },
        vocab: [["domain", "the part of an email address after the @ sign"], ["dictate", "to say something for someone to write"]]
      },
      {
        n: 3, type: "FORM", diff: "beginner", bandLevel: "Band 5",
        q: "Class day (intermediate): ______", answer: "Thursdays", accepted: ["thursday", "thursdays", "on thursday"],
        ex: { test: "Choosing the right option from two parallel pieces of information.", where: "Receptionist (00:38).", quote: "Beginners meet on Tuesdays, and the intermediate group on Thursdays.", why: "The question asks for the intermediate class, which the speaker puts second: Thursdays.", mine: "Writing 'Tuesdays' by grabbing the first day you hear; the caller then confirms he needs intermediate.", trap: "Two days given in one sentence, with the correct one in the second clause.", next: "Underline what the question asks for (intermediate, not beginners) and hold your pen until that item appears." },
        vocab: [["intermediate", "at a middle level, not for beginners"], ["parallel information", "two similar details given side by side"]]
      },
      {
        n: 4, type: "FORM", diff: "beginner", bandLevel: "Band 5",
        q: "Start time: ______ p.m.", answer: "7", accepted: ["7", "seven", "7 00", "7pm", "19"],
        ex: { test: "Recording a time when a competing time is mentioned in the same breath.", where: "Receptionist (00:55).", quote: "Thursdays, seven o'clock until nine. The beginners' class is a half hour earlier.", why: "The intermediate class starts at seven; the half-hour-earlier detail belongs to the beginners.", mine: "Writing '6.30' after hearing 'a half hour earlier' — that is the beginners' start time.", trap: "A late-arriving comparative ('a half hour earlier') that tempts you to recalculate the wrong class.", next: "Mark the moment the speaker switches to the other group; anything after that switch is not your answer." },
        vocab: [["o'clock", "used to say an exact hour"], ["late-arriving detail", "information added after the main fact"]]
      },
      {
        n: 5, type: "FORM", diff: "beginner", bandLevel: "Band 5",
        q: "Course length: ______ weeks", answer: "10", accepted: ["10", "ten"],
        ex: { test: "Recording a number that is qualified but not contradicted.", where: "Receptionist (00:67).", quote: "Ten weeks, though the last session is a mock exam rather than a normal class.", why: "The course runs for ten weeks; the extra clause explains what the final week contains and does not change the number.", mine: "Writing '9' after hearing that the last session is different — the class still happens, so the course is still ten weeks.", trap: "A qualifier designed to make you subtract a week unnecessarily.", next: "Distinguish details that restrict a fact from details that replace it: 'though' introduces a restriction here, not a new number." },
        vocab: [["mock exam", "a practice exam under exam conditions"], ["run for", "to last for a period of time"]]
      },
      {
        n: 6, type: "FORM", diff: "intermediate", bandLevel: "Band 5.5",
        q: "Total fee if paid in one payment: £______", answer: "240", accepted: ["240", "£240", "two hundred and forty"],
        ex: { test: "Choosing between two prices for the same course.", where: "Receptionist (00:77).", quote: "Two hundred and forty pounds in total, or you can pay in three instalments of eighty-five.", why: "The single payment is £240; the instalment route (3 × £85 = £255) is a different total.", mine: "Writing '255' by multiplying the instalments, or '85' by copying the last number heard.", trap: "Two prices in one sentence, and a tempting arithmetic trap behind the second one.", next: "When two prices are offered, label each in the margin as you listen: 'one go' and 'instalments'." },
        vocab: [["instalment", "one of several regular payments"], ["work out dearer", "to cost more in the end"]]
      },
      {
        n: 7, type: "FORM", diff: "beginner", bandLevel: "Band 5",
        q: "Textbook: included in the fee — students need to bring a ______", answer: "notebook", accepted: ["notebook", "note book"],
        ex: { test: "Recording the only item a student must supply.", where: "Receptionist (00:96).", quote: "The course book is included in the fee. You'll only need a notebook, and we lend dictionaries if you want one.", why: "The course book is provided; the student brings only a notebook. 'Only' signals the single required item.", mine: "Writing 'dictionary' or 'textbook' — both appear, but one is lent and the other is included, so neither is something to bring.", trap: "Three nouns in two sentences, two of which are excluded by 'included' and 'we lend'.", next: "Listen for exclusion words: included, lent, provided, free. Whatever follows 'only need' is normally the answer." },
        vocab: [["included in the fee", "covered by the price you pay"], ["lend", "to give something temporarily"]]
      },
      {
        n: 8, type: "MCQ", diff: "intermediate", bandLevel: "Band 6",
        q: "What does the receptionist say about the placement test?\nA It is only for new students.\nB It must be completed before the course begins.\nC It decides whether the course is suitable.\nD It can be taken at the language centre.",
        answer: "B", accepted: ["b", "must be completed before the course begins"],
        ex: { test: "Listening for a requirement rather than a recommendation.", where: "Receptionist (00:111).", quote: "There is, but it's online and takes about twenty minutes. Everyone has to do it before the first class, even the beginners.", why: "The test must be done by everyone before the first class, so B is stated directly. 'Online' rules out D.", mine: "Choosing A ignores 'even the beginners' — nobody is exempt. Choosing C mistakes the test's purpose: the caller wonders about his level, but the receptionist never says the test decides suitability.", trap: "The caller's own question about level invites you to select C, an opinion the receptionist never expresses.", next: "In MCQ listening, a plausible idea raised in the question is often the trap. Match only what the answer speaker actually asserts." },
        vocab: [["placement test", "a test used to place students at the right level"], ["exempt", "not required to do something"]]
      },
      {
        n: 9, type: "MCQ", diff: "intermediate", bandLevel: "Band 6",
        q: "Where are the evening classes held?\nA at the Millgate building\nB beside the railway station\nC in the multi-storey car park\nD at the reception office",
        answer: "A", accepted: ["a", "at the millgate building"],
        ex: { test: "Picking one location from several mentioned in the same speech turn.", where: "Receptionist (00:125).", quote: "Room twelve on the ground floor. That's the building on Millgate, not the one by the station.", why: "The building is on Millgate; the station building is explicitly excluded.", mine: "Choosing B misses 'not the one by the station'. Choosing C confuses a car park mentioned later with the venue.", trap: "A negative correction spoken quickly, plus a car park question immediately afterwards that shifts your attention.", next: "Write 'NOT' beside any exclusion as you hear it — negative statements are prime MCQ distractors." },
        vocab: [["venue", "the place where something happens"], ["multi-storey", "a car park or building with several floors"]]
      },
      {
        n: 10, type: "NOTE", diff: "intermediate", bandLevel: "Band 6",
        q: "Car park behind the building is free only after ______", answer: "6", accepted: ["6", "six", "6pm", "6 p.m.", "six o'clock"],
        ex: { test: "Recording a condition of time attached to a facility.", where: "Receptionist (00:141).", quote: "There's a small car park behind the building, but it's free only after six. If you arrive at half five you'd have to use the multi-storey.", why: "Free parking begins at six. The 'half five' example shows what happens before six and is not the answer.", mine: "Writing '5.30' because it is the only clock time given in figures — it is an example of arriving too early.", trap: "A concrete time offered as an illustration of the penalty, not the rule.", next: "Separate the rule from the example: 'free only after six' is the rule; 'if you arrive at half five' is an illustration of breaking it." },
        vocab: [["only after", "not before a stated time"], ["illustration", "an example that explains a rule"]]
      }
    ]
  };

  var S2 = {
    id: "L2-S2",
    testId: "L-TEST-2",
    number: 2,
    context: "A briefing for new volunteers at the Harbourside Museum.",
    speakers: ["Coordinator (female, Australian)", "Volunteers (mixed)"],
    accent: ["Australian"],
    difficulty: "intermediate",
    band: "5.5–6.5",
    notes: "Section 2 is a monologue: a talk, a tour guide or, here, a briefing. Answers come in the same order as the questions, so a missed answer is best abandoned quickly.",
    transcript: [
      { t: 0, sp: "Coordinator", line: "Welcome, everyone, and thank you for giving up your Saturdays. I'm Rowan, the volunteer coordinator, and this briefing covers everything you need before your first shift." },
      { t: 12, sp: "Coordinator", line: "First, the practicalities. Front-of-house volunteers wear a green lanyard; education volunteers wear blue, so visitors can tell who does what at a glance." },
      { t: 24, sp: "Coordinator", line: "Your shift is three hours, but please arrive fifteen minutes early — not five, as the old handbook says — because we do a short briefing each morning." },
      { t: 37, sp: "Coordinator", line: "There are four areas where we need help, and they suit very different people." },
      { t: 44, sp: "Coordinator", line: "The information desk is the busiest. You'll spend most of your time answering questions and pointing people towards the galleries." },
      { t: 54, sp: "Coordinator", line: "The discovery room is where school groups come. It's noisy, cheerful and occasionally chaotic; you'll run simple hands-on activities with children aged six to eleven." },
      { t: 67, sp: "Coordinator", line: "The archive, on the top floor, is the quietest. You'll help catalogue documents and photographs — no visitor contact at all, and the only area where we ask for a longer commitment of six months." },
      { t: 82, sp: "Coordinator", line: "Finally the garden, which is behind the museum. Volunteers there look after the beds and grow plants that appear in our displays. It's outdoors in all weathers, so bring a coat." },
      { t: 96, sp: "Coordinator", line: "As for training, everyone does the half-day introduction — that's compulsory. The archive training is a full day because the software takes time. There's also a first-aid course, but it's optional and we run it twice a year." },
      { t: 112, sp: "Coordinator", line: "Now, two things that catch people out. The staff kitchen is for staff only, I'm afraid — volunteers use the café, where you get a free drink on any shift. And if you cannot come in, phone the duty manager; email is fine for changing shifts in advance, but same-day absences should always be phoned through." },
      { t: 134, sp: "Coordinator", line: "Finally, we ask all new volunteers to complete a feedback form after their third shift, not their first. First shifts are always a bit muddled, so waiting until you have something to compare gives us better information." },
      { t: 149, sp: "Coordinator", line: "That's everything from me. Any questions before we walk round?" }
    ],
    questions: [
      {
        n: 11, type: "MCQ", diff: "intermediate", bandLevel: "Band 6",
        q: "What colour lanyard do education volunteers wear?\nA green\nB blue\nC yellow\nD red",
        answer: "B", accepted: ["b", "blue"],
        ex: { test: "Distinguishing two labels assigned to two groups in one sentence.", where: "Coordinator (00:12).", quote: "Front-of-house volunteers wear a green lanyard; education volunteers wear blue.", why: "Education volunteers wear blue; green belongs to front-of-house staff.", mine: "Choosing A means taking the first colour heard rather than the one attached to 'education volunteers'.", trap: "Two colour–group pairings in one sentence, in the same order as the question's tempting first option.", next: "Match the label in the question to the label in the audio before you look at the options." },
        vocab: [["lanyard", "a cord worn round the neck holding a pass"], ["front-of-house", "the public-facing part of an organisation"]]
      },
      {
        n: 12, type: "MCQ", diff: "intermediate", bandLevel: "Band 6",
        q: "How early should volunteers arrive?\nA five minutes\nB ten minutes\nC fifteen minutes\nD thirty minutes",
        answer: "C", accepted: ["c", "fifteen minutes", "15 minutes"],
        ex: { test: "Catching a correction that contradicts printed material.", where: "Coordinator (00:24).", quote: "Please arrive fifteen minutes early — not five, as the old handbook says.", why: "Fifteen minutes is the current instruction; five minutes is explicitly rejected as out of date.", mine: "Choosing A copies the figure the speaker quotes in order to reject it. This is the single most common Section 2 mistake.", trap: "An obsolete number quoted inside the correction.", next: "When a speaker says 'not X, as the old…', X can never be the answer — cross it out on the spot." },
        vocab: [["handbook", "a printed guide with rules or instructions"], ["out of date", "no longer correct"]]
      },
      {
        n: 13, type: "MCQ", diff: "intermediate", bandLevel: "Band 6",
        q: "What is said about the first-aid course?\nA It is compulsory for all volunteers.\nB It takes a full day.\nC It is run twice a year.\nD It is only for archive volunteers.",
        answer: "C", accepted: ["c", "it is run twice a year"],
        ex: { test: "Separating an optional course from compulsory training.", where: "Coordinator (00:96).", quote: "There's also a first-aid course, but it's optional and we run it twice a year.", why: "Only the 'twice a year' detail is true of the first-aid course: it is optional, not compulsory, and it is not the full-day course.", mine: "Choosing A confuses it with the compulsory half-day introduction. Choosing B mixes it up with the full-day archive training.", trap: "Three courses with three different lengths and requirements shuffled into two sentences.", next: "Draw a small table in the margin: course, how long, compulsory or optional. Two columns stop three facts from merging." },
        vocab: [["compulsory", "required, you must do it"], ["optional", "you may choose whether to do it"]]
      },
      {
        n: 14, type: "MCQ", diff: "intermediate", bandLevel: "Band 6",
        q: "Which area involves running hands-on activities with children?\nA the information desk\nB the discovery room\nC the archive\nD the garden",
        answer: "B", accepted: ["b", "the discovery room", "discovery room"],
        ex: { test: "Matching a described activity to one of four named areas.", where: "Coordinator (00:54).", quote: "The discovery room is where school groups come… you'll run simple hands-on activities with children aged six to eleven.", why: "Hands-on activities with children are the discovery room's role, described in the same sentence as the area's name.", mine: "Choosing C because the archive also sounds like a school-adjacent area; in fact it involves no visitor contact at all.", trap: "Four areas described in the same order as the options, so a single missed sentence shifts every later match.", next: "For matching tasks, number the option list in the margin and tick as you hear each area — position is your anchor." },
        vocab: [["hands-on", "practical, involving doing rather than watching"], ["catalogue", "to make an organised list of items"]]
      },
      {
        n: 15, type: "MATCH", diff: "intermediate", bandLevel: "Band 6",
        options: ["A the information desk", "B the discovery room", "C the archive", "D the garden"],
        q: "Which area is the quietest and has no visitor contact?", answer: "C", accepted: ["c", "the archive", "archive"],
        ex: { test: "Using a superlative and a negative to identify an area.", where: "Coordinator (00:67).", quote: "The archive, on the top floor, is the quietest… no visitor contact at all.", why: "Two independent clues point to the archive: 'quietest' and 'no visitor contact'.", mine: "Choosing B because the discovery room is described with school groups; but that room is noisy and full of visitors.", trap: "An area described with two strong, easily matched phrases while the other options stay vague.", next: "When two clues point the same way, commit: IELTS rarely gives you two matching signals by accident." },
        vocab: [["superlative", "the form used for 'the most' or 'the least'"], ["visitor contact", "dealing directly with the public"]]
      },
      {
        n: 16, type: "MATCH", diff: "intermediate", bandLevel: "Band 6",
        options: ["A the information desk", "B the discovery room", "C the archive", "D the garden"],
        q: "Which area requires a longer commitment of six months?", answer: "C", accepted: ["c", "the archive", "archive"],
        ex: { test: "Recording a condition attached to only one of several options.", where: "Coordinator (00:67, final clause).", quote: "…and the only area where we ask for a longer commitment of six months.", why: "'The only area' restricts the six-month commitment to the archive.", mine: "Assuming the garden needs the longest commitment because outdoor work is often seasonal — the talk never says so.", trap: "A plausible real-world assumption with no textual support.", next: "Answer from the audio, never from likelihood. 'Only' and 'the only area' are strong, reliable pointers." },
        vocab: [["commitment", "an agreed period of regular involvement"], ["seasonal", "happening only in a particular season"]]
      },
      {
        n: 17, type: "MATCH", diff: "beginner", bandLevel: "Band 5",
        q: "Which area grows plants that appear in displays?", answer: "D", accepted: ["d", "the garden", "garden"],
        ex: { test: "Linking a purpose to an area within the same sentence.", where: "Coordinator (00:82).", quote: "Finally the garden… Volunteers there… grow plants that appear in our displays.", why: "The garden volunteers grow the display plants; the sentence joins activity and place directly.", mine: "Choosing B because the discovery room is also used for displays; in fact its children's activities are the subject there.", trap: "'Display' sounds like an exhibition room, pulling you back to the indoor options.", next: "Follow the area's name and read forward one clause — the matched detail is almost always in that clause." },
        vocab: [["bed", "an area of soil where plants are grown"], ["display", "an arrangement of objects for the public"]]
      },
      {
        n: 18, type: "NOTE", diff: "intermediate", bandLevel: "Band 6",
        q: "Volunteers get a free drink on any shift at the ______", answer: "café", accepted: ["cafe", "café", "the cafe", "cafeteria"],
        ex: { test: "Noting a benefit while an exclusion is spoken immediately before it.", where: "Coordinator (00:112).", quote: "The staff kitchen is for staff only, I'm afraid — volunteers use the café, where you get a free drink on any shift.", why: "The free drink is available in the café; the kitchen is off limits to volunteers.", mine: "Writing 'kitchen' — the first place named, and immediately ruled out by 'for staff only'.", trap: "An exclusion and a permission in one sentence, with the excluded item mentioned first.", next: "Whenever you hear 'for staff only' or 'not available to', keep listening: the real answer is in the clause after the dash." },
        vocab: [["off limits", "not allowed to be used"], ["on any shift", "during every shift you work"]]
      },
      {
        n: 19, type: "NOTE", diff: "intermediate", bandLevel: "Band 6",
        q: "Same-day absences must be reported by ______", answer: "phone", accepted: ["phone", "telephone", "phoning", "phone call", "a phone call"],
        ex: { test: "Distinguishing which channel applies to which kind of absence.", where: "Coordinator (00:112).", quote: "Email is fine for changing shifts in advance, but same-day absences should always be phoned through.", why: "Email covers advance changes only; the question specifies same-day absences, which must be phoned.", mine: "Writing 'email' because it is mentioned first and is genuinely acceptable in a related situation.", trap: "Two channels split across two situations, with the question testing only one of them.", next: "Find the condition in the question first — 'same-day' — then hunt for the matching half of the sentence." },
        vocab: [["phone through", "to report something by telephone"], ["in advance", "before the time when it is needed"]]
      },
      {
        n: 20, type: "NOTE", diff: "advanced", bandLevel: "Band 6.5",
        q: "New volunteers complete a feedback form after their ______ shift", answer: "third", accepted: ["third", "3rd", "three", "3"],
        ex: { test: "Catching a deliberately corrected number in the final part of the talk.", where: "Coordinator (00:134).", quote: "We ask all new volunteers to complete a feedback form after their third shift, not their first.", why: "The form is due after the third shift; the first shift is explicitly excluded.", mine: "Writing 'first' — the number the speaker raises in order to reject, and the one a rushed listener writes down.", trap: "A rejected figure placed at the end of a long talk, when attention is lowest.", next: "At the end of a Section 2 talk, expect one final contrast. Keep your pen on the page until the speaker finishes." },
        vocab: [["feedback form", "a questionnaire asking for your opinion"], ["muddled", "confused and disorganised"]]
      }
    ]
  };

  var S3 = {
    id: "L2-S3",
    testId: "L-TEST-2",
    number: 3,
    context: "A tutor and two students plan a research project on a new town-centre footbridge.",
    speakers: ["Dr Ellis (tutor, British)", "Priya (student, Singaporean)", "Tom (student, Irish)"],
    accent: ["British", "Singaporean", "Irish"],
    difficulty: "advanced",
    band: "6.0–7.0",
    notes: "Section 3 is a discussion, so answers are negotiated rather than announced. The first thing said is often the one that gets changed — track who ends up agreeing.",
    transcript: [
      { t: 0, sp: "Dr Ellis", line: "Right, let's use the time well. You're looking at the new footbridge and what it has done to town-centre shopping. Have you registered the project?" },
      { t: 9, sp: "Priya", line: "We filled in the ethics form on Friday, and the topic is agreed. We assumed we'd start with the literature review." },
      { t: 18, sp: "Dr Ellis", line: "Change the order, I'd say. The proposal is due in week four, and that's the piece the committee reads first. The literature review isn't assessed until the end." },
      { t: 29, sp: "Tom", line: "Fine, proposal first. We were planning to survey shoppers online — it's cheap and quick." },
      { t: 36, sp: "Dr Ellis", line: "How did your pilot go?" },
      { t: 39, sp: "Priya", line: "Revealing, actually. We put the link on three shop websites and got two hundred responses in a week. But when we looked at who replied, almost all of them were under thirty-five and already bought things online." },
      { t: 54, sp: "Dr Ellis", line: "So the survey isn't expensive and it isn't slow. Its problem is that it reaches the wrong people — you'd miss the older shoppers who use the town centre most." },
      { t: 65, sp: "Priya", line: "That's our worry. So we thought interviews in the square, which is the only way to catch that group." },
      { t: 73, sp: "Dr Ellis", line: "Yes, and do enough of them. Twenty would be thin for a project of this size; aim for thirty and you can compare across ages." },
      { t: 83, sp: "Tom", line: "Thirty, right. We were also given the council's footfall data — a spreadsheet of counts from the last three years." },
      { t: 92, sp: "Dr Ellis", line: "That's genuinely useful, though it stops eighteen months ago, so treat it as background, not as evidence about the bridge. It opened last spring." },
      { t: 104, sp: "Priya", line: "Can we record the interviews on my phone? Transcribing by hand took me hours last term." },
      { t: 111, sp: "Dr Ellis", line: "If everyone consents, yes — put that on the consent form. And that reminds me, Tom, what were you going to ask the shops to do?" },
      { t: 122, sp: "Tom", line: "Display a poster in the window with a QR code, so we're not only catching people who happen to walk past us." },
      { t: 131, sp: "Dr Ellis", line: "Good idea, and it needs no ethics approval because nobody is named. I'll contact the shoppers' panel — they have a list of two hundred residents who've agreed to be approached for research, which solves your older-shopper problem at a stroke." },
      { t: 148, sp: "Priya", line: "That's much better than standing in the rain." },
      { t: 153, sp: "Dr Ellis", line: "One last thing: I'll sort out vouchers for the interviewees — it's standard practice and the department pays. Now, your timeline." }
    ],
    questions: [
      {
        n: 21, type: "MCQ", diff: "advanced", bandLevel: "Band 6.5",
        q: "What do the students need to complete first?\nA the literature review\nB the research proposal\nC the ethics form\nD the pilot survey",
        answer: "B", accepted: ["b", "the research proposal", "research proposal"],
        ex: { test: "Recognising the point at which the tutor overrides the students' plan.", where: "Dr Ellis (00:18).", quote: "Change the order, I'd say. The proposal is due in week four… The literature review isn't assessed until the end.", why: "The proposal is due in week four and is read first by the committee; the literature review is a later deliverable.", mine: "Choosing C or D because both are mentioned early and sound like starting points — the ethics form is already done, and the pilot has already happened.", trap: "Two items described in the past tense, plus the students' own (wrong) assumption that the literature review comes first.", next: "Track the tense: anything already finished cannot be the next step, however prominent it sounds." },
        vocab: [["proposal", "a written plan for a project"], ["assessed", "judged and given a mark"]]
      },
      {
        n: 22, type: "MCQ", diff: "advanced", bandLevel: "Band 6.5",
        q: "What is the main weakness of the online survey?\nA It produces too few responses.\nB It costs more than interviews.\nC It reaches the wrong group of shoppers.\nD Its questions are poorly designed.",
        answer: "C", accepted: ["c", "it reaches the wrong group of shoppers", "wrong group"],
        ex: { test: "Identifying a weakness after two other possible weaknesses are explicitly ruled out.", where: "Dr Ellis (00:54).", quote: "So the survey isn't expensive and it isn't slow. Its problem is that it reaches the wrong people…", why: "The tutor dismisses cost and speed and names the sample as the flaw: the respondents were young and shop online.", mine: "Choosing A — the pilot produced 200 responses, which is plenty. Choosing D attributes a design problem the speakers never raise.", trap: "Two realistic survey problems (small sample, bad questions) that the discussion explicitly excludes.", next: "When a speaker lists what a method is NOT, the real criticism follows in the next clause. Listen for 'its problem is'." },
        vocab: [["sample", "the group of people who answer your questions"], ["pilot", "a small trial run of a study"]]
      },
      {
        n: 23, type: "MCQ", diff: "advanced", bandLevel: "Band 7",
        q: "What target number of interviews does the tutor recommend?\nA ten\nB twenty\nC thirty\nD sixty",
        answer: "C", accepted: ["c", "thirty", "30"],
        ex: { test: "Recording a figure that is given with a second, rejected figure beside it.", where: "Dr Ellis (00:73).", quote: "Twenty would be thin for a project of this size; aim for thirty and you can compare across ages.", why: "Thirty is the recommended target; twenty is called 'thin', and sixty is never mentioned.", mine: "Writing 'twenty' because it is the number attached to an evaluative comment and appears first.", trap: "A dismissed figure offered as criticism, with the recommendation in the second half of the sentence.", next: "When you hear 'would be thin', 'too few', 'not enough', treat the number as a trap and wait for the recommendation." },
        vocab: [["thin", "not enough data to be convincing"], ["compare across ages", "to contrast groups of different ages"]]
      },
      {
        n: 24, type: "MCQ", diff: "advanced", bandLevel: "Band 7",
        q: "How should the council's footfall data be used?\nA as the main evidence in the report\nB as background information only\nC not at all, because it is inaccurate\nD to replace the shopper interviews",
        answer: "B", accepted: ["b", "as background information only", "background"],
        ex: { test: "Interpreting a partial endorsement — praise followed by a limit.", where: "Dr Ellis (00:92).", quote: "That's genuinely useful, though it stops eighteen months ago, so treat it as background, not as evidence about the bridge.", why: "The data is useful for context but cannot evidence the bridge's effect because it ends before the bridge opened.", mine: "Choosing A because 'genuinely useful' sounds like an endorsement; the second half removes it from the evidence base.", trap: "A compliment that is then restricted by a time gap — a classic academic-discussion trap.", next: "After any positive word, listen for 'though', 'however', 'but'. The restriction is where the answer lives." },
        vocab: [["footfall", "the number of people passing a place"], ["background information", "context that supports but does not prove a claim"]]
      },
      {
        n: 25, type: "MCQ", diff: "advanced", bandLevel: "Band 6.5",
        q: "Who suggested recording the interviews on a phone?\nA Priya\nB Tom\nC Dr Ellis",
        answer: "A", accepted: ["a", "priya"],
        ex: { test: "Attributing a suggestion to one of three speakers.", where: "Priya (00:104).", quote: "Can we record the interviews on my phone? Transcribing by hand took me hours last term.", why: "Priya raises phone recording; the tutor merely approves it by asking for consent.", mine: "Choosing C because the tutor responds at length — responding to an idea is not proposing it.", trap: "The longest turn belongs to the tutor, which makes them seem like the source of every idea.", next: "In 'who said' matching, credit the speaker who first puts the idea forward, not the one who develops it." },
        vocab: [["transcribe", "to write down spoken words"], ["consent form", "a document agreeing to take part in research"]]
      },
      {
        n: 26, type: "MATCH", diff: "advanced", bandLevel: "Band 6.5",
        options: ["A Priya", "B Tom", "C Dr Ellis"],
        q: "Who suggested displaying posters in shop windows?",
        answer: "B", accepted: ["b", "tom"],
        ex: { test: "Attributing a suggestion that the tutor then evaluates.", where: "Tom (00:122).", quote: "Display a poster in the window with a QR code, so we're not only catching people who happen to walk past us.", why: "Tom proposes the posters; the tutor's contribution is a comment on ethics approval.", mine: "Choosing C because the tutor praises it ('Good idea') — praise is not authorship.", trap: "The tutor's 'Good idea, and it needs no ethics approval' feels like ownership of the idea.", next: "Ignore evaluative responses when attributing ideas; listen only for the sentence that creates the suggestion." },
        vocab: [["QR code", "a square code scanned by a phone"], ["display", "to put something where it can be seen"]]
      },
      {
        n: 27, type: "MATCH", diff: "advanced", bandLevel: "Band 7",
        options: ["A Priya", "B Tom", "C Dr Ellis"],
        q: "Who offered to contact the shoppers' panel?",
        answer: "C", accepted: ["c", "dr ellis", "the tutor", "ellis"],
        ex: { test: "Catching a promise made in the middle of a long turn.", where: "Dr Ellis (00:131).", quote: "I'll contact the shoppers' panel — they have a list of two hundred residents who've agreed to be approached for research.", why: "The tutor uses 'I'll' and makes the offer personally, which also solves the age-bias problem.", mine: "Choosing A because Priya reacts enthusiastically; her reply is a comment on the offer, not the offer itself.", trap: "A long turn containing several ideas, only one of which is a personal commitment ('I'll contact').", next: "For 'who did it' questions, scan for first-person commitments: 'I'll', 'I can', 'let me'. They mark the actor." },
        vocab: [["panel", "a group of people recruited to give opinions"], ["at a stroke", "in a single action"]]
      },
      {
        n: 28, type: "NOTE", diff: "advanced", bandLevel: "Band 7",
        q: "Interview recording is allowed only if participants sign a ______ form.", answer: "consent", accepted: ["consent", "consent form"],
        ex: { test: "Recording a condition attached to a method.", where: "Dr Ellis (00:111).", quote: "If everyone consents, yes — put that on the consent form.", why: "Recording is permitted on condition that consent is given in writing on the consent form.", mine: "Writing 'ethics' — the form was already mentioned earlier for the whole project, but this condition is about participants' consent.", trap: "Two forms, mentioned minutes apart: the ethics form (already submitted) and the consent form (to be updated).", next: "When a condition is introduced with 'if' or 'provided', the noun in that clause is usually the gap answer." },
        vocab: [["consent", "permission given willingly"], ["condition", "something that must happen first"]]
      },
      {
        n: 29, type: "NOTE", diff: "advanced", bandLevel: "Band 6.5",
        q: "Interviewees will receive a ______ as a thank-you.", answer: "voucher", accepted: ["voucher", "vouchers", "a voucher"],
        ex: { test: "Noting a small administrative detail in the final seconds of a discussion.", where: "Dr Ellis (00:153).", quote: "I'll sort out vouchers for the interviewees — it's standard practice and the department pays.", why: "Vouchers are given to interviewees and funded by the department; no money changes hands directly.", mine: "Writing 'money' or 'payment' — close in meaning, but the talk names a specific object, and IELTS marks the word used.", trap: "A paraphrase temptation: 'thank-you gift' invites 'present' or 'money' rather than the term actually spoken.", next: "For note completion, transfer the exact noun you hear, even when a synonym feels natural." },
        vocab: [["voucher", "a printed card worth a small amount of money"], ["standard practice", "the usual way something is done"]]
      },
      {
        n: 30, type: "NOTE", diff: "advanced", bandLevel: "Band 7",
        q: "The tutor will contact the shoppers' panel to solve the problem of reaching ______ shoppers.", answer: "older", accepted: ["older", "old", "elderly"],
        ex: { test: "Connecting a solution to the problem it fixes, across several turns.", where: "Dr Ellis (00:131, final clause).", quote: "…which solves your older-shopper problem at a stroke.", why: "The tutor explicitly states which problem the panel resolves: reaching older shoppers.", mine: "Writing 'online' or 'young' — those describe who the survey did reach, which is the mirror image of the problem.", trap: "The problem was described much earlier (00:54) and the solution arrives two minutes later.", next: "When a speaker says 'which solves your X problem', that phrase is a signpost to the earlier gap — note it and jump back." },
        vocab: [["at a stroke", "immediately and completely"], ["mirror image", "the exact opposite"]]
      }
    ]
  };

  var S4 = {
    id: "L2-S4",
    testId: "L-TEST-2",
    number: 4,
    context: "Lecture extract: wild bees in cities — what a three-year study found.",
    speakers: ["Lecturer (female, New Zealand)"],
    accent: ["New Zealand"],
    difficulty: "advanced",
    band: "6.5–7.5",
    notes: "Section 4 is an academic monologue with no pauses to help you. The lecturer's signposting ('three findings', 'by contrast') is your map — the notes follow those signposts in order.",
    transcript: [
      { t: 0, sp: "Lecturer", line: "In this lecture I want to look at a three-year study of wild bees in urban areas, and why its results surprised the researchers themselves." },
      { t: 11, sp: "Lecturer", line: "The study began with a simple assumption: cities, with their concrete and traffic, must be poor habitats for pollinators. Twenty-four sites were chosen across one mid-sized city, and the team expected the rural edge to come out best." },
      { t: 28, sp: "Lecturer", line: "Instead, the highest diversity of wild bee species was found in the oldest residential districts — not in the parks, as everyone had predicted, and not on the rural fringe either. The reason turned out to be gardens." },
      { t: 44, sp: "Lecturer", line: "Older gardens are structurally complicated. A lawn with a shed looks tidy, but what bees need is variety: flowers that bloom at different times, bare ground for the species that nest underground, and old walls where others make their nests." },
      { t: 62, sp: "Lecturer", line: "The second finding concerns the so-called 'green corridors' — the cycle paths and roadside strips that planners create to link green spaces. Here the study was more cautious. Corridors did help bees to move between sites, but only where the strips were wider than three metres; narrower ones functioned simply as barriers with flowers." },
      { t: 84, sp: "Lecturer", line: "Third, and most quoted, is the finding about pesticides. Gardeners in the study area used considerably less insecticide than farmers in the surrounding countryside, and that difference, rather than the volume of flowers, explained the health of the colonies." },
      { t: 102, sp: "Lecturer", line: "Now, a caution. Three years is a short window, and insect populations swing wildly with weather; the hot summer in the second year inflated every count. So treat the numbers as indicative, not definitive." },
      { t: 116, sp: "Lecturer", line: "What should planners take from this? Not, as the newspapers claimed, that parks are useless. The lesson is more specific: when a city replaces a residential garden with paving, it removes habitat that no amount of new parkland compensates for, because the value lies in the age and messiness of the habitat, and that takes decades to accumulate." },
      { t: 139, sp: "Lecturer", line: "Next week we will look at the same question from the bees' perspective, using the genetic data, and I will post the reading on the noticeboard this afternoon." }
    ],
    questions: [
      {
        n: 31, type: "NOTE", diff: "advanced", bandLevel: "Band 6.5",
        q: "The team expected the best bee diversity at the rural ______ of the city.", answer: "edge", accepted: ["edge", "fringe"],
        ex: { test: "Noting an expectation that the lecture then overturns.", where: "Lecturer (00:11).", quote: "…the team expected the rural edge to come out best.", why: "The expectation named is the rural edge; the result then contradicts it.", mine: "Writing 'parks' — that was the other wrong prediction, mentioned later, and it belongs to the result section rather than the expectation.", trap: "Two disappointed predictions (parks, rural edge) separated by several minutes.", next: "Keep the lecture's structure in mind: expectation first, result second. Label them in the margin as E and R." },
        vocab: [["diversity", "the range of different species present"], ["come out best", "to end up as the best case"]]
      },
      {
        n: 32, type: "NOTE", diff: "advanced", bandLevel: "Band 7",
        q: "Highest species diversity was found in the oldest ______ districts.", answer: "residential", accepted: ["residential", "housing", "old residential"],
        ex: { test: "Recording the location that replaced the researchers' expectation.", where: "Lecturer (00:28).", quote: "…the highest diversity of wild bee species was found in the oldest residential districts — not in the parks…", why: "The result is the oldest residential districts; the parks are explicitly excluded in the same sentence.", mine: "Writing 'park' because that is where people expect bees — the lecture is built on exactly that mistake.", trap: "The word 'parks' appears immediately after the answer, as a negative.", next: "In Section 4 notes, a negated word placed right after a positive one is the oldest trap in the test. Read the whole sentence." },
        vocab: [["residential", "consisting of homes rather than businesses"], ["district", "an area of a city"]]
      },
      {
        n: 33, type: "NOTE", diff: "advanced", bandLevel: "Band 7",
        q: "The key factor was the presence of ______ (the lecturer calls this the explanation).", answer: "gardens", accepted: ["gardens", "garden"],
        ex: { test: "Catching a one-word explanation that reframes the whole study.", where: "Lecturer (00:28, final clause).", quote: "The reason turned out to be gardens.", why: "The lecturer states the reason in a two-clause sentence; 'gardens' is the single noun answer.", mine: "Writing 'variety' or 'flowers' — those are features of gardens, discussed in the next sentence, not the cause itself.", trap: "An abstract noun offered immediately afterwards as an elaboration.", next: "Sentences beginning 'The reason…' or 'This is because…' are answer sentences in Section 4. Follow them with your pen." },
        vocab: [["reframe", "to change how something is understood"], ["elaboration", "extra detail that expands a point"]]
      },
      {
        n: 34, type: "NOTE", diff: "advanced", bandLevel: "Band 7",
        q: "Bees that nest underground need patches of bare ______", answer: "ground", accepted: ["ground", "soil", "earth"],
        ex: { test: "Recording one item from a list of three habitat features.", where: "Lecturer (00:44).", quote: "…flowers that bloom at different times, bare ground for the species that nest underground, and old walls where others make their nests.", why: "The list gives three needs; bare ground is the one linked to underground nesting.", mine: "Writing 'flowers' or 'walls' — both belong to the same list but answer different species' needs.", trap: "A three-part list where each element is paired with a different purpose, and the question tests only one pairing.", next: "For list questions, write the three items and their purposes side by side in the margin as you hear them." },
        vocab: [["bare ground", "soil with nothing growing on it"], ["nest", "to build a place to raise young"]]
      },
      {
        n: 35, type: "NOTE", diff: "advanced", bandLevel: "Band 7",
        q: "Corridors helped bees move only where they were wider than ______ metres.", answer: "three", accepted: ["three", "3", "3 metres", "three metres"],
        ex: { test: "Catching a numerical threshold inside a concession.", where: "Lecturer (00:62).", quote: "Corridors did help bees to move between sites, but only where the strips were wider than three metres; narrower ones functioned simply as barriers with flowers.", why: "Three metres is the threshold above which corridors worked; below it they are described as barriers.", mine: "Writing 'narrower' or skipping the number because the sentence is long — but the number carries the mark.", trap: "A vivid phrase ('barriers with flowers') that is memorable but not the answer.", next: "When you hear 'only where' or 'wider than', the number that follows is almost always the gap." },
        vocab: [["corridor", "a strip of habitat linking two areas"], ["threshold", "the point at which something changes"]]
      },
      {
        n: 36, type: "NOTE", diff: "advanced", bandLevel: "Band 7",
        q: "The study found that gardeners used far less ______ than farmers nearby.", answer: "insecticide", accepted: ["insecticide", "insecticides", "pesticide", "pesticides"],
        ex: { test: "Recording the chemical named as the third finding.", where: "Lecturer (00:84).", quote: "Gardeners in the study area used considerably less insecticide than farmers in the surrounding countryside…", why: "The comparison is between gardeners' and farmers' insecticide use; 'pesticide' is accepted as a broader equivalent.", mine: "Writing 'flowers' or 'fertiliser' — the lecture attributes colony health to the chemical difference, not to plant volume.", trap: "A comparison in which the point is the difference in use, not the size of the gardens.", next: "Comparison sentences in Section 4 ('X used less … than Y') reliably hide the answer in the middle of a long sentence." },
        vocab: [["insecticide", "a chemical that kills insects"], ["colony", "a group of bees living together"]]
      },
      {
        n: 37, type: "NOTE", diff: "advanced", bandLevel: "Band 7",
        q: "A hot summer in the second year ______ every count of bees.", answer: "inflated", accepted: ["inflated", "increased", "raised"],
        ex: { test: "Recording a verb that the lecturer uses to question her own data.", where: "Lecturer (00:102).", quote: "…the hot summer in the second year inflated every count.", why: "'Inflated' is the verb the lecturer chooses, and it signals that the figures were pushed upwards artificially.", mine: "Writing 'affected' — true but too vague, and IELTS note completion needs the word used, not a summary.", trap: "A caution section in which the lecturer undermines her own headline finding.", next: "Expect one caution paragraph in a Section 4 lecture; it usually contains one or two gap answers and a warning about over-claiming." },
        vocab: [["inflate", "to make a figure larger than it should be"], ["indicative", "showing a tendency rather than proving it"]]
      },
      {
        n: 38, type: "NOTE", diff: "advanced", bandLevel: "Band 7",
        q: "Three years is a short window, so the numbers should be treated as indicative rather than ______.", answer: "definitive", accepted: ["definitive", "conclusive", "final"],
        ex: { test: "Recording the second half of an 'X rather than Y' contrast.", where: "Lecturer (00:102).", quote: "So treat the numbers as indicative, not definitive.", why: "The lecturer contrasts indicative with definitive; the gap follows 'rather than', so the missing word is 'definitive'.", mine: "Writing 'indicative' repeats the word already in the question — always check which half of the contrast the gap occupies.", trap: "Two adjectives, both unusual, in a fixed contrast; candidates often write the wrong one.", next: "Mark contrast pairs as A/B the moment you hear them, and note which slot the question is testing." },
        vocab: [["definitive", "final and completely reliable"], ["window", "a limited period of time"]]
      },
      {
        n: 39, type: "NOTE", diff: "advanced", bandLevel: "Band 7.5",
        q: "When a garden becomes paving, the habitat it removes cannot be replaced by new ______.", answer: "parkland", accepted: ["parkland", "parks", "park"],
        ex: { test: "Following the practical implication at the end of the lecture.", where: "Lecturer (00:116).", quote: "…it removes habitat that no amount of new parkland compensates for…", why: "The lecturer states that parkland cannot compensate for lost garden habitat — the contrast is with the earlier finding that parks were never the best habitat.", mine: "Writing 'gardens' — it repeats the subject of the sentence rather than the thing that fails to compensate.", trap: "A negative structure ('no amount of') that hides the noun performing the failed action.", next: "In sentences with 'no amount of X compensates', X is the thing that fails — the answer if the question asks what cannot help." },
        vocab: [["paving", "a hard surface covering the ground"], ["compensate for", "to make up for a loss"]]
      },
      {
        n: 40, type: "NOTE", diff: "advanced", bandLevel: "Band 7.5",
        q: "The value of the habitat comes from its age and its ______.", answer: "messiness", accepted: ["messiness", "messy", "untidiness"],
        ex: { test: "Recording an abstract quality that the lecturer deliberately redefines.", where: "Lecturer (00:116, final clause).", quote: "…the value lies in the age and messiness of the habitat, and that takes decades to accumulate.", why: "Age and messiness are named as the two sources of value, and 'messiness' is the marked word the lecturer reclaims from the tidy-lawn comparison.", mine: "Writing 'flowers' or 'variety' — plausible from the earlier garden description, but this closing sentence names two qualities only.", trap: "A near-synonym ('variety', 'complexity') that the lecture used earlier for a different point.", next: "In the closing 30 seconds of Section 4, expect the lecturer's summary claim. Those two or three nouns are frequently gap answers." },
        vocab: [["messiness", "an untidy quality, here valued as habitat variety"], ["accumulate", "to build up over time"]]
      }
    ]
  };

  BANK.tests.push({ id: "L-TEST-2", title: "Listening Test 2", module: "academic", difficulty: "mixed", sections: [] });
  BANK.sections.push(S1, S2, S3, S4);
})();
