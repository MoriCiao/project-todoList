import React, { useContext, useEffect, useReducer } from "react";
import GoToHomePage from "../components/GoBackBtn";
import { todoContext } from "../components/todoCotext";
import { useNavigate } from "react-router-dom";
const TaskCard = ({ title, time, description }) => {
  return (
    <div className="task relative p-4 rounded-md w-auto h-auto bg-[--light-component-g]">
      <div className="grid grid-cols-6 items-center justify-center">
        <h2 className="title col-start-1 col-span-2 text-[1.5rem]">{title}</h2>
        <div
          className={`col-start-3 col-span-5 text-end
          `}
        >
          <span className="mx-2 my-auto">{time}</span>

          <button className="my-auto">
            <img src="/icon/trash-g.svg" className="" alt="" />
          </button>
        </div>
      </div>
      <div className="descript-area bg-[--light-component-g] rounded-md h-auto">
        {/* 需隱藏的文字 */}
        {description && (
          <p className={`descript  p-4 ${state.isVisible ? "" : "hidden"}`}>
            {description}
          </p>
        )}

        {/* 隱藏箭頭 */}
        <div
          className={`absolute w-full ${
            state.isVisible ? "bottom-0" : "bottom-[-2]"
          } left-0 flex justify-center items-center font-bold m-auto`}
        >
          <span
            className="descript-visible cursor-pointer"
            onClick={() => dispatch({ type: "TOGGLE_VISIBLE" })}
          >
            {state.isVisible ? "︽" : "︾"}
          </span>
        </div>
      </div>
    </div>
  );
};

const AllTasks_RWD_setting = [
  "2xl:grid-cols-3",
  "2xl:gap-8",
  "xl:grid-cols-2",
  "md:grid-cols-1",
  "md:gap-4 ",
  "sm:grid-cols-1",
  "sm:gap-4",
].join(" ");

const AllTasks = () => {
  // 獲取tasks 列表
  const { allTasks, setAllTasks } = useContext(todoContext);
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

  //為了同步更新外部的allTasks
  useEffect(() => {
    setAllTasks(state.allTasks);
    console.log(state.allTasks);
  }, [state.allTasks]);
  return (
    <section
      className={`AllTasks col-start-1 col-span-3 items-center p-12 relative`}
    >
      <GoToHomePage arrowImg="/icon/chevron-left-g.svg" />
      <img id="alltasks" src="title/All Tasks.svg" className="mx-auto" alt="" />

      <div className={`grid ${AllTasks_RWD_setting} pt-4`}>
        {state.allTasks.length === 0 ? (
          <div className="text-center p-4 rounded-md bg-[--light-component-g]">
            <p className="p-4">目前暫無任務</p>
            <button
              className="px-4 py-2 rounded-md bg-[--light-component-g] font-bold"
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
                className="task relative p-4 rounded-md w-auto max-w-[40rem] h-auto bg-[--light-component-g]"
              >
                <div className="grid grid-cols-6 items-center justify-center">
                  <h2 className="title col-start-1 col-span-2 text-[1.5rem]">
                    {task.taskName}
                  </h2>

                  <span className="mx-2 my-auto col-start-3 col-span-3 text-end text-[0.8rem]">
                    {task.startTime} <br /> {task.endTime}
                  </span>

                  <button
                    className="col-start-6 col-span-1  flex flex-col items-center"
                    onClick={() => {
                      dispatch({ type: "DELETE_TASK", payload: task.taskName });
                    }}
                  >
                    <img src="/icon/trash-g.svg" className="w-" alt="" />
                  </button>
                </div>
                <div className="descript-area bg-[--light-component-g] rounded-md h-auto">
                  {/* 需隱藏的文字 */}
                  {task.taskDescript && (
                    <p
                      className={`descript  p-4 ${
                        task.isVisible ? "" : "hidden"
                      }`}
                    >
                      {task.taskDescript}
                    </p>
                  )}

                  {/* 隱藏箭頭 */}
                  <div
                    className={`absolute w-full 
                      bottom-0 flex justify-center items-center  font-bold m-auto`}
                  >
                    <span
                      className={`descript-visible cursor-pointer w-auto text-center ${
                        task.isVisible ? "bottom-[-2]" : "bottom-0"
                      }`}
                      onClick={() =>
                        dispatch({
                          type: "TOGGLE_VISIBLE",
                          payload: task.taskName,
                        })
                      }
                    >
                      {task.isVisible ? "︽" : "︾"}
                    </span>
                  </div>
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
