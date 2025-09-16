import { useState } from "react";
import { Button } from "./Button";
import { Search, ArrowUpDown, Funnel, Shuffle } from "lucide-react";

export const FilterandSort = () => {
  let [input, setInput] = useState("");
  return (
    <>
      <div className="flex  items-center  h-8 justify-between w-full">
        <div className="flex justify-center h-7  items-center  gap-2">
          <div className="px-3 flex items-center gap-2 py-4 h-7 text-sm rounded-full bg-customGrey-450 ">
            <Search width={15} color="rgb(160,160,160)" />
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className=" bg-transparent text-white outline-none focus:ring-0 text-sm placeholder:text-customGrey-700"
              placeholder={`Search questions`}
            />
          </div>
          <LocalButton Icon={ArrowUpDown} text={"Sort"} />
          <LocalButton Icon={Funnel} text={"Filter"} />
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

export const LocalButton = ({ Icon, className = "", text }) => {
  return (
    <Button
      text={text}
      className={`h-[1.95rem] w-[1.95rem] bg-customGrey-450 ${className}`}
    >
      <Icon color="rgb(168,168,168)" width={16} />
    </Button>
  );
};
