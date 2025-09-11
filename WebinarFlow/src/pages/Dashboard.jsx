import { useState } from "react";
import { Footer, Sidebar } from "../components/Navigation";
import { Schedule } from "../components/Schedule";
import { Header } from "../components/Header";
import { Toolbox } from "../components/Toolbox";
import { Card } from "../components/Card";

export default () => {
  return (
    <>
      <div className="w-full min-h-screen bg-gradient-to-tr from-slate-800 via-blue-950 to-slate-500 pb-5">
        <Header />
        <div className=" flex-col h-full  lg:p-10 lg:gap-8 lg:flex-row flex justify-evenly gap-1 items-center md:gap-6 ">
          {/* {see lg:p-10 when you are free} */}
          <Card className="hidden" />
          <Schedule />
          <Toolbox />
        </div>
        <Sidebar />
        <Footer className="lg:hidden" />
      </div>
    </>
  );
};
