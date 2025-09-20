export const ProgressBar = () => {
  const elements = new Array(7);
  return (
    <div className="flex gap-0.5 px-1">
      {elements.map((e, idx) => (
        <div
          key={idx}
          className="h-2 w-0.5 rouned bg-customGrey-700 opacity-20"
        ></div>
      ))}
    </div>
  );
};
