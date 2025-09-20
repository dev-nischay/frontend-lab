import { RotateCcw, X } from "lucide-react";

export const Modal = ({ modal, setModal }) => {
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
      {/* Modal Overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-transparent bg-opacity-50 backdrop-brightness-75 flex justify-center items-center  backdrop-blur-sm  transition-opacity  duration-300 z-40 ${
          modal
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setModal(false)}
      >
        {/* Modal Content */}
        <div
          className={`fixed bg-customGrey-400 border border-customGrey-650 rounded-xl p-3 max-w-[21rem] w-full z-50 max-h-[80vh] overflow-y-auto transition-transform   ${
            modal
              ? "  -translate-y-10 pointer-events-auto "
              : "  translate-y-0 pointer-events-none"
          }  lg:z-0  lg:block lg:overflow-hidden lg:translate-y-0  lg:border-none lg:h-full lg:bg-transparent `}
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking modal content
        >
          <div className="flex  justify-between items-center mb-4 lg:mb-2">
            <div className="flex gap-3">
              <span className=" text-white">Progress</span>
              <RotateCcw className="" width={16} color="gray" />
            </div>
            <button onClick={() => setModal(false)}>
              <X width={19} color="white" />
            </button>
          </div>

          <div className="flex gap-2 ">
            <div className="bg-customGrey-500  flex justify-center text-white rounded-md items-center w-full text-lg">
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
