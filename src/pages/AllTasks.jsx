import React, { Fragment, useContext } from "react";
import GoToHomePage from "../components/GoBackBtn";
import { TasksContext } from "../contexts/TasksContext";
import { UIContext } from "../contexts/UIContext";
import { motion } from "framer-motion";
import SortDateBtn from "../components/SortDateBtn";
import TitleImage from "../components/TitleImage";
import NoTask from "../components/NoTask";
import TaskCard from "../components/TaskCard";
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
// const timeOptions = {
//   // year: "numeric",
//   month: "2-digit",
//   day: "2-digit",
//   hour: "2-digit",
//   minute: "2-digit",
//   hour12: false,
// };

const AllTasks = () => {
  // 獲取tasks 列表
  const UICtx = useContext(UIContext);
  const tasksCtx = useContext(TasksContext);

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
        <TitleImage
          id="alltasks"
          src={
            UICtx.theme
              ? "/project-todoList/title/AllTasks-dark.svg"
              : "/project-todoList/title/AllTasks.svg"
          }
          className={`mx-auto`}
          alt="AllTasks.svg"
        />

        {/* SortBtn */}
        <div className="sortBtn absolute bottom-0 left-0 flex md:flex-row flex-col gap-4">
          <SortDateBtn
            type="button"
            text="Min Date"
            onClick={() => tasksCtx.dispatch({ type: "RAISE_BTN" })}
            className={`isClickBtn px-2 py-1 border-0 rounded-md ${themeOptions.themeBg} ${themeOptions.themeFont} hover:sacle-105`}
          />
          <SortDateBtn
            type="button"
            text="Max Date"
            onClick={() => tasksCtx.dispatch({ type: "DECREASE_BTN" })}
            className={`isClickBtn px-2 py-1 border-0 rounded-md  ${themeOptions.themeBg} ${themeOptions.themeFont} hover:sacle-105`}
          />
        </div>
      </div>

      <div className={`grid ${AllTasks_RWD_setting} pt-4 `}>
        {tasksCtx.state.allTasks.length === 0 ? (
          <NoTask themeOptions={themeOptions} />
        ) : (
          tasksCtx.state.allTasks &&
          tasksCtx.state.allTasks.map((task, index) => {
            return (
              <Fragment key={index}>
                <TaskCard task={task} />;
              </Fragment>
            );
          })
        )}
      </div>
    </motion.section>
  );
};

export default AllTasks;
