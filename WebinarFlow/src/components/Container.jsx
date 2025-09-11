export default ({ children, className = "" }) => {
  return (
    <div className="bg-gradient-to-tr from-slate-800 via-blue-950 to-slate-500  text-white flex justify-center items-center h-screen">
      <div className={` w-96 h-1/2  ${className}`}>{children}</div>
    </div>
  );
};
