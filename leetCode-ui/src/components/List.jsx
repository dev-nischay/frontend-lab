import { Problem } from "./Problems";
import { useQuestionStore } from "../store/question-bank";
export const List = () => {
  const questions = useQuestionStore((state) => state.questions);
  const searched = useQuestionStore((state) => state.search);
  const filtered = useQuestionStore((state) => state.filter);

  let filteredQuestions = [];

  if (filtered) {
    filteredQuestions = questions.filter((e) =>
      filtered ? e.difficulty === filtered : e
    );
  } else if (searched.length > 0) {
    filteredQuestions = searched;
  } else {
    filteredQuestions = questions;
  }

  return (
    <div className="  h-auto group-even:bg-transparent lg:flex-1  ">
      {filteredQuestions.map((e, idx) => (
        <Problem
          key={idx}
          className={`${idx % 2 !== 0 && "bg-transparent"}`}
          rate={e.completionRate}
          ques={e.ques}
          diff={e.difficulty}
        />
      ))}
    </div>
  );
};
