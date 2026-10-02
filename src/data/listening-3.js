/* =========================================================================
   IELTS MASTERY — LISTENING BANK (Test 3, Sections 1–4)
   Section 1: Reporting a faulty boiler to a letting agent (form + MCQ)
   Section 2: A guide's talk at the Fenwick Hill roundhouse (MCQ + matching + notes)
   Section 3: Two students plan a travel survey with their tutor (MCQ + matching + notes)
   Section 4: Lecture on sleep, consolidation and the failure of cramming (notes)
   Transcripts are original. Every key is verifiable in its own script and
   carries a 7-field explanation: what was tested, where it appears, the quote,
   why it is right, why your answer was wrong, the trap, and what to do next.
   ========================================================================= */
(function () {
  var BANK = (window.BANK_LISTENING = window.BANK_LISTENING || { tests: [], sections: [] });

  var S1 = {
    id: "L3-S1",
    testId: "L-TEST-3",
    number: 1,
    context: "A man telephones Fairview Property Management to report a fault in his flat.",
    speakers: ["Manager (female, British)", "Tenant (male, Italian-British)"],
    accent: ["British", "Italian"],
    difficulty: "beginner",
    band: "5.0–5.5",
    notes: "Section 1 is transactional, so the order never varies: name, spelling, post code, the fault, the visit, the money. Write each figure the moment it is spoken, and beside every fact you hear and then have to reject, write NO.",
    transcript: [
      { t: 0, sp: "Manager", line: "Fairview Property Management, Renata speaking. How can I help?" },
      { t: 6, sp: "Tenant", line: "Hello, I'd like to report a fault. I'm Daniele Ferrante, in flat 7B at Ardwick Court." },
      { t: 14, sp: "Manager", line: "Thank you. Can I take the spelling of the surname, and the post code for the address?" },
      { t: 22, sp: "Tenant", line: "Ferrante — F-E-R-R-A-N-T-E. The post code is NC4 9TL." },
      { t: 31, sp: "Manager", line: "Noted. Now, what is the fault?" },
      { t: 35, sp: "Tenant", line: "The heating is not working. There has been no hot water at all since Tuesday evening." },
      { t: 47, sp: "Manager", line: "Is anything else affected? Any damp, or any smell of gas?" },
      { t: 53, sp: "Tenant", line: "No smell of gas, thank you. Just the heating. It is a combi boiler — the installer told me that when they fitted it last year." },
      { t: 67, sp: "Manager", line: "Right. A Gas Safe registered engineer is required for a boiler, so I cannot book our own handyman. We send our own." },
      { t: 83, sp: "Tenant", line: "How soon can someone come?" },
      { t: 86, sp: "Manager", line: "The engineer's next free slot is Thursday. He is on leave on Friday and again on Monday. Thursday morning, eight until twelve — the appointment before yours was cancelled." },
      { t: 104, sp: "Tenant", line: "Thursday morning works. Do I have to be there?" },
      { t: 109, sp: "Manager", line: "Yes, someone must be there to let him in. If you are out, we can use your spare key, but only if you confirm that in writing beforehand." },
      { t: 124, sp: "Tenant", line: "I'll be at home then. Is there a charge for the visit?" },
      { t: 128, sp: "Manager", line: "No charge for the repair, because the boiler is still under warranty until March. There is a call-out fee of forty-five pounds if nobody is at home, which is precisely the situation we must avoid." },
      { t: 147, sp: "Tenant", line: "Understood. And how would I pay if that happened?" },
      { t: 151, sp: "Manager", line: "The fee is added to your rent statement at the end of the month; we do not take card payments over the phone. And one warning — please do not ask the engineer to look at the shower, because that counts as a second appointment and a second fee." },
      { t: 172, sp: "Tenant", line: "Understood. Thank you very much." }
    ],
    questions: [
      {
        n: 1, type: "FORM", diff: "beginner", bandLevel: "Band 5",
        q: "Tenant's surname: ______", answer: "Ferrante", accepted: ["ferrante"],
        ex: { test: "Writing down a surname that the speaker spells out for you.", where: "Tenant (00:22).", quote: "Ferrante — F-E-R-R-A-N-T-E.", why: "The manager asks for the spelling and the tenant dictates it letter by letter, so the letters are the only reliable source.", mine: "Writing Ferranti or Ferante from the pronunciation alone — a final -e is inaudible in connected speech, and the letters settle it.", trap: "A surname that sounds like several other Italian names, with no spelling anywhere else in the script.", next: "When a speaker spells a word, copy the letters as they come and check the final letter before you look up again." },
        vocab: [["tenancy", "the right to live in a property by paying rent"], ["dictate", "to say something aloud for someone to write down"]]
      },
      {
        n: 2, type: "FORM", diff: "beginner", bandLevel: "Band 5",
        q: "Address: flat 7______, Ardwick Court", answer: "B", accepted: ["b", "7b", "seven b"],
        ex: { test: "Capturing a single-letter detail embedded in a full address.", where: "Tenant (00:6).", quote: "I'm Daniele Ferrante, in flat 7B at Ardwick Court.", why: "The flat number is 7B; the street name follows it and the gap sits directly after the 7.", mine: "Writing 8B or 78 because a letter spoken after a digit is easily lost in the middle of an address.", trap: "A one-letter suffix that sounds like the start of the next word when read quickly.", next: "In addresses, write the digit and the letter together as one token, then read the street name separately." },
        vocab: [["flat", "a set of rooms on one floor of a building"], ["court", "a block of flats sharing an entrance"]]
      },
      {
        n: 3, type: "FORM", diff: "beginner", bandLevel: "Band 5",
        q: "Post code: NC4 ______", answer: "9TL", accepted: ["9tl", "nc4 9tl"],
        ex: { test: "Transcribing an alphanumeric post code accurately.", where: "Tenant (00:22).", quote: "The post code is NC4 9TL.", why: "The second half of the post code is 9TL; NC4 is already printed in the question.", mine: "Writing 9IL or 9TI, because T and I are near-identical when a post code is read at speed.", trap: "Short codes where each wrong letter produces a plausible, real-looking post code.", next: "Write post-code characters as separate symbols rather than as a word, and repeat them once under the line." },
        vocab: [["post code", "a short code of letters and numbers used in an address"], ["alphanumeric", "made of both letters and numbers"]]
      },
      {
        n: 4, type: "FORM", diff: "intermediate", bandLevel: "Band 5.5",
        q: "The engineer must be ______ registered to repair the boiler.", answer: "Gas Safe", accepted: ["gas safe", "gassafe", "gas-safe"],
        ex: { test: "Recording a legal registration requirement stated as a condition.", where: "Manager (00:67).", quote: "A Gas Safe registered engineer is required for a boiler, so I cannot book our own handyman.", why: "The scheme name Gas Safe is what makes the engineer eligible, and it is why the agent cannot use an in-house tradesman.", mine: "Writing 'registered' or 'certified' — both words appear, but the gap asks for the name of the scheme before 'registered'.", trap: "A named scheme that sounds like a description, so the eye slides past it as if it were part of the phrase.", next: "When a speaker says a job 'is required', the gap is usually the specific authority or scheme that imposes it." },
        vocab: [["registered", "officially recorded on an approved list"], ["handyman", "a worker who does general repairs"]]
      },
      {
        n: 5, type: "FORM", diff: "intermediate", bandLevel: "Band 5.5",
        q: "Appointment offered: Thursday ______, 8 a.m. until noon", answer: "morning", accepted: ["morning", "thursday morning", "the morning"],
        ex: { test: "Selecting the time slot that survives two rejected alternatives.", where: "Manager (00:86).", quote: "The engineer's next free slot is Thursday. He is on leave on Friday and again on Monday. Thursday morning, eight until twelve.", why: "Friday and Monday are excluded by the leave, so the surviving slot is Thursday morning.", mine: "Writing Friday because it is the first day named, or Monday because it is the last — both are spoken to be ruled out.", trap: "Two rejected days sitting between the question and its answer, which is where the pen usually is when they are heard.", next: "When you hear a day in a booking conversation, write it with a tick or a cross the instant it is spoken; answer later." },
        vocab: [["slot", "a space of time available for an appointment"], ["call-out", "a visit made to a property to repair something"]]
      },
      {
        n: 6, type: "FORM", diff: "intermediate", bandLevel: "Band 5.5",
        q: "Call-out fee if nobody is home: £______", answer: "45", accepted: ["45", "forty five", "forty-five", "£45"],
        ex: { test: "Selecting the price that belongs to a penalty rather than to the repair.", where: "Manager (00:128).", quote: "There is a call-out fee of forty-five pounds if nobody is at home, which is precisely the situation we must avoid.", why: "Forty-five pounds is the fee for an empty flat; the repair itself is free under the warranty.", mine: "Writing 0 or 'free' — that is the cost of the repair, and the sentence deliberately pairs it with the fee for the other case.", trap: "A zero-cost statement and a £45 statement in the same breath, with the gap asking for the figure.", next: "Pair every price with what it buys: fee-for-absence, no charge-for-repair. Write the label beside the number." },
        vocab: [["penalty", "an extra payment demanded as a punishment"], ["warranty", "a guarantee that a product will be repaired free of charge"]]
      },
      {
        n: 7, type: "FORM", diff: "beginner", bandLevel: "Band 5",
        q: "The tenant must be ______ to let the engineer in.", answer: "there", accepted: ["there", "at home", "present"],
        ex: { test: "Recording an obligation where the sentence also offers an alternative route.", where: "Manager (00:109).", quote: "Yes, someone must be there to let him in. If you are out, we can use your spare key, but only if you confirm that in writing beforehand.", why: "Someone must be present; the spare key is a conditional exception that requires written confirmation.", mine: "Writing 'present' as if it were the word used, or missing the requirement entirely because a key is mentioned.", trap: "A convenient alternative offered immediately after the rule, which is easier to remember than the rule itself.", next: "In procedural conversations, write the rule first and the exception underneath it, clearly separated." },
        vocab: [["let in", "to allow someone to enter a building"], ["spare key", "an extra key kept in case the main one is lost"]]
      },
      {
        n: 8, type: "FORM", diff: "intermediate", bandLevel: "Band 5.5",
        q: "If a fee is charged, it is added to the ______ statement.", answer: "rent", accepted: ["rent", "rent statement", "monthly rent"],
        ex: { test: "Capturing the payment channel rather than the amount.", where: "Manager (00:151).", quote: "The fee is added to your rent statement at the end of the month; we do not take card payments over the phone.", why: "The fee appears on the rent statement, and card payment over the phone is explicitly refused.", mine: "Writing 'card' or 'phone' because the sentence spends most of its length rejecting that route.", trap: "A long negative clause after a short positive one — attention is spent where the speaker refuses, not where they decide.", next: "Listen for the word after 'added to'; the clause after the semicolon is the route that is closed." },
        vocab: [["statement", "a document listing money owed and money paid"], ["instalment", "one of several payments spread over time"]]
      },
      {
        n: 9, type: "MCQ", diff: "intermediate", bandLevel: "Band 6",
        q: "Why does the manager refuse to book the agent's own handyman?\nA The handyman is not insured for boilers.\nB Boiler work requires a Gas Safe registered engineer.\nC The handyman charges more than the fee.\nD The engineer is already on holiday.",
        answer: "B", accepted: ["b", "boiler work requires a gas safe registered engineer", "gas safe"],
        ex: { test: "Matching a stated reason to the situation it explains.", where: "Manager (00:67).", quote: "A Gas Safe registered engineer is required for a boiler, so I cannot book our own handyman.", why: "The requirement for a registered engineer is the stated cause of the refusal; the holiday explains the Thursday date, not the refusal.", mine: "Choosing D because leave is mentioned in the call — but the leave comes later and concerns the appointment, not the choice of worker.", trap: "A true statement from later in the conversation that explains a different detail entirely.", next: "For 'why' questions, look for a because or so clause; facts spoken elsewhere usually explain other questions." },
        vocab: [["insure", "to cover something financially against loss"], ["refuse", "to say that you will not do something"]]
      },
      {
        n: 10, type: "MCQ", diff: "advanced", bandLevel: "Band 6.5",
        q: "What does the manager warn the tenant not to do?\nA Ask the engineer to inspect the shower.\nB Report the fault again before Thursday.\nC Stay home all day on Thursday.\nD Contact the boiler manufacturer directly.",
        answer: "A", accepted: ["a", "ask the engineer to inspect the shower", "the shower"],
        ex: { test: "Identifying a prohibition that arrives at the very end of the conversation.", where: "Manager (00:151, final clause).", quote: "And one warning — please do not ask the engineer to look at the shower, because that counts as a second appointment and a second fee.", why: "The warning is against requesting a shower inspection, since it triggers a second appointment and a second fee.", mine: "Choosing C because being at home on Thursday is correct advice — but it is what the tenant already agreed to do, not a warning.", trap: "A true, helpful instruction sitting in the same turn as the actual prohibition.", next: "Signal 'one warning' in your margin the moment you hear it: that phrase marks the last answer of a Section 1 call." },
        vocab: [["prohibition", "a rule that forbids something"], ["manufacturer", "the company that makes a product"]]
      }
    ]
  };

  var S2 = {
    id: "L3-S2",
    testId: "L-TEST-3",
    number: 2,
    context: "A guide briefs visitors on the Bronze Age roundhouse at Fenwick Hill.",
    speakers: ["Guide (male, Scottish)"],
    accent: ["Scottish"],
    difficulty: "intermediate",
    band: "5.5–6.5",
    notes: "Section 2 is a monologue with nobody to check with, so keep a running outline in the order the guide uses: age, structure, materials, artefacts, visitor rules.",
    transcript: [
      { t: 0, sp: "Guide", line: "Right, follow me in. Two things before we start: the remains are over seven thousand years old, and everything you can see here was rebuilt by archaeologists rather than left standing." },
      { t: 16, sp: "Guide", line: "The building itself is a roundhouse — a circular timber structure with a thatched roof. Locally they call it a crannog-house, though that is not the usual archaeological term." },
      { t: 32, sp: "Guide", line: "It stood beside the loch, on a terrace of made-up ground, and everything in daily life happened around a central hearth that was relit every single night for generations." },
      { t: 50, sp: "Guide", line: "We know more about the fire than about the people. In one excavated part of the floor the charcoal showed that the same hearth was used for about four hundred years without ever being allowed to go out completely." },
      { t: 68, sp: "Guide", line: "On the artefacts: flint tools, pottery, and a bone comb. The comb was made from deer antler, and we think combing was probably a status activity, because antler tools are found elsewhere in Europe almost only in burials." },
      { t: 88, sp: "Guide", line: "Notice the entrance passage — it is narrower than anything you would build today, and that was deliberate. A narrow entrance meant the room stayed warm and smoke escaped through the roof rather than through the doorway." },
      { t: 106, sp: "Guide", line: "Now the timber. The uprights were alder, because alder does not rot when it stands in wet ground. The roof was thatch, and about a third of it has been reconstructed using the original method, which we can watch during summer sessions." },
      { t: 128, sp: "Guide", line: "Two practical notes. Photography is not allowed inside the structure, and the path up to the hill is steep — the wheelchair route is the gravel track on the far side, which adds about eight minutes." },
      { t: 147, sp: "Guide", line: "Finally, the reconstructed hearth in the far corner is a working demonstration fire. It is lit only at weekends, on Saturday and Sunday mornings, so if you have come on a weekday you will be looking at the unlit version." }
    ],
    questions: [
      {
        n: 11, type: "MCQ", diff: "intermediate", bandLevel: "Band 6",
        q: "What does the guide say about the building as visitors can see it?\nA It is the oldest wooden building in Scotland.\nB It was reconstructed by archaeologists.\nC It survived because of its thatched roof.\nD It is a modern replica built for visitors.",
        answer: "B", accepted: ["b", "reconstructed by archaeologists", "it was reconstructed"],
        ex: { test: "Identifying a qualification the speaker attaches to the whole site.", where: "Guide (00:0).", quote: "everything you can see here was rebuilt by archaeologists rather than left standing", why: "The guide states that what visitors see was rebuilt rather than left standing, which is exactly option B.", mine: "Choosing D because a reconstructed building does resemble a replica — but the guide credits archaeologists, and D claims it was built for visitors.", trap: "A true general impression (it looks new) resting next to the precise claim that answers the question.", next: "Listen for who did something and why; claims such as rebuilt or original carry the answer, not impressions of appearance." },
        vocab: [["reconstruct", "to rebuild something that no longer exists"], ["remains", "what survives of an ancient structure"]]
      },
      {
        n: 12, type: "NOTE", diff: "intermediate", bandLevel: "Band 6",
        q: "Locally, the roundhouse is also known as a ______-house.", answer: "crannog", accepted: ["crannog", "crannog-house", "crannog house"],
        ex: { test: "Recording a local alternative term and then immediately discounting it.", where: "Guide (00:16).", quote: "Locally they call it a crannog-house, though that is not the usual archaeological term.", why: "The local name is crannog-house, although the guide notes it is not the standard archaeological term.", mine: "Writing 'loch' because a crannog is a loch dwelling — but the speaker never uses that word for the name.", trap: "A term introduced and then qualified, which makes it sound unreliable even though it is precisely the answer.", next: "Note the word as soon as it is coined, and record the qualification separately so it does not erase the name." },
        vocab: [["crannog", "an artificial island or dwelling in a loch"], ["archaeological term", "the technical word specialists in a field use"]]
      },
      {
        n: 13, type: "NOTE", diff: "beginner", bandLevel: "Band 5.5",
        q: "The roundhouse was built on a terrace of ______ ground beside the loch.", answer: "made-up", accepted: ["made-up", "made up", "madeup"],
        ex: { test: "Noting a two-word description of the ground the building stood on.", where: "Guide (00:32).", quote: "It stood beside the loch, on a terrace of made-up ground", why: "The site is described as a terrace of made-up ground beside the loch, meaning the land was built up deliberately.", mine: "Writing 'flat' or 'rocky' — both plausible for a loch shore, but neither word appears.", trap: "A hyphenated phrase that turns into one garbled word when the guide speaks quickly.", next: "Write hyphenated compounds exactly as spoken: made-up, made-up ground." },
        vocab: [["terrace", "a level strip of ground"], ["made-up ground", "land built up by adding soil, often from elsewhere"]]
      },
      {
        n: 14, type: "NOTE", diff: "advanced", bandLevel: "Band 6.5",
        q: "One hearth was used for about four hundred years without ever being allowed to ______ out completely.", answer: "go", accepted: ["go", "die", "burn out"],
        ex: { test: "Completing a negative clause whose verb follows an infinitive frame.", where: "Guide (00:50).", quote: "the same hearth was used for about four hundred years without ever being allowed to go out completely", why: "The verb after 'allowed to' is go, as in 'go out completely'.", mine: "Writing 'put' or 'be put' — the passive reading is natural in English, but the frame is 'allowed to go out'.", trap: "A 'without ever being allowed to' frame that pushes passive agreement into the gap.", next: "After 'allowed to', write the bare infinitive; the passive is carried by 'being', not by the gap." },
        vocab: [["hearth", "the open fire used for heating and cooking"], ["charcoal", "the carbon left when wood burns without enough oxygen"]]
      },
      {
        n: 15, type: "NOTE", diff: "intermediate", bandLevel: "Band 6",
        q: "The bone comb was made from ______ antler.", answer: "deer", accepted: ["deer", "deer's", "deer antler"],
        ex: { test: "Recording the animal source of a material named in a list of artefacts.", where: "Guide (00:68).", quote: "The comb was made from deer antler", why: "The comb came from deer antler; the other artefacts listed are flint tools and pottery.", mine: "Writing 'bone' because the question calls it a bone comb — the guide specifies antler, which is a different material.", trap: "A category in the question (bone) that is broader than the word the speaker uses (deer).", next: "When the question gives a general term, prefer the specific word the speaker uses if it fits the gap's grammar." },
        vocab: [["antler", "the horn of a deer, used as a material"], ["artefact", "an object made and used by people in the past"]]
      },
      {
        n: 16, type: "NOTE", diff: "advanced", bandLevel: "Band 7",
        q: "Antler tools are found elsewhere in Europe almost only in ______.", answer: "burials", accepted: ["burials", "burial contexts", "graves"],
        ex: { test: "Capturing the comparison group that supports an inference about status.", where: "Guide (00:68, final clause).", quote: "antler tools are found elsewhere in Europe almost only in burials", why: "Antler tools appear in other European sites almost exclusively in burials, which is why combing is read as a status activity.", mine: "Writing 'houses' or 'riverside' — the loch setting is mentioned earlier, but the comparison here is with burials.", trap: "An earlier setting detail reused by the ear where a later comparative statistic is actually needed.", next: "When a speaker says 'elsewhere', note the comparison group carefully — it is the evidence, not the scenery." },
        vocab: [["burial", "the place where a dead body is laid in the ground"], ["status", "social position or importance"]]
      },
      {
        n: 17, type: "NOTE", diff: "intermediate", bandLevel: "Band 6",
        q: "The narrow entrance passage kept smoke out by letting it escape through the ______.", answer: "roof", accepted: ["roof", "the roof", "thatched roof"],
        ex: { test: "Following a stated function back to the part of the structure it names.", where: "Guide (00:88).", quote: "A narrow entrance meant the room stayed warm and smoke escaped through the roof rather than through the doorway.", why: "The smoke left through the roof, which is why the doorway could be narrow and still work.", mine: "Writing 'doorway' because the passage is discussed at length — but the doorway is explicitly rejected as the exit route.", trap: "A contrast stated with 'rather than', where the rejected item is the noun the sentence is otherwise about.", next: "In an 'X rather than Y' construction, mark Y as NO; here the doorway fails the smoke test." },
        vocab: [["passage", "a narrow entrance corridor into a building"], ["ventilation", "the movement of fresh air through a space"]]
      },
      {
        n: 18, type: "NOTE", diff: "intermediate", bandLevel: "Band 6",
        q: "The upright timbers of the structure were made of ______, which does not rot in wet ground.", answer: "alder", accepted: ["alder", "alders", "alder wood"],
        ex: { test: "Matching a named material to the property that justifies its use.", where: "Guide (00:106).", quote: "The uprights were alder, because alder does not rot when it stands in wet ground.", why: "Alder is chosen precisely because it resists rot in wet ground.", mine: "Writing 'oak' or 'ash' — both strong timbers, but the guide names alder and repeats it as the reason.", trap: "A 'because' clause that supplies both the material and its justification in one breath.", next: "When a speaker gives a because clause, the first noun before 'because' is usually the gap answer." },
        vocab: [["upright", "a vertical post that supports a structure"], ["rot", "to decay gradually, especially wood or metal"]]
      },
      {
        n: 19, type: "NOTE", diff: "advanced", bandLevel: "Band 7",
        q: "Roughly one third of the roof was rebuilt using the ______ method.", answer: "original", accepted: ["original", "the original", "original method"],
        ex: { test: "Recording the qualifier on a proportion, where the fraction is already given in the question.", where: "Guide (00:106, final clause).", quote: "The roof was thatch, and about a third of it has been reconstructed using the original method", why: "A third of the thatch has been reconstructed using the original method; 'about a third' is the part the question supplies.", mine: "Writing 'thatched' because thatch is named in the same sentence — but the question asks about the rebuilding, not the covering.", trap: "A material named in the question's clause that is neither the fraction nor the method.", next: "In questions that already give the quantity, listen for the verb phrase that explains how it was done." },
        vocab: [["thatch", "a roof covering of dried straw or reeds"], ["upkeep", "the work of maintaining something in good condition"]]
      },
      {
        n: 20, type: "MCQ", diff: "advanced", bandLevel: "Band 6.5",
        q: "When is the demonstration fire in the far corner lit?\nA every weekday morning\nB only on Saturday and Sunday mornings\nC at lunchtime in summer\nD during evening sessions",
        answer: "B", accepted: ["b", "only on saturday and sunday mornings", "saturday and sunday mornings"],
        ex: { test: "Distinguishing the demonstration from the original hearth discussed earlier in the talk.", where: "Guide (00:147).", quote: "It is lit only at weekends, on Saturday and Sunday mornings, so if you have come on a weekday you will be looking at the unlit version.", why: "The demonstration fire is lit only at weekends, on Saturday and Sunday mornings; weekdays show the unlit version.", mine: "Choosing C because 'summer sessions' is mentioned for the thatching — but that concerns watching the reconstruction, not the fire's schedule.", trap: "A true seasonal detail from an earlier paragraph competing with the timetable the question actually asks for.", next: "For schedule questions, write the days and the time separately; they are two pieces of information in one answer." },
        vocab: [["demonstration", "an activity carried out so that people can watch it"], ["reconstruction", "a rebuilt version of something that has decayed or vanished"]]
      }
    ]
  };

  var S3 = {
    id: "L3-S3",
    testId: "L-TEST-3",
    number: 3,
    context: "Two students and a tutor argue about the method of a travel-to-campus survey.",
    speakers: ["Dr Hargreaves (tutor, British)", "Bea (student, Italian)", "Kofi (student, Ghanaian)"],
    accent: ["British", "Italian", "Ghanaian"],
    difficulty: "advanced",
    band: "6.0–7.0",
    notes: "Section 3 rewards tracking who has the power in the conversation. When the tutor evaluates or redirects, that turn almost always carries the answer.",
    transcript: [
      { t: 0, sp: "Dr Hargreaves", line: "Come in, both of you. You wanted twenty minutes on the methodology for your travel survey. Where are you up to?" },
      { t: 10, sp: "Bea", line: "We've drafted the questionnaire. Twenty-one questions, and we were aiming to get three hundred responses in a fortnight." },
      { t: 20, sp: "Dr Hargreaves", line: "Twenty-one is too many for a survey people fill in on their phones while waiting for a bus. Halve it." },
      { t: 29, sp: "Kofi", line: "We could cut the background questions — the ones about course and year of study." },
      { t: 35, sp: "Dr Hargreaves", line: "No, cut those last. Those are your stratifiers; without them you cannot say whether cyclists differ between first-years and finals. The background data is cheap to collect and expensive to lose." },
      { t: 52, sp: "Bea", line: "Then what goes? The questions about why people chose their route are the most interesting ones." },
      { t: 60, sp: "Dr Hargreaves", line: "The most interesting, and the least reliable, because people invent reasons. Ask them what they did last Tuesday instead. Specific behaviour, not stated preference." },
      { t: 74, sp: "Kofi", line: "So a recall question. Would a one-day diary be better? Some of our classmates keep one for a module on research methods." },
      { t: 85, sp: "Dr Hargreaves", line: "A diary is gold for the twenty people who complete it, and you will get twenty. I want something you can report at three hundred. Use recall of a single weekday and validate it against the transport app figures I sent you." },
      { t: 102, sp: "Bea", line: "And the three hundred target — we assumed we could post it on the student union page and on two group chats." },
      { t: 112, sp: "Dr Hargreaves", line: "That will get you two hundred from people who already like you. Add one face-to-face hour at the bus interchange, which is where your non-drivers are, and you will pass three hundred without chasing anyone." },
      { t: 129, sp: "Kofi", line: "Two weeks, then? Or a month would let us run it twice and compare term-time with the holidays." },
      { t: 137, sp: "Dr Hargreaves", line: "One fortnight. Two is how you get the same people twice. If you want a comparison, run the second round after the data deadline rather than stretching the first one." },
      { t: 154, sp: "Dr Hargreaves", line: "Three things before you leave. Consent at the top, not in a footnote — a tick box with an explicit yes. Anonymise at the point of entry, so even the file on your laptop has no names. And be honest in the write-up about who you did not reach, because the people who never opened the link are a category in themselves." },
      { t: 180, sp: "Bea", line: "And if the response rate is lower than three hundred?" },
      { t: 184, sp: "Dr Hargreaves", line: "Then report the rate as a limitation and analyse what you have. Do not quietly widen the question afterwards to justify the sample." }
    ],
    questions: [
      {
        n: 21, type: "MCQ", diff: "intermediate", bandLevel: "Band 6",
        q: "What does the tutor say about the number of questions in the questionnaire?\nA It is too long and should be halved.\nB It is the right number for a student survey.\nC It should be reduced to five.\nD It should be kept at twenty-one for detail.",
        answer: "A", accepted: ["a", "too long and should be halved", "halved"],
        ex: { test: "Following a terse instruction about a draft the students have just described.", where: "Dr Hargreaves (00:20).", quote: "Twenty-one is too many for a survey people fill in on their phones while waiting for a bus. Halve it.", why: "The tutor calls twenty-one too many and instructs them to halve it, which is option A.", mine: "Choosing C because 'too many' suggests reduction — but the tutor specifies halving, and a jump to five is invented.", trap: "A one-word instruction ('Halve it') where the arithmetic word itself is the answer.", next: "When a speaker issues a bare imperative, write that verb — the imperative is usually the tested instruction." },
        vocab: [["questionnaire", "a set of written questions used to collect data"], ["halve", "to reduce something to half"]]
      },
      {
        n: 22, type: "MCQ", diff: "advanced", bandLevel: "Band 6.5",
        q: "Why does the tutor oppose removing the background questions?\nA They make the survey look more professional.\nB They are needed to compare groups within the sample.\nC They are the questions students enjoy answering.\nD They were added by a previous cohort.",
        answer: "B", accepted: ["b", "needed to compare groups within the sample", "stratifiers"],
        ex: { test: "Matching a rejected proposal to the reason it is rejected.", where: "Dr Hargreaves (00:35).", quote: "Those are your stratifiers; without them you cannot say whether cyclists differ between first-years and finals.", why: "The background questions allow differences between year groups to be examined, which is what option B states.", mine: "Choosing A because the background questions do make the study look more thorough — but that is never claimed, and the reason given is analytical.", trap: "A professional-sounding benefit that sounds sensible but is not the reason the speaker gives.", next: "For why questions, accept only the benefit the speaker names; plausible advantages are not answers." },
        vocab: [["stratifier", "a variable used to divide a sample into comparable groups"], ["cohort", "a group of people studied together"]]
      },
      {
        n: 23, type: "NOTE", diff: "intermediate", bandLevel: "Band 6",
        q: "Instead of asking why people chose a route, the tutor suggests asking what they did last ______.", answer: "Tuesday", accepted: ["tuesday", "tues"],
        ex: { test: "Recording the specific day named as the reference point for recall.", where: "Dr Hargreaves (00:60).", quote: "Ask them what they did last Tuesday instead. Specific behaviour, not stated preference.", why: "The recall question asks what respondents did last Tuesday, which makes the answers behavioural rather than invented.", mine: "Writing 'week' because it is the natural unit of recall — but the tutor names one particular day to force specificity.", trap: "A general time word that sits where an unusually precise one is spoken.", next: "Write days exactly as spoken; a named weekday is usually the detail a gap is testing." },
        vocab: [["recall", "remembering something and reporting it"], ["stated preference", "what someone says they would do, as opposed to what they do"]]
      },
      {
        n: 24, type: "MCQ", diff: "advanced", bandLevel: "Band 7",
        q: "Why does the tutor reject the one-day diary?\nA Diaries take too long to analyse.\nB Only a very small number of people would complete one.\nC Diaries are forbidden in research methods modules.\nD The data would not include non-drivers.",
        answer: "B", accepted: ["b", "only a very small number of people would complete one", "twenty"],
        ex: { test: "Reasoning about a figure the speaker uses twice to make the same point.", where: "Dr Hargreaves (00:85).", quote: "A diary is gold for the twenty people who complete it, and you will get twenty. I want something you can report at three hundred.", why: "A diary would only be completed by about twenty people, far short of the three hundred the tutor requires, which is option B.", mine: "Choosing A because diaries do slow analysis down — but the tutor's objection is about sample size, and he repeats the figure twenty to hammer it home.", trap: "A practical objection that is true of diaries but never voiced by the speaker.", next: "When a speaker repeats a figure, the answer is the point of the repetition: here, twenty versus three hundred." },
        vocab: [["analyse", "to examine data in order to draw conclusions"], ["sample", "the group of people actually included in a study"]]
      },
      {
        n: 25, type: "NOTE", diff: "intermediate", bandLevel: "Band 6",
        q: "The recalled travel data should be checked against figures from a ______ app.", answer: "transport", accepted: ["transport", "the transport", "travel"],
        ex: { test: "Recording the external dataset the tutor has supplied as a check.", where: "Dr Hargreaves (00:85, final clause).", quote: "validate it against the transport app figures I sent you", why: "The recall data should be validated against the transport app figures the tutor sent.", mine: "Writing 'Oyster' or 'bus' — plausible systems for a British campus, but the tutor names a generic transport app.", trap: "A brand name invented by the candidate where the speaker used a general term.", next: "Record the source exactly as named; validation depends on matching the data the tutor supplied." },
        vocab: [["validate", "to check data against an independent source"], ["dataset", "a collection of recorded information"]]
      },
      {
        n: 26, type: "NOTE", diff: "intermediate", bandLevel: "Band 6",
        q: "To reach non-drivers, the students should add an hour at the ______.", answer: "bus interchange", accepted: ["bus interchange", "the bus interchange", "interchange"],
        ex: { test: "Locating the place where a hard-to-reach group of respondents can be found.", where: "Dr Hargreaves (00:112).", quote: "Add one face-to-face hour at the bus interchange, which is where your non-drivers are", why: "The bus interchange is named as the location where non-drivers can be reached directly.", mine: "Writing 'library' or 'students' union' — both are real campus places, but the tutor specifies the interchange for this purpose.", trap: "A specific venue named with a justification ('which is where…') while other venues go unmentioned.", next: "Note the location and the group it reaches together; the pair is what makes the item answerable." },
        vocab: [["interchange", "a place where several bus or tram routes meet"], ["non-driver", "someone who does not travel by car"]]
      },
      {
        n: 27, type: "NOTE", diff: "advanced", bandLevel: "Band 7",
        q: "The survey should stay open for a single ______.", answer: "fortnight", accepted: ["fortnight", "two weeks", "one fortnight"],
        ex: { test: "Recording a duration after a student proposes an alternative that is rejected.", where: "Dr Hargreaves (00:137).", quote: "One fortnight. Two is how you get the same people twice.", why: "The data-collection window is one fortnight; two weeks would risk the same respondents answering twice.", mine: "Writing 'a month' because Kofi proposes it immediately before — but the tutor's answer comes after, and 'One fortnight' is the decision.", trap: "The student's proposal spoken closest to the question's keyword, which is exactly where the pen tends to land.", next: "In a discussion, fix on who decides: the tutor's turn carries the decision, the student's turn only proposes it." },
        vocab: [["fortnight", "a period of two weeks"], ["response rate", "the proportion of people who reply"]]
      },
      {
        n: 28, type: "NOTE", diff: "intermediate", bandLevel: "Band 6",
        q: "Consent must be given with a tick box that requires an ______ yes.", answer: "explicit", accepted: ["explicit", "an explicit"],
        ex: { test: "Noting the qualifier that distinguishes acceptable from unacceptable consent.", where: "Dr Hargreaves (00:154).", quote: "Consent at the top, not in a footnote — a tick box with an explicit yes.", why: "Consent needs an explicit yes, placed at the top of the form rather than in a footnote.", mine: "Writing 'written' because consent is often written — but the point is that the tick box must demand an explicit yes.", trap: "An emphasis on placement ('at the top') that can displace the word describing the nature of the consent.", next: "Where a speaker corrects a practice, note both the new requirement and the old one it replaces." },
        vocab: [["consent", "permission given before taking part"], ["footnote", "an extra note at the bottom of a page"]]
      },
      {
        n: 29, type: "NOTE", diff: "advanced", bandLevel: "Band 6.5",
        q: "Names should be removed at the point of ______, so that even the local file has none.", answer: "entry", accepted: ["entry", "data entry", "the point of entry"],
        ex: { test: "Recording the stage at which anonymisation must happen.", where: "Dr Hargreaves (00:154).", quote: "Anonymise at the point of entry, so even the file on your laptop has no names.", why: "Anonymising at the point of entry means the working file never contains names.", mine: "Writing 'analysis' or 'reporting' — the natural end stages of a study, but the tutor insists on the earliest point instead.", trap: "A natural-sounding stage for anonymisation that the speaker is specifically rejecting by insisting on an earlier one.", next: "Words like 'at the point of' mark the precise stage; write the stage, not the general process." },
        vocab: [["anonymise", "to remove identifying details from data"], ["privacy", "the right to keep personal information protected"]]
      },
      {
        n: 30, type: "MCQ", diff: "advanced", bandLevel: "Band 7",
        q: "What does the tutor say the students should do if fewer than 300 people respond?\nA Change the survey questions to attract more answers.\nB Report the response rate as a limitation and analyse what they have.\nC Repeat the survey until the target is met.\nD Ask the tutor to add his own responses.",
        answer: "B", accepted: ["b", "report the response rate as a limitation", "analyse what you have"],
        ex: { test: "Choosing the honest reporting option against three tempting ones.", where: "Dr Hargreaves (00:184).", quote: "Then report the rate as a limitation and analyse what you have. Do not quietly widen the question afterwards to justify the sample.", why: "The tutor instructs them to report the rate as a limitation and analyse the data they have.", mine: "Choosing C because repeating until the target is met is a common tactic — but the tutor explicitly warns against adjusting the study afterwards to justify the sample.", trap: "Three confident-sounding research strategies in the options, only one of which the speaker endorses.", next: "When a speaker closes with 'Do not…', that prohibition usually marks the correct answer's opposite: read the last sentence twice." },
        vocab: [["limitation", "a factor that restricts the strength of a conclusion"], ["sample", "the group of people actually included in a study"]]
      }
    ]
  };

  var S4 = {
    id: "L3-S4",
    testId: "L-TEST-3",
    number: 4,
    context: "Lecture: what sleep does for memory, and why cramming fails.",
    speakers: ["Lecturer (female, Australian)"],
    accent: ["Australian"],
    difficulty: "advanced",
    band: "6.5–7.5",
    notes: "Section 4 is a single voice with no feedback and no other speaker to track. Notes must follow the lecture's own order, so if you lose one gap, mark it and continue immediately rather than going back.",
    transcript: [
      { t: 0, sp: "Lecturer", line: "Every one of you has sat an exam after an all-nighter, and most of you have sat the same exam again after a decent night's sleep. Today I want to explain why the second version was better, and why the difference is not simply rest." },
      { t: 24, sp: "Lecturer", line: "Start with the problem. Learning new material in one sitting produces what we call fast learning, and fast learning fades quickly. Within about a day, much of what you crammed is no longer reliably retrievable." },
      { t: 44, sp: "Lecturer", line: "Sleep solves this in a specific way. During deep sleep the brain replays the patterns of activity that occurred during learning, and each replay strengthens the connections that were forming. The process is called consolidation, and it is why a night's sleep is not lost study time but study time." },
      { t: 70, sp: "Lecturer", line: "The evidence is unusually strong because we can measure it. Students who learned a word list and then slept retained about forty per cent more of it a week later than students who learned the list and stayed awake for the same period." },
      { t: 92, sp: "Lecturer", line: "There is a second mechanism, which is unglamorous but explains a great deal: during sleep the glymphatic system flushes waste products out of brain tissue, including the proteins that accumulate there during waking hours." },
      { t: 112, sp: "Lecturer", line: "Now the practical question. Is it better to study for six hours tonight or three hours tonight and three hours tomorrow? The answer is not symmetrical, and it is not about fatigue." },
      { t: 128, sp: "Lecturer", line: "Spreading study across days is called distributed practice, and it wins even when the total number of hours is identical, because each session benefits from the consolidation that followed the previous one." },
      { t: 148, sp: "Lecturer", line: "Spacing also improves what remains after a lapse. In a classic experiment, groups that studied with long gaps remembered far less after a month, even though they had performed better on the day." },
      { t: 166, sp: "Lecturer", line: "One warning about the popular technique of rereading. It feels productive because the material becomes familiar, and familiarity is not the same as retrievability. Of the study methods we have tested, rereading is among the least effective at producing marks." },
      { t: 188, sp: "Lecturer", line: "Testing yourself — trying to recall rather than simply review — is the opposite of rereading, and it is the most effective thing you can do with the same time. The effort of failing to recall is the useful part." },
      { t: 210, sp: "Lecturer", line: "So the prescription is unglamorous: sleep seven hours, distribute your study, test rather than reread, and trust the sleep to do half of the work." }
    ],
    questions: [
      {
        n: 31, type: "NOTE", diff: "intermediate", bandLevel: "Band 6.5",
        q: "Material learned in one sitting fades quickly, and much of it is no longer reliably retrievable within about a ______.", answer: "day", accepted: ["day", "one day", "24 hours"],
        ex: { test: "Recording the timescale for the decay of fast learning.", where: "Lecturer (00:24).", quote: "Learning new material in one sitting produces what we call fast learning, and fast learning fades quickly. Within about a day, much of what you crammed is no longer reliably retrievable.", why: "Fast learning decays so that within about a day the crammed material can no longer be reliably recalled.", mine: "Writing 'hour' because the all-nighter in the opening example suggests immediate loss — but the lecture specifies about a day.", trap: "A timescale of hours sitting in the question's opening example rather than in the evidence sentence.", next: "Keep quantified timescales as a separate column in your notes; they are frequent gap answers." },
        vocab: [["cram", "to study a large amount of material in a short time"], ["retrievable", "able to be recalled when needed"]]
      },
      {
        n: 32, type: "NOTE", diff: "advanced", bandLevel: "Band 7",
        q: "During deep sleep the brain replays the ______ of activity that occurred during learning.", answer: "patterns", accepted: ["patterns", "pattern", "the patterns"],
        ex: { test: "Filling a gap in a precise description of a physiological process.", where: "Lecturer (00:44).", quote: "During deep sleep the brain replays the patterns of activity that occurred during learning", why: "It is the patterns of activity from learning that the brain replays during deep sleep.", mine: "Writing 'lessons' or 'content' — meaningful paraphrases of learning, but the gap asks for the neural description the lecturer uses.", trap: "A figurative reading of 'replays' that produces a plausible but unstated noun.", next: "When a lecturer describes a mechanism, expect technical vocabulary, not the everyday word for the lesson." },
        vocab: [["consolidation", "the strengthening of a memory trace after learning"], ["neural", "relating to the nerves or the nervous system"]]
      },
      {
        n: 33, type: "NOTE", diff: "advanced", bandLevel: "Band 7",
        q: "The process by which each replay strengthens connections is called ______.", answer: "consolidation", accepted: ["consolidation", "memory consolidation"],
        ex: { test: "Recording the technical term the lecturer supplies for the process he has just described.", where: "Lecturer (00:44).", quote: "The process is called consolidation, and it is why a night's sleep is not lost study time but study time.", why: "The name given to the process is consolidation.", mine: "Writing 'reinforcement' or 'strengthening' — both appear in the sentence as plain verbs, but the named process is consolidation.", trap: "An ordinary verb in the same clause that looks like a term but is not the one named.", next: "Lecturers often say 'this is called X'; the word after 'called' is a guaranteed gap answer." },
        vocab: [["reinforcement", "making something stronger"], ["replay", "to repeat a pattern of brain activity"]]
      },
      {
        n: 34, type: "NOTE", diff: "intermediate", bandLevel: "Band 6.5",
        q: "Students who slept after learning retained about forty per cent ______ of the word list a week later.", answer: "more", accepted: ["more", "more of it", "more of the list"],
        ex: { test: "Completing a comparison in a sentence that names the control group.", where: "Lecturer (00:70).", quote: "Students who learned a word list and then slept retained about forty per cent more of it a week later than students who learned the list and stayed awake for the same period.", why: "The sleepers retained about forty per cent more of the list, measured a week later against the awake group.", mine: "Writing 'fewer' because the awake group is described last — but the forty per cent figure belongs to the sleepers.", trap: "A figure attached to the first group but easy to attribute to the second, mentioned afterwards.", next: "When a sentence compares two groups, write the figure with the group name immediately, never on its own." },
        vocab: [["retention", "the ability to keep something over time"], ["control group", "participants who do not receive the treatment being tested"]]
      },
      {
        n: 35, type: "NOTE", diff: "advanced", bandLevel: "Band 7",
        q: "The ______ system flushes waste products, including proteins, out of brain tissue during sleep.", answer: "glymphatic", accepted: ["glymphatic", "the glymphatic", "glymphatic system"],
        ex: { test: "Catching an unfamiliar technical name spoken once, with no repetition.", where: "Lecturer (00:92).", quote: "during sleep the glymphatic system flushes waste products out of brain tissue, including the proteins that accumulate there during waking hours", why: "The glymphatic system flushes the waste products out of brain tissue during sleep.", mine: "Writing 'lymphatic' or 'immune' — a well-known related system that sounds close but is never mentioned here.", trap: "A single unfamiliar word with no second hearing to confirm the spelling.", next: "Note the technical term as a whole sound, then write what it does beside it so you can recognise it if it returns." },
        vocab: [["glymphatic", "relating to the brain's waste-clearance system"], ["protein", "a large organic molecule used in body tissue"]]
      },
      {
        n: 36, type: "NOTE", diff: "intermediate", bandLevel: "Band 6.5",
        q: "Spreading study across several days is called ______ practice.", answer: "distributed", accepted: ["distributed", "distributed practice", "spacing"],
        ex: { test: "Recording the name the lecturer gives to the strategy he recommends.", where: "Lecturer (00:128).", quote: "Spreading study across days is called distributed practice, and it wins even when the total number of hours is identical", why: "The strategy of spreading study over days is called distributed practice.", mine: "Writing 'cramming' because the lecture opens with cramming — but cramming is the problem described, not the named strategy.", trap: "The technique the lecture criticises, named in the same section as the one it recommends.", next: "Note the recommended term separately from the criticised one; a lecture usually names both." },
        vocab: [["distributed", "spread over a period of time rather than concentrated"], ["total", "the complete amount"]]
      },
      {
        n: 37, type: "NOTE", diff: "advanced", bandLevel: "Band 7",
        q: "Distributed practice wins even when the total number of ______ is identical.", answer: "hours", accepted: ["hours", "hours of study", "the hours"],
        ex: { test: "Noting what stays constant in the comparison the lecturer makes.", where: "Lecturer (00:128).", quote: "it wins even when the total number of hours is identical, because each session benefits from the consolidation that followed the previous one", why: "The comparison holds the total number of hours constant, so the advantage cannot be attributed to more study time.", mine: "Writing 'sessions' or 'days' — both vary in the comparison, and neither is what the lecturer keeps fixed.", trap: "The variable the lecturer controls to prove the point; the varying one is easy to grab instead.", next: "When a speaker says 'even when X is identical', X is the controlled variable and often the gap answer." },
        vocab: [["identical", "exactly the same in every way"], ["attributable", "able to be explained by a particular cause"]]
      },
      {
        n: 38, type: "NOTE", diff: "advanced", bandLevel: "Band 7",
        q: "Groups that studied with long gaps remembered far less after a ______, despite doing better on the day.", answer: "month", accepted: ["month", "one month", "a month"],
        ex: { test: "Catching the delay after which the spaced group declined, where the immediate result flatters it.", where: "Lecturer (00:148).", quote: "In a classic experiment, groups that studied with long gaps remembered far less after a month, even though they had performed better on the day.", why: "The spaced groups' advantage disappeared after a month, which is exactly the contrast the question describes.", mine: "Writing 'week' because the word-list experiment earlier uses a week — but that is a different study, and here the interval is a month.", trap: "A timescale from an earlier experiment in the same lecture, offered as a plausible substitute.", next: "Attach each timescale in your notes to the study it belongs to; lectures reuse this structure with different numbers." },
        vocab: [["lapse", "a period of time in which something is forgotten"], ["classic experiment", "a long-studied study that has become a standard reference"]]
      },
      {
        n: 39, type: "MCQ", diff: "advanced", bandLevel: "Band 7",
        q: "Why does the lecturer say rereading is a poor use of study time?\nA It takes longer than testing yourself.\nB Familiarity is mistaken for retrievability.\nC It produces high marks in short tests.\nD It works only for narrative material.",
        answer: "B", accepted: ["b", "familiarity is mistaken for retrievability", "familiarity"],
        ex: { test: "Identifying the causal explanation the lecturer gives for a common technique's poor performance.", where: "Lecturer (00:166).", quote: "It feels productive because the material becomes familiar, and familiarity is not the same as retrievability.", why: "Rereading feels productive because the material becomes familiar, but familiarity is not the same as retrievability.", mine: "Choosing A because rereading is slower — but the lecture never mentions time, and it explicitly names familiarity as the problem.", trap: "An explanation that sounds obvious and practical, offered among technically correct-sounding options.", next: "For why questions, look for the sentence that explains the effect, not the one that describes it." },
        vocab: [["familiarity", "the quality of being well known or easily recognised"], ["retrievability", "how easily information can be recalled"]]
      },
      {
        n: 40, type: "NOTE", diff: "advanced", bandLevel: "Band 7.5",
        q: "According to the lecturer, the useful part of self-testing is the effort of failing to ______.", answer: "recall", accepted: ["recall", "to recall", "remember"],
        ex: { test: "Recording the counterintuitive claim made in the lecture's closing argument.", where: "Lecturer (00:188).", quote: "Testing yourself — trying to recall rather than simply review — is the opposite of rereading, and it is the most effective thing you can do with the same time. The effort of failing to recall is the useful part.", why: "The lecturer says the useful part of self-testing is the effort involved in failing to recall.", mine: "Writing 'answer' or 'retrieve' — near synonyms that read more comfortably, but the closing sentence uses recall to echo the lecture's own term.", trap: "A paraphrase of the answer that is not the word the lecturer uses in the sentence being tested.", next: "In the final paragraph of a lecture, the closing claim usually reuses the lecture's key term; write that word." },
        vocab: [["counterintuitive", "contrary to what you would expect"], ["self-test", "to test your own knowledge without help"]]
      }
    ]
  };

  BANK.tests.push({ id: "L-TEST-3", title: "Listening Test 3", module: "academic", difficulty: "mixed", sections: [] });
  BANK.sections.push(S1, S2, S3, S4);
})();
