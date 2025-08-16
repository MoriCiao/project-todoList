import React, { useContext, useEffect, useReducer } from "react";
import GoToHomePage from "../components/GoBackBtn";
import { TasksContext } from "../components/TasksCotext";
import { UIContext } from "../components/UIContext";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const AllTasks_RWD_setting = [
  "2xl:grid-cols-2",
  "2xl:gap-8",
  "md:grid-cols-1",
  "md:gap-4 ",
  "sm:grid-cols-1",
  "sm:gap-4",
  "sm:pt-4",
  "gap-4",
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
  const UICtx = useContext(UIContext);
  const tasksCtx = useContext(TasksContext);

  const GoToNewTodo = useNavigate();

  const themeOptions = {
    themeFont: `${
      UICtx.theme ? "text-[--dark-text-g]" : "text-[--light-text-g]"
    }`,
    themeBg: `${
      UICtx.theme ? "bg-[--dark-component-g]" : "bg-[--light-component-g]"
    }`,
  };

  return (
    <motion.section
      {...UICtx.motion_fade}
      className={`AllTasks col-start-1 col-span-3 items-center p-12 relative h-full `}
    >
      <GoToHomePage
        arrowImg={
          UICtx.theme
            ? "/project-todoList/icon/chevron-left-dark-g.svg"
            : "/project-todoList/icon/chevron-left-g.svg"
        }
      />
      <div className="relative">
        <img
          id="alltasks"
          src={
            UICtx.theme
              ? "/project-todoList/title/AllTasks-dark.svg"
              : "/project-todoList/title/AllTasks.svg"
          }
          className="mx-auto"
          alt="AllTasks"
        />

        {/* SortBtn */}
        <div className="sortBtn absolute bottom-0 left-0 flex md:flex-row flex-col gap-4">
          <button
            onClick={() => tasksCtx.dispatch({ type: "RAISE_BTN" })}
            className={`isClickBtn px-2 py-1 border-0 rounded-md ${themeOptions.themeBg} ${themeOptions.themeFont} hover:sacle-105`}
          >
            Min Date
          </button>
          <button
            onClick={() => tasksCtx.dispatch({ type: "DECREASE_BTN" })}
            className={`isClickBtn px-2 py-1 border-0 rounded-md  ${themeOptions.themeBg} ${themeOptions.themeFont} hover:sacle-105`}
          >
            Max Date
          </button>
        </div>
      </div>

      <div className={`grid ${AllTasks_RWD_setting} pt-4 `}>
        {tasksCtx.state.allTasks.length === 0 ? (
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
          tasksCtx.state.allTasks &&
          tasksCtx.state.allTasks.map((task, index) => {
            return (
              <div
                key={index}
                className={`task relative rounded-md w-auto 2xl:max-w-[40rem] max-h-150 min-h-40 overflow-y-auto flex transition duration-500 ${
                  task.isCheck ? "brightness-[0.5]" : null
                } ${themeOptions.themeBg} ${themeOptions.themeFont}`}
              >
                {/* Check img */}
                <div className="check-Icon rounded-l-md w-[20%] py-4 border-r border-white/50 mr-4">
                  <button
                    className="w-full h-full flex items-center justify-center"
                    onClick={() =>
                      tasksCtx.dispatch({
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
                          ? UICtx.theme
                            ? "/project-todoList/icon/check-dark-circked.svg"
                            : "/project-todoList/icon/check-light-checked.svg"
                          : UICtx.theme
                          ? "/project-todoList/icon/circle-dark-check.svg"
                          : "/project-todoList/icon/circle-light-check.svg"
                      }
                      alt="checkIcon"
                    />
                  </button>
                </div>

                {/* Task Body */}
                <div className="task-container w-[80%] py-4 pr-2 flex flex-col gap-4 max-h-80">
                  <div className="flex flex-col items-start justify-start">
                    {/* task Title */}
                    <h3
                      className={`title  transition-all duration-300 break-words max-w-100 ${
                        UICtx.h5_size
                      } ${themeOptions.themeFont} ${
                        task.isCheck ? "line-through" : ""
                      }`}
                    >
                      {task.taskName}
                    </h3>

                    {/* Time */}
                    <div
                      className={`w-full text-end pr-4 ${themeOptions.themeFont}  ${UICtx.p_size}`}
                    >
                      start：
                      {new Date(task.startTime)?.toLocaleDateString(
                        "zh-TW",
                        timeOptions
                      )}{" "}
                      <span className={`${themeOptions.themeFont} px-2`}>
                        -
                      </span>
                      end：
                      {new Date(task.endTime)?.toLocaleDateString(
                        "zh-TW",
                        timeOptions
                      )}
                    </div>
                    {/* Trash box */}
                    <button
                      className={`absolute right-4 top-4 flex flex-col items-center `}
                      onClick={() => {
                        tasksCtx.dispatch({
                          type: "DELETE_TASK",
                          payload: task.taskName,
                        });
                      }}
                    >
                      <img
                        src={
                          UICtx.theme
                            ? "/project-todoList/icon/trash-dark-g.svg"
                            : "/project-todoList/icon/trash-g.svg"
                        }
                        className=""
                        alt="trashBtn"
                      />
                    </button>
                  </div>
                  {/* Task Des */}
                  <div
                    className={`descript-area rounded-md  ${themeOptions.themeBg}`}
                  >
                    {task.taskDescript && (
                      <p
                        className={`descript max-h-50 break-words p-4 ${themeOptions.themeFont} ${UICtx.p_size}`}
                      >
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
