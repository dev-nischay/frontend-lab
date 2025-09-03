import { useState } from "react";
import Button from "../components/Button";
export default () => {
  const [input, setInput] = useState("");

  return (
    <div className="flex flex-col justify-center gap-6 items-center">
      <div className="text-2xl">
        <span className="text-cyan-400 font-[300] font-sans">Webinar</span>
        .gg
      </div>
      <div className="font-medium text-xl">Verify Your Age</div>
      <div className="text-xs text-gray-400 mt-8">
        Please confirm your birth year. This data will not be stored.
      </div>
      <input
        type="text"
        className=" bg-[#18406b] py-2 pl-2 w-2/3 text-xs rounded-md"
        value={input}
        placeholder="Your Birth Year"
        onChange={(e) => setInput(e.target.value)}
      />
      <Button>continue</Button>
    </div>
  );
};
