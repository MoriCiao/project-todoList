import React, { useContext } from "react";
import { motion } from "framer-motion";
import { UIContext } from "../../contexts/UIContext";

export const TasksCheckBtn = ({ task, onClick }) => {
  const UICtx = useContext(UIContext);
  return (
    <button
      className="flex h-full w-full items-center justify-center"
      onClick={onClick}
    >
      <motion.img
        src={
          task.isCheck
            ? UICtx.theme
              ? "/project-todoList/icon/check-dark-circked.svg"
              : "/project-todoList/icon/check-light-checked.svg"
            : UICtx.theme
              ? "/project-todoList/icon/circle-dark-check.svg"
              : "/project-todoList/icon/circle-light-check.svg"
        }
        alt="checkIcon"
        initial={{ scale: 1 }}
        animate={
          task.isCheck ? { scale: [1, 1.5, 1] } : { scale: [1, 1.25, 1] }
        }
        transition={{ duration: 0.4 }}
      />
    </button>
  );
};

export const TaskDelBtn = ({ onClick }) => {
  const UICtx = useContext(UIContext);
  return (
    <button
      className={`absolute top-4 right-4 flex flex-col items-center`}
      onClick={onClick}
    >
      <img
        src={
          UICtx.theme
            ? "/project-todoList/icon/trash-dark-g.svg"
            : "/project-todoList/icon/trash-g.svg"
        }
        className=""
        alt="trashBtn"
      />
    </button>
  );
};
