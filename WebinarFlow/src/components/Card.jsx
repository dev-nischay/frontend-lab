import { authStore } from "../store/authStore";
import dp from "/src/assets/dp.jpg";

export const Card = ({ className = "" }) => {
  const creds = authStore((state) => state.credentials);
  return (
    <div
      className={`lg:block mb-52 ml-5  rounded-md p-5 gap-7 leading-loose text-center flex flex-col h-[23rem] bg-slate-200 w-60  ${className}`}
    >
      <img src={dp} className="rounded-xl w-40 mx-auto" />
      <div className="mt-5">{creds.name}</div>
      <div>{creds.mail}</div>
      <div>{creds.phone}</div>
      <div>New Delhi,India</div>
    </div>
  );
};
