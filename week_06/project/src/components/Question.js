// src/components/Question.js
import React from 'react';

const Question = ({ question, onAnswer }) => {
  const handleOptionClick = (option) => {
    onAnswer(option);
  };

  return (
    <div className="question">
      <p>{question.question}</p>
      <ul>
        {question.options.map((option, index) => (
          <li key={index}>
            <button onClick={() => handleOptionClick(option)}>{option}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;
