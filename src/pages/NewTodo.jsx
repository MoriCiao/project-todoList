import React, { useContext, useState, useRef, useEffect } from "react";
import GoToHomePage from "../components/GoBackBtn";
import { todoContext } from "../components/todoCotext";
import { useNavigate } from "react-router-dom";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/confetti.css";
import { motion } from "framer-motion";
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
  ref,
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
      ref={ref}
    />
  );
};

const NewtodoDate = ({ name, placeholder, className, onChange, value }) => {
  const { theme } = useContext(todoContext);

  return (
    <Flatpickr
      value={value}
      // 需要釐清
      onChange={([date]) =>
        onChange({
          target: { value: date },
        })
      }
      //
      options={{
        enableTime: true,
        dateFormat: "m-d H:i",
        time_24hr: true,
        allowInput: true,
      }}
      className={`${className} ${
        theme
          ? "bg-[--dark-component-y] text-[--dark-text-y] placeholder-[--dark-text-y]"
          : "bg-[--light-component-y] text-[--light-text-y] placeholder-[--light-text-y]"
      }`}
      name={name}
      id={name}
      placeholder={placeholder}
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

const NewTodo = () => {
  const {
    theme,
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
    motion_fade,
    state,
    dispatch,
  } = useContext(todoContext);

  const GoToAllTasks = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const lableStyle = "p-4 font-[Istok Web] text-center text-[1.5rem] mt-4";

  const handleInputTask = () => {
    console.log("被點擊了!!");
    console.log(allTasks);
    if (taskName === "" || startTime === "" || endTime === "") {
      alert("請輸入任務名稱及選擇開始與結束的日期!");
      return;
    }
    if (startTime > endTime) {
      alert("開始日期不可大於結束日期");
      return;
    }
    const newTask = {
      id: Date.now().toString(),
      taskName: taskName,
      startTime: startTime,
      endTime: endTime,
      taskDescript: taskDescript,
      // 開闔文字
      isCheck: false,
    };
    /*
    const updateTasks = [...allTasks, newTask];
    因reducer 控制 state 和 localStorage載入  setAllTasks是多餘的
    setAllTasks(updateTasks)
    localStorage.setItem("mylistTasks", JSON.stringify(updateTasks));
    console.log(updateTasks);
    */
    // 將新資料用 dispatch 導入 Reducer 裡的state.allTask
    dispatch({ type: "ADD_TASK", payload: newTask });

    // 資料送出後，須把每個參數重新設定
    setTaskName("");
    setStartTime("");
    setEndTime("");
    setTaskDescript("");
    // 資料輸入成功後，將頁面導向 Alltasks
    GoToAllTasks("/alltasks");
  };
  const taskRef = useRef(null);

  useEffect(() => {
    taskRef.current.focus();
  }, []);

  return (
    <motion.section
      {...motion_fade}
      className={`newtodo AllTasks col-start-1 col-span-3 items-center p-12 relative h-full`}
    >
      <GoToHomePage
        arrowImg={
          theme ? "/icon/chevron-left-dark-y.svg" : "/icon/chevron-left-y.svg"
        }
      />

      <img
        id="newtodo"
        src={theme ? "/title/New Todo-dark.svg" : "/title/New Todo.svg"}
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
          className={`${lableStyle} ${
            theme ? "text-[--dark-text-y]" : "text-[--light-text-y]"
          } `}
          name="Task Name"
        />
        <NewtodoInput
          type="text"
          name="mission"
          id="mission"
          placeholder="Input Task..."
          className={`InputItem border-0 rounded indent-4 w-[20rem] ${
            theme
              ? "bg-[--dark-component-y] text-[--dark-text-y] placeholder-[--dark-text-y]"
              : "bg-[--light-component-y] text-[--light-text-y] placeholder-[--light-text-y]"
          }`}
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          ref={taskRef}
        />

        {/* Deadline */}
        <NewtodoLabel
          htmlFor="deadline"
          className={`${lableStyle} ${
            theme ? "text-[--dark-text-y]" : "text-[--light-text-y]"
          } `}
          name="Deadline"
        />
        <div className="flex flex-col gap-4 items-center w-[20rem]">
          <section className="grid grid-cols-4 items-center">
            <NewtodoLabel
              htmlFor="start"
              className={`text-start text-[1.2rem] col-span-1 col-start-1 ${
                theme ? "text-[--dark-text-y]" : "text-[--light-text-y]"
              }`}
              name="Start"
            />
            <NewtodoDate
              name={"start"}
              id={"start"}
              placeholder={"請選擇日期..."}
              value={startTime}
              className={`InputItem w-[15rem] h-[2rem] border-0 rounded p-2 col-span-4 col-start-2 ${
                theme
                  ? "bg-[--dark-component-y] text-[--dark-text-y] placeholder-[--dark-text-y]"
                  : "bg-[--light-component-y] text-[--light-text-y] placeholder-[--light-text-y]"
              }`}
              onChange={(e) => setStartTime(e.target.value)}
            />
            {/* <NewtodoInput
              type="date"
              name="start"
              id="start"
              className={`w-[15rem] h-[2rem] border rounded p-2 col-span-4 col-start-2 `}
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
            /> */}
          </section>
          <section className="grid grid-cols-4 items-center">
            <NewtodoLabel
              htmlFor="end"
              className={`text-start text-[1.2rem] col-span-1 col-start-1 ${
                theme ? "text-[--dark-text-y]" : "text-[--light-text-y]"
              }`}
              name="End"
            />
            <NewtodoDate
              name={"end"}
              id={"end"}
              placeholder={"請選擇日期..."}
              value={endTime}
              className={`InputItem w-[15rem] h-[2rem] border-0 rounded p-2 col-span-4 col-start-2 ${
                theme
                  ? "bg-[--dark-component-y] text-[--dark-text-y] placeholder-[--dark-text-y]"
                  : "bg-[--light-component-y] text-[--light-text-y] placeholder-[--light-text-y]"
              }`}
              onChange={(e) => setEndTime(e.target.value)}
            />

            {/* <NewtodoInput
              type="date"
              name="End"
              id="End"
              className="w-[15rem] h-[2rem] border rounded p-2 col-span-4 col-start-2"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
            /> */}
          </section>
        </div>
        {/* Descript */}
        <NewtodoLabel
          htmlFor="descript"
          className={`${lableStyle} ${
            theme ? "text-[--dark-text-y]" : "text-[--light-text-y]"
          } `}
          name="Descript"
        />
        <NewtodoTextArea
          maxlength="200"
          rows="4"
          placeholder="Describe the task"
          className={`InputItem border-0 rounded resize-none h-40 w-[20rem] booder indent-2 ${
            theme
              ? "bg-[--dark-component-y] text-[--dark-text-y] placeholder-[--dark-text-y]"
              : "bg-[--light-component-y] text-[--light-text-y] placeholder-[--light-text-y]"
          }`}
          value={taskDescript}
          onChange={(e) => setTaskDescript(e.target.value)}
        />
        <button
          type="submit"
          onClick={() => {
            handleInputTask();
          }}
          className={`mt-2 w-[10rem] h-[2.5rem] rounded-full ${
            theme ? "bg-[--dark-component-y]" : "bg-[--light-component-y]"
          } `}
        >
          <p
            className={`text-[2rem] font-['Luckiest_Guy'] w-full text-center leading-tight ${
              theme ? "text-[--dark-text-y]" : "text-[--light-text-y]"
            }`}
          >
            ADD
          </p>
        </button>
      </form>
    </motion.section>
  );
};

export default NewTodo;
