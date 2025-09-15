import logo from "/src/assets/leetcode.svg";
import { TextAlignJustify } from "lucide-react";
export const Navbar = () => {
  return (
    <div className="bg-customGrey-400 fixed  h-[50px] inset-x-0 z-30 border-b-[1px] border-customGrey-650 flex justify-between items-center p-3">
      <img src={logo} width={22} />
      <button>
        <TextAlignJustify color="gray" />
      </button>
    </div>
  );
};
// border border-gray-500
