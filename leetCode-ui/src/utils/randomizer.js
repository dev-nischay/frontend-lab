import { useQuestionStore } from "../store/question-bank.js";

export const random = () => {
  let questions = useQuestionStore.getState().questions;

  let randomized = questions[Math.floor(Math.random() * 7)];
  alert(` Picked ${randomized.ques.split(".")[1]}`);
};
