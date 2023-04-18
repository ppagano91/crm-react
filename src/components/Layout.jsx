import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <h3 className="text-6xl font-bold">Layout</h3>
      <Outlet />
    </div>
  );
};

export default Layout;
