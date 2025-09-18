import star from "/src/assets/leetCode-hero.png";
import { useNavigate } from "react-router-dom";
import { toggle, useSidebar } from "../store/ui";
import { Modal } from "./Modal";
import {
  Play,
  Plus,
  SquarePen,
  EllipsisVertical,
  PanelRightClose,
  ChevronRight,
} from "lucide-react";

import { Button } from "./Button";
import { useState } from "react";

export const Card = () => {
  const show = useSidebar((state) => state.show);
  const [modal, setModal] = useState(false); // add this to zustand's ui store

  return (
    <div className=" transition-all duration-200 w-full  relative  h-full  p-6 items-center  rounded-xl mt-6  flex flex-col  gap-2  bg-customGrey-300 lg:max-w-[23rem] lg:items-start lg:h-[32rem] lg:mt-16 lg:p-4 xl:mt-6  ">
      <button
        onClick={toggle}
        className={` transition-all duration-200 left-4 top-4 absolute bg-customGrey-550 px-[0.35rem]  border border-customGrey-650 rounded-full hover:bg-blue-500 lg:-left-0 lg:-top-10 xl:-top-0 xl:-left-10 halfXl:opacity-0 `}
      >
        <PanelRightClose color="white" width={13} />
      </button>
      <div>
        <img src={star} width={80} alt="profile" />
      </div>
      <div className=" text-white  gap-3 break-all tracking-wider  text-[32px] font-medium leading-[150%]">
        Favorite
      </div>
      <div className="flex flex-col gap-4   ">
        <div className=" text-white lg:justify-start  flex w-full justify-center gap-1 overflow-x-hidden text-sm">
          <div className="hover:text-blue-700">nischay_mehn</div>
          <div className="text-[0.50rem]">•</div>
          <div>7 questions</div>
        </div>
        <div className="text-white flex gap-2    ">
          <button className=" transition-all bg-white hover:bg-neutral-200 items-center rounded-full flex gap-[0.6rem] text-black  font-medium text-sm px-4 py-[0.38rem] mr-1">
            <Play fill="black" width={14} />
            Practice
          </button>
          <Button text={"Add"}>
            <Plus width={15} />
          </Button>
          <Button text={"Edit"}>
            <SquarePen width={15} />
          </Button>
          <Button text={"More"}>
            <EllipsisVertical width={15} />
          </Button>
        </div>
        <button
          onClick={() => setModal((prev) => !prev)}
          className=" lg:hidden  min-w-4 relative  rounded-lg text-white  bg-customGrey-550 hover:bg-customGrey-500 justify-center text-sm transition-colors   h-9 px-4 py-2  flex items-center gap-1 f"
        >
          Progress:<span className="font-[600] text-[1rem]">0</span>Solved
          <ChevronRight width={14} className="ml-1" />
        </button>
      </div>
      <div className="bg-customGrey-550 lg:block my-1 hidden h-px w-full mt-2" />
      <Modal setModal={setModal} modal={modal} />
    </div>
  );
};
