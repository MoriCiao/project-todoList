import React, {
  SetStateAction,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { TasksContext } from "../../contexts/TasksContext";
import { Zoom } from "react-awesome-reveal";
import { TaskDate, TaskTitle } from "../AllTasks/TaskCardItems";
import { UIContext } from "../../contexts/UIContext";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export type Task = {
  taskName: string;
  taskDescript: string;
  startTime: string;
  endTime: string;
  isCheck: boolean;
};

export type ExpandState = {
  task: Task;
  isOpen: boolean;
};

export type taskProps = {
  expand: ExpandState;
  setExpand: React.Dispatch<SetStateAction<ExpandState>>;
  themeOptions: string;
};

const ExpandPage = ({ expand, setExpand, themeOptions }: taskProps) => {
  console.log(expand);
  const UICtx = useContext(UIContext);
  const tasksCtx = useContext(TasksContext);
  const expandRef = useRef<HTMLTextAreaElement | null>(null);
  const task = expand.task;
  const navigte = useNavigate();
  const handleDescript = () => {
    tasksCtx.dispatch({ type: "REVISE_DESCRIPT", payload: task });
    setExpand({
      task: {
        taskName: "",
        taskDescript: "",
        startTime: "",
        endTime: "",
        isCheck: false,
      },
      isOpen: false,
    });

    setTimeout(() => {
      navigte(0);
      tasksCtx.dispatch({ type: "LOADING_STATUS", payload: false });
    }, 1500);
  };
  useEffect(() => {
    if (expandRef.current) expandRef.current.focus();
  }, []);
  return (
    <section
      className={`expand-page fixed inset-0 z-99 flex items-start justify-center bg-black/50 backdrop-blur-sm`}
    >
      <Zoom>
        <div
          className={`m-auto mt-12 flex w-[92vw] max-w-xl flex-col gap-4 border border-white/50 bg-[--dark-bg] px-12 py-8 text-white`}
        >
          <TaskTitle task={task} UICtx={UICtx} themeOptions={themeOptions} />
          <TaskDate task={task} UICtx={UICtx} themeOptions={themeOptions} />

          <textarea
            ref={expandRef}
            value={task?.taskDescript ?? ""}
            onChange={(e) =>
              setExpand((prev) => ({
                ...prev,
                task: { ...task, taskDescript: e.target.value },
              }))
            }
            className={`flex h-50 items-start justify-start border bg-white/50 p-4 text-xl text-black`}
          />

          <motion.button
            whileHover={{
              scale: 1.15,
              backgroundColor: "rgb(255,255,255)",
              color: "rgb(0,0,0)",
            }}
            whileTap={{ scale: 0.95 }}
            className="m-auto w-20 rounded border px-4"
            onClick={handleDescript}
          >
            Save
          </motion.button>
        </div>
      </Zoom>
    </section>
  );
};
export default ExpandPage;
