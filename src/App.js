import React, { useState } from "react";
import Functions from "./images/Functions.png";

export default function App() {
  const questions = [
    {
      questionText: "What does this code do?",
      answerOptions: [
        { answerText: "Log Hello World when called", isCorrect: false },
        {
          answerText: "Defines a function called myFunction()",
          isCorrect: false,
        },
        { answerText: "Is valid JavaScript", isCorrect: false },
        { answerText: "All of the above", isCorrect: true },
      ],
    },
    {
      questionText: "Some question about JavaScript: Answer is B",
      answerOptions: [
        { answerText: "A", isCorrect: false },
        { answerText: "B", isCorrect: true },
        { answerText: "C", isCorrect: false },
        { answerText: "D", isCorrect: false },
      ],
    },
    {
      questionText: "Some question about JavaScript: Answer is C",
      answerOptions: [
        { answerText: "A", isCorrect: false },
        { answerText: "B", isCorrect: false },
        { answerText: "C", isCorrect: true },
        { answerText: "D", isCorrect: false },
      ],
    },
    {
      questionText: "Some question about JavaScript: Answer is D",
      answerOptions: [
        { answerText: "A", isCorrect: false },
        { answerText: "B", isCorrect: false },
        { answerText: "C", isCorrect: false },
        { answerText: "D", isCorrect: true },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div>
            <img src={Functions} alt="Functions"></img>
          </div>
          <div className="question-text">
            {questions[currentQuestion].questionText}
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
