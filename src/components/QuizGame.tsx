import { ChangeEvent, useState } from "react";
import { QuizAPI } from "../api/QuizAPI";
function QuizGame() {
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedQuestion, setSelectedQuestion] = useState(0);
  const [displayResult, setDisplayResult] = useState(false);

  const { question, choices } = QuizAPI.questions[selectedQuestion];
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setSelectedOption(e.target.value);
  };
  const handleQuestionChange = () => {
    if (selectedQuestion < QuizAPI.questions.length) {
      setSelectedQuestion(selectedQuestion + 1);
    } else {
      setDisplayResult(true);
    }
  };
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
                        value={selectedOption}
                        onChange={handleChange}
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
