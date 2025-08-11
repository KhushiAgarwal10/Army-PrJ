import React, { useState, useEffect } from 'react';


export default function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState('');
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    // Fetch questions from JSON
    fetch('/data/quiz.json')
      .then(res => res.json())
      .then(data => setQuestions(data));
  }, []);

  const handleOptionClick = (option) => {
    setSelected(option);
  };

  const handleNext = () => {
    if (selected === questions[current].answer) {
      setScore(prev => prev + 1);
    }
    setSelected('');
    if (current + 1 < questions.length) {
      setCurrent(prev => prev + 1);
    } else {
      setShowResult(true);
    }
  };

  if (questions.length === 0) return <div className="text-center p-6">Loading quiz...</div>;

  if (showResult) {
    return (
      <div className="max-w-xl mx-auto p-6 text-center bg-white rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-green-700 mb-4">🎉 Quiz Completed!</h2>
        <p className="text-lg">You scored <span className="text-green-800 font-semibold">{score}</span> out of <span className="text-green-800 font-semibold">{questions.length}</span></p>
        <button
          className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          onClick={() => {
            setCurrent(0);
            setScore(0);
            setShowResult(false);
          }}
        >
          Retry Quiz
        </button>
      </div>
    );
  }

  const currentQuestion = questions[current];

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-xl font-bold text-green-800 mb-2">
        Question {current + 1} of {questions.length}
      </h2>
      <p className="mb-4 text-gray-800">{currentQuestion.question}</p>
      <div className="space-y-2">
        {currentQuestion.options.map((opt, i) => {
          let optionStyle = "w-full text-left px-4 py-2 rounded border transition";

          if (selected) {
            if (opt === currentQuestion.answer) {
              optionStyle += " bg-green-100 border-green-600 text-green-800 font-semibold"; // correct
            } else if (opt === selected && opt !== currentQuestion.answer) {
              optionStyle += " bg-red-100 border-red-600 text-red-800 font-semibold"; // wrong
            } else {
              optionStyle += " opacity-70"; // unchosen options
            }
          } else {
            optionStyle += " hover:bg-gray-100";
          }

          return (
            <button
              key={i}
              onClick={() => handleOptionClick(opt)}
              className={optionStyle}
              disabled={!!selected}
            >
              {opt}
            </button>
          );
        })}
      </div>

      {selected && (
        <p className="mt-4 text-green-700 font-medium">
          Correct Answer: {currentQuestion.answer}
        </p>
      )}

      <button
        onClick={handleNext}
        className="mt-6 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        disabled={!selected}
      >
        {current + 1 === questions.length ? 'Finish' : 'Next'}
      </button>
    </div>
  );
}
