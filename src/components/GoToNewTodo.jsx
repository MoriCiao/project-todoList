import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { todoContext } from "./todoCotext";
import { animate, motion } from "framer-motion";
const GoToNewTodo = () => {
  const { theme, handleScroll } = useContext(todoContext);
  const toNewTodo = useNavigate();
  return (
    <button
      className="md:hidden w-[40px] h-[40px]"
      onClick={() => {
        toNewTodo("/newtodo"); // 先導入 newTodo 頁面
        handleScroll(); // 在觸發畫面 Y 軸移動到頁面
      }}
    >
      <motion.img
        className="rounded-full"
        initial={{ scale: 1 }}
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 2, repeat: Infinity }}
        src={
          theme
            ? "/project-todoList/icon/plus-circle-dark.svg"
            : "/project-todoList/icon/plus-circle-light.svg"
        }
        alt=""
      />
    </button>
  );
};

export default GoToNewTodo;
