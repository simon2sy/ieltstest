/* =========================================================================
   IELTS MASTERY — SPEAKING BANK
   12 Part 1 topic sets, 10 Part 2 cue cards with linked Part 3 discussions,
   plus band descriptors, examiner warnings and useful language per set.
   ========================================================================= */
(function () {
  var BANK = (window.BANK_SPEAKING = window.BANK_SPEAKING || { sets: [] });

  function set(o) { BANK.sets.push(o); return o; }

  set({
    id: "SP-HOME",
    part1Topic: "Home",
    difficulty: "beginner", band: "5.0–6.0",
    part1: [
      "Do you live in a house or an apartment?",
      "How long have you lived there?",
      "What is your favourite room in your home? Why?",
      "Is there anything you would like to change about your home?",
      "Do you prefer to spend time alone or with other people at home?"
    ],
    part2: {
      cueCard: "Describe a room in your home where you like to spend time.",
      bullets: ["which room it is", "what it looks like", "what you usually do there", "and explain why you like spending time in this room."],
      followUp: "Has the way you use this room changed over time?"
    },
    part3: [
      "Why do you think some people prefer older houses to modern ones?",
      "How important is it for people to own their own home in your country?",
      "What problems can occur when several generations live in the same house?",
      "Do you think cities should build more apartments or more houses? Why?"
    ],
    usefulLanguage: ["it's a bit of a mess at the moment", "we've lived there for as long as I can remember", "what I like most about it is…", "the only downside is…"],
    examinerNotes: "Part 1 answers here should be two to three sentences with a reason or example. Do not memorise a description of a house — examiners listen for spontaneous answers and will change the topic if they suspect a script."
  });

  set({
    id: "SP-WORK",
    part1Topic: "Work",
    difficulty: "intermediate", band: "6.0–7.0",
    part1: [
      "Do you work or are you a student?",
      "What do you enjoy most about your job?",
      "Would you like to change your job in the future?",
      "Is it important to you to work with other people?",
      "How did you choose your career?"
    ],
    part2: {
      cueCard: "Describe a job you would like to have in the future.",
      bullets: ["what the job is", "what skills or qualifications it requires", "why it appeals to you", "and explain how you think your life would change if you did this job."],
      followUp: "Would you still do this job if it paid much less?"
    },
    part3: [
      "Why do you think some people are unhappy in their jobs?",
      "How is working from home changing people's expectations of employers?",
      "Should companies be responsible for their employees' mental health?",
      "Do you think people will change careers more often in the future than they do now?"
    ],
    usefulLanguage: ["I'm in my element when…", "it plays to my strengths", "the pay is modest but the work is rewarding", "I'd say the main attraction is…"],
    examinerNotes: "Band 7+ answers in Part 1 add a contrast or a qualification: 'I enjoy it, although the hours can be long.' Simple 'yes/no + reason' answers keep you at Band 6."
  });

  set({
    id: "SP-STUDY",
    part1Topic: "Study & Education",
    difficulty: "intermediate", band: "6.0–7.0",
    part1: [
      "What subject are you studying?",
      "Why did you choose that subject?",
      "What part of your studies do you find most difficult?",
      "Do you prefer studying alone or in a group?",
      "How do you usually prepare for exams?"
    ],
    part2: {
      cueCard: "Describe a teacher or class that had a strong influence on you.",
      bullets: ["who or what it was", "when this happened", "what made it memorable", "and explain how it influenced your learning."],
      followUp: "Do you think good teaching can be learned, or is it a natural ability?"
    },
    part3: [
      "How has technology changed the way students learn?",
      "Is it better to study a subject you enjoy or one that leads to a secure career?",
      "Should university education be free for everyone?",
      "What skills do schools fail to teach young people?"
    ],
    usefulLanguage: ["it completely changed how I see…", "I owe a lot to…", "it was the first time I'd ever…", "looking back, what mattered was…"],
    examinerNotes: "Part 3 requires opinions with justification, not personal stories. 'In my view… because… for example…' is a reliable pattern. Avoid repeating the same reason for every question."
  });

  set({
    id: "SP-TECH",
    part1Topic: "Technology",
    difficulty: "intermediate", band: "6.0–7.0",
    part1: [
      "How often do you use your mobile phone?",
      "What do you mainly use the internet for?",
      "Do you think you spend too much time looking at screens?",
      "What piece of technology could you not live without?",
      "Have you ever bought something that you never used?"
    ],
    part2: {
      cueCard: "Describe an item of technology that you find useful.",
      bullets: ["what it is", "how long you have had it", "how you use it", "and explain why it is so useful to you."],
      followUp: "Do you think you rely on it more than you should?"
    },
    part3: [
      "How has technology changed the way families communicate?",
      "Do the benefits of social media outweigh the disadvantages?",
      "Should there be limits on how much personal data companies can collect?",
      "Will artificial intelligence replace many jobs in the next twenty years?"
    ],
    usefulLanguage: ["I'd be lost without it", "it's become second nature", "to be honest, I probably overuse it", "the downside is that…"],
    examinerNotes: "Technology questions tempt candidates into vague generalisations. Keep your Part 1 answers personal and specific — mention an actual app, an actual habit, an actual cost."
  });

  set({
    id: "SP-TRAVEL",
    part1Topic: "Travel",
    difficulty: "intermediate", band: "6.0–7.0",
    part1: [
      "Do you enjoy travelling?",
      "What was the last place you visited?",
      "Do you prefer travelling alone or with other people?",
      "How do you usually plan a trip?",
      "Would you like to live in another country for a while?"
    ],
    part2: {
      cueCard: "Describe a journey that did not go as planned.",
      bullets: ["where you were going", "what went wrong", "how you dealt with the situation", "and explain what you learned from the experience."],
      followUp: "Has that experience changed how you travel now?"
    },
    part3: [
      "Why do you think tourism has grown so quickly in recent decades?",
      "What are the disadvantages of tourism for local communities?",
      "Should governments limit the number of visitors to popular destinations?",
      "How might travel change over the next fifty years?"
    ],
    usefulLanguage: ["it turned into a bit of a disaster", "we ended up…", "in hindsight, I should have…", "it didn't put me off, funnily enough"],
    examinerNotes: "Narrative cue cards (Part 2) reward a clear timeline: set the scene, describe the problem, explain the resolution. Use past continuous for background and past simple for events."
  });

  set({
    id: "SP-FOOD",
    part1Topic: "Food",
    difficulty: "beginner", band: "5.0–6.0",
    part1: [
      "What kind of food do you usually eat?",
      "Do you enjoy cooking?",
      "Have your eating habits changed in recent years?",
      "Is there any food you dislike?",
      "Do you prefer eating at home or in restaurants?"
    ],
    part2: {
      cueCard: "Describe a meal you will always remember.",
      bullets: ["what the meal was", "where and when you ate it", "who you were with", "and explain why you remember it so clearly."],
      followUp: "Do you still eat that dish today?"
    },
    part3: [
      "Why do you think fast food is so popular despite being unhealthy?",
      "Should governments tax unhealthy food?",
      "How have food habits in your country changed over the last thirty years?",
      "What can be done to reduce food waste in households?"
    ],
    usefulLanguage: ["I've got a real weakness for…", "it was nothing fancy, but…", "I've gone off it since", "what made it special was…"],
    examinerNotes: "Food questions are easy to answer with lists. Push yourself to add comparison ('whereas ten years ago…') or evaluation ('it's convenient, but it costs too much')."
  });

  set({
    id: "SP-FAMILY",
    part1Topic: "Family & Friends",
    difficulty: "beginner", band: "5.0–6.0",
    part1: [
      "Do you have a large family or a small one?",
      "How often do you see your relatives?",
      "Who are you closest to in your family?",
      "Do you prefer spending time with family or with friends?",
      "What do you usually do together?"
    ],
    part2: {
      cueCard: "Describe a person who has had an important influence on your life.",
      bullets: ["who this person is", "how you know them", "what qualities they have", "and explain why their influence has been important."],
      followUp: "Do you think they realise how much influence they have had?"
    },
    part3: [
      "How have family roles changed in your country in recent decades?",
      "Do you think grandparents should help raise their grandchildren?",
      "What are the advantages and disadvantages of living far from your family?",
      "Is friendship more important than family in modern life?"
    ],
    usefulLanguage: ["we're very close", "she's the kind of person who…", "I can always count on him", "we drifted apart for a while, then…"],
    examinerNotes: "For 'describe a person', avoid repeating 'nice' and 'kind'. Describe behaviour instead: 'she'd drop everything to help', 'he never raises his voice'."
  });

  set({
    id: "SP-HOBBIES",
    part1Topic: "Hobbies & Free Time",
    difficulty: "beginner", band: "5.0–6.0",
    part1: [
      "What do you like doing in your free time?",
      "Have you taken up any new hobbies recently?",
      "Do you prefer indoor or outdoor activities?",
      "How much free time do you have during the week?",
      "Is there a hobby you would like to take up in the future?"
    ],
    part2: {
      cueCard: "Describe a hobby or activity you enjoy doing regularly.",
      bullets: ["what the activity is", "how you became interested in it", "how often you do it", "and explain what you get out of it."],
      followUp: "Would you like to turn this hobby into a career?"
    },
    part3: [
      "Why do you think hobbies are important for adults?",
      "Do you think people today have less free time than in the past?",
      "Should employers help staff pursue interests outside work?",
      "Are children's hobbies too organised nowadays?"
    ],
    usefulLanguage: ["I got into it through…", "it's a great way to switch off", "I try to do it religiously", "it takes my mind off things"],
    examinerNotes: "Part 1 length matters: aim for 3–4 sentences. One sentence answers sound fluent but limit your Lexical Resource score to around Band 5–6."
  });

  set({
    id: "SP-MOVIES",
    part1Topic: "Films & Entertainment",
    difficulty: "intermediate", band: "6.0–7.0",
    part1: [
      "How often do you watch films?",
      "What kind of films do you like?",
      "Do you prefer watching films at home or at the cinema?",
      "Have you ever watched a film in English?",
      "Do you enjoy watching films more than once?"
    ],
    part2: {
      cueCard: "Describe a film or series that you found thought-provoking.",
      bullets: ["what it was about", "where you watched it", "what made it unusual", "and explain why it stayed with you afterwards."],
      followUp: "Would you recommend it to someone with different tastes?"
    },
    part3: [
      "Do films have a responsibility to be accurate about historical events?",
      "How do films influence the way people see other cultures?",
      "Why do some films become popular internationally while others do not?",
      "Will streaming services eventually replace cinemas?"
    ],
    usefulLanguage: ["it really stayed with me", "what struck me was…", "it's a slow burn", "the plot didn't grab me, but the acting did"],
    examinerNotes: "Band 8 candidates use evaluative adjectives precisely: 'harrowing', 'understated', 'formulaic', 'slow-paced'. Replace 'good/bad/interesting' with one precise word and a reason."
  });

  set({
    id: "SP-DAILY",
    part1Topic: "Daily Routine",
    difficulty: "beginner", band: "5.0–6.0",
    part1: [
      "What time do you usually get up?",
      "Are you a morning person or an evening person?",
      "What is the busiest part of your day?",
      "Has your daily routine changed recently?",
      "If you could change one thing about your routine, what would it be?"
    ],
    part2: {
      cueCard: "Describe a typical day in your life.",
      bullets: ["what you do in the morning", "what you do during the day", "what you do in the evening", "and explain which part of the day you enjoy most."],
      followUp: "Would you change your routine if you could work any hours you liked?"
    },
    part3: [
      "Why do some people struggle to wake up early?",
      "Do you think schools and workplaces start too early?",
      "How do shift patterns affect family life?",
      "Is a strict routine helpful or harmful for productivity?"
    ],
    usefulLanguage: ["I'm usually up by…", "the day tends to blur into…", "I try to keep to a routine", "everything goes out of the window at weekends"],
    examinerNotes: "Routine questions are the easiest place to sound monotonous. Show range with time expressions: 'by the time I've…', 'not long after that', 'towards the end of the afternoon'."
  });

  set({
    id: "SP-ENVIRONMENT",
    part1Topic: "Environment",
    difficulty: "advanced", band: "7.0–8.0",
    part1: [
      "Are there any environmental problems where you live?",
      "Do you do anything to reduce your impact on the environment?",
      "How did you learn about environmental issues?",
      "Is recycling easy where you live?",
      "Do you think individuals or governments should take more responsibility?"
    ],
    part2: {
      cueCard: "Describe a change you have made to live in a more environmentally friendly way.",
      bullets: ["what you changed", "why you decided to do it", "how difficult it was", "and explain what effect it has had."],
      followUp: "Would you encourage other people to make the same change?"
    },
    part3: [
      "Why do many people say they care about the environment but behave differently?",
      "Should the cost of products reflect the damage they cause?",
      "How effective are international agreements on climate change?",
      "Do you think technology will solve environmental problems, or only delay them?"
    ],
    usefulLanguage: ["I've cut down on…", "it isn't cheap, admittedly", "what put me off was…", "the bigger lever is policy, not habits"],
    examinerNotes: "Environment is the most memorised topic in IELTS. Examine generalisations, not facts: say 'I'd accept that, but the evidence is mixed' rather than reciting statistics you may misremember."
  });

  set({
    id: "SP-CITY",
    part1Topic: "Your City",
    difficulty: "intermediate", band: "6.0–7.0",
    part1: [
      "What do you like most about the place where you live?",
      "Is there anything you do not like about it?",
      "Has it changed much since you were a child?",
      "Would you like to live somewhere else one day?",
      "How easy is it to get around your area?"
    ],
    part2: {
      cueCard: "Describe a place in your area that you would recommend to a visitor.",
      bullets: ["where it is", "what you can do there", "how often you go", "and explain why you would recommend it."],
      followUp: "How would you improve that place?"
    },
    part3: [
      "What makes a city a good place to live in?",
      "How can city planners reduce traffic congestion?",
      "Do you think public spaces such as parks are given enough priority?",
      "What problems arise when cities grow very quickly?"
    ],
    usefulLanguage: ["it's a bit off the beaten track", "you can't beat it in summer", "the only drawback is…", "it's been transformed in the last decade"],
    examinerNotes: "For Part 3, examiners look for development, not a list. Choose one idea and expand it: state it, justify it, then give a brief example."
  });
})();
