const quizData = [
  {
      category: "Nouns and Articles",  // İsimler ve Artikeller
      question: "Hvad er den ubestemte artikel for 'en bog'?", 
      options: ["et", "en", "den", "det"]
  },
  {
      category: "Nouns and Articles",
      question: "Hvilket artikel bruger vi med ordet 'hus'?", 
      options: ["et", "en", "den", "det"]
  },
  {
      category: "Nouns and Articles",
      question: "Hvordan siger man 'a car' på dansk?", 
      options: ["en bil", "et bil", "en hus", "et hus"]
  },
  {
      category: "Nouns and Articles",
      question: "Hvad er bestemt artikel for 'hunden'?", 
      options: ["den", "det", "en", "et"]
  },
  {
      category: "Nouns and Articles",
      question: "Hvordan siger man 'the book' på dansk?", 
      options: ["bogen", "bøger", "bogens", "bøgerne"]
  },
  {
      category: "Nouns and Articles",
      question: "Hvilket artikel bruger vi med ordet 'kat'?", 
      options: ["en", "et", "den", "det"]
  },
  {
      category: "Nouns and Articles",
      question: "Hvordan siger man 'the cat' på dansk?", 
      options: ["katten", "kat", "kattene", "kattens"]
  },
  {
      category: "Nouns and Articles",
      question: "Hvordan siger man 'the house' på dansk?", 
      options: ["huset", "hus", "husene", "husets"]
  },
  {
      category: "Nouns and Articles",
      question: "Hvad er ubestemt artikel for 'barn'?", 
      options: ["et", "en", "den", "det"]
  },
  {
      category: "Nouns and Articles",
      question: "Hvordan siger man 'a book' på dansk?", 
      options: ["en bog", "et bog", "en bøger", "et bøger"]
  },

  // Pronouns
  {
      category: "Pronouns",  
      question: "Hvordan siger man 'vi' på dansk?", 
      options: ["I", "De", "Vi", "Han"]
  },
  {
      category: "Pronouns",
      question: "Hvilket dansk pronomen bruges for 'jeg' i flertal?", 
      options: ["De", "Vi", "I", "Hun"]
  },
  {
      category: "Pronouns",
      question: "Hvordan siger man 'they' på dansk?", 
      options: ["de", "vi", "han", "hun"]
  },
  {
      category: "Pronouns",
      question: "Hvad er pronomenet for 'hun' på engelsk?", 
      options: ["she", "he", "we", "they"]
  },
  {
      category: "Pronouns",
      question: "Hvordan siger man 'you' til flere personer på dansk?", 
      options: ["I", "Du", "De", "Han"]
  },
  {
      category: "Pronouns",
      question: "Hvordan siger man 'it' på dansk?", 
      options: ["det", "den", "det eller den", "de"]
  },
  {
      category: "Pronouns",
      question: "Hvordan siger man 'we' på dansk?", 
      options: ["Vi", "De", "Du", "Han"]
  },
  {
      category: "Pronouns",
      question: "Hvordan siger man 'her' på dansk?", 
      options: ["hende", "ham", "den", "det"]
  },
  {
      category: "Pronouns",
      question: "Hvordan siger man 'his' på dansk?", 
      options: ["hans", "hendes", "deres", "din"]
  },
  {
      category: "Pronouns",
      question: "Hvordan siger man 'mine' på dansk?", 
      options: ["mine", "mit", "min", "mine eller mit"]
  },

  // Verbs - Present Tense
  {
      category: "Verbs - Present Tense",
      question: "Hvordan siger man 'jeg spiser' på dansk?", 
      options: ["jeg spiser", "jeg spise", "jeg spist", "jeg spises"]
  },
  {
      category: "Verbs - Present Tense",
      question: "Hvordan siger man 'du drikker' på dansk?", 
      options: ["du drikker", "du drikket", "du drikke", "du drikkede"]
  },
  {
      category: "Verbs - Present Tense",
      question: "Hvordan siger man 'he reads' på dansk?", 
      options: ["han læser", "han læste", "han læse", "han læses"]
  },
  {
      category: "Verbs - Present Tense",
      question: "Hvordan siger man 'we work' på dansk?", 
      options: ["vi arbejder", "vi arbejdet", "vi arbejdes", "vi arbejderne"]
  },
  {
      category: "Verbs - Present Tense",
      question: "Hvordan siger man 'she sleeps' på dansk?", 
      options: ["hun sover", "hun sov", "hun soves", "hun sovet"]
  },
  {
      category: "Verbs - Present Tense",
      question: "Hvordan siger man 'you cook' på dansk?", 
      options: ["du laver mad", "du lavet mad", "du lave mad", "du lavede mad"]
  },
  {
      category: "Verbs - Present Tense",
      question: "Hvordan siger man 'they watch' på dansk?", 
      options: ["de ser", "de set", "de ser på", "de så"]
  },
  {
      category: "Verbs - Present Tense",
      question: "Hvordan siger man 'he plays' på dansk?", 
      options: ["han spiller", "han spillet", "han spille", "han spil"]
  },
  {
      category: "Verbs - Present Tense",
      question: "Hvordan siger man 'I go' på dansk?", 
      options: ["jeg går", "jeg gårde", "jeg gårt", "jeg gå"]
  },
  {
      category: "Verbs - Present Tense",
      question: "Hvordan siger man 'she dances' på dansk?", 
      options: ["hun danser", "hun danset", "hun danse", "hun danses"]
  },

  // Adjectives
  {
      category: "Adjectives", 
      question: "Hvordan siger man 'stor' på engelsk?", 
      options: ["big", "small", "happy", "sad"]
  },
  {
      category: "Adjectives",
      question: "Hvordan beskriver man noget meget lille?", 
      options: ["stor", "lille", "lang", "kort"]
  },
  {
      category: "Adjectives",
      question: "Hvordan siger man 'smuk' på engelsk?", 
      options: ["beautiful", "ugly", "tall", "short"]
  },
  {
      category: "Adjectives",
      question: "Hvilket ord beskriver noget meget hurtigt?", 
      options: ["hurtig", "langsom", "lille", "stor"]
  },
  {
      category: "Adjectives",
      question: "Hvordan siger man 'kort' på engelsk?", 
      options: ["short", "tall", "big", "small"]
  },
  {
      category: "Adjectives",
      question: "Hvordan beskriver man noget stort?", 
      options: ["stor", "lille", "kort", "lang"]
  },
  {
      category: "Adjectives",
      question: "Hvordan siger man 'lykkelig' på engelsk?", 
      options: ["happy", "sad", "tall", "small"]
  },
  {
      category: "Adjectives",
      question: "Hvordan siger man 'sulten' på engelsk?", 
      options: ["hungry", "full", "big", "small"]
  },
  {
      category: "Adjectives",
      question: "Hvordan siger man 'ung' på engelsk?", 
      options: ["young", "old", "new", "used"]
  },
  {
      category: "Adjectives",
      question: "Hvordan siger man 'høj' på engelsk?", 
      options: ["tall", "short", "fast", "slow"]
  },

  // Questions - Basic Words
  {
      category: "Questions - Basic Words",  
      question: "Hvordan siger man 'hvem' på engelsk?", 
      options: ["who", "what", "where", "when"]
  },
  {
      category: "Questions - Basic Words",
      question: "Hvad betyder 'hvor' på engelsk?", 
      options: ["who", "what", "where", "when"]
  },
  {
      category: "Questions - Basic Words",
      question: "Hvad betyder 'hvornår' på engelsk?", 
      options: ["when", "who", "where", "how"]
  },
  {
      category: "Questions - Basic Words",
      question: "Hvordan siger man 'hvad' på engelsk?", 
      options: ["what", "who", "when", "where"]
  },
  {
      category: "Questions - Basic Words",
      question: "Hvordan siger man 'hvorfor' på engelsk?", 
      options: ["why", "who", "where", "how"]
  },
  {
      category: "Questions - Basic Words",
      question: "Hvordan siger man 'hvilket' på engelsk?", 
      options: ["which", "who", "when", "how"]
  },
  {
      category: "Questions - Basic Words",
      question: "Hvad betyder 'hvordan' på engelsk?", 
      options: ["how", "why", "where", "who"]
  },
  {
      category: "Questions - Basic Words",
      question: "Hvordan siger man 'hvis' på engelsk?", 
      options: ["if", "who", "when", "how"]
  },
  {
      category: "Questions - Basic Words",
      question: "Hvordan siger man 'hvilken' på engelsk?", 
      options: ["which", "when", "why", "where"]
  },
  {
      category: "Questions - Basic Words",
      question: "Hvad betyder 'hvilke' på engelsk?", 
      options: ["which", "who", "when", "why"]
  },

  // Fun Category
  {
      category: "Fun",
      question: "Hvorfor gik kyllingen over vejen?", 
      options: ["At komme til den anden side", "Fordi den var sulten", "Den så en anden kylling", "For at flygte fra gården"]
  },
  {
      category: "Fun",
      question: "Hvordan laver en snemand en telefonopkald?", 
      options: ["Med sine kolde fingre", "Med sin isskraber", "Han sender en sne-mail", "Han bruger en snørebåndstelefon"]
  },
  {
      category: "Fun",
      question: "Hvad sagde en væg til den anden?", 
      options: ["Vi mødes i hjørnet", "Støt dig selv", "Hold dig sammen", "Sæt dig op"]
  },
  {
      category: "Fun",
      question: "Hvad sker der, når man kaster en snebold i et rum? ", 
      options: ["Det bliver snavset", "Den smelter", "Det bliver koldt", "Den går i opløsning"]
  },
  {
      category: "Fun",
      question: "Hvorfor kan man ikke stole på trapper?", 
      options: ["De er altid op og ned", "De er gamle", "De har trin", "De går op og ned"]
  }
];

export default quizData;
