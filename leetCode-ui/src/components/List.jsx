import { Problem } from "./Problems";
import { questions } from "../utils/questions";
export const List = () => {
  return (
    <div className="w-full h-auto group-even:bg-transparent">
      {questions.map((e, idx) => (
        <Problem
          className={`${idx % 2 !== 0 && "bg-transparent"}`}
          rate={e.completionRate}
          ques={e.ques}
          diff={e.difficulty}
        />
      ))}
    </div>
  );
};
