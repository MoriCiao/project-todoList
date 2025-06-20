import React, { useContext, useEffect, useReducer } from "react";
import GoToHomePage from "../components/GoBackBtn";
import { todoContext } from "../components/todoCotext";
import { useNavigate } from "react-router-dom";

const AllTasks_RWD_setting = [
  "2xl:grid-cols-2",
  "2xl:gap-4",
  "xl:grid-cols-2",
  "md:grid-cols-1",
  "md:gap-4 ",
  "sm:grid-cols-1",
  "sm:gap-4",
].join(" ");
// 任務時間的顯示參數
const timeOptions = {
  // year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
};

const AllTasks = () => {
  // 獲取tasks 列表
  const { theme, allTasks, setAllTasks, raiseBtn, decreaseBtn } =
    useContext(todoContext);
  const GoToNewTodo = useNavigate();
  // reducer的初始化
  const initailState = {
    allTasks: allTasks,
  };
  const TaskBtnReducer = (state, action) => {
    switch (action.type) {
      case "TOGGLE_VISIBLE":
        return {
          ...state,
          allTasks: state.allTasks.map((task) => {
            if (task.taskName === action.payload) {
              return { ...task, isVisible: !task.isVisible };
            }
            return task;
          }),
        };
      case "DELETE_TASK":
        const filteredTasks = state.allTasks.filter(
          (task) => task.taskName !== action.payload
        );
        return { ...state, allTasks: filteredTasks };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(TaskBtnReducer, initailState);

  const themeOptions = {
    themeFont: `${theme ? "text-[--dark-text-g]" : "text-[--light-text-g]"}`,
    themeBg: `${
      theme ? "bg-[--dark-component-g]" : "bg-[--light-component-g]"
    }`,
  };

  //為了同步更新外部的allTasks
  useEffect(() => {
    setAllTasks(state.allTasks);
    console.log(state.allTasks);
  }, [state.allTasks]);
  return (
    <section
      className={`AllTasks col-start-1 col-span-3 items-center p-12 relative h-full`}
    >
      <div className="sortBtn absolute top-16 right-10">
        <button
          onClick={raiseBtn}
          className={` px-2 py-1 border rounded-xl mx-2 ${themeOptions.themeBg} ${themeOptions.themeFont}`}
        >
          A-Z
        </button>
        <button
          onClick={decreaseBtn}
          className={` px-2 py-1 border rounded-xl mx-2  ${themeOptions.themeBg} ${themeOptions.themeFont}`}
        >
          Z-A
        </button>
      </div>
      <GoToHomePage
        arrowImg={
          theme ? "/icon/chevron-left-dark-g.svg" : "/icon/chevron-left-g.svg"
        }
      />
      <img
        id="alltasks"
        src={theme ? "title/All Tasks-dark.svg" : "title/All Tasks.svg"}
        className="mx-auto"
        alt=""
      />

      <div className={`grid ${AllTasks_RWD_setting} pt-4 `}>
        {state.allTasks.length === 0 ? (
          <div
            className={`text-center p-4 rounded-md ${themeOptions.themeBg} ${themeOptions.themeFont}`}
          >
            <p className={`p-4 ${themeOptions.themeFont}`}>目前暫無任務</p>
            <button
              className={`px-4 py-2 rounded-md ${themeOptions.themeBg} ${themeOptions.themeFont} font-bold `}
              onClick={() => {
                GoToNewTodo("/newtodo");
              }}
            >
              Add Task
            </button>
          </div>
        ) : (
          allTasks &&
          allTasks.map((task, index) => {
            return (
              <div
                key={index}
                className={`task relative p-4 rounded-md w-auto max-w-[40rem] h-auto ${themeOptions.themeBg} ${themeOptions.themeFont}`}
              >
                <div className="grid grid-cols-6 items-center justify-center">
                  <h2
                    className={`title col-start-1 col-span-2 text-[1.5rem]  ${themeOptions.themeFont}`}
                  >
                    {task.taskName}
                  </h2>

                  <span
                    className={`mx-2 my-auto col-start-3 col-span-3 text-end text-[0.8rem]  ${themeOptions.themeFont}`}
                  >
                    {task.startTime?.toLocaleDateString("zh-TW", timeOptions)}{" "}
                    <br />{" "}
                    {task.endTime?.toLocaleDateString("zh-TW", timeOptions)}
                  </span>

                  <button
                    className={`col-start-6 col-span-1  flex flex-col items-center `}
                    onClick={() => {
                      dispatch({ type: "DELETE_TASK", payload: task.taskName });
                    }}
                  >
                    <img src="/icon/trash-g.svg" className="w-" alt="" />
                  </button>
                </div>
                <div
                  className={`descript-area rounded-md h-auto ${themeOptions.themeBg} ${themeOptions.themeFont}`}
                >
                  {/* 需隱藏的文字 */}
                  {task.taskDescript && (
                    <p className={`descript  p-4`}>{task.taskDescript}</p>
                  )}
                </div>
              </div>
            );
          })
        )}
      </div>
    </section>
  );
};

export default AllTasks;
