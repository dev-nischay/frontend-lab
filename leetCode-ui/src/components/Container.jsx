export const Container = ({ children }) => {
  return (
    <div className="min-h-screen bg-customGrey-200">
      <div className="flex flex-col px-4 ">{children}</div>
    </div>
  );
};
