export default ({ children, className = "", ...props }) => {
  return (
    <button
      className={` bg-slate-400 py-2 text-xs px-24 rounded text-center ${className} `}
      {...props}
    >
      {children}
    </button>
  );
};
