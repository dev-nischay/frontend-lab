import { useState } from "react";
import Button from "../components/Button";
import OtpBox from "../components/Otp-box";
import { useRef } from "react";
export default () => {
  const handleChange = (e) => {
    let { name, value } = e.target;

    setOtp((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const [show, setShow] = useState(false);

  let ref1 = useRef();
  let ref2 = useRef();
  let ref3 = useRef();
  let ref4 = useRef();
  let ref5 = useRef();
  let ref6 = useRef();

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
          <OtpBox
            reference={ref1}
            isDone={() => {
              ref2.current.focus();
            }}
            prev={() => {
              alert("Otp required");
            }}
          />
          <OtpBox
            reference={ref2}
            isDone={() => {
              ref3.current.focus();
            }}
            prev={() => {
              ref1.current.focus();
            }}
          />
          <OtpBox
            reference={ref3}
            isDone={() => {
              ref4.current.focus();
            }}
            prev={() => {
              ref2.current.focus();
            }}
          />
          <OtpBox
            reference={ref4}
            isDone={() => {
              ref5.current.focus();
            }}
            prev={() => {
              ref3.current.focus();
            }}
          />
          <OtpBox
            reference={ref5}
            isDone={() => {
              ref6.current.focus();
            }}
            prev={() => {
              ref4.current.focus();
            }}
          />
          <OtpBox
            reference={ref6}
            isDone={() => {
              setShow(true);
            }}
            prev={() => {
              ref5.current.focus();
            }}
          />
        </div>

        <Button>Verify</Button>
        {show && <Button>Submit</Button>}
        <div className="text-xs text-gray-400 mt-10 text-center">
          Can't find the email?Click here to resend
        </div>
      </div>
    </>
  );
};
