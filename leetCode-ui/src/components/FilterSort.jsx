import { useState } from "react";
import { Button } from "./Button";
import { Search, ArrowUpDown, Funnel, Shuffle } from "lucide-react";
import { filteredQues, searchedQues } from "../store/question-bank";
import { useQuestionStore } from "../store/question-bank";

export const FilterandSort = () => {
  let [input, setInput] = useState("");
  const questions = useQuestionStore((state) => state.questions);

  const handleChange = (event) => {
    const value = event.target.value; // grab new value
    setInput(value); // update state

    const filtered = questions.filter((q) =>
      q.ques.toLowerCase().includes(value.toLowerCase())
    );
    searchedQues(filtered);
  };

  return (
    <>
      <div className="flex  items-center  h-8 justify-between w-full">
        <div className="flex justify-center h-7  items-center  gap-2">
          <div className="px-3 flex items-center gap-2 py-4 h-7 text-sm rounded-full bg-customGrey-450 ">
            <Search width={15} color="rgb(160,160,160)" />
            <input
              type="text"
              value={input}
              onChange={handleChange}
              className=" bg-transparent text-white outline-none focus:ring-0 text-sm placeholder:text-customGrey-700"
              placeholder={`Search questions`}
            />
          </div>
          <LocalButton Icon={ArrowUpDown} text={"Sort"} />
          <Filterbutton />
        </div>
        <div>
          <LocalButton
            Icon={Shuffle}
            className="bg-transparent"
            text={"Pick"}
          />
        </div>
      </div>
    </>
  );
};

export const LocalButton = ({
  Icon,
  className = "",
  text,
  children,
  ...props
}) => {
  return (
    <Button
      {...props}
      text={text}
      className={`h-[1.95rem] w-[1.95rem] bg-customGrey-450 ${className}`}
    >
      <Icon color="rgb(168,168,168)" width={16} />
      {children}
    </Button>
  );
};

const Filterbutton = () => {
  const [active, isActive] = useState(false);
  const difficulty = ["Easy", "Med.", "Hard"];
  return (
    <LocalButton
      Icon={Funnel}
      text={"filter"}
      className=" group"
      onClick={() => isActive(!active)}
    >
      <div
        className={` flex flex-col justify-evenly p-2 gap-4  transition-opacity duration-200 rounded z-30   absolute w-32 h-40 left-10 top-10 bg-neutral-800 border border-customGrey-650  group-opacity-100 text-white  ${
          active
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } `}
      >
        {difficulty.map((e, idx) => (
          <div
            key={idx}
            onClick={() => filteredQues(e)}
            className="text-slate-300 font-[400] space-x-10 bg-customGrey-550 text-xs p-2 rounded-sm active:opacity-75"
          >
            {e}
          </div>
        ))}
      </div>
    </LocalButton>
  );
};
