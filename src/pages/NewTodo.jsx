import React, { useContext, useRef } from "react";
import GoToHomePage from "../components/GoBackBtn";
import { todoContext } from "../components/todoCotext";
const NewtodoLabel = ({ htmlFor, name, className }) => {
  return (
    <label htmlFor={htmlFor} className={className}>
      {name}
    </label>
  );
};

const NewtodoInput = ({
  type,
  name,
  id,
  placeholder,
  className,
  onChange,
  value,
}) => {
  return (
    <input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      className={className}
      onChange={onChange}
      value={value}
    />
  );
};

const NewtodoTextArea = ({
  maxlength,
  rows,
  placeholder,
  className,
  onChange,
  value,
}) => {
  return (
    <textarea
      maxLength={maxlength}
      rows={rows}
      placeholder={placeholder}
      className={className}
      onChange={onChange}
      value={value}
    ></textarea>
  );
};

const lableStyle =
  "p-4 font-[Istok Web] text-center text-[1.5rem] text-[--light-text-y] mt-4";

const NewTodo = () => {
  const {
    allTasks,
    setAllTasks,
    taskName,
    setTaskName,
    startTime,
    setStartTime,
    endTime,
    setEndTime,
    taskDescript,
    setTaskDescript,
  } = useContext(todoContext);

  // console.log(taskName);
  // console.log(startTime);
  // console.log(endTime);
  // console.log(taskDescript);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleInputTask = () => {
    console.log("被點擊了!!");
    if (taskName === "" || startTime === "" || endTime === "") {
      alert("請輸入任務名稱及選擇開始與結束的日期!");
      return;
    }
    if (startTime > endTime) {
      alert("開始日期不可大於結束日期");
      return;
    }
    const newTask = {
      taskName: taskName,
      startTime: startTime,
      endTime: endTime,
      taskDescript: taskDescript,
    };
    const updateTasks = [...allTasks, newTask];
    setAllTasks(updateTasks);
    console.log(updateTasks);

    // 資料送出後，須把每個參數重新設定

    setTaskName("");
    setStartTime("");
    setEndTime("");
    setTaskDescript("");
  };

  return (
    <section
      className={`newtodo AllTasks col-start-1 col-span-3 items-center p-12 relative`}
    >
      <GoToHomePage arrowImg="/icon/chevron-left-y.svg" />

      <img
        id="newtodo"
        src="/title/New Todo.svg"
        alt="New Todo.svg"
        className="mx-auto"
      />

      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center w-[80%] max-w-[30rem] mx-auto"
      >
        {/* Task Name */}
        <NewtodoLabel
          htmlFor="task-name"
          className={lableStyle}
          name="Task Name"
        />
        <NewtodoInput
          type="text"
          name="mission"
          id="mission"
          placeholder="Input Task..."
          className="border rounded indent-4 w-[20rem]"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />

        {/* Deadline */}
        <NewtodoLabel
          htmlFor="deadline"
          className={lableStyle}
          name="Deadline"
        />
        <div className="flex flex-col gap-4 items-center w-[20rem]">
          <section className="grid grid-cols-4 items-center">
            <NewtodoLabel
              htmlFor="start"
              className="text-start text-[1.2rem] text-[--light-text-y] col-span-1 col-start-1"
              name="Start"
            />
            <NewtodoInput
              type="date"
              name="start"
              id="start"
              className="w-[15rem] h-[2rem] border rounded p-2 col-span-4 col-start-2"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
            />
          </section>
          <section className="grid grid-cols-4 items-center">
            <NewtodoLabel
              htmlFor="end"
              className="text-start text-[1.2rem] text-[--light-text-y] col-span-1 col-start-1"
              name="End"
            />
            <NewtodoInput
              type="date"
              name="End"
              id="End"
              className="w-[15rem] h-[2rem] border rounded p-2 col-span-4 col-start-2"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
            />
          </section>
        </div>
        {/* Descript */}
        <NewtodoLabel
          htmlFor="descript"
          className={lableStyle}
          name="Descript"
        />
        <NewtodoTextArea
          maxlength="200"
          rows="4"
          placeholder="Describe the task"
          className="border rounded resize-none h-40 w-[20rem] booder indent-2"
          value={taskDescript}
          onChange={(e) => setTaskDescript(e.target.value)}
        />
        <button
          type="submit"
          onClick={() => {
            handleInputTask();
          }}
          className="mt-2 w-[10rem] h-[2.5rem] rounded-full bg-[--light-component-y]  "
        >
          <p className="text-[2rem] font-['Luckiest_Guy'] text-[--light-text-y] w-full text-center leading-tight">
            ADD
          </p>
        </button>
      </form>
    </section>
  );
};

export default NewTodo;
