import { RotateCcw } from "lucide-react";
import { X } from "lucide-react";
import { useState } from "react";

export default () => {
  const [modal, setModal] = useState(false);

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
    <>
      <button
        onClick={() => setModal((prev) => !prev)}
        className="bg-neutral-700 w-10 h-10 text-white"
      >
        test
      </button>

      {/* Modal Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 backdrop-brightness-75 flex justify-center items-center transition-opacity  duration-300 z-20 ${
          modal
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setModal(false)}
      >
        {/* Modal Content */}
        <div
          className={`relative bg-customGrey-400 rounded-xl p-4 max-w-lg w-full max-h-[80vh] overflow-y-auto transition-transform  ${
            modal ? "  -translate-y-10 " : "  translate-y-0"
          }`}
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking modal content
        >
          <div className="flex justify-between items-center mb-4">
            <div className="flex gap-2 items-center text-white font-medium text-lg">
              <span>Progress</span>
              <RotateCcw width={16} color="gray" />
            </div>
            <button onClick={() => setModal(false)}>
              <X width={20} color="gray" />
            </button>
          </div>

          <div className="flex gap-2">
            <div className="bg-customGrey-500 flex justify-center text-white rounded-md items-center w-full text-lg">
              <div className="text-center">
                <span className="text-4xl">0</span>/7
                <div>Solved</div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              {arr.map((e, idx) => (
                <LocalCard key={idx} diff={e.diff} solved={e.solved} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
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
