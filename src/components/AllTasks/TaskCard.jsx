import { useContext } from "react";
import { UIContext } from "../../contexts/UIContext";
import { TasksContext } from "../../contexts/TasksContext";
import { TaskDelBtn, TasksCheckBtn } from "./TasksBtn";
import { TaskDate, TaskDescription, TaskTitle } from "./TaskCardItems";
import ExpandBtn from "./ExpandBtn";

const TaskCard = ({ task, setExpand }) => {
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
      className={`task relative flex max-h-150 min-h-40 w-auto overflow-y-auto rounded-md transition duration-500 2xl:max-w-[40rem] ${
        task.isCheck ? "brightness-[0.5]" : null
      } ${themeOptions.themeBg} ${themeOptions.themeFont}`}
    >
      <div className="check-Icon mr-4 w-[20%] rounded-l-md border-r border-white/50 py-4">
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

      <div className="task-container flex max-h-80 w-[80%] flex-col gap-4 py-4 pr-2">
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
        <div
          className={`descript-area flex w-full items-center rounded-md px-4 ${themeOptions.themeBg}`}
        >
          {task.taskDescript && (
            <TaskDescription
              task={task}
              themeOptions={themeOptions}
              UICtx={UICtx}
            />
          )}
          <ExpandBtn task={task} setExpand={setExpand} />
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
