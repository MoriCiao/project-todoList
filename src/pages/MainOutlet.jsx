import React, { useContext } from "react";

import { Outlet } from "react-router-dom";

import { todoContext } from "../components/todoCotext";
const MainOutlet = () => {
  const { textSize, sizeClass } = useContext(todoContext);

  return (
    <main
      className={`${sizeClass[textSize]} MainOutlet grid xxl:grid-cols-3 md:grid-cols-1 h-[95vh]`}
    >
      <Outlet />
    </main>
  );
};

export default MainOutlet;
