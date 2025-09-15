import { RotateCcw } from "lucide-react";
import { X } from "lucide-react";

export default () => {
  const arr = [
    {
      diff: "Easy",
      solved: "0/1",
    },
    {
      diff: "Med.",
      solved: "0/5",
    },
    {
      diff: "Hard",
      solved: "0/1",
    },
  ];
  return (
    <div className="fixed flex inset-x-6 inset-y-0 top-12 items-center">
      <div className="bg-customGrey-400 gap-4 flex border border-customGrey-700 justify-evenly flex-col h-auto max-h-[80vh] p-4 overflow-y-auto max-w-xl w-full rounded-xl ">
        <div className="flex justify-between items-center ">
          <div className="flex gap-2 items-center ">
            <div className="text-white font-[500] text-[1.100rem] ">
              <div className="mx-auto text-lg text-white">Progress</div>
            </div>
            <div>
              <RotateCcw width={16} color="gray"></RotateCcw>
            </div>
          </div>
          <div>
            <X width={20} color="gray" />
          </div>
        </div>
        <div className="flex gap-2 ">
          <div className="bg-customGrey-500 rounded-md w-full h-auto text-xl  ">
            Solved
          </div>
          <div className="flex flex-col gap-2">
            {arr.map((e) => (
              <LocalCard diff={e.diff} solved={e.solved} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const LocalCard = ({ diff, solved }) => {
  return (
    <div className="bg-customGrey-500 gap-1  w-[88px] p-1 rounded-md  h-14 flex flex-col items-center justify-center text-xs">
      <div
        className={`${
          diff === "Easy"
            ? "text-cyan-400"
            : diff === "Hard"
            ? "text-red-500"
            : "text-yellow-400"
        }`}
      >
        {diff}
      </div>
      <div className="text-white text-xs">{solved}</div>
    </div>
  );
};
