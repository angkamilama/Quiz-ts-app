import { useState } from "react";
import { QuizAPI } from "../api/QuizAPI";
function QuizGame() {
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedQuestion, setSelectedQuestion] = useState(0);
  const [displayResult, setDisplayResult] = useState(false);
  const [correctAnswerCount, setCorrectAnswerCount] = useState(0);
  const [incorrectAnswerCount, setIncorrectAnswerCount] = useState(0);
  //error while destructuring
  const { question, choices, correctAnswer } =
    QuizAPI.questions[selectedQuestion];

  const handleQuestionChange = (): void => {
    if (selectedOption === correctAnswer) {
      setCorrectAnswerCount(correctAnswerCount + 1);
    } else {
      setIncorrectAnswerCount(incorrectAnswerCount + 1);
    }
    if (selectedQuestion < QuizAPI.questions.length) {
      setSelectedQuestion(selectedQuestion + 1);
    } else {
      setDisplayResult(true);
    }
  };

  console.log(correctAnswerCount, incorrectAnswerCount);

  return (
    <>
      {displayResult ? (
        <div>
          <p>The result:</p>
        </div>
      ) : (
        <div>
          <div>
            <p>{question}</p>
            <div>
              {choices.map((choice) => {
                return (
                  <div>
                    <label>
                      <input
                        type="radio"
                        name="answer"
                        value={choice}
                        onChange={(e) => setSelectedOption(e.target.value)}
                        checked={selectedOption === choice}
                      />
                    </label>
                    {choice}
                  </div>
                );
              })}
            </div>
          </div>
          <button onClick={handleQuestionChange}>Next</button>
        </div>
      )}
    </>
  );
}

export default QuizGame;
