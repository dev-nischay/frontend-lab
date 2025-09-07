export default ({ reference, isDone }) => {
  return (
    <input
      type="text"
      ref={reference}
      onChange={(e) => {
        isDone();
      }}
      className="w-8 h-10 border text-center border-gray-500 bg-[#18406b] m-3 rounded-lg"
    ></input>
  );
};
