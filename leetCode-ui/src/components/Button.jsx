export const Button = ({ className = "", props, children }) => {
  return (
    <button
      {...props}
      className={`relative bg-customGrey-550 inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sd-ring disabled:pointer-events-none disabled:opacity-50  text-sd-secondary-foreground hover:bg-sd-secondary/80 p-0 rounded-full h-9 w-9 ${className} `}
    >
      {children}
    </button>
  );
};
