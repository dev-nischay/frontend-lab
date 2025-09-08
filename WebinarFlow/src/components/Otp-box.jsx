import { useState } from "react";

export default ({ reference, isDone, prev }) => {
  const [input, setInput] = useState("");
  return (
    <input
      type="text"
      ref={reference}
      maxLength={1}
      onChange={(e) => {
        let value = e.target.value;
        let regex = /^[1-9]$/;
        if (regex.test(value)) {
          setInput(e.target.value);
          isDone();
        }
      }}
      value={input}
      onKeyDown={(e) => {
        if (e.key === "Backspace") {
          prev();
          setInput("");
        }
      }}
      className="w-8 h-10 border text-center border-gray-500 bg-[#18406b] m-3 rounded-lg"
    ></input>
  );
};
