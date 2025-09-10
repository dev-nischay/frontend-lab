import { useState } from "react";

import Button from "../components/Button";
import credit from "/src/assets/credit-card.svg";
import file from "/src/assets/file-user.svg";
import house from "/src/assets/house.svg";
import settings from "/src/assets/settings.svg";
import users from "/src/assets/users.svg";

export default () => {
  let icons = [credit, file, house, settings, users];
  return (
    <>
      <div className="h-screen  bg-gradient-to-tr from-slate-800 via-blue-950 to-slate-500">
        <div className="max-w-full h-auto fixed  bottom-0 inset-x-0 bg-slate-200 flex p-5 justify-between ">
          {icons.map((e) => (
            <button className=" transition-all gap-10 p-2 rounded hover:bg-slate-400 ">
              <img src={e} />
            </button>
          ))}
        </div>
      </div>
    </>
  );
};
