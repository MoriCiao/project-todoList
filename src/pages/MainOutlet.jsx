import React, { useContext } from "react";

import { Outlet } from "react-router-dom";

import { todoContext } from "../components/todoCotext";
const MainOutlet = () => {
  const { textSize, sizeClass, theme, handleScrollTop } =
    useContext(todoContext);

  return (
    <main
      className={`MainOutlet relative grid xxl:grid-cols-3 md:grid-cols-1 h-[100vh] ${
        theme ? "bg-[--dark-bg]" : ""
      }`}
    >
      <div className={`${sizeClass[textSize]} h-[95vh]`}>
        <Outlet />
      </div>
    </main>
  );
};

export default MainOutlet;
