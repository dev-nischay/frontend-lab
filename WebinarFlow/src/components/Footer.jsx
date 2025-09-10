import { useState } from "react";
import credit from "/src/assets/credit-card.svg";
import file from "/src/assets/file-user.svg";
import house from "/src/assets/house.svg";
import settings from "/src/assets/settings.svg";
import users from "/src/assets/users.svg";
import { Schedule } from "../components/Schedule";
import { Toolbox } from "../components/Toolbox";

export const Footer = () => {
  let icons = [credit, file, house, settings, users];
  return (
    <div className="max-w-full h-auto fixed  bottom-0 inset-x-0 bg-slate-200 flex p-5 justify-between ">
      {icons.map((e, idx) => (
        <button
          key={idx}
          className=" transition-all duration-200 gap-10 p-2 rounded hover:bg-slate-400 "
        >
          <img src={e} />
        </button>
      ))}
    </div>
  );
};
