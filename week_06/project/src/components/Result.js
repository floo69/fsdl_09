// src/components/Result.js
import React from 'react';

const Result = () => {
  const [score] = React.useState(() => {
    const userAnswers = JSON.parse(localStorage.getItem('userAnswers')) || [];
    const correctAnswers = ['Paris', 'Mars', 'Einstein'];
    return userAnswers.filter((answer, index) => answer === correctAnswers[index]).length;
  });

  return (
    <div className="result">
      <h2>Quiz Finished!</h2>
      <p>Your score is: {score} / 3</p>
    </div>
  );
};

export default Result;
