export default ({ children, className = "", ...props }) => {
  return (
    <button
      className={` transition-all bg-slate-400 py-2 text-xs px-24 rounded text-center hover:bg-slate-900 ${className} `}
      {...props}
    >
      {children}
    </button>
  );
};
