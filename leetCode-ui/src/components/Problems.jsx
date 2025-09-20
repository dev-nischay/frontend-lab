import { ProgressBar } from "./Matrix";
import { EllipsisIcon, Menu } from "lucide-react";

export const Problem = ({ className = "", rate, ques, diff }) => {
  return (
    <div
      className={`flex group h-[44px] w-full bg-customGrey-300 rounded-lg  items-center space-x-3 px-4 ${className} `}
    >
      <div>
        <div className=" opacity-0 group-hover:opacity-100">
          <div className="h-4 w-4"></div>
          <div className="flex items-center">
            <Menu width={15} color="rgb(160,160,160)" />
          </div>
        </div>
        <div className="hidden h-4 w-4 group-hover:flex">
          <div>
            <div className="relative text-[14px] leading-[normal] p-[1px] before:block before:h-3.5 before:w-3.5 "></div>
          </div>
        </div>
      </div>
      <a
        className="relative flex h-full w-full pl-1  items-center"
        href="#"
        target="_blank"
        rel="noreferrer"
      >
        <div className=" flex w-0 flex-1 items-center space-x-2">
          <div className=" max-w-[80%] font-medium">
            <div className=" text-white text-sm line-clamp-1">{ques}</div>
          </div>
        </div>
        <div className="text-customGrey-700 flex w-[70px] items-center justify-center text-sm opacity-0 md:opacity-0 lg:opacity-100 group-hover:opacity-100 ">
          {rate}
        </div>
        <p
          className={`text-[14px text-sm lc-xl:mx-4 ${
            diff === "Easy"
              ? "text-cyan-500"
              : diff === "Med."
              ? "text-yellow-500"
              : "text-red-500"
          }`}
        >
          {diff}
        </p>
        <div className="ml-3">
          <ProgressBar />
        </div>
      </a>
      <div className="flex opacity-0 group-hover:opacity-100 justify-center items-center">
        <div className="flex items-center -ml-3">
          <div className="relative text-[14px] leading-[normal] p-[1px] before:block before:h-3.5 before:w-3.5"></div>
          <EllipsisIcon width={15} color="rgb(160,160,160)" />
        </div>
      </div>
    </div>
  );
};
