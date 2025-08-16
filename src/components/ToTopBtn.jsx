import React, { useContext } from "react";
import { UIContext } from "./UIContext";
import { motion } from "framer-motion";
const ToTopBtn = () => {
  const UICtx = useContext(UIContext);

  return (
    <button
      className="rounded-full lg:hidden sm:block w-[40px] h-[40px]"
      onClick={() => UICtx.handleScroll(UICtx.headerRef)}
    >
      <motion.img
        className="rounded-full w-[40px] h-[40px]"
        initial={{ scale: 1, boxShadow: "0px 0px 8px white" }}
        animate={{
          scale: [1, 1.1, 1],
          boxShadow: "0px 0px 10px rgba(255, 204, 102,.5)",
        }}
        transition={{ duration: 2, repeat: Infinity }}
        src={
          UICtx.theme
            ? "/project-todoList/icon/arrow-up-circle-1.svg"
            : "/project-todoList/icon/arrow-up-circle.svg"
        }
        alt=""
      />
    </button>
  );
};

export default ToTopBtn;
