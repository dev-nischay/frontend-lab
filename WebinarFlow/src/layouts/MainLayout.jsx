import { Outlet } from "react-router-dom";

export default () => {
  return (
    <div className="h-screen bg-neutral-700">
      <Outlet />
    </div>
  );
};
