// src/App.js
import React, { useState } from 'react';
import Quiz from './components/Quiz';
import Result from './components/Result';

const App = () => {
  const [startQuiz, setStartQuiz] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);

  const handleStartQuiz = () => {
    setStartQuiz(true);
    setQuizFinished(false);
  };

  const handleFinishQuiz = () => {
    setQuizFinished(true);
  };

  return (
    <div className="App">
      {!startQuiz && !quizFinished ? (
        <div>
          <h1>Welcome to the Quiz App!</h1>
          <button onClick={handleStartQuiz}>Start Quiz</button>
        </div>
      ) : (
        <>
          <Quiz onFinish={handleFinishQuiz} />
          {quizFinished && <Result />}
        </>
      )}
    </div>
  );
};

export default App;
