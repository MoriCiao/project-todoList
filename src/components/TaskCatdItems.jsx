export const TaskTitle = ({ task, themeOptions, UICtx }) => {
  return (
    <h3
      className={`title  transition-all duration-300 break-words max-w-100 ${
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
      className={`w-full text-end pr-4 ${themeOptions.themeFont}  ${UICtx.p_size}`}
    >
      start：
      {new Date(task.startTime)?.toLocaleDateString("zh-TW", timeOptions)}{" "}
      <span className={`${themeOptions.themeFont} px-2`}>-</span>
      end：
      {new Date(task.endTime)?.toLocaleDateString("zh-TW", timeOptions)}
    </div>
  );
};

export const TaskDescription = ({ task, themeOptions, UICtx }) => {
  return (
    <p
      className={`descript max-h-50 break-words p-4 ${themeOptions.themeFont} ${UICtx.p_size}`}
    >
      {task.taskDescript}
    </p>
  );
};
