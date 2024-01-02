import { useState } from "react";
import { QuizAPI } from "../api/QuizAPI";
function QuizGame() {
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedQuestion, setSelectedQuestion] = useState(0);
  const [displayResult, setDisplayResult] = useState(false);
  const [correctAnswerCount, setCorrectAnswerCount] = useState(0);
  const [incorrectAnswerCount, setIncorrectAnswerCount] = useState(0);

  const { question, choices, correctAnswer } =
    QuizAPI.questions[selectedQuestion];

  const handleQuestionChange = (): void => {
    if (selectedOption === correctAnswer) {
      setCorrectAnswerCount(correctAnswerCount + 1);
    } else {
      setIncorrectAnswerCount(incorrectAnswerCount + 1);
    }
    if (selectedQuestion < QuizAPI.questions.length - 1) {
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
          <div className=" h-1/2 mx-auto my-[10%] p-2  w-8/12 flex flex-col justify-center items-center gap-4">
            <p>Thank you for participating!</p>
            <p> Your Result:</p>
            <p>Total Correct Answer:{correctAnswerCount}</p>
            <p>Total Incorrect Answer:{incorrectAnswerCount}</p>
          </div>
        </div>
      ) : (
        <div className=" mx-auto my-auto p-2 h-5/6 w-10/12 flex-col justify-center items-center">
          <div className="h-full">
            <p className=" my-3">{question}</p>
            <div>
              {choices.map((choice) => {
                return (
                  <div className="h-[40px]">
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
          <button
            className="border border-slate-600 bg-green-200 p-1  rounded-lg hover:bg-green-500"
            onClick={handleQuestionChange}
          >
            Next
          </button>
        </div>
      )}
    </>
  );
}

export default QuizGame;
