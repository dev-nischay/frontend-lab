import plus from "/src/assets/plus.svg";
import calenderClock from "/src/assets/calendar-clock.svg";
import cassette from "/src/assets/cassette-tape.svg";
export const Toolbox = () => {
  return (
    <div className=" transition-all duration-300 bg-white justify-between flex flex-wrap min-h-40 rounded-lg p-1 w-[50%] my-3  items-center lg:max-w-[20rem] sm:max-w-[22rem] md:max-w-[20rem] lg:pt-5 lg:mt-28 lg:min-h-56 ">
      <Events icon={calenderClock} />
      <Events icon={plus} />
      <Events icon={cassette} />
    </div>
  );
};

const Events = ({ icon }) => {
  return (
    <div>
      <button className="transition-all duration-300 text-center shadow-2xl hover:bg-cyan-500  px-2 py-2 mx-6 rounded-lg bg-cyan-400 lg:p-4 lg:mx-10 sm:p-3 sm:mx-10 ">
        <img src={icon} width={25} />
      </button>
    </div>
  );
};
