export default ({ children, className = "" }) => {
  return (
    <div className="bg-[#012b5b] text-white flex justify-center items-center h-screen">
      <div className={` w-96 h-1/2 ${className}`}>{children}</div>
    </div>
  );
};
