import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TasksContext } from "../contexts/TasksContext";
import { UIContext } from "../contexts/UIContext";
import { motion } from "framer-motion";
const GoToNewTodoIcon = () => {
  const UICtx = useContext(UIContext);
  const tasksCtx = useContext(TasksContext);
  const toNewTodo = useNavigate();
  return (
    <button
      className="h-[40px] w-[40px] lg:hidden"
      onClick={() => {
        toNewTodo("/newtodo"); // 先導入 newTodo 頁面
        tasksCtx.handleScroll; // 在觸發畫面 Y 軸移動到頁面
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
          UICtx.theme
            ? "/project-todoList/icon/plus-circle-dark.svg"
            : "/project-todoList/icon/plus-circle-light.svg"
        }
        alt=""
      />
    </button>
  );
};

export default GoToNewTodoIcon;
