import { Sidebar } from "./SideBar";

export const Container = ({ children }) => {
  return (
    <div className=" min-h-screen bg-customGrey-200">
      <div className="  relative flex flex-col px-4 ">{children}</div>
    </div>
  );
};
