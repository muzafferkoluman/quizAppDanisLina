import React, { useState, useEffect } from 'react';
import quizData from './quizData';

function Quiz() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(""); 
  const [isCorrect, setIsCorrect] = useState(null);

  // Kullanılabilir kategorileri ayıkla
  useEffect(() => {
    const uniqueCategories = [...new Set(quizData.map((item) => item.category))];
    setCategories(uniqueCategories);
  }, []);

  // Seçilen kategoriye göre soruları filtrele
  const handleCategorySelect = (category) => {
    const questionsInCategory = quizData.filter((item) => item.category === category);
    setFilteredQuestions(shuffleArray(questionsInCategory));
    setSelectedCategory(category);
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  // Diziyi karıştıran yardımcı fonksiyon
  const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);

  const handleAnswerOptionClick = (option) => {
    const correctAnswer = filteredQuestions[currentQuestion].answer;
    setSelectedAnswer(option);
    if (option === correctAnswer) {
      setScore(score + 1);
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }

    setTimeout(() => {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < filteredQuestions.length) {
        setCurrentQuestion(nextQuestion);
        setIsCorrect(null);
        setSelectedAnswer("");
      } else {
        setShowScore(true);
      }
    }, 1000);
  };

  return (
    <div className='quiz'>
      {!selectedCategory ? (
        // Kategori Seçim Ekranı
        <div className='category-selection'>
          <h2>Select a Category</h2>
          {categories.map((category) => (
            <button 
              key={category} 
              onClick={() => handleCategorySelect(category)}
              style={{ margin: '10px', padding: '10px 20px', fontSize: '1rem' }}
            >
              {category}
            </button>
          ))}
        </div>
      ) : showScore ? (
        // Skor Ekranı
        <div className='score-section'>
          You scored {score} out of {filteredQuestions.length}
          <button onClick={() => setSelectedCategory(null)} style={{ marginTop: '20px' }}>
            Choose Another Category
          </button>
        </div>
      ) : (
        // Soru Ekranı
        <>
          <div className='question-section'>
            <div className='question-count'>
              <span>Question {currentQuestion + 1}</span>/{filteredQuestions.length}
            </div>
            <div className='question-text'>{filteredQuestions[currentQuestion].question}</div>
          </div>
          <div className='answer-section'>
            {filteredQuestions[currentQuestion].options.map((option) => (
              <button 
                onClick={() => handleAnswerOptionClick(option)} 
                key={option}
                style={{ backgroundColor: selectedAnswer === option ? (isCorrect ? 'lightgreen' : 'pink') : '' }}
              >
                {option}
              </button>
            ))}
          </div>
          {selectedAnswer && (
            <div style={{ marginTop: '10px' }}>
              {isCorrect ? 'Correct! 🎉' : 'Sorry, that’s not right. 😢'}
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Quiz;
