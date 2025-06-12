import React from "react";
import { Outlet } from "react-router-dom";

const MainOutlet = () => {
  return (
    <main className="MainOutlet grid xxl:grid-cols-3 md:grid-cols-1 h-[95vh]">
      <Outlet />
    </main>
  );
};

export default MainOutlet;
