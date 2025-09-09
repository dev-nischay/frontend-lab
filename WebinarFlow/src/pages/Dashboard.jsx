import { useState } from "react";
import Sidebar from "../components/Sidebar";

export default () => {
  return (
    <>
      <div className={`h-screen bg-white dark:bg-neutral-700 `}>
        <button
          onClick={() => setDark((prev) => !prev)}
          className="py-2 px-4 bg-white text-black dark:bg-black dark:text-white"
        >
          switch
        </button>
      </div>
    </>
  );
};
