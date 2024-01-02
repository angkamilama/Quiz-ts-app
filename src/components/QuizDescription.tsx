function QuizDescription(props) {
  const { setMatchStart } = props;

  return (
    <div className=" flex flex-col items-center justify-center gap-4 p-3 mt-[50px]">
      <h3>Welcome to the Quiz App</h3>
      <p>
        This is a beginner level react quiz app. This quiz has 4 questions with
        multiple choices. The participant is suppose to select an option before
        moving into next question.
      </p>
      <button
        className="border border-slate-600 bg-green-200 p-2  rounded-lg hover:bg-green-500"
        onClick={() => setMatchStart(true)}
      >
        Start the Quiz
      </button>
    </div>
  );
}

export default QuizDescription;
