import { authStore } from "../store/authStore";

export const Header = () => {
  const username = authStore((state) => state.credentials.name);
  const date = new Date();

  return (
    <div className="h-[12%] mb-10 w-full font-mono ">
      <div className="flex justify-end p-2 ">{date}</div>
      <div className="text-center font-mono  text-2xl  ">{`Good morning,${username}`}</div>
    </div>
  );
};
