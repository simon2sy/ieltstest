/* =========================================================================
   IELTS MASTERY — GRAMMAR BANK
   13 error categories, each with a rule card, common error patterns and
   four exercise items carrying an answer and an explanation.
   ========================================================================= */
(function () {
  var RAW = [
    ["Articles", "Countability decides the article. Singular countable nouns need a/an/the (or a determiner). Plural and uncountable nouns take no article when speaking generally: 'Pollution affects cities', not 'The pollution affects the cities'. Use 'the' for the second mention, for unique things, and for groups defined by a phrase.",
      ["___ number of students who study abroad has risen sharply.", ["A", "The", "An", "—"], "B", "'A number of students' means several students; 'the number of students' means the total. Here the subject is the total that has risen, so 'the' is required. A common IELTS error is writing 'A number of students has risen'."],
      ["Many people believe that ___ education is the key to economic development.", ["a", "an", "the", "—"], "D", "General, abstract reference takes no article: 'education' is uncountable here and no specific institution is meant. Adding 'the' wrongly says there is one particular education system in the world."],
      ["The chart shows that ___ water consumption fell in the region.", ["a", "—", "the", "an"], "B", "'Water consumption' is an uncountable abstract noun used generally, so no article. Compare with 'the consumption of water in Tokyo', where the defining phrase requires 'the'."],
      ["Governments should invest in ___ public transport rather than in new roads.", ["the", "a", "—", "an"], "C", "Uncountable and general: no article. Only if you specify a system — 'the public transport network of Berlin' — does the definite article become necessary."]],

    ["Prepositions", "Prepositions are frequently tested after fixed expressions and verbs: depend on, result in, result from, contribute to, responsible for, associated with, aware of, capable of, adapt to, increase/decrease by (amount) and to (level).",
      ["The increase in accidents resulted ___ poor road design.", ["from", "in", "of", "to"], "A", "'Result from' names the cause; 'result in' names the effect. Poor road design is the cause here, so 'from' is correct. Reversing the two is one of the most common preposition errors in Task 1 writing."],
      ["Car ownership rose ___ 12 per cent between 2010 and 2020.", ["to", "by", "in", "of"], "B", "'By' indicates the size of a change; 'to' indicates the final level. Percentages showing the amount of change take 'by'."],
      ["The government is responsible ___ maintaining public order.", ["of", "to", "for", "with"], "C", "Fixed collocation: responsible for + noun/gerund. Note the different meaning of 'responsible to somebody' (accountable to a superior)."],
      ["Many students are not aware ___ the cost of studying abroad.", ["of", "about", "for", "to"], "A", "'Aware of' is the standard collocation. 'Aware about' is a frequent error carried over from other languages."]],

    ["Verb tense", "Reporting past data needs past tenses; discussing a permanent fact needs the present simple; describing change up to the present needs the present perfect. Mixing these is the most visible tense error in IELTS.",
      ["Since 2015, the government ___ several new laws on recycling.", ["introduced", "has introduced", "had introduced", "introduces"], "B", "'Since + date' with an unfinished period requires the present perfect. The past simple would suggest the period is closed."],
      ["The graph shows that sales ___ between 2005 and 2010.", ["have doubled", "doubled", "had doubled", "double"], "B", "The period is finished and a specific time is given, so past simple. The present perfect ('have doubled') cannot be used with a closed time expression."],
      ["By the time the policy was introduced, the problem ___ already severe.", ["has been", "was being", "had been", "is"], "C", "‘By the time’ + past event requires the past perfect for the earlier situation. This is one of the clearest markers of Band 7+ grammatical control."],
      ["Most researchers now agree that the climate ___ warmer.", ["is getting", "got", "had got", "will get"], "A", "A current, ongoing change is expressed with the present continuous or present simple. Using a past tense wrongly implies the process has stopped."]],

    ["Subject-verb agreement", "The verb agrees with the head noun, not with the nearest noun. Collective nouns (family, government, team) normally take a singular verb in academic writing, and structures such as 'one of the + plural noun' take a singular verb.",
      ["One of the main causes of obesity ___ the availability of cheap fast food.", ["are", "were", "is", "have been"], "C", "The subject is 'one', which is singular, even though 'causes' sits immediately before the verb. This is the single most common agreement error in Task 2 essays."],
      ["The number of private cars in the city ___ doubled in ten years.", ["have", "has", "are", "were"], "B", "'The number of…' is singular; 'a number of…' is plural. The verb agrees with 'number', not with 'cars'."],
      ["Neither the students nor the teacher ___ satisfied with the new timetable.", ["were", "are", "was", "have been"], "C", "With 'neither… nor', the verb agrees with the nearer subject — 'the teacher', singular. Writing 'were' is a common careless error."],
      ["Statistics ___ that women live longer than men in most countries.", ["show", "shows", "is showing", "has shown"], "A", "When 'statistics' means data, it is plural: 'statistics show'. When it means the academic subject, it is singular: 'statistics is a difficult subject'."]],

    ["Conditionals", "Type 1: if + present, will + infinitive (real future). Type 2: if + past, would + infinitive (hypothetical). Type 3: if + past perfect, would have + past participle (impossible past). Never use 'will' or 'would' in the if-clause.",
      ["If the government ___ more in public transport, congestion would fall.", ["invests", "invested", "will invest", "has invested"], "B", "The result clause uses 'would fall', so this is a second conditional and the if-clause must be past simple. 'Invested' looks like a past tense but refers to a hypothetical present."],
      ["If cities had built better drainage, the flooding ___ far less serious.", ["would be", "will be", "would have been", "is"], "C", "A past hypothetical with an unrealised condition requires the third conditional: would have been. The reference is to damage that already happened."],
      ["Unless recycling rates ___ , landfill sites will continue to grow.", ["improve", "will improve", "improved", "would improve"], "A", "'Unless' = if not, so the same rule applies: present simple in the if-clause even when the main clause has 'will'. 'If/unless … will' is a serious accuracy error."],
      ["Were the fees lower, more students ___ apply.", ["will", "would", "had", "have"], "B", "Inverted conditional (Were + subject) replaces 'If the fees were lower' and takes 'would' in the main clause. Inversion shows grammatical range at Band 8+."]],

    ["Relative clauses", "Defining clauses give essential information and take no commas; non-defining clauses add extra information, take commas, and cannot use 'that'. Whose = possessive; where = place; when = time; why = reason.",
      ["The report, ___ was published in June, recommends higher taxes on sugar.", ["that", "which", "what", "who"], "B", "A non-defining clause between commas cannot use 'that'. Since the antecedent is a thing, 'which' is required."],
      ["Children ___ parents read to them tend to perform better at school.", ["who", "which", "whose", "whom"], "C", "'Whose' shows possession: the parents belong to the children. Using 'who' creates an agreement problem ('who parents')."],
      ["The house ___ the family moved in 1998 is now a museum.", ["which", "where", "that", "when"], "B", "'Where' replaces 'in which' for places. Note the trap: 'the house which the family moved into' would also work, but the preposition is needed."],
      ["This is one reason ___ many graduates choose to work abroad.", ["that", "why", "which", "when"], "B", "Fixed pattern: the reason why + clause. 'The reason that' is possible in informal English but 'why' is standard in academic writing."]],

    ["Complex sentences", "Band 7+ writing needs a mixture of simple, compound and complex sentences. Overuse of 'because' and 'and' limits the range; use concession (although, even though), purpose (so that, in order to), result (so … that) and participle clauses ('Having examined the data, …').",
      ["___ the policy reduced emissions, it also raised household costs.", ["Because", "Although", "So", "Therefore"], "B", "The sentence contrasts a benefit with a cost, so a concessive connector is needed. 'Because' would wrongly present the cost as a result of the reduction."],
      ["Many people migrate to cities ___ find better-paid work.", ["for", "so that", "in order to", "because"], "C", "'In order to' + infinitive expresses purpose. 'For' would require a gerund ('for finding'), and 'so that' requires a full clause with a subject."],
      ["Having ___ the survey, the researchers published their conclusions.", ["complete", "completed", "completing", "completes"], "B", "Perfect participle ('Having + past participle') signals that one action finished before the next. It requires the past participle form."],
      ["___ the cost of solar panels has fallen, they are now competitive with coal.", ["Despite", "Since", "However", "While"], "B", "A cause-and-effect relationship with a full clause follows, so a subordinating conjunction of reason is needed. 'Despite' takes a noun phrase, not a clause with a finite verb."]],

    ["Modals", "Modal verbs express degrees of certainty (may, might, could, must, can't) and obligation (should, must, ought to). Use 'must have + past participle' for confident deduction about the past and 'should have + past participle' for criticism of a past action.",
      ["Governments ___ invest more in preventive healthcare; it would eventually save money.", ["must", "should", "can", "would"], "B", "The speaker is giving a recommendation supported by a consequence, so 'should' fits. 'Must' would express an obligation so strong that the following justification becomes unnecessary."],
      ["The site is empty; the exhibition ___ have finished already.", ["must", "should", "can", "would"], "A", "A confident deduction from present evidence uses 'must have'. 'Should have finished' would mean expected but possibly not finished — weaker than the evidence allows."],
      ["If universities reduced fees, more students ___ apply.", ["may", "would", "must", "should"], "B", "A hypothetical result in a second conditional takes 'would'. 'May' would present the result as a real possibility, contradicting the unreal condition."],
      ["Researchers ___ to publish data that supports their funding body's interests.", ["should not", "ought not", "must not", "cannot"], "C", "A prohibition — a rule rather than advice — requires 'must not'. 'Ought not' takes 'to' (ought not to publish), and 'should not' would simply be advice."]],

    ["Passive voice", "Use the passive when the agent is unknown, unimportant or obvious — the norm in process descriptions and formal reports. Form: be + past participle, keeping the same tense as the active.",
      ["In the first stage, seawater ___ into the plant through an intake.", ["draws", "is drawn", "has drawn", "drawing"], "B", "A process description with no stated agent takes the present passive: is drawn. Writing 'draws' would make seawater the actor, which is illogical."],
      ["The new bridge ___ by the end of next year.", ["will complete", "will be completed", "will have complete", "is completing"], "B", "Passive future with a completion deadline: will be completed. The active would require an agent (the contractors)."],
      ["It ___ that the scheme saved the council £2 million.", ["estimates", "is estimated", "has estimated", "estimating"], "B", "'It is estimated that…' is a fixed impersonal passive, common in academic writing and useful for hedging."],
      ["The results ___ published before the funding was withdrawn.", ["had not been", "have not been", "were not being", "did not be"], "A", "The later event ('was withdrawn') is past, so the earlier one takes the past perfect passive: had not been published."]],

    ["Countable / uncountable nouns", "Some nouns are uncountable and take a singular verb with no plural -s: information, advice, research, evidence, progress, knowledge, equipment, furniture, transport. Use 'a piece of', 'a great deal of' or 'much' to quantify them.",
      ["The researcher collected a great deal of ___ about household energy use.", ["informations", "information", "an information", "informations about"], "B", "'Information' is uncountable: no plural form and no indefinite article. Use 'a piece of information' or 'a great deal of information'."],
      ["The company has made significant ___ in reducing waste.", ["progress", "progresses", "a progress", "progressing"], "A", "'Progress' is uncountable, so no plural and no article. 'Made progress' is the standard collocation."],
      ["There is little ___ to support the claim that the policy worked.", ["evidences", "evidence", "an evidence", "of evidences"], "B", "'Evidence' is uncountable in academic English. 'Little evidence' (negative sense) or 'a considerable body of evidence' (positive sense) are both standard."],
      ["Schools need more ___ such as laptops and projectors.", ["equipments", "equipment", "an equipment", "equipments of"], "B", "'Equipment' is uncountable; quantify it as 'items of equipment' or 'a piece of equipment'."]],

    ["Word forms", "Choosing the right part of speech for the slot is a favourite IELTS trap: a subject needs a noun, a verb complement needs an adjective, a modifier of a verb needs an adverb. Memorise families: analyse / analysis / analytical / analytically.",
      ["The most significant ___ of the study was the sample size.", ["limit", "limitation", "limited", "limiting"], "B", "'The most significant …' requires a noun as the head of the subject. 'Limitation' is the abstract noun; 'limit' means a boundary."],
      ["The data clearly ___ that the intervention was effective.", ["demonstration", "demonstrate", "demonstrative", "demonstrably"], "B", "The subject 'data' needs a finite verb: 'demonstrate'. The other options are a noun, an adjective and an adverb — all impossible in this slot."],
      ["Trees remove pollutants ___ .", ["efficient", "efficiency", "efficiently", "efficiencies"], "C", "The gap modifies the verb 'remove', so an adverb is required. This is the single most common word-form error in Task 1 descriptions of processes."],
      ["There has been a ___ increase in the number of cyclists.", ["substance", "substantial", "substantially", "substantiate"], "B", "The adjective modifies the noun 'increase'. 'Substantially' would be used with a verb ('increased substantially'), so the form must change with the slot."]],

    ["Sentence fragments", "Every sentence needs a subject and a finite verb. Common fragments in IELTS are subordinate clauses left alone and participial phrases without a main clause. If a group of words starts with because, although, while, which or when, it must be joined to a main clause.",
      ["Which sentence is grammatically complete?", ["Because the cost of living has risen sharply in recent years.", "The cost of living has risen sharply in recent years.", "Although many families receive support from the government.", "Which has caused considerable hardship for low-income households."], "B", "The other three are subordinate structures with no main clause. A fragment is one of the clearest signals of limited grammatical control at Band 6."],
      ["Which sentence is grammatically complete?", ["Having examined the data in detail.", "The researchers examined the data in detail and concluded that the trend was accelerating.", "That the trend was accelerating over the whole period.", "While the trend was accelerating over the whole period."], "B", "Only option B contains both a subject and a finite verb in a main clause. Options A, C and D are phrases or clauses that depend on information the reader never receives."]],

    ["Run-on sentences", "Two independent clauses cannot be joined by a comma alone (a comma splice). Use a full stop, a semicolon, or a comma plus a coordinating or subordinating conjunction. Also avoid joining clauses with a bare adverb such as 'however'.",
      ["Which sentence correctly links two independent ideas?", ["Traffic has increased, the city has widened some roads.", "Traffic has increased; the city has therefore widened some roads.", "Traffic has increased, however the city has widened roads.", "Traffic has increased, because the city has widened roads."], "B", "A semicolon with 'therefore' correctly separates the two independent clauses. Option A is a comma splice; option C needs a semicolon before 'however' or a full stop; option D reverses the cause."],
      ["Which sentence correctly links two independent ideas?", ["The scheme reduced emissions, it also increased costs.", "The scheme reduced emissions, but it also increased costs.", "The scheme reduced emissions; and increased costs.", "The scheme reduced emissions it also increased costs."], "B", "A comma plus a coordinating conjunction joins the clauses correctly. Option A is a comma splice, C has a fragment after the semicolon, and D has no punctuation at all."]]
  ];

  var BANK = (window.BANK_GRAMMAR = window.BANK_GRAMMAR || { categories: [] });
  RAW.forEach(function (r, i) {
    BANK.categories.push({
      id: "GR-" + (i + 1),
      category: r[0],
      rule: r[1],
      items: r.slice(2).map(function (it) {
        return { q: it[0], options: it[1], answer: it[2], why: it[3] };
      })
    });
  });
})();
