import calender from "/src/assets/calendar-days.svg";
import down from "/src/assets/chevron-down.svg";
import left from "/src/assets/move-left.svg";
import right from "/src/assets/move-right.svg";
import videoRed from "/src/assets/video-camera.png";
import videoBlue from "/src/assets/video.png";

export const Schedule = () => {
  const buttons = [down, left, right];
  return (
    <div className=" transition-all duration-300 min-h-72 w-[90%] mt-2   rounded-lg p-3 shadow-2xl bg-slate-200  flex-1  lg:max-w-xl sm:w-[38rem] lg:p-5 ">
      <div className="w-full flex p-2  gap-1 items-center bg-gray-300 mb-5  ">
        <img src={calender} alt="calender-icon" width={25} />
        <div>Monday, 14 October 2024</div>
        {buttons.map((e, idx) => (
          <button key={idx}>
            <img src={e} />
          </button>
        ))}
      </div>
      <WebinarSlots state={"Live"} />
      <WebinarSlots state={"Upcoming"} />
      <WebinarSlots state={"Upcoming"} />
    </div>
  );
};

const WebinarSlots = ({ state }) => {
  return (
    <div className=" duration-300 flex border-black p-1  relative my-5 ">
      <div className="flex flex-col gap-2 mr-3">
        <div>11:30 AM</div>
        <div className="text-xs text-gray-400">11:30 AM</div>
      </div>
      <div className="bg-cyan-400 absolute left-20 h-full w-[1px]"></div>
      <div className="flex flex-col gap-2 ml-3 relative">
        <div className="text-xs flex gap-2 text-gray-400">
          {state}
          <img
            src={state === "Live" ? videoRed : videoBlue}
            alt=""
            width={15}
          />
        </div>
        <div className="text-lg ">UX Webinar</div>
      </div>
      <div className="absolute inset-x-0 bg-gray-400 -bottom-[0.85rem] h-[1px] "></div>
    </div>
  );
};
