import { ProgressBar } from "./ProgressBar";
import { EllipsisIcon, Menu } from "lucide-react";

export const Problem = ({ className = "", rate, ques, diff }) => {
  return (
    <div
      className={`flex group h-[44px] w-full bg-customGrey-300 rounded-lg  items-center space-x-3 px-4 ${className} `}
    >
      <div>
        <div className=" invisible group-hover:visible">
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
        <div className="text-customGrey-700 flex w-[70px] items-center justify-center text-sm opacity-0 sm:opacity-100 group-hover:opacity-100 lc-md:opacity-100">
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
      <div className="flex invisible group-hover:visible justify-center items-center">
        <div className="flex items-center -ml-3">
          <div className="relative text-[14px] leading-[normal] p-[1px] before:block before:h-3.5 before:w-3.5"></div>
          <EllipsisIcon width={15} color="rgb(160,160,160)" />
        </div>
      </div>
    </div>
  );
};

// fdfd

//   <div className="bg-customGrey-300 group  px-4 gap-6 text-white text-sm h-[44px] space-x-3 rounded-md items-center flex justify-around w-full ">
//       <div className="flex items-center justify-start gap-3">
//         <button className="bg-transparent invisible group-hover:visible">
//           <Menu color="gray" width={15} />
//         </button>
//         <div className="font-[500]">
//           <span className="px-[1px]">1</span>
//           <span className="pl-[0.2px] pr-[5px]">.</span>
//           Two Sum
//         </div>
//       </div>

//       <div className="flex gap-3 items-center">
//         <div className="invisible text-customGrey-700 group-hover:visible  sm:visible  ">
//           56.3%
//         </div>
//         <div className="text-cyan-600">Easy</div>
//         <ProgressBar />
//         <div>
//           <button className="bg-transparent invisible group-hover:visible ">
//             <EllipsisIcon width={15} color="gray" />
//           </button>
//         </div>
//       </div>
//     </div>
