import { useContext, useRef, useEffect, useCallback } from "react";
import { TasksContext } from "../contexts/TasksContext";
import { UIContext } from "../contexts/UIContext";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import GoToHomePage from "../components/GoBackBtn";
import "flatpickr/dist/themes/confetti.css";
import {
  NewtodoDate,
  NewtodoInput,
  NewtodoLabel,
  NewtodoTextArea,
} from "../components/NewTodoItems";
import TitleImage from "../components/TitleImage";

const NewTodo = () => {
  const UICtx = useContext(UIContext);
  const tasksCtx = useContext(TasksContext);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const lableStyle = `p-4 font-[Istok Web] text-center mt-4 ${UICtx.p_size}`;

  const handleInputTask = () => {
    if (
      tasksCtx.taskName === "" ||
      tasksCtx.startTime === "" ||
      tasksCtx.endTime === ""
    ) {
      alert("請輸入任務名稱及選擇開始與結束的日期!");
      return;
    }
    if (tasksCtx.startTime > tasksCtx.endTime) {
      alert("開始日期不可大於結束日期");
      return;
    }
    const newTask = {
      id: Date.now().toString(),
      taskName: tasksCtx.taskName,
      startTime: tasksCtx.startTime,
      endTime: tasksCtx.endTime,
      taskDescript: tasksCtx.taskDescript,
      // 開闔文字
      isCheck: false,
    };

    // 將新資料用 dispatch 導入 Reducer 裡的state.allTask
    tasksCtx.dispatch({ type: "ADD_TASK", payload: newTask });

    // 資料送出後，須把每個參數重新設定
    tasksCtx.setTaskName("");
    tasksCtx.setStartTime("");
    tasksCtx.setEndTime("");
    tasksCtx.setTaskDescript("");
    // 資料輸入成功後，將頁面導向 Alltasks
    navigate("/alltasks");
  };

  const taskRef = useRef(null);

  useEffect(() => {
    taskRef.current.focus();
  }, []);

  return (
    <motion.section
      {...UICtx.motion_fade}
      className={`newtodo col-start-1 col-span-3 items-center p-12 relative h-full`}
    >
      <GoToHomePage
        arrowImg={
          UICtx.theme
            ? "/project-todoList/icon/chevron-left-dark-y.svg"
            : "/project-todoList/icon/chevron-left-y.svg"
        }
      />
      {/* Newtodo Image */}
      <TitleImage
        id="newtodo"
        src={
          UICtx.theme
            ? "/project-todoList/title/New Todo-dark.svg"
            : "/project-todoList/title/New Todo.svg"
        }
        className={`mx-auto`}
        alt="NewTodo.svg"
      />

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-8 items-center w-[80%] mx-auto  p-2"
      >
        {/* Task Name */}
        <div className="newtodo-Taskname flex flex-col w-full justify-center items-center">
          <NewtodoLabel
            htmlFor="task-name"
            className={`${lableStyle} ${
              UICtx.theme ? "text-[--dark-text-y]" : "text-[--light-text-y]"
            } `}
            name="Task Name"
          />
          <NewtodoInput
            type="text"
            name="mission"
            id="mission"
            placeholder="Input Task..."
            maxLength={15}
            className={`InputItem border-0 rounded indent-4 w-[20rem] h-[3rem] ${
              UICtx.p_size
            } ${
              UICtx.theme
                ? "bg-[--dark-component-y] text-[--dark-text-y] placeholder-[--dark-text-y]"
                : "bg-[--light-component-y] text-[--light-text-y] placeholder-[--light-text-y]"
            }`}
            value={tasksCtx.taskName}
            onChange={(e) => {
              if (e.target.value.length > 15) {
                alert("最多輸入15個字");
              }
              tasksCtx.setTaskName(String(e.target.value));
            }}
            ref={taskRef}
          />
        </div>

        {/* Deadline */}
        <div className="newtodo-Date flex flex-col w-full justify-center items-center">
          <NewtodoLabel
            htmlFor="deadline"
            className={`${lableStyle} ${
              UICtx.theme ? "text-[--dark-text-y]" : "text-[--light-text-y]"
            } `}
            name="Deadline"
          />
          <div className="flex flex-col gap-4 items-center w-[20rem]">
            <section className="grid grid-cols-4 items-center">
              <NewtodoLabel
                htmlFor="start"
                className={`text-start text-[1.2rem] col-span-1 col-start-1 ${
                  UICtx.p_size
                } ${
                  UICtx.theme ? "text-[--dark-text-y]" : "text-[--light-text-y]"
                }`}
                name="Start"
              />
              <NewtodoDate
                name={"start"}
                id={"start"}
                placeholder={"請選擇日期..."}
                value={tasksCtx.startTime}
                className={`InputItem w-[15rem] h-[3rem] border-0 rounded p-2 col-span-4 col-start-2 ${
                  UICtx.p_size
                } ${
                  UICtx.theme
                    ? "bg-[--dark-component-y] text-[--dark-text-y] placeholder-[--dark-text-y]"
                    : "bg-[--light-component-y] text-[--light-text-y] placeholder-[--light-text-y]"
                }`}
                onChange={(e) => tasksCtx.setStartTime(e.target.value)}
              />
            </section>
            <section className="grid grid-cols-4 items-center">
              <NewtodoLabel
                htmlFor="end"
                className={`text-start text-[1.2rem] col-span-1 col-start-1 ${
                  UICtx.p_size
                } ${
                  UICtx.theme ? "text-[--dark-text-y]" : "text-[--light-text-y]"
                }`}
                name="End"
              />

              <NewtodoDate
                name={"end"}
                id={"end"}
                placeholder={"請選擇日期..."}
                value={tasksCtx.endTime}
                className={`InputItem w-[15rem] h-[3rem] border-0 rounded p-2 col-span-4 col-start-2 ${
                  UICtx.p_size
                } ${
                  UICtx.theme
                    ? "bg-[--dark-component-y] text-[--dark-text-y] placeholder-[--dark-text-y]"
                    : "bg-[--light-component-y] text-[--light-text-y] placeholder-[--light-text-y]"
                }`}
                onChange={(e) => tasksCtx.setEndTime(e.target.value)}
              />
            </section>
          </div>
        </div>

        {/* Description */}
        <div className="newtodo-Description flex flex-col w-full justify-center items-center">
          {/* Descript */}
          <NewtodoLabel
            htmlFor="descript"
            className={`${lableStyle} ${
              UICtx.theme ? "text-[--dark-text-y]" : "text-[--light-text-y]"
            } `}
            name="Descript"
          />
          <NewtodoTextArea
            maxlength="200"
            rows="4"
            placeholder="Describe the task"
            className={`InputItem border-0 rounded resize-none h-40 w-[20rem] p-2 ${
              UICtx.p_size
            } ${
              UICtx.theme
                ? "bg-[--dark-component-y] text-[--dark-text-y] placeholder-[--dark-text-y]"
                : "bg-[--light-component-y] text-[--light-text-y] placeholder-[--light-text-y]"
            } border border-red-500`}
            value={tasksCtx.taskDescript}
            onChange={(e) => tasksCtx.setTaskDescript(e.target.value)}
          />
        </div>

        <div className="newtodo-Submit flex flex-col w-full justify-center items-center">
          {/* submit btn */}
          <button
            type="submit"
            onClick={() => handleInputTask()}
            className={`w-[10rem] h-auto rounded-full ${
              UICtx.theme
                ? "bg-[--dark-component-y]"
                : "bg-[--light-component-y]"
            }`}
          >
            <p
              className={`font-['Luckiest_Guy'] w-full text-center leading-tight ${
                UICtx.h3_size
              } ${
                UICtx.theme ? "text-[--dark-text-y]" : "text-[--light-text-y]"
              }`}
            >
              ADD
            </p>
          </button>
        </div>
      </form>
    </motion.section>
  );
};

export default NewTodo;
