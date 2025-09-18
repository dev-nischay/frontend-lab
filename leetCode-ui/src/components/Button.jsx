export const Button = ({ className = "", children, text, ...props }) => {
  return (
    <button
      {...props}
      className={`relative group bg-customGrey-550 inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sd-ring disabled:pointer-events-none disabled:opacity-50   hover:bg-customGrey-500/80 p-0 rounded-full h-9 w-9  ${className} `}
    >
      {children}
      <div className="absolute left-1/2   font-[200]  -top-8 transform -translate-x-1/2 bg-customGrey-500 text-white text-[12px] p-1 px-2 border    border-customGrey-650 rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
        {text}
      </div>
    </button>
  );
};

// try to solve this problem of text going in text line
