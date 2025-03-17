// src/components/Quiz.js
import React, { useState } from 'react';
import Question from './Question';

const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: "Mars",
  },
  {
    question: "Who developed the theory of relativity?",
    options: ["Newton", "Einstein", "Galileo", "Tesla"],
    answer: "Einstein",
  },
];

const Quiz = ({ onFinish }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  const handleAnswer = (answer) => {
    setUserAnswers([...userAnswers, answer]);
    if (currentQuestionIndex + 1 < quizData.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      onFinish();
    }
  };

  const currentQuestion = quizData[currentQuestionIndex];

  return (
    <div className="quiz">
      <h2>Question {currentQuestionIndex + 1}</h2>
      <Question question={currentQuestion} onAnswer={handleAnswer} />
    </div>
  );
};

export default Quiz;
