import React, { useContext } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { UIContext } from "../contexts/UIContext";
import { AnimatePresence, motion } from "framer-motion";
import GoToHomePage from "../components/GoBackBtn";

const MainOutlet = () => {
  const UICtx = useContext(UIContext);
  const { pathname } = useLocation();
  //顯示區域 ， 盪第一次載入時，自動抓取本機資料
  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={UICtx.theme ? "dark" : "light"}
        {...UICtx.motion_theme}
        className={`MainOutlet relative grid xxl:grid-cols-3 w-full h-[100vh] ${
          UICtx.theme ? "bg-[--dark-bg]" : "bg-[--light-bg]"
        }`}
      >
        <div className={`h-full w-full overflow-y-auto`}>
          <Outlet />
        </div>
        {pathname !== "/" ? <GoToHomePage /> : null}
      </motion.main>
    </AnimatePresence>
  );
};

export default MainOutlet;
