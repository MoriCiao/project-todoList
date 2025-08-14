import React, { useContext, useEffect } from "react";

import { Outlet } from "react-router-dom";

import { todoContext } from "../components/todoCotext";

import { AnimatePresence, motion } from "framer-motion";

const MainOutlet = () => {
  const { theme, motion_theme, pathname } = useContext(todoContext);
  //顯示區域 ， 盪第一次載入時，自動抓取本機資料
  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={theme ? "dark" : "light"}
        {...motion_theme}
        className={`MainOutlet relative grid xxl:grid-cols-3 w-full h-[100vh] ${
          theme ? "bg-[--dark-bg]" : "bg-[--light-bg]"
        }`}
      >
        <div className={`h-full w-full overflow-y-auto`}>
          <Outlet />
        </div>
      </motion.main>
    </AnimatePresence>
  );
};

export default MainOutlet;
