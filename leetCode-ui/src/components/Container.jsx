import { Sidebar } from "./SideBar";
export const Container = ({ children }) => {
  return (
    <div className="min-h-screen bg-customGrey-200">
      <div className="  min-h-screen  flex flex-col px-4 pt-[3.1rem] lg:flex-row lg:justify-center  lg:gap-5  ">
        {children}
      </div>
    </div>
  );
};
