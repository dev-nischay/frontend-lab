import plus from "/src/assets/plus.svg";
import calenderClock from "/src/assets/calendar-clock.svg";
import cassette from "/src/assets/cassette-tape.svg";
export const Toolbox = () => {
  return (
    <div className="bg-white justify-between flex flex-wrap min-h-40 rounded-lg p-2 w-[50%] my-6 mx-auto items-center sm:max-w-[33%] sm:p-3">
      <Events icon={calenderClock} />
      <Events icon={plus} />
      <Events icon={cassette} />
    </div>
  );
};

const Events = ({ icon }) => {
  return (
    <div>
      <button className="transition-all duration-200 text-center shadow-2xl hover:bg-cyan-500  px-2 py-2 mx-6 rounded-lg bg-cyan-400">
        <img src={icon} width={25} />
      </button>
    </div>
  );
};
