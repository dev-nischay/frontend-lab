import { useState } from "react";
import Button from "../components/Button";

export default () => {
  const [otp, setOtp] = useState({
    num1: "",
    num2: "",
    num3: "",
    num4: "",
    num5: "",
    num6: "",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;

    setOtp((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <>
      <div className="flex flex-col  justify-center gap-6 items-center">
        <div className="text-2xl">
          <span className="text-cyan-400 font-[300] font-sans">Webinar</span>
          .gg
        </div>
        <div className="font-medium text-xl">Check Your Email For A Code</div>
        <div className="text-xs text-gray-400 mt-10 text-center">
          Please enter the verification code sent to your email id
          nischay@gmail.com
        </div>
        <div className="flex">
          <input
            type="text"
            className="w-8 h-10 border border-gray-500 bg-[#18406b] m-3 rounded-lg"
            value={otp.num1}
            onChange={handleChange}
            name="num1"
          />
          <input
            type="text"
            className="w-8 h-10 border border-gray-500 bg-[#18406b] m-3 rounded-lg"
            value={otp.num2}
            onChange={handleChange}
            name="num2"
          />
          <input
            type="text"
            className="w-8 h-10 border border-gray-500 bg-[#18406b] m-3 rounded-lg"
            value={otp.num3}
            onChange={handleChange}
            name="num3"
          />
          <input
            type="text"
            className="w-8 h-10 border border-gray-500 bg-[#18406b] m-3 rounded-lg"
            value={otp.num4}
            onChange={handleChange}
            name="num4"
          />
          <input
            type="text"
            className="w-8 h-10 border border-gray-500 bg-[#18406b] m-3 rounded-lg"
            value={otp.num5}
            onChange={handleChange}
            name="num5"
          />

          <input
            type="text"
            className="w-8 h-10 border border-gray-500 bg-[#18406b] m-3 rounded-lg"
            value={otp.num6}
            onChange={handleChange}
            name="num6"
          />
        </div>

        <Button>Verify</Button>
        <div className="text-xs text-gray-400 mt-10 text-center">
          Can't find the email?Click here to resend
        </div>
      </div>
    </>
  );
};
