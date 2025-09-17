export const TaskTitle = ({ task, themeOptions, UICtx }) => {
  return (
    <h3
      className={`title max-w-100 break-words transition-all duration-300 ${
        UICtx.h5_size
      } ${themeOptions.themeFont} ${task.isCheck ? "line-through" : ""}`}
    >
      {task.taskName}
    </h3>
  );
};

export const TaskDate = ({ task, themeOptions, UICtx }) => {
  const timeOptions = {
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  };

  return (
    <div
      className={`w-full pr-4 text-end ${themeOptions.themeFont} ${UICtx.p_size}`}
    >
      {new Date(task.startTime)?.toLocaleDateString("zh-TW", timeOptions)}
      <span className={`${themeOptions.themeFont} px-2`}>-</span>

      {new Date(task.endTime)?.toLocaleDateString("zh-TW", timeOptions)}
    </div>
  );
};

export const TaskDescription = ({ task, themeOptions, UICtx }) => {
  return (
    <textarea
      disabled
      readOnly
      defaultValue={
        task.taskDescript.length === 0 ? "無內容" : task.taskDescript
      }
      className={`descript my-2 my-auto h-10 w-full resize-none overflow-hidden py-2 break-words ${themeOptions.themeFont} ${UICtx.p_size} `}
    ></textarea>
  );
};
