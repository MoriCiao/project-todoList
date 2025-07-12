import React, { useContext } from "react";
import { todoContext } from "./todoCotext";
import { animate, motion } from "framer-motion";
const ToTopBtn = () => {
  const { theme } = useContext(todoContext);

  const handleScrollTop = () => {
    console.log("Click!");
    window.scrollTo({
      // 要回到header 最上方的 Y 座標
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className="rounded-full md:hidden sm:block w-[40px] h-[40px]"
      onClick={handleScrollTop}
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
          theme
            ? "/project-todoList/icon/arrow-up-circle-1.svg"
            : "/project-todoList/icon/arrow-up-circle.svg"
        }
        alt=""
      />
    </button>
  );
};

export default ToTopBtn;
