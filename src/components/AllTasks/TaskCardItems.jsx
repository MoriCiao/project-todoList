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
      className={`descript resize-none w-full h-10 my-auto break-words overflow-hidden my-2 py-2 ${themeOptions.themeFont} ${UICtx.p_size}
      `}
    ></textarea>
  );
};
