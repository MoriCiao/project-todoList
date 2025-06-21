import React, { useContext, useEffect } from "react";

import { Outlet } from "react-router-dom";

import { todoContext } from "../components/todoCotext";

import { AnimatePresence, motion } from "framer-motion";

const MainOutlet = () => {
  const { textSize, sizeClass, theme, motion_theme } = useContext(todoContext);
  //顯示區域 ， 盪第一次載入時，自動抓取本機資料

  return (
    <AnimatePresence mode="wait">
      <motion.main
        {...motion_theme}
        className={`MainOutlet relative grid xxl:grid-cols-3 md:grid-cols-1 h-[100vh] ${
          theme ? "bg-[--dark-bg]" : "bg-[--light-bg]"
        }`}
      >
        <div className={`${sizeClass[textSize]} h-[95vh]`}>
          <Outlet />
        </div>
      </motion.main>
    </AnimatePresence>
  );
};

export default MainOutlet;
