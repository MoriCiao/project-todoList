import React, { Fragment, useContext } from "react";
import { TasksContext } from "../contexts/TasksContext";
import { UIContext } from "../contexts/UIContext";
import { motion } from "framer-motion";
import SortDateBtn from "../components/SortDateBtn";
import TitleImage from "../components/TitleImage";
import NoTask from "../components/NoTask";
import TaskCard from "../components/TaskCard";
const AllTasks_RWD_setting = [
  "lg:grid-cols-2",
  "lg:gap-4",
  "md:grid-cols-1",
  "md:gap-2 ",
  "sm:grid-cols-1",
  "sm:gap-4",
  "sm:pt-4",
  "gap-4",
].join(" ");

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
        <div className="sortBtn md:absolute bottom-0 left-0 w-full flex items-center md:justify-start justify-between gap-4">
          <Slide direction="down" duration={1500} triggerOnce={true}>
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
          </Slide>
        </div>
      </div>

      <div className={`grid ${AllTasks_RWD_setting} pt-4 `}>
        {tasksCtx.state.allTasks.length === 0 ? (
          <NoTask themeOptions={themeOptions} />
        ) : (
          <Fade cascade damping={0.2} triggerOnce={true}>
            {tasksCtx.state.allTasks &&
              tasksCtx.state.allTasks.map((task, index) => {
                return <TaskCard key={index} task={task} />;
              })}
          </Fade>
        )}
      </div>
    </motion.section>
  );
};

export default AllTasks;
