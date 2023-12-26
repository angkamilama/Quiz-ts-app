import { SetStateAction } from "react";

function QuizDescription(props) {
  const { setMatchStart } = props;

  return (
    <div className=" flex flex-col items-center justify-center">
      <p>Welcome to the Quiz App</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio natus,
        deleniti repudiandae dolore necessitatibus, eius eum distinctio nesciunt
        delectus perspiciatis, iure magni cumque quibusdam illo. Voluptate, iste
        nisi. Tempore, architecto.
      </p>
      <button onClick={() => setMatchStart(true)}>Start the Quiz</button>
    </div>
  );
}

export default QuizDescription;
