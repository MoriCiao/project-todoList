import React, { useContext, useEffect, useReducer } from "react";
import GoToHomePage from "../components/GoBackBtn";
import { todoContext } from "../components/todoCotext";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

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
  const {
    theme,
    allTasks,
    setAllTasks,
    raiseBtn,
    decreaseBtn,
    motion_fade,
    state,
    dispatch,
  } = useContext(todoContext);

  const GoToNewTodo = useNavigate();

  // const defaultTasks = [
  //   {
  //     taskName: "學習 React 基礎",
  //     startTime: "2025-06-21T08:00:00.000Z",
  //     endTime: "2025-06-21T10:00:00.000Z",
  //     taskDescript: "觀看 React 官方教學並製作 TODO List",
  //     isCheck: false,
  //   },
  //   {
  //     taskName: "閱讀 JavaScript 書籍",
  //     startTime: "2025-06-22T07:30:00.000Z",
  //     endTime: "2025-06-22T09:00:00.000Z",
  //     taskDescript: "閱讀《你不知道的 JavaScript》第一章",
  //     isCheck: false,
  //   },
  //   {
  //     taskName: "練習 Git 指令",
  //     startTime: "2025-06-23T06:00:00.000Z",
  //     endTime: "2025-06-23T07:30:00.000Z",
  //     taskDescript: "練習 git init / clone / commit / push 流程",
  //     isCheck: false,
  //   },
  //   {
  //     taskName: "設計個人網頁",
  //     startTime: "2025-06-24T09:00:00.000Z",
  //     endTime: "2025-06-24T11:00:00.000Z",
  //     taskDescript: "使用 HTML/CSS 架設個人作品集首頁",
  //     isCheck: false,
  //   },
  //   {
  //     taskName: "撰寫學習筆記",
  //     startTime: "2025-06-25T13:00:00.000Z",
  //     endTime: "2025-06-25T14:00:00.000Z",
  //     taskDescript: "整理本週 JavaScript 學習重點並發佈到 Notion",
  //     isCheck: false,
  //   },
  // ];

  // function getInitialStorage() {
  //   console.log("第一次初始化 state");
  //   const saved = localStorage.getItem("mylistTasks");

  //   try {
  //     if (!saved) {
  //       // 裡面無任何資料
  //       localStorage.setItem("mylistTasks", JSON.stringify(defaultTasks));
  //       return { allTasks: defaultTasks };
  //     }
  //     return { allTasks: JSON.parse(saved) };
  //   } catch (e) {
  //     console.error("本機加載失敗...", e);
  //     return { allTasks: defaultTasks };
  //   }
  // }
  // // reducer的初始化
  // // const initailState = {
  // //   allTasks: allTasks,
  // // };
  // const TaskBtnReducer = (state, action) => {
  //   switch (action.type) {
  //     case "DELETE_TASK":
  //       const filteredTasks = state.allTasks.filter(
  //         (task) => task.taskName !== action.payload
  //       );
  //       return { ...state, allTasks: filteredTasks };
  //     case "IS_CHECK":
  //       const toggledTasks = state.allTasks.map((task) =>
  //         task.taskName === action.payload
  //           ? { ...task, isCheck: !task.isCheck }
  //           : task
  //       );
  //       return { ...state, allTasks: toggledTasks };
  //     default:
  //       return state;
  //   }
  // };

  // const [state, dispatch] = useReducer(TaskBtnReducer, {}, getInitialStorage);

  const themeOptions = {
    themeFont: `${theme ? "text-[--dark-text-g]" : "text-[--light-text-g]"}`,
    themeBg: `${
      theme ? "bg-[--dark-component-g]" : "bg-[--light-component-g]"
    }`,
  };

  // useEffect(() => {
  //   try {
  //     localStorage.setItem("mylistTasks", JSON.stringify(state.allTasks));
  //     console.log(state);
  //     console.log("localStorage 已更新 ...");
  //   } catch (e) {
  //     console.error("儲存失敗 ：", e);
  //   }
  // }, [state.allTasks]);

  return (
    <motion.section
      {...motion_fade}
      className={`AllTasks col-start-1 col-span-3 items-center p-12 relative h-full`}
    >
      <div className="sortBtn absolute top-4 left-10 flex flex-col gap-4">
        <button
          onClick={() => dispatch({ type: "RAISE_BTN" })}
          className={`isClickBtn px-2 py-1 border-0 rounded-xl mx-2 ${themeOptions.themeBg} ${themeOptions.themeFont}`}
        >
          A-Z
        </button>
        <button
          onClick={() => dispatch({ type: "DECREASE_BTN" })}
          className={`isClickBtn px-2 py-1 border-0 rounded-xl mx-2  ${themeOptions.themeBg} ${themeOptions.themeFont}`}
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
            <p className={`p-4  ${themeOptions.themeFont}`}>目前暫無任務</p>
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
          state.allTasks &&
          state.allTasks.map((task, index) => {
            return (
              <div
                key={index}
                className={`task relative rounded-md w-auto max-w-[40rem] h-auto grid grid-cols-12 ${themeOptions.themeBg} ${themeOptions.themeFont}`}
              >
                <div className="check-Icon rounded-l-md col-span-2 col-start-1 py-4">
                  <button
                    className="w-full h-full flex items-center justify-center"
                    onClick={() =>
                      dispatch({
                        type: "IS_CHECK",
                        payload: task.taskName,
                      })
                    }
                  >
                    <motion.img
                      initial={{ scale: 1 }}
                      animate={
                        task.isCheck
                          ? { scale: [1, 1.5, 1] }
                          : { scale: [1, 1.25, 1] }
                      }
                      transition={{ duration: 0.4 }}
                      src={
                        task.isCheck
                          ? theme
                            ? "/icon/check-dark-circked.svg"
                            : "/icon/check-light-checked.svg"
                          : theme
                          ? "/icon/circle-dark-check.svg"
                          : "/icon/circle-light-check.svg"
                      }
                      alt="checkIcon"
                    />
                  </button>
                </div>
                <div className="task-container col-span-10 col-start-3 pt-4 pb-2 pr-2">
                  <div className="grid grid-cols-6 items-center justify-center">
                    <h2
                      className={`title col-start-1 col-span-2 text-[1.5rem] transition-all duration-300  ${
                        themeOptions.themeFont
                      } ${task.isCheck ? "line-through" : ""}`}
                    >
                      {task.taskName}
                    </h2>

                    <span
                      className={`mx-2 my-auto col-start-3 col-span-3 text-end text-[0.8rem]  ${themeOptions.themeFont}`}
                    >
                      {new Date(task.startTime)?.toLocaleDateString(
                        "zh-TW",
                        timeOptions
                      )}{" "}
                      <br />{" "}
                      {new Date(task.endTime)?.toLocaleDateString(
                        "zh-TW",
                        timeOptions
                      )}
                    </span>

                    <button
                      className={`col-start-6 col-span-1  flex flex-col items-center `}
                      onClick={() => {
                        dispatch({
                          type: "DELETE_TASK",
                          payload: task.taskName,
                        });
                      }}
                    >
                      <img
                        src={
                          theme ? "/icon/trash-dark-g.svg" : "/icon/trash-g.svg"
                        }
                        className=""
                        alt="trashBtn"
                      />
                    </button>
                  </div>
                  <div
                    className={`descript-area rounded-md h-auto ${themeOptions.themeBg}`}
                  >
                    {task.taskDescript && (
                      <p className={`descript  p-4 ${themeOptions.themeFont}`}>
                        {task.taskDescript}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </motion.section>
  );
};

export default AllTasks;
