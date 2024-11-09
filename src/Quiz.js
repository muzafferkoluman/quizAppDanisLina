import React, { useState, useEffect } from 'react';
import quizData from './quizData';
import './Quiz.css'; // Ek CSS dosyası

function Quiz() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(""); 
  const [isCorrect, setIsCorrect] = useState(null);

  useEffect(() => {
    const uniqueCategories = [...new Set(quizData.map((item) => item.category))];
    setCategories(uniqueCategories);
  }, []);

  const handleCategorySelect = (category) => {
    const questionsInCategory = quizData.filter((item) => item.category === category);
    setFilteredQuestions(shuffleArray(questionsInCategory));
    setSelectedCategory(category);
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

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

  const getScoreMessage = () => {
    const totalQuestions = filteredQuestions.length;
    const scoreRatio = (score / totalQuestions) * 100;

    if (scoreRatio === 100) return "Amazing! You got all questions correct 🎉";
    if (scoreRatio >= 90) return "Great job! Almost perfect! 😎";
    if (scoreRatio >= 70) return "Good work! You’re getting close! 👍";
    if (scoreRatio >= 50) return "Not bad! Keep practicing 😊";
    return "It’s a start! A bit more practice will help 📚";
  };

  return (
    <div className='quiz'>
      {!selectedCategory ? (
        <div className='category-selection'>
          <h2>Select a Category</h2>
          {categories.map((category) => (
            <button 
              key={category} 
              onClick={() => handleCategorySelect(category)}
              className="category-button"
            >
              {category}
            </button>
          ))}
        </div>
      ) : showScore ? (
        <div className='score-section'>
          <p>You scored {score} out of {filteredQuestions.length}</p>
          <p>{getScoreMessage()}</p>
          <button onClick={() => setSelectedCategory(null)} className="reset-button">
            Choose Another Category
          </button>
        </div>
      ) : (
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
                className={`answer-button ${selectedAnswer === option ? (isCorrect ? 'correct' : 'incorrect') : ''}`}
              >
                {option}
              </button>
            ))}
          </div>
          {selectedAnswer && (
            <div className="feedback">
              {isCorrect ? 'Correct! 🎉' : 'Sorry, that’s not right. 😢'}
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Quiz;
