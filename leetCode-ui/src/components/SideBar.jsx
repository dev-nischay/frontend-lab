import { useSidebar } from "../store/ui";
import { toggle } from "../store/ui";
import { LibraryBig, GraduationCap, Library } from "lucide-react";
export const Sidebar = () => {
  const show = useSidebar((state) => state.show);
  return (
    <>
      <div onClick={() => toggle()}>
        <div>
          <div
            className={` absolute  backdrop-brightness-50 z-10 border-transparent border-r-customGrey-650 backdrop-blur-sm inset-y-0 left-0 ${
              show ? "w-full" : "w-0"
            }`}
          ></div>
          <div
            className={` absolute transition-transform  duration-300  w-60 border-r-customGrey-500 border-r-[1px] z-20 inset-y-0 left-0 bg-customGrey-200 ${
              show ? "translate-x-0" : "-translate-x-full"
            } `}
          >
            <div className="h-[50px]"></div>
            <div className="flex flex-col gap-1 p-4  h-auto text-lg ">
              <Features Icon={LibraryBig} title={"Library"} />
              <Features Icon={GraduationCap} title={"Study Plan"} />
              <div className="bg-customGrey-450 my-1 h-[1px] w-full mt-5"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const Features = ({ Icon, title }) => {
  return (
    <div className="flex gap-2 items-center rounded pl-2 py-2 hover:bg-customGrey-550">
      <Icon width={20} color="white" />
      <div className="text-white  font-medium">{title}</div>
    </div>
  );
};
