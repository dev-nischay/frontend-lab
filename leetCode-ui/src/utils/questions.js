export const questions = [
  {
    ques: "1. Two Sum",
    difficulty: "Easy",
    completionRate: "56.3%",
  },

  {
    ques: "2. Add Two Numbers",
    difficulty: "Med.",
    completionRate: "46.9%",
  },
  {
    ques: "3. Longest Substring Without Repeating Characters",
    difficulty: "Med.",
    completionRate: "37.5%",
  },
  {
    ques: "4. Median of Two Sorted Arrays",
    difficulty: "Hard",
    completionRate: "44.7%",
  },
  {
    ques: "5. Longest Palindromic Substring",
    difficulty: "Med.",
    completionRate: "36.4%",
  },
  {
    ques: "6.Reverse Integer",
    difficulty: "Med.",
    completionRate: "30.8%",
  },
  {
    ques: "7. Zigzag Conversion",
    difficulty: "Med.",
    completionRate: "52.3%",
  },
];

// Probem for every element log its positoin

questions.map((e, idx) => idx % 2 !== 0 && console.log("odd"));
