import Button from "../components/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveEmail, credentials } from "../store/authStore";

export default () => {
  const [input, setInput] = useState("");
  const nav = useNavigate();

  const handleChange = () => {
    saveEmail({
      email: input,
    });
    nav("/confirm");
  };
  return (
    <div className="flex flex-col justify-center gap-8 items-center">
      <div className="text-2xl">
        <span className="text-cyan-400  font-[300] font-sans">Webinar</span>
        .gg
      </div>
      <div className="font-medium text-xl mt-3">Let's Get Started</div>

      <input
        type="text"
        className=" bg-[#18406b] py-2 pl-2 w-2/3 text-xs rounded-md"
        value={input}
        placeholder="Email id"
        onChange={(e) => setInput(e.target.value)}
      />
      <Button onClick={handleChange}>continue</Button>
      <div>{credentials.dob}</div>
    </div>
  );
};
