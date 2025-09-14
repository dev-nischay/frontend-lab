import star from "/src/assets/leetCode-hero.png";
import {
  Play,
  Plus,
  SquarePen,
  EllipsisVertical,
  PanelRightClose,
  ChevronRight,
} from "lucide-react";
import { Button } from "./Button";
export const Card = () => {
  return (
    <div className="w-full  relative min-w-sm h-auto p-6 items-center  rounded-xl mt-6  flex flex-col  gap-2  bg-customGrey-300">
      <button className=" absolute left-4 top-4 bg-customGrey-550 px-[0.35rem]  border border-customGrey-650 rounded-full hover:bg-blue-500 ">
        <PanelRightClose color="white" width={13} />
      </button>
      <img src={star} width={80} alt="profile" />
      <div className=" text-white  gap-3 break-all tracking-wider  text-center text-[32px] font-medium leading-[150%]">
        Favorite
      </div>
      <div className="flex flex-col gap-4 items-center  ">
        <div className=" text-white lc-dsw-lg:justify-start items-center flex w-full justify-center gap-1 overflow-x-hidden text-sm">
          <div className="hover:text-blue-700">nischay_codes</div>
          <div className="text-[0.50rem]">•</div>
          <div>7 questions</div>
        </div>
        <div className="text-white flex gap-2   ">
          <button className="bg-white items-center rounded-full flex gap-[0.6rem] text-black  font-medium text-sm px-4 py-[0.38rem] mr-1">
            <Play fill="black" width={14} />
            Practice
          </button>
          <Button>
            <Plus width={15} />
          </Button>
          <Button>
            <SquarePen width={15} />
          </Button>
          <Button>
            <EllipsisVertical width={15} />
          </Button>
        </div>

        <button className=" min-w-4 relative -left-[17vw] rounded-lg text-white  bg-customGrey-550 justify-center text-sm transition-colors   h-9 px-4 py-2  flex items-center gap-1 f">
          Progress:<span className="font-[600] text-[1rem]">0</span>Solved
          <ChevronRight width={14} className="ml-1" />
        </button>
      </div>
    </div>
  );
};
