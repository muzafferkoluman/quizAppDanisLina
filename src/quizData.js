const quizData = [
  {
    category: "Nouns and Articles",
    question: "Hvad er den ubestemte artikel for 'en bog'?", 
    options: ["et", "en", "den", "det"],
    answer: "en"
  },
  {
    category: "Nouns and Articles",
    question: "Hvilket artikel bruger vi med ordet 'hus'?", 
    options: ["et", "en", "den", "det"],
    answer: "et"
  },
  {
    category: "Nouns and Articles",
    question: "Hvordan siger man 'a car' på dansk?", 
    options: ["en bil", "et bil", "en hus", "et hus"],
    answer: "en bil"
  },
  {
    category: "Nouns and Articles",
    question: "Hvad er bestemt artikel for 'hunden'?", 
    options: ["den", "det", "en", "et"],
    answer: "den"
  },
  {
    category: "Nouns and Articles",
    question: "Hvordan siger man 'the book' på dansk?", 
    options: ["bogen", "bøger", "bogens", "bøgerne"],
    answer: "bogen"
  },
  {
    category: "Nouns and Articles",
    question: "Hvilket artikel bruger vi med ordet 'kat'?", 
    options: ["en", "et", "den", "det"],
    answer: "en"
  },
  {
    category: "Nouns and Articles",
    question: "Hvordan siger man 'the cat' på dansk?", 
    options: ["katten", "kat", "kattene", "kattens"],
    answer: "katten"
  },
  {
    category: "Nouns and Articles",
    question: "Hvordan siger man 'the house' på dansk?", 
    options: ["huset", "hus", "husene", "husets"],
    answer: "huset"
  },
  {
    category: "Nouns and Articles",
    question: "Hvad er ubestemt artikel for 'barn'?", 
    options: ["et", "en", "den", "det"],
    answer: "et"
  },
  {
    category: "Nouns and Articles",
    question: "Hvordan siger man 'a book' på dansk?", 
    options: ["en bog", "et bog", "en bøger", "et bøger"],
    answer: "en bog"
  },

  // Pronouns
  {
    category: "Pronouns",  
    question: "Hvordan siger man 'vi' på dansk?", 
    options: ["I", "De", "Vi", "Han"],
    answer: "Vi"
  },
  {
    category: "Pronouns",
    question: "Hvilket dansk pronomen bruges for 'jeg' i flertal?", 
    options: ["De", "Vi", "I", "Hun"],
    answer: "Vi"
  },
  {
    category: "Pronouns",
    question: "Hvordan siger man 'they' på dansk?", 
    options: ["de", "vi", "han", "hun"],
    answer: "de"
  },
  {
    category: "Pronouns",
    question: "Hvad er pronomenet for 'hun' på engelsk?", 
    options: ["she", "he", "we", "they"],
    answer: "she"
  },
  {
    category: "Pronouns",
    question: "Hvordan siger man 'you' til flere personer på dansk?", 
    options: ["I", "Du", "De", "Han"],
    answer: "I"
  },
  {
    category: "Pronouns",
    question: "Hvordan siger man 'it' på dansk?", 
    options: ["det", "den", "det eller den", "de"],
    answer: "det eller den"
  },
  {
    category: "Pronouns",
    question: "Hvordan siger man 'we' på dansk?", 
    options: ["Vi", "De", "Du", "Han"],
    answer: "Vi"
  },
  {
    category: "Pronouns",
    question: "Hvordan siger man 'her' på dansk?", 
    options: ["hende", "ham", "den", "det"],
    answer: "hende"
  },
  {
    category: "Pronouns",
    question: "Hvordan siger man 'his' på dansk?", 
    options: ["hans", "hendes", "deres", "din"],
    answer: "hans"
  },
  {
    category: "Pronouns",
    question: "Hvordan siger man 'mine' på dansk?", 
    options: ["mine", "mit", "min", "mine eller mit"],
    answer: "mine"
  },

  // Verbs - Present Tense
  {
    category: "Verbs - Present Tense",
    question: "Hvordan siger man 'jeg spiser' på dansk?", 
    options: ["jeg spiser", "jeg spise", "jeg spist", "jeg spises"],
    answer: "jeg spiser"
  },
  {
    category: "Verbs - Present Tense",
    question: "Hvordan siger man 'du drikker' på dansk?", 
    options: ["du drikker", "du drikket", "du drikke", "du drikkede"],
    answer: "du drikker"
  },
  {
    category: "Verbs - Present Tense",
    question: "Hvordan siger man 'he reads' på dansk?", 
    options: ["han læser", "han læste", "han læse", "han læses"],
    answer: "han læser"
  },
  {
    category: "Verbs - Present Tense",
    question: "Hvordan siger man 'we work' på dansk?", 
    options: ["vi arbejder", "vi arbejdet", "vi arbejdes", "vi arbejderne"],
    answer: "vi arbejder"
  },
  {
    category: "Verbs - Present Tense",
    question: "Hvordan siger man 'she sleeps' på dansk?", 
    options: ["hun sover", "hun sov", "hun soves", "hun sovet"],
    answer: "hun sover"
  },
  {
    category: "Verbs - Present Tense",
    question: "Hvordan siger man 'you cook' på dansk?", 
    options: ["du laver mad", "du lavet mad", "du lave mad", "du lavede mad"],
    answer: "du laver mad"
  },
  {
    category: "Verbs - Present Tense",
    question: "Hvordan siger man 'they watch' på dansk?", 
    options: ["de ser", "de set", "de ser på", "de så"],
    answer: "de ser"
  },
  {
    category: "Verbs - Present Tense",
    question: "Hvordan siger man 'he plays' på dansk?", 
    options: ["han spiller", "han spillet", "han spille", "han spil"],
    answer: "han spiller"
  },
  {
    category: "Verbs - Present Tense",
    question: "Hvordan siger man 'I go' på dansk?", 
    options: ["jeg går", "jeg gårde", "jeg gårt", "jeg gå"],
    answer: "jeg går"
  },
  {
    category: "Verbs - Present Tense",
    question: "Hvordan siger man 'she dances' på dansk?", 
    options: ["hun danser", "hun danset", "hun danse", "hun danses"],
    answer: "hun danser"
  },

  // Adjectives
  {
    category: "Adjectives", 
    question: "Hvordan siger man 'stor' på engelsk?", 
    options: ["big", "small", "happy", "sad"],
    answer: "big"
  },
  {
    category: "Adjectives",
    question: "Hvordan beskriver man noget meget lille?", 
    options: ["stor", "lille", "lang", "kort"],
    answer: "lille"
  },
  {
    category: "Adjectives",
    question: "Hvordan siger man 'smuk' på engelsk?", 
    options: ["beautiful", "ugly", "tall", "short"],
    answer: "beautiful"
  },
  {
    category: "Adjectives",
    question: "Hvilket ord beskriver noget meget hurtigt?", 
    options: ["hurtig", "langsom", "lille", "stor"],
    answer: "hurtig"
  },
  {
    category: "Adjectives",
    question: "Hvordan siger man 'kort' på engelsk?", 
    options: ["short", "tall", "big", "small"],
    answer: "short"
  },
  {
    category: "Adjectives",
    question: "Hvordan beskriver man noget stort?", 
    options: ["stor", "lille", "kort", "lang"],
    answer: "stor"
  },
  {
    category: "Adjectives",
    question: "Hvordan siger man 'lykkelig' på engelsk?", 
    options: ["happy", "sad", "tall", "small"],
    answer: "happy"
  },
  {
    category: "Adjectives",
    question: "Hvordan siger man 'sulten' på engelsk?", 
    options: ["hungry", "full", "big", "small"],
    answer: "hungry"
  },
  {
    category: "Adjectives",
    question: "Hvordan siger man 'ung' på engelsk?", 
    options: ["young", "old", "new", "used"],
    answer: "young"
  },
  {
    category: "Adjectives",
    question: "Hvordan siger man 'høj' på engelsk?", 
    options: ["tall", "short", "fast", "slow"],
    answer: "tall"
  },

  // Questions - Basic Words
  {
    category: "Questions - Basic Words",  
    question: "Hvordan siger man 'hvem' på engelsk?", 
    options: ["who", "what", "where", "when"],
    answer: "who"
  },
  {
    category: "Questions - Basic Words",
    question: "Hvad betyder 'hvor' på engelsk?", 
    options: ["who", "what", "where", "when"],
    answer: "where"
  },
  {
    category: "Questions - Basic Words",
    question: "Hvad betyder 'hvornår' på engelsk?", 
    options: ["when", "who", "where", "how"],
    answer: "when"
  },
  {
    category: "Questions - Basic Words",
    question: "Hvordan siger man 'hvad' på engelsk?", 
    options: ["what", "who", "when", "where"],
    answer: "what"
  },
  {
    category: "Questions - Basic Words",
    question: "Hvordan siger man 'hvorfor' på engelsk?", 
    options: ["why", "who", "where", "how"],
    answer: "why"
  },
  {
    category: "Questions - Basic Words",
    question: "Hvordan siger man 'hvilket' på engelsk?", 
    options: ["which", "who", "when", "how"],
    answer: "which"
  },
  {
    category: "Questions - Basic Words",
    question: "Hvad betyder 'hvordan' på engelsk?", 
    options: ["how", "why", "where", "who"],
    answer: "how"
  },
  {
    category: "Questions - Basic Words",
    question: "Hvordan siger man 'hvis' på engelsk?", 
    options: ["if", "who", "when", "how"],
    answer: "if"
  },
  {
    category: "Questions - Basic Words",
    question: "Hvordan siger man 'hvilken' på engelsk?", 
    options: ["which", "when", "why", "where"],
    answer: "which"
  },
  {
    category: "Questions - Basic Words",
    question: "Hvad betyder 'hvilke' på engelsk?", 
    options: ["which", "who", "when", "why"],
    answer: "which"
  },

  // Fun Category
  {
    category: "Fun",
    question: "Hvorfor gik kyllingen over vejen?", 
    options: ["At komme til den anden side", "Fordi den var sulten", "Den så en anden kylling", "For at flygte fra gården"],
    answer: "At komme til den anden side"
  },
  {
    category: "Fun",
    question: "Hvordan laver en snemand en telefonopkald?", 
    options: ["Med sine kolde fingre", "Med sin isskraber", "Han sender en sne-mail", "Han bruger en snørebåndstelefon"],
    answer: "Med sine kolde fingre"
  },
  {
    category: "Fun",
    question: "Hvad sagde en væg til den anden?", 
    options: ["Vi mødes i hjørnet", "Støt dig selv", "Hold dig sammen", "Sæt dig op"],
    answer: "Vi mødes i hjørnet"
  },
  {
    category: "Fun",
    question: "Hvad sker der, når man kaster en snebold i et rum?", 
    options: ["Det bliver snavset", "Den smelter", "Det bliver koldt", "Den går i opløsning"],
    answer: "Den smelter"
  },
  {
    category: "Fun",
    question: "Hvorfor kan man ikke stole på trapper?", 
    options: ["De er altid op og ned", "De er gamle", "De har trin", "De går op og ned"],
    answer: "De er altid op og ned"
  }
];

export default quizData;
