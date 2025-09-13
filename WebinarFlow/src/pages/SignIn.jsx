import Button from "../components/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveDetails } from "../store/authStore";
import { detailsValidate } from "../utils/validation";

export default () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const nav = useNavigate();

  const handleChange = () => {
    let parsed = detailsValidate.safeParse({ name, email, phone });
    if (!parsed.success) {
      let error = parsed.error.issues.map((e) => e.message);
      alert(String(error));
      return;
    }

    saveDetails({ email, name, phone });
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
        value={name}
        placeholder="Your Name"
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        className=" bg-[#18406b] py-2 pl-2 w-2/3 text-xs rounded-md"
        value={email}
        placeholder="Your Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        className=" bg-[#18406b] py-2 pl-2 w-2/3 text-xs rounded-md"
        value={phone}
        placeholder="Your Phone"
        onChange={(e) => setPhone(e.target.value)}
      />
      <Button onClick={handleChange}>continue</Button>
    </div>
  );
};
