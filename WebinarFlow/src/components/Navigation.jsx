import { useState } from "react";
import credit from "/src/assets/credit-card.svg";
import file from "/src/assets/file-user.svg";
import home from "/src/assets/house.svg";
import settings from "/src/assets/settings.svg";
import users from "/src/assets/users.svg";
import toggle from "/src/assets/panel-left-open.svg";
let icons = [
  {
    image: home,
    title: "Home",
  },
  {
    image: users,
    title: "Webinars",
  },
  {
    image: credit,
    title: "Billing",
  },
  {
    image: file,
    title: "User Management",
  },
  {
    image: settings,
    title: "Settings",
  },
];

export const Footer = ({ className = "" }) => {
  return (
    <div
      className={`max-w-full h-auto fixed  bottom-0   inset-x-0 bg-slate-100  flex p-5 justify-around lg:inset-y-0 lg:left-0 lg:max-w-16 lg:flex-col lg:h-full ${className}`}
    >
      {icons.map((e, idx) => (
        <div
          key={idx}
          className="flex gap-1  items-center text-[0.840rem] p-2 px-3 rounded hover: hover:bg-slate-400 "
        >
          <button className=" transition-all duration-200  p-1  ">
            <img src={e.image} />
          </button>
          <div className="hidden sm:block  ">{e.title}</div>
        </div>
      ))}
    </div>
  );
};

export const Sidebar = () => {
  const [expand, setExpand] = useState(false);

  return (
    <div
      className={`hidden lg:flex  fixed inset-y-0 left-0 h-full bg-slate-100  flex-col  p-2 gap-10 transition-all duration-500 overflow-hidden ${
        expand ? "w-64" : "w-16"
      }`}
    >
      <button
        onClick={() => setExpand((prev) => !prev)}
        className=" transition-all duration-300 flex items-center p-2 rounded gap-2 hover:bg-slate-400 min-w-full"
      >
        <img src={toggle} width={24} />
        {expand && <div className="text-xl">Menu</div>}
      </button>

      {icons.map((e, idx) => (
        <div key={idx}>
          <button className=" transition-all duration-300 flex items-center p-2 rounded gap-2 hover:bg-slate-400 min-w-full">
            <img src={e.image} />
            {expand && <div>{e.title}</div>}
          </button>
        </div>
      ))}
    </div>
  );
};
