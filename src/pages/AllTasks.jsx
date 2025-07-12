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
  const { theme, motion_fade, state, dispatch } = useContext(todoContext);

  const GoToNewTodo = useNavigate();

  const themeOptions = {
    themeFont: `${theme ? "text-[--dark-text-g]" : "text-[--light-text-g]"}`,
    themeBg: `${
      theme ? "bg-[--dark-component-g]" : "bg-[--light-component-g]"
    }`,
  };

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
          theme
            ? "/project-todoList/icon/chevron-left-dark-g.svg"
            : "/project-todoList/icon/chevron-left-g.svg"
        }
      />
      <img
        id="alltasks"
        src={
          theme
            ? "/project-todoList/title/All Tasks-dark.svg"
            : "/project-todoList/title/All Tasks.svg"
        }
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
                            ? "/project-todoList/icon/check-dark-circked.svg"
                            : "/project-todoList/icon/check-light-checked.svg"
                          : theme
                          ? "/project-todoList/icon/circle-dark-check.svg"
                          : "/project-todoList/icon/circle-light-check.svg"
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
                          theme
                            ? "/project-todoList/icon/trash-dark-g.svg"
                            : "/project-todoList/icon/trash-g.svg"
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
