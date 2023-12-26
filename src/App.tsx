import { quiz } from "./api/QuizAPI";
import QuizDescription from "./components/QuizDescription";
import QuizGame from "./components/QuizGame";
import { useState } from "react";

// interface PropsType {
//   matchStart: boolean;
//   setMatchStart: SetStateAction<boolean>;
// }
function App() {
  const [matchStart, setMatchStart] = useState(false);

  return (
    <div className=" h-screen w-screen bg-fuchsia-200 flex justify-center items-center">
      <div className="h-1/2 w-8/12 border-2 border-red-400 p-4 ">
        {matchStart ? (
          <QuizGame />
        ) : (
          <QuizDescription setMatchStart={setMatchStart} />
        )}
      </div>
    </div>
  );
}

export default App;
