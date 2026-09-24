/* =========================================================================
   IELTS MASTERY — LISTENING BANK (Test 1, Sections 1–2)
   Section 1: Sports centre membership enquiry (form completion + MCQ)
   Section 2: Radio feature on a city cycling network (MCQ + matching + notes)
   Transcripts are original. Each question carries a 7-field explanation.
   ========================================================================= */
(function () {
  var BANK = (window.BANK_LISTENING = window.BANK_LISTENING || { tests: [], sections: [] });

  var S1 = {
    id: "L1-S1",
    testId: "L-TEST-1",
    number: 1,
    context: "A woman phones Sunnybank Sports Centre to ask about membership.",
    speakers: ["Receptionist (male, British)", "Caller (female, Polish–British)"],
    accent: ["British (south-east)"],
    difficulty: "beginner",
    band: "5.0–5.5",
    notes: "Section 1 is the easiest: a transactional conversation. Numbers, names and dates dominate — write them exactly as you hear them.",
    transcript: [
      { t: 0, sp: "Receptionist", line: "Good morning, Sunnybank Sports Centre, Daniel speaking. How can I help?" },
      { t: 6, sp: "Caller", line: "Hello, I'd like some information about joining. My name's Anna Kowalska." },
      { t: 13, sp: "Receptionist", line: "Certainly. Could I take your surname spelling, in case we need it for the form?" },
      { t: 19, sp: "Caller", line: "Of course. It's Kowalska — K-O-W-A-L-S-K-A." },
      { t: 25, sp: "Receptionist", line: "Thank you. And your address?" },
      { t: 29, sp: "Caller", line: "It's 24 Ashfield Terrace, Greenfield." },
      { t: 35, sp: "Receptionist", line: "Ashfield Terrace — is that the one off Greenwood Road?" },
      { t: 40, sp: "Caller", line: "Yes, that's right, though the postcode confuses everyone. It's GF7 4QT." },
      { t: 47, sp: "Receptionist", line: "Noted. Now, are you interested in full membership or off-peak?" },
      { t: 53, sp: "Caller", line: "I work shifts, so full membership, I think. What does that cost?" },
      { t: 59, sp: "Receptionist", line: "Full adult membership is forty-six pounds a month — that includes the pool and all classes. Off-peak is thirty-two." },
      { t: 68, sp: "Caller", line: "And there's no joining fee at the moment, is that right?" },
      { t: 73, sp: "Receptionist", line: "There's normally a twenty-pound joining fee, but it's waived if you sign up before the thirtieth of June." },
      { t: 82, sp: "Caller", line: "Good. When could I start?" },
      { t: 86, sp: "Receptionist", line: "Membership starts the day after your induction. We can book the induction for the fourteenth of June at six in the evening." },
      { t: 96, sp: "Caller", line: "The fourteenth is fine. One more thing — is there a crèche? I have a three-year-old." },
      { t: 103, sp: "Receptionist", line: "There is, but only in the mornings, from nine until twelve, and it's not included in membership. It's three pounds fifty per session." },
      { t: 113, sp: "Caller", line: "Understood. And do you have towels, or should I bring my own?" },
      { t: 118, sp: "Receptionist", line: "We hire towels at reception for one pound, but most members bring their own." },
      { t: 125, sp: "Caller", line: "I'll bring mine. The pool — is it open on Sundays?" },
      { t: 130, sp: "Receptionist", line: "The pool closes at four on Sundays for maintenance, so if you want a good swim come before two." },
      { t: 139, sp: "Caller", line: "Fine. Can I pay by card over the phone?" },
      { t: 144, sp: "Receptionist", line: "Card payments have to be made in person, I'm afraid. You can pay by bank transfer online, or just come in." }
    ],
    questions: [
      {
        n: 1, type: "FORM", diff: "beginner", bandLevel: "Band 5",
        q: "Surname: ______", answer: "Kowalska", accepted: ["kowalska"],
        ex: { test: "Spelling a name aloud — on IELTS the letters are always given.",
          where: "Caller's second turn (00:19).",
          quote: "It's Kowalska — K-O-W-A-L-S-K-A.",
          why: "The caller spells the surname letter by letter, so no guesswork is needed.",
          mine: "Common errors are dropping the 'w' (Kolaska) or writing 'Kowalsky'. Spelling counts as part of the mark in Listening.",
          trap: "A name that sounds like several other Slavic surnames; the letters are the only safe source.",
          next: "When you hear a name, write it immediately and copy letters as they are dictated, then re-check the final letter." },
        vocab: [["surname", "family name"], ["crèche", "a place where young children are cared for"]]
      },
      {
        n: 2, type: "FORM", diff: "beginner", bandLevel: "Band 5",
        q: "Address: 24 ______ Terrace", answer: "Ashfield", accepted: ["ashfield"],
        ex: { test: "Distinguishing the street name from a nearby road name.",
          where: "Caller (00:29) and receptionist (00:35).",
          quote: "It's 24 Ashfield Terrace, Greenfield. / Ashfield Terrace — is that the one off Greenwood Road?",
          why: "The address given is Ashfield Terrace. Greenwood Road is only used to check which terrace is meant, so it is not part of the address.",
          mine: "Candidates write ‘Greenwood’ because it is repeated and explained. The word Terr ace after the gap is the clue that you need the first element of the street name.",
          trap: "A second road name introduced in the checking question.",
          next: "Write down everything you hear, then delete the items that do not fit the gap's frame (here: … Terrace)." },
        vocab: [["terrace", "a row of houses joined together"], ["off", "coming off a larger road"]]
      },
      {
        n: 3, type: "FORM", diff: "beginner", bandLevel: "Band 5",
        q: "Postcode: ______", answer: "GF7 4QT", accepted: ["gf7 4qt", "gf74qt", "gf7-4qt"],
        ex: { test: "Transcribing an alphanumeric postcode accurately.",
          where: "Caller (00:40).",
          quote: "It's GF7 4QT.",
          why: "The postcode is stated once, with a warning that it confuses people — the speaker is signalling that you must listen carefully.",
          mine: "Typical errors: ‘GF74QT’ with no space is acceptable, but ‘GT7 4QT’ or ‘GF7 4GT’ are not. Letters and numbers must both be right.",
          trap: "Similar-sounding letters (G/T, Q/T) inside a short code.",
          next: "Postcodes are dictated slowly in IELTS. Write characters as separate symbols rather than as a word." },
        vocab: [["postcode", "a code of letters and numbers used in addresses"]]
      },
      {
        n: 4, type: "FORM", diff: "beginner", bandLevel: "Band 5",
        q: "Monthly cost of full membership: £______", answer: "46", accepted: ["46", "£46", "forty-six", "46 pounds"],
        ex: { test: "Selecting one figure from three prices mentioned in the same turn.",
          where: "Receptionist (00:59).",
          quote: "Full adult membership is forty-six pounds a month — that includes the pool and all classes. Off-peak is thirty-two.",
          why: "The caller asks about full membership, and the receptionist gives 46 as the full rate. 32 is the off-peak price and 20 is the joining fee.",
          mine: "Choosing 32 means you answered for off-peak; choosing 20 confuses a one-off fee with a monthly cost. The question's word 'monthly' is decisive.",
          trap: "Three prices in one turn, only one matching the membership type in the question.",
          next: "Underline the category in each gap before listening: full / off-peak / joining fee. Then listen for the category word, not the number." },
        vocab: [["off-peak", "at times when demand is lower"], ["joining fee", "a one-off payment to become a member"]]
      },
      {
        n: 5, type: "FORM", diff: "intermediate", bandLevel: "Band 5.5",
        q: "Joining fee waived if you register before: ______ June", answer: "30th", accepted: ["30", "30th", "thirtieth", "june 30"],
        ex: { test: "Capturing a condition attached to a benefit.",
          where: "Receptionist (00:73).",
          quote: "it's waived if you sign up before the thirtieth of June.",
          why: "The date attached to the waiver is the thirtieth. The induction date (14 June) is a different date in a later turn.",
          mine: "Writing ‘14’ means you have taken the induction date instead. Both are June dates, which is exactly why the trap works.",
          trap: "Date collision: two June dates within twenty seconds.",
          next: "Write the keyword next to each date as you hear it — e.g. '30th = fee waived', '14th = induction'." },
        vocab: [["waive", "to choose not to charge a fee"], ["induction", "an introductory session for new members"]]
      },
      {
        n: 6, type: "FORM", diff: "intermediate", bandLevel: "Band 5.5",
        q: "Crèche available in the mornings only, from 9 a.m. until ______", answer: "12", accepted: ["12", "twelve", "12.00", "noon", "midday"],
        ex: { test: "Recording the end time of a service and ignoring its price.",
          where: "Receptionist (00:103).",
          quote: "only in the mornings, from nine until twelve, and it's not included in membership. It's three pounds fifty per session.",
          why: "The opening hours run from nine until twelve. £3.50 is the charge per session, not a time.",
          mine: "Some candidates write 3.50 because a number immediately follows the time. Reading the gap's unit first (‘until ______’) prevents this.",
          trap: "A price placed directly after the time information.",
          next: "Before listening, circle the unit of each gap: time, price, name, number. Then accept only that type of information." },
        vocab: [["session", "a period of activity"], ["included", "part of the price"]]
      },
      {
        n: 7, type: "FORM", diff: "intermediate", bandLevel: "Band 5.5",
        q: "Members who want a good swim on Sunday should come before ______ p.m.", answer: "2", accepted: ["2", "two", "two p.m.", "2pm", "14:00"],
        ex: { test: "Understanding a piece of advice built from two times.",
          where: "Receptionist (00:130).",
          quote: "The pool closes at four on Sundays for maintenance, so if you want a good swim come before two.",
          why: "The advice is 'come before two'. Four o'clock is when the pool closes, which is not the answer to 'come before'.",
          mine: "Writing 4 gives the closing time, not the recommended time. The connective 'so' introduces the advice, and the answer sits inside that clause.",
          trap: "A fact (closes at 4) followed by advice (come before 2).",
          next: "Listen for connectors that introduce advice or recommendation: so, it's better to, you'd be best off." },
        vocab: [["maintenance", "work done to keep something in good condition"]]
      },
      {
        n: 8, type: "MCQ", diff: "intermediate", bandLevel: "Band 6",
        q: "How can the caller pay for her membership?",
        options: ["A By card over the phone", "B By bank transfer online", "C In cash at the centre", "D By monthly direct debit"],
        answer: "B", accepted: ["B"],
        ex: { test: "Eliminating an option that is explicitly refused.",
          where: "Receptionist (00:144).",
          quote: "Card payments have to be made in person, I'm afraid. You can pay by bank transfer online, or just come in.",
          why: "Paying by card over the phone is refused; the two methods offered are bank transfer online or in person. Option B is exactly what is stated.",
          mine: "Option A is the most attractive distractor because the caller asks about it directly — but a direct question in the recording is often followed by a refusal.",
          trap: "The option the caller proposes, then rejects.",
          next: "When a speaker asks 'can I do X?', wait for the answer before selecting X." },
        vocab: [["bank transfer", "an electronic payment between accounts"], ["direct debit", "a regular automatic payment"]]
      },
      {
        n: 9, type: "MCQ", diff: "intermediate", bandLevel: "Band 6",
        q: "What does the receptionist say about towels?",
        options: ["A They are included in full membership", "B They must be booked in advance", "C They can be hired for £1", "D Members are not allowed to bring their own"],
        answer: "C", accepted: ["C"],
        ex: { test: "Choosing the accurately reported statement among three distorted versions.",
          where: "Receptionist (00:118).",
          quote: "We hire towels at reception for one pound, but most members bring their own.",
          why: "Option C matches exactly. Option D contradicts the second clause, and A and B are never mentioned in that form.",
          mine: "Candidates choosing D or A are filling gaps with assumptions about gyms. In Listening, if the option is not stated (or is contradicted), it is wrong.",
          trap: "Options built from general knowledge rather than the recording.",
          next: "Mark each option as stated / contradicted / not mentioned as you listen. Only 'stated' wins." },
        vocab: [["hire", "to pay to use something temporarily"]]
      },
      {
        n: 10, type: "MCQ", diff: "intermediate", bandLevel: "Band 6",
        q: "What is true about the induction session?",
        options: ["A It costs extra.", "B It takes place in the afternoon.", "C Membership begins on the same day as the induction.", "D It is on 14 June."],
        answer: "D", accepted: ["D"],
        ex: { test: "Checking the relationship between two neighbouring facts (induction date and start date).",
          where: "Receptionist (00:86).",
          quote: "Membership starts the day after your induction. We can book the induction for the fourteenth of June at six in the evening.",
          why: "The induction is on 14 June, matching option D. Option C contradicts 'the day after', and six in the evening is not afternoon, so B is wrong.",
          mine: "Option C is the strongest trap because the passage's two sentences sit next to each other; candidates merge them into 'start = induction day'.",
          trap: "Two dates linked by a time relationship (day after) that candidates collapse into one.",
          next: "For 'what is true' questions, check every option against the recording rather than stopping at the first plausible one." },
        vocab: [["induction", "an introductory session"], ["in the evening", "after about 6 p.m."]]
      }
    ]
  };

  var S2 = {
    id: "L1-S2",
    testId: "L-TEST-1",
    number: 2,
    context: "A local radio presenter describes the new Greenway cycling network.",
    speakers: ["Presenter (female, British)"],
    accent: ["British (northern)"],
    difficulty: "intermediate",
    band: "6.0–6.5",
    notes: "Section 2 is a monologue. The information comes in a logical order, so use the question order as a map of the talk.",
    transcript: [
      { t: 0, sp: "Presenter", line: "Welcome back to Around the City. I'm Ruth Calder, and this morning we're looking at the Greenway, the cycling network that opened last spring." },
      { t: 10, sp: "Presenter", line: "The first thing to say is that the Greenway is not one route but four, sharing a single colour code. The Blue Route, along the canal, is the one most people think of when they hear the name, and it's certainly the most photographed." },
      { t: 24, sp: "Presenter", line: "If you're a beginner, though, I'd start with the Green Route, through the park. It's flat, it's traffic-free, and the gates are wide enough that you never have to dismount. The routes that loop to the north, the Yellow and Red ones, are hillier and, honestly, not for a first outing." },
      { t: 43, sp: "Presenter", line: "A word on the practicalities. Bikes can be taken on trains, but only outside the morning peak, and only two per carriage. Most stations on the Greenway line have secure parking, and the newest one, at Millford, has a repair stand as well as lockers." },
      { t: 60, sp: "Presenter", line: "There's been some confusion about the hires. You'll find cycle hire at three points along the network: Central Station, the University, and Riverside Park. I should correct something I said on this programme in February — I told you hire was free for the first hour. That was wrong. It's the first half hour that's free; after that it's two pounds an hour, capped at nine pounds a day." },
      { t: 86, sp: "Presenter", line: "Now, to the quieter news. Two of the routes are being extended. The Riverside extension, from the park to the old quarry, was due to be finished in September but that has now slipped to November, because the embankment survey took longer than planned. The Harbour link, which will connect the Blue Route to the ferry terminal, was cancelled altogether — the council decided the money was better spent on the northern loop, where the Yellow Route will be resurfaced this summer." },
      { t: 112, sp: "Presenter", line: "Finally, safety. Cycling helmets are not compulsory in this country, but if you take part in the free skills sessions — which run on Saturdays at Riverside Park — you'll be given one. Sessions must be booked, and places go quickly. Children under eleven must be accompanied; over eleven, they can attend alone, provided a form has been signed by a parent." },
      { t: 133, sp: "Presenter", line: "That's the Greenway. Next week we'll be walking the new city-centre heritage trail, and finding out why it took eleven years to agree on the colour of the paving stones." }
    ],
    questions: [
      {
        n: 11, type: "MCQ", diff: "intermediate", bandLevel: "Band 6",
        q: "What does the presenter say about the Blue Route?",
        options: ["A It is the newest of the four routes.", "B It is the route most often photographed.", "C It is the most suitable route for beginners.", "D It is currently closed for resurfacing."],
        answer: "B", accepted: ["B"],
        ex: { test: "Picking out the one accurate detail from four plausible claims about the same route.",
          where: "Presenter (00:10).",
          quote: "The Blue Route, along the canal, is the one most people think of when they hear the name, and it's certainly the most photographed.",
          why: "The route is described as the most photographed, matching B. Option C applies to the Green Route, and D refers to the Yellow Route.",
          mine: "Options C and D are true of other routes, so candidates who map route names carelessly choose the wrong one. Write short labels (Blue = canal = photographed) as you listen.",
          trap: "Correct information attached to the wrong route name.",
          next: "When several named items are described in turn, sketch a two-column table and fill it as you listen." },
        vocab: [["photographed", "pictured in photographs"], ["canal", "a man-made waterway"]]
      },
      {
        n: 12, type: "MCQ", diff: "intermediate", bandLevel: "Band 6",
        q: "Why does the presenter recommend the Green Route to beginners?",
        options: ["A It has fewer cyclists.", "B It is short and close to the station.", "C It is flat and free of traffic.", "D It has a cycle hire point at each end."],
        answer: "C", accepted: ["C"],
        ex: { test: "Matching reasons rather than features.",
          where: "Presenter (00:24).",
          quote: "It's flat, it's traffic-free, and the gates are wide enough that you never have to dismount.",
          why: "Both descriptors in option C — flat, traffic-free — are stated as the reasons beginners are recommended it.",
          mine: "Option D looks attractive because hire points are mentioned later, but the presenter names only three hire points and none is tied to the Green Route's ends.",
          trap: "A feature mentioned elsewhere in the talk being used to explain a different recommendation.",
          next: "Keep the reason clause with its recommendation: 'I'd start with X because…'. Do not let later facts become the reason." },
        vocab: [["dismount", "to get off a bicycle"], ["traffic-free", "with no vehicles allowed"]]
      },
      {
        n: 13, type: "MCQ", diff: "advanced", bandLevel: "Band 6.5",
        q: "What does the presenter correct about cycle hire?",
        options: ["A The number of hire points.", "B The cost of the first hour.", "C Which stations allow bikes on trains.", "D The maximum daily charge."],
        answer: "B", accepted: ["B"],
        ex: { test: "Recognising an explicit on-air correction — a classic IELTS Listening device.",
          where: "Presenter (00:60).",
          quote: "I should correct something I said on this programme in February — I told you hire was free for the first hour. That was wrong. It's the first half hour that's free",
          why: "The correction concerns the free period, which was an hour and is really half an hour — that is, the cost of the first hour (thirty minutes of it are now chargeable).",
          mine: "Option A is tempting because three hire points are listed, but that is new information, not a correction. The words 'correct' and 'that was wrong' flag the answer.",
          trap: "New information placed immediately before a correction.",
          next: "When you hear 'I should correct…', 'actually', or 'sorry', sharpen your attention — the next detail overrides what came before." },
        vocab: [["cap", "an upper limit"], ["capped at", "limited to a maximum amount"]]
      },
      {
        n: 14, type: "NOTE", diff: "advanced", bandLevel: "Band 6.5",
        q: "Riverside extension — current scheduled completion: ______", answer: "November", accepted: ["november", "in november"],
        ex: { test: "Following a change of plan and keeping the final date.",
          where: "Presenter (00:86).",
          quote: "was due to be finished in September but that has now slipped to November, because the embankment survey took longer than planned.",
          why: "The original date (September) is cancelled by 'but that has now slipped to November', so November is the current schedule.",
          mine: "Writing September means you recorded the plan and not the change. Dates followed by 'but' are almost always superseded.",
          trap: "A superseded date given two seconds before the correct one.", next: "Listen for the day name, then check whether the speaker adds any qualification such as 'not Monday' — if they do, the qualification is the answer.",
          next: "Mark cancelled information with a cross as you listen; only uncrossed details should reach your answer sheet." },
        vocab: [["slipped", "moved to a later date"], ["embankment", "a wall or bank built to hold back water or support a railway"]]
      },
      {
        n: 15, type: "NOTE", diff: "advanced", bandLevel: "Band 6.5",
        q: "Harbour link — outcome: the project was ______", answer: "cancelled", accepted: ["cancelled", "canceled", "abandoned"],
        ex: { test: "Distinguishing cancellation from postponement.",
          where: "Presenter (00:86, second half).",
          quote: "The Harbour link, which will connect the Blue Route to the ferry terminal, was cancelled altogether",
          why: "The word 'altogether' makes the status final: cancelled, not delayed.",
          mine: "Answering 'delayed' confuses this project with the Riverside extension, which was delayed. Two projects, two different outcomes in one turn.",
          trap: "Parallel projects with opposite outcomes (delayed vs. cancelled).",
          next: "For matching tasks in a monologue, keep a running note of each named project and its status word (delayed, cancelled, extended, resurfaced)." },
        vocab: [["altogether", "completely"], ["ferry terminal", "a place where ferries arrive and depart"]]
      },
      {
        n: 16, type: "NOTE", diff: "intermediate", bandLevel: "Band 6",
        q: "The route that will be resurfaced this summer: the ______ Route", answer: "Yellow", accepted: ["yellow", "the yellow route"],
        ex: { test: "Connecting an action to the correct named route.",
          where: "Presenter (00:86, final clause).",
          quote: "the money was better spent on the northern loop, where the Yellow Route will be resurfaced this summer.",
          why: "The resurfacing is explicitly attached to the Yellow Route.",
          mine: "‘Northern loop’ describes the group of routes (Yellow and Red), so candidates write ‘Red’ or ‘northern’. Only the Yellow Route is named for resurfacing.",
          trap: "A group description followed by a specific name in the same clause.",
          next: "Prefer the proper noun (Yellow) over the descriptive phrase (northern loop) when the question asks for a route name." },
        vocab: [["resurface", "to put a new surface on a road"], ["loop", "a route that returns to its starting point"]]
      },
      {
        n: 17, type: "NOTE", diff: "intermediate", bandLevel: "Band 6",
        q: "Bikes on trains: allowed only outside the morning ______", answer: "peak", accepted: ["peak", "peak time", "rush hour", "morning peak"],
        ex: { test: "Recording the operational restriction attached to a facility.",
          where: "Presenter (00:43).",
          quote: "Bikes can be taken on trains, but only outside the morning peak, and only two per carriage.",
          why: "The restriction is defined by the 'morning peak', so the missing word is peak. The question keeps the preposition 'outside the morning …' from the recording.",
          mine: "‘Lockers’ and ‘two’ come from the same turn but answer other questions (storage, quantity). Note the words before the gap: 'outside the morning' fixes the answer.",
          trap: "Three separate facts crowded into one turn (restriction, quantity, facilities).",
          next: "Use the words printed around the gap as a filter: only a word that follows 'morning' can be correct here." },
        vocab: [["peak", "the busiest time"], ["carriage", "a section of a train for passengers"]]
      },
      {
        n: 18, type: "NOTE", diff: "intermediate", bandLevel: "Band 6",
        q: "Newest station (Millford) facilities: secure parking, lockers and a repair ______", answer: "stand", accepted: ["stand", "repair stand", "rack"],
        ex: { test: "Catching the final item in a short list of facilities.",
          where: "Presenter (00:43, final clause).",
          quote: "the newest one, at Millford, has a repair stand as well as lockers.",
          why: "The facilities listed at Millford are a repair stand and lockers, so the gap takes 'stand'.",
          mine: "Writing 'station' repeats a word already in the question. Candidates under time pressure often copy the nearest noun instead of the new item.",
          trap: "A list where the correct item comes last, after a familiar word.",
          next: "In lists, wait for the end. 'As well as' signals one more item is still coming." },
        vocab: [["secure parking", "protected parking for bicycles or vehicles"], ["locker", "a small locked cupboard"]]
      },
      {
        n: 19, type: "NOTE", diff: "intermediate", bandLevel: "Band 6",
        q: "Free skills sessions take place on ______ at Riverside Park.", answer: "Saturdays", accepted: ["saturday", "saturdays", "on saturdays"],
        ex: { test: "Recording the day of a recurring weekly event.",
          where: "Presenter (00:112).",
          quote: "the free skills sessions — which run on Saturdays at Riverside Park",
          why: "The sessions run on Saturdays. The phrase 'free skills sessions' in the question matches the recording exactly, confirming the location.",
          mine: "Answering 'Riverside Park' repeats a place already given in the question. Some candidates write 'Sundays' because the pool example earlier in the talk uses Sunday hours — irrelevant here.",
          trap: "A day taken from an unrelated part of the talk.",
          next: "If an answer seems already printed in the question, you have probably taken the wrong detail." },
        vocab: [["compulsory", "required by law or rule"], ["accompanied", "with an adult present"]]
      },
      {
        n: 20, type: "NOTE", diff: "advanced", bandLevel: "Band 6.5",
        q: "Children over eleven may attend alone if a parent has signed a ______", answer: "form", accepted: ["form", "consent form", "permission form"],
        ex: { test: "Recording a condition of participation precisely.",
          where: "Presenter (00:112, final clause).",
          quote: "over eleven, they can attend alone, provided a form has been signed by a parent.",
          why: "The condition is a signed form; the gap follows 'signed a', so 'form' (or 'consent form') is required.",
          mine: "Writing 'parent' or 'helmet' takes information from the same sentence but not the object that must be signed. Note the verb 'signed' in the question — it can only take a document as its object.",
          trap: "A sentence where several nouns compete, but only one fits the verb before the gap.",
          next: "Use the verb before the gap to predict the noun type: you sign a document, you wear a helmet." },
        vocab: [["provided", "on the condition that"], ["written consent", "official permission given in writing"]]
      }
    ]
  };

  var S3 = {
    id: "L1-S3",
    testId: "L-TEST-1",
    number: 3,
    context: "A student discusses her work-placement report with her supervisor.",
    speakers: ["Supervisor (female, British)", "Student (female, Nigerian)"],
    accent: ["British (south-east)", "Nigerian"],
    difficulty: "advanced",
    band: "6.0–7.0",
    notes: "Section 3 rewards attention to who holds the power in the conversation. When the supervisor evaluates or redirects, that turn usually carries the answer.",
    transcript: [
      { t: 0, sp: "Supervisor", line: "Come in, Amara. How did the placement go at the Riverside Hotel?" },
      { t: 7, sp: "Student", line: "Really well, thank you. Twelve weeks, and I ended up running the waste-audit project on my own, which was more responsibility than my job description suggested." },
      { t: 20, sp: "Supervisor", line: "Good — and that's exactly what the report should foreground. Tell me what you've drafted so far." },
      { t: 28, sp: "Student", line: "I started with a description of the hotel: three hundred rooms, two restaurants, a conference centre. Then the audit method, then the results, and I ended with my recommendations." },
      { t: 42, sp: "Supervisor", line: "Cut the description down to a paragraph. The marker knows what a hotel is; what they can't guess is how you collected the data. That method section is where your marks are." },
      { t: 55, sp: "Student", line: "I wondered about that. I weighed the food waste for six weeks — actually I weighed it four times a week, not every day, because the kitchen closes on Mondays." },
      { t: 68, sp: "Supervisor", line: "Note that limitation explicitly. Reviewers are much more forgiving of a four-day week than of a gap they discover for themselves." },
      { t: 77, sp: "Student", line: "And my recommendations — there are five. The main one is portion control in the buffet restaurant, which alone accounted for about a third of the waste." },
      { t: 89, sp: "Supervisor", line: "Which of the five would you implement first?" },
      { t: 93, sp: "Student", line: "The portion one, definitely. But the chef said the kitchen would resist it, so I've written that the change should be trialled for one month rather than introduced permanently." },
      { t: 106, sp: "Supervisor", line: "Sensible. Now, referencing. What style are you using?" },
      { t: 111, sp: "Student", line: "Harvard, as in the handbook. I've got fourteen sources, mostly journal articles, plus two industry reports." },
      { t: 120, sp: "Supervisor", line: "Industry reports are fine as long as you say where the numbers come from. The one thing I'd change is the bibliography: it's currently a list of titles. Add two or three sentences under each source explaining why it matters to your project. That's the difference between a passing report and a strong one." },
      { t: 141, sp: "Student", line: "So an annotated bibliography. And the appendices — should the photographs go in?" },
      { t: 148, sp: "Supervisor", line: "Photographs of the bins, yes. The full data tables, put in an appendix rather than the body. And send me the draft by Friday, not Monday, because I'm away from Tuesday onwards." },
      { t: 163, sp: "Student", line: "Friday it is. Thank you — that's much clearer than my plan was this morning." }
    ],
    questions: [
      {
        n: 21, type: "MCQ", diff: "advanced", bandLevel: "Band 6.5",
        q: "What did the student do during her placement that was unexpected?\nA She trained new kitchen staff.\nB She ran a project by herself.\nC She worked a twelve-week contract.\nD She wrote the hotel's waste policy.",
        answer: "B", accepted: ["b", "she ran a project by herself", "ran the waste-audit project"],
        ex: { test: "Identifying what surprised the speaker, not merely what happened.", where: "Student (00:07).", quote: "I ended up running the waste-audit project on my own, which was more responsibility than my job description suggested.", why: "The unexpected element is the responsibility: she led the audit alone, beyond her job description.", mine: "Choosing C — twelve weeks is factual but unremarkable. Choosing D overstates her role, which was to recommend, not to write policy.", trap: "A duration that will be remembered because it comes with the first fact in the conversation.", next: "Listen for comparative signals ('more than my job description suggested') — they mark what is unusual." },
        vocab: [["placement", "a period of work experience as part of a course"], ["audit", "a systematic check of records or waste"]]
      },
      {
        n: 22, type: "MCQ", diff: "advanced", bandLevel: "Band 7",
        q: "What does the supervisor want the student to do with the hotel description?\nA remove it completely\nB shorten it to one paragraph\nC move it to an appendix\nD expand it with photographs",
        answer: "B", accepted: ["b", "shorten it to one paragraph", "cut it down"],
        ex: { test: "Recording the precise instruction rather than the general direction.", where: "Supervisor (00:42).", quote: "Cut the description down to a paragraph… That method section is where your marks are.", why: "The instruction is to reduce the description to a single paragraph, not to delete or relocate it.", mine: "Choosing A because 'cut' suggests removal; the following words limit the cut to 'a paragraph'.", trap: "A phrasal verb ('cut down') whose object is easily missed in fast speech.", next: "When a supervisor gives an instruction, the qualifier after the verb tells you how far to go: 'to a paragraph' versus 'completely'." },
        vocab: [["foreground", "to give something the most emphasis"], ["method section", "the part of a report explaining how data was collected"]]
      },
      {
        n: 23, type: "MCQ", diff: "advanced", bandLevel: "Band 7",
        q: "Why did the student weigh the food waste four times a week?\nA The scales were unreliable.\nB Her supervisor asked her to.\nC The kitchen was closed on Mondays.\nD She only had four free days.",
        answer: "C", accepted: ["c", "the kitchen was closed on mondays"],
        ex: { test: "Catching a reason introduced by 'because' inside a self-correction.", where: "Student (00:55).", quote: "I weighed it four times a week, not every day, because the kitchen closes on Mondays.", why: "Monday closure is the stated reason for the four-day week; the supervisor then advises noting it as a limitation.", mine: "Choosing B is impossible — the supervisor learns of it at that moment. Choosing A invents an instrument problem the speakers never mention.", trap: "A number ('four') plus a rejected alternative ('not every day') that distract from the reason in the final clause.", next: "Reasons follow markers: because, since, as, the reason being. Train your ear to jump to the clause after them." },
        vocab: [["limitation", "a weakness in a method that should be acknowledged"], ["closure", "a period when a business is not open"]]
      },
      {
        n: 24, type: "MCQ", diff: "advanced", bandLevel: "Band 7",
        q: "How does the student propose introducing the portion-control change?\nA permanently and immediately\nB after the chef agrees\nC as a one-month trial\nD only in the conference centre",
        answer: "C", accepted: ["c", "as a one-month trial", "trialled for one month"],
        ex: { test: "Understanding that a proposal has been deliberately softened.", where: "Student (00:93).", quote: "…the chef said the kitchen would resist it, so I've written that the change should be trialled for one month rather than introduced permanently.", why: "The report recommends a one-month trial instead of a permanent change, precisely because of expected resistance.", mine: "Choosing A reverses the student's own precaution. Choosing B confuses the chef's predicted resistance with a condition she has written in.", trap: "A 'rather than' structure in which the rejected option sounds like the ambitious, more natural choice.", next: "Watch for 'rather than': whatever follows it has been consciously ruled out by the speaker." },
        vocab: [["portion control", "limiting how much food is served per person"], ["trial", "to test something for a limited period"]]
      },
      {
        n: 25, type: "SENTCOMP", diff: "advanced", bandLevel: "Band 6.5",
        q: "The buffet restaurant's waste was mainly caused by a lack of ______ control.", answer: "portion", accepted: ["portion"],
        ex: { test: "Completing a sentence that paraphrases the main recommendation.", where: "Student (00:77).", quote: "The main one is portion control in the buffet restaurant, which alone accounted for about a third of the waste.", why: "Portion control is the recommendation and accounts for roughly a third of waste, matching 'mainly caused by'.", mine: "Writing 'buffet' repeats the words already given in the question; the gap before 'control' needs the missing half of the compound.", trap: "A compound noun split across the gap, so the answer must combine with the word after it.", next: "Check whether the gap sits inside a fixed phrase (portion control, food waste): the surrounding words tell you what is missing." },
        vocab: [["account for", "to be the cause or amount of something"], ["compound noun", "two words that together name one idea"]]
      },
      {
        n: 26, type: "SENTCOMP", diff: "advanced", bandLevel: "Band 7",
        q: "The supervisor asks for two or three sentences under each source explaining why it ______ to the project.", answer: "matters", accepted: ["matters", "is relevant", "relates"],
        ex: { test: "Catching a paraphrased instruction in a long evaluative turn.", where: "Supervisor (00:120).", quote: "Add two or three sentences under each source explaining why it matters to your project.", why: "The supervisor's words are 'why it matters to your project'; the gap takes the verb exactly as spoken.", mine: "Writing 'titles' repeats the current deficiency rather than the required addition.", trap: "A three-sentence turn containing a compliment, a condition and an instruction.", next: "When a supervisor says 'the one thing I'd change' or 'the difference between…', expect one gap answer in that turn." },
        vocab: [["annotated bibliography", "a source list with comments on each entry"], ["industry report", "research published by a company or sector body"]]
      },
      {
        n: 27, type: "SENTCOMP", diff: "intermediate", bandLevel: "Band 6",
        q: "The full data tables should be placed in an ______, not in the body of the report.", answer: "appendix", accepted: ["appendix", "appendices"],
        ex: { test: "Recording a location instruction for material.", where: "Supervisor (00:148).", quote: "The full data tables, put in an appendix rather than the body.", why: "Tables go in an appendix; the question paraphrases 'rather than the body' exactly.", mine: "Writing 'photograph' or 'figures' — the photographs are approved for the body, which is the opposite decision.", trap: "Two pieces of material with opposite destinations in the same turn.", next: "For placement questions, note the destination against each item as you hear it: table → appendix, photos → body." },
        vocab: [["appendix", "a section at the end of a report for supporting data"], ["body", "the main part of a written report"]]
      },
      {
        n: 28, type: "NOTE", diff: "intermediate", bandLevel: "Band 6",
        q: "The supervisor will be away from ______ onwards, so the draft is due on Friday.", answer: "Tuesday", accepted: ["tuesday", "tues", "tue"],
        ex: { test: "Recording a deadline and the reason attached to it.", where: "Supervisor (00:148, final clause).", quote: "Send me the draft by Friday, not Monday, because I'm away from Tuesday onwards.", why: "Friday is the deadline; Tuesday is when the supervisor leaves, and Monday is explicitly rejected.", mine: "Writing 'Monday' copies a rejected date. Writing 'Friday' repeats what the question already states.", trap: "Three days in one sentence: the deadline, the rejected deadline and the absence.", next: "In deadline questions, mark every day mentioned as OK, NO or absent; the rejected day is the trap and the absence date is the answer." },
        vocab: [["draft", "an early version of a piece of writing"], ["onwards", "from that time forward"]]
      },
      {
        n: 29, type: "MCQ", diff: "advanced", bandLevel: "Band 7",
        q: "Which part of the report does the supervisor say carries the most marks?\nA the description of the hotel\nB the method section\nC the recommendations\nD the bibliography",
        answer: "B", accepted: ["b", "the method section", "method"],
        ex: { test: "Identifying where marks are said to lie in a document with several sections.", where: "Supervisor (00:42).", quote: "…what they can't guess is how you collected the data. That method section is where your marks are.", why: "The supervisor names the method section explicitly as the marked part of the report.", mine: "Choosing C because recommendations feel like the point of a placement report; the supervisor never links them to marks.", trap: "A list of report sections in the order the student drafted them, distracting from the one evaluative sentence.", next: "When a speaker assesses document sections, note the evaluation, not the list: 'where your marks are' marks the answer." },
        vocab: [["carry marks", "to be the part that is assessed"], ["bibliography", "a list of the sources used"]]
      },
      {
        n: 30, type: "MCQ", diff: "advanced", bandLevel: "Band 7",
        q: "Which referencing style must the student use?\nA Harvard\nB APA\nC Vancouver\nD the department's own system",
        answer: "A", accepted: ["a", "harvard"],
        ex: { test: "Recording a formal requirement whose alternatives are never mentioned.", where: "Student (00:111).", quote: "Harvard, as in the handbook.", why: "The student confirms Harvard and connects it to the handbook, which makes it authoritative.", mine: "Choosing D because 'the handbook' sounds like a local system; in fact the handbook specifies Harvard.", trap: "A single-word answer with no competing option spoken, so a moment's inattention produces a wild guess.", next: "Some answers arrive with no contrast at all. Be ready to write immediately — not every item is a trap." },
        vocab: [["referencing style", "a standard way of citing sources"], ["handbook", "the official course guide"]]
      }
    ]
  };

  var S4 = {
    id: "L1-S4",
    testId: "L-TEST-1",
    number: 4,
    context: "Lecture: the shipping container and the reshaping of world trade.",
    speakers: ["Lecturer (male, American)"],
    accent: ["American"],
    difficulty: "advanced",
    band: "6.5–7.5",
    notes: "Section 4 tests sustained attention. Notes follow the lecture's own order, so never jump ahead: if you lose one answer, mark it and move on immediately.",
    transcript: [
      { t: 0, sp: "Lecturer", line: "Today I want to argue that the single most important object in modern commerce is a steel box, and that its importance comes from its dullness." },
      { t: 12, sp: "Lecturer", line: "Before 1956, cargo was handled piece by piece. A ship might spend as long in port as at sea, because every crate, barrel and sack was carried aboard by hand. Labour accounted for the majority of the cost of moving goods." },
      { t: 33, sp: "Lecturer", line: "The container changed that arithmetic. Loading time fell enormously; in the first converted vessel the turnaround dropped from roughly a week to less than a day." },
      { t: 45, sp: "Lecturer", line: "But the interesting part is not the box. It is the paperwork and the port. Containers only pay off when the whole system is standardised, and standardisation required international agreement on dimensions — the length, height and corner fittings all had to match." },
      { t: 64, sp: "Lecturer", line: "That is why the early ports lost out. Cities that had invested heavily in docks for manual labour had every reason to resist the new method, and resistance was often led by unionised dock workers whose jobs were genuinely at risk. The ports that gained were the ones with empty land and no tradition to defend — often small, unfashionable harbours." },
      { t: 90, sp: "Lecturer", line: "The economic consequences were uneven. Freight costs collapsed, which made it profitable to manufacture far from the consumer; that is the mechanism behind the global supply chains we now take for granted. Regions with cheap labour gained factories. Regions that had made their living from handling goods lost them." },
      { t: 112, sp: "Lecturer", line: "Two cautions before I finish. First, the container did not create globalisation on its own — tariff reductions in the same period did at least as much, and historians who credit the box alone are oversimplifying." },
      { t: 128, sp: "Lecturer", line: "Second, the story is usually told as a triumph of engineering. I would rather describe it as a triumph of negotiation, because the technical problems were solved decades earlier; what was missing was agreement between carriers, ports and customs authorities." },
      { t: 147, sp: "Lecturer", line: "For next week, read the chapter on the port of Oakland, which illustrates both the gains and the disruption in a single city." }
    ],
    questions: [
      {
        n: 31, type: "NOTE", diff: "advanced", bandLevel: "Band 6.5",
        q: "Before 1956, a ship could spend as long in port as at ______.", answer: "sea", accepted: ["sea"],
        ex: { test: "Recording a vivid comparative image that frames the whole lecture.", where: "Lecturer (00:12).", quote: "A ship might spend as long in port as at sea, because every crate, barrel and sack was carried aboard by hand.", why: "The lecture contrasts port time with sea time to show how slow manual handling was.", mine: "Writing 'port' repeats the first half of the comparison; the gap needs the contrasting half.", trap: "A symmetrical 'as long … as' structure where either noun could be misheard as the answer.", next: "In 'as X as Y' comparisons, check which half the question already contains before writing." },
        vocab: [["turnaround", "the time a ship needs to unload and reload"], ["cargo", "goods carried by ship or plane"]]
      },
      {
        n: 32, type: "NOTE", diff: "advanced", bandLevel: "Band 7",
        q: "Under the old system, ______ made up most of the cost of moving goods.", answer: "labour", accepted: ["labour", "labor", "manual labour", "handling"],
        ex: { test: "Recording the cost driver the container eliminated.", where: "Lecturer (00:12, final clause).", quote: "Labour accounted for the majority of the cost of moving goods.", why: "Labour is named as the majority cost before containerisation, which sets up the whole argument.", mine: "Writing 'shipping' or 'fuel' — plausible but never mentioned; the lecture is precise about labour.", trap: "A general topic (trade costs) inviting a general answer when the lecture names a specific input.", next: "When a lecturer says 'accounted for the majority of', expect a gap on the thing that did the accounting for." },
        vocab: [["account for", "to form a particular share of a total"], ["input", "a resource used in production"]]
      },
      {
        n: 33, type: "NOTE", diff: "advanced", bandLevel: "Band 7",
        q: "In the first container ship, the turnaround fell from about a week to under a ______.", answer: "day", accepted: ["day", "one day", "1 day"],
        ex: { test: "Catching the second half of a from–to comparison.", where: "Lecturer (00:33).", quote: "…the turnaround dropped from roughly a week to less than a day.", why: "The comparison runs from a week to less than a day; the question supplies the first figure and asks for the second.", mine: "Writing 'week' — the question already contains it, and the reduction is the point.", trap: "Two time values in one clause with the answer placed last.", next: "In from–to comparisons, underline the first figure in the question so you know the gap can only take the second." },
        vocab: [["converted vessel", "a ship altered to carry containers"], ["roughly", "approximately"]]
      },
      {
        n: 34, type: "NOTE", diff: "advanced", bandLevel: "Band 7",
        q: "Containers only reduce costs when the whole system is ______.", answer: "standardised", accepted: ["standardised", "standardized", "standardised around the world", "uniform"],
        ex: { test: "Recording the lecturer's central argument, not his opening anecdote.", where: "Lecturer (00:45).", quote: "Containers only pay off when the whole system is standardised, and standardisation required international agreement on dimensions…", why: "Standardisation is the condition; the sentence then explains what had to be agreed.", mine: "Writing 'agreement' skips one step — agreement was needed to achieve standardisation, which is the stated condition.", trap: "A near-synonym in the following clause that is tempting but a step too late in the logic chain.", next: "When a lecturer states a condition, expect one gap on the condition itself. Write the adjective or participle exactly as spoken (-ised endings included)." },
        vocab: [["standardise", "to make things follow the same specification"], ["fitting", "a fixed part used to join components"]]
      },
      {
        n: 35, type: "NOTE", diff: "advanced", bandLevel: "Band 7",
        q: "Resistance to the new method was often led by ______ workers.", answer: "unionised", accepted: ["unionised", "unionized", "union", "unionised dock", "docker"],
        ex: { test: "Recording a group plus its qualifier when the paraphrase shifts the noun.", where: "Lecturer (00:64).", quote: "Resistance was often led by unionised dock workers whose jobs were genuinely at risk.", why: "Unionised dock workers led resistance; the lecture adds that the threat to their jobs was real.", mine: "Writing 'port' or 'citizens' — the actor is a group of workers, and the adjective is the marked part of the phrase.", trap: "A sympathetic aside ('genuinely at risk') that may draw attention away from the noun phrase carrying the answer.", next: "Note groups of workers together with their adjectives; the marked adjective is usually the part the question paraphrases." },
        vocab: [["unionised", "organised into a trade union"], ["resistance", "refusal to accept a change"]]
      },
      {
        n: 36, type: "NOTE", diff: "advanced", bandLevel: "Band 7",
        q: "The ports that gained were those with empty land and no ______ to defend.", answer: "tradition", accepted: ["tradition", "history", "legacy"],
        ex: { test: "Recording an abstract noun in a contrastive definition.", where: "Lecturer (00:64, final clause).", quote: "The ports that gained were the ones with empty land and no tradition to defend — often small, unfashionable harbours.", why: "The gaining ports had empty land and no inherited practice to protect; 'tradition' is the lecture's own noun.", mine: "Writing 'land' repeats the phrase before 'and'. Writing 'jobs' muddles this group with the dock workers in the previous sentence.", trap: "Two consecutive sentences about two different groups (losers and winners) with similar vocabulary.", next: "Keep winners and losers on separate lines in your notes; consecutive contrasting sentences are the commonest source of crossed answers." },
        vocab: [["unfashionable", "not considered important or attractive"], ["defend", "to protect from change"]]
      },
      {
        n: 37, type: "NOTE", diff: "advanced", bandLevel: "Band 7",
        q: "Cheaper freight made it profitable to manufacture far from the ______.", answer: "consumer", accepted: ["consumer", "customer", "market", "buyer"],
        ex: { test: "Recording the endpoint of a supply chain that the lecture then names.", where: "Lecturer (00:90).", quote: "…which made it profitable to manufacture far from the consumer; that is the mechanism behind the global supply chains we now take for granted.", why: "Manufacturing moved away from the consumer, which is what created long supply chains.", mine: "Writing 'factory' or 'port' — the sentence is about distance from the buyer, not from other facilities.", trap: "An abstract noun (consumer) where a concrete place (factory) feels more natural in a production context.", next: "For supply-chain notes, expect abstract nouns (consumer, supplier). Write the noun the lecturer uses even if a concrete word feels more natural." },
        vocab: [["freight", "goods transported in bulk"], ["supply chain", "the network that moves goods to buyers"]]
      },
      {
        n: 38, type: "NOTE", diff: "advanced", bandLevel: "Band 7.5",
        q: "The lecturer says tariff ______ in the same period contributed at least as much to globalisation.", answer: "reductions", accepted: ["reductions", "reduction", "cuts", "decreases"],
        ex: { test: "Recording a competing cause in the lecturer's own caution.", where: "Lecturer (00:112).", quote: "The container did not create globalisation on its own — tariff reductions in the same period did at least as much…", why: "Tariff reductions are named as an equally important cause, which is why historians who credit the box alone are oversimplifying.", mine: "Writing 'increases' reverses the direction — trade barriers fell, they did not rise.", trap: "A complex sentence opening with a negative ('did not create … on its own') before the answer arrives.", next: "When a lecturer says a thing 'did not do X on its own', the alternative cause is the answer; note the direction of change (rises or falls) before writing." },
        vocab: [["tariff", "a tax on imported goods"], ["oversimplify", "to describe something as simpler than it is"]]
      },
      {
        n: 39, type: "NOTE", diff: "advanced", bandLevel: "Band 7.5",
        q: "The lecturer prefers to describe containerisation as a triumph of ______.", answer: "negotiation", accepted: ["negotiation", "agreement", "cooperation"],
        ex: { test: "Capturing an interpretation that the lecturer explicitly prefers over the common one.", where: "Lecturer (00:128).", quote: "I would rather describe it as a triumph of negotiation, because the technical problems were solved decades earlier…", why: "The lecturer reframes the achievement as negotiation between carriers, ports and customs authorities.", mine: "Writing 'engineering' — that is the account he is arguing against, and it appears immediately before the correction.", trap: "The rejected interpretation arrives first and is the one most listeners write down.", next: "Expect one reframing sentence per lecture — 'I would rather describe it as…'. Whatever follows that phrase is normally the tested idea." },
        vocab: [["triumph", "a great achievement"], ["carrier", "a company that transports goods"]]
      },
      {
        n: 40, type: "NOTE", diff: "advanced", bandLevel: "Band 7",
        q: "Next week's reading is about the port of ______.", answer: "Oakland", accepted: ["oakland"],
        ex: { test: "Noting a proper noun given in the closing lines when concentration is weakest.", where: "Lecturer (00:147).", quote: "For next week, read the chapter on the port of Oakland…", why: "Oakland is named as the subject of next week's reading.", mine: "Writing 'Ouckland' or 'Auckland' from sound alone — the American pronunciation has a flat first vowel.", trap: "A place name that resembles another well-known port city, with no spelling given.", next: "In the closing half-minute, keep writing: place names and next week's reading are frequently gap answers and carry no spelling help." },
        vocab: [["disruption", "serious disturbance to normal life or work"], ["illustrate", "to show an idea with an example"]]
      }
    ]
  };

  BANK.tests.push({ id: "L-TEST-1", title: "Listening Test 1", module: "academic", difficulty: "mixed", sections: [] });
  BANK.sections.push(S1, S2, S3, S4);
})();
