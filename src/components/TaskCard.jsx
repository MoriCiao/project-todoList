import React, { useContext } from "react";
import { UIContext } from "../contexts/UIContext";
import { TasksContext } from "../contexts/TasksContext";
import { TaskDelBtn, TasksCheckBtn } from "./TasksBtn";
import { TaskDate, TaskDescription, TaskTitle } from "./TaskCatdItems";

const TaskCard = ({ task }) => {
  const UICtx = useContext(UIContext);
  const tasksCtx = useContext(TasksContext);
  const themeOptions = {
    themeFont: `${
      UICtx.theme ? "text-[--dark-text-g]" : "text-[--light-text-g]"
    }`,
    themeBg: `${
      UICtx.theme ? "bg-[--dark-component-g]" : "bg-[--light-component-g]"
    }`,
  };

  return (
    <div
      className={`task relative rounded-md w-auto 2xl:max-w-[40rem] max-h-150 min-h-40 overflow-y-auto flex transition duration-500 ${
        task.isCheck ? "brightness-[0.5]" : null
      } ${themeOptions.themeBg} ${themeOptions.themeFont}`}
    >
      <div className="check-Icon rounded-l-md w-[20%] py-4 border-r border-white/50 mr-4">
        <TasksCheckBtn
          task={task}
          onClick={() =>
            tasksCtx.dispatch({
              type: "IS_CHECK",
              payload: task.taskName,
            })
          }
        />
      </div>

      <div className="task-container w-[80%] py-4 pr-2 flex flex-col gap-4 max-h-80">
        <div className="flex flex-col items-start justify-start">
          {/* task Title */}
          <TaskTitle task={task} themeOptions={themeOptions} UICtx={UICtx} />
          {/* Time */}
          <TaskDate task={task} themeOptions={themeOptions} UICtx={UICtx} />
          {/* Trash box */}
          <TaskDelBtn
            onClick={() => {
              tasksCtx.dispatch({
                type: "DELETE_TASK",
                payload: task.taskName,
              });
            }}
          />
        </div>
        {/* Task Des */}
        <div className={`descript-area rounded-md  ${themeOptions.themeBg}`}>
          {task.taskDescript && (
            <TaskDescription
              task={task}
              themeOptions={themeOptions}
              UICtx={UICtx}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
