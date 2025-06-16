import React, { useReducer } from "react";
import GoToHomePage from "../components/GoBackBtn";

const TaskCard = ({ title, time, description }) => {
  const TaskBtnReducer = (state, action) => {
    switch (action.type) {
      case "TOGGLE_VISIBLE":
        console.log(state);
        return { ...state, isVisible: !state.isVisible };
      case "DELETE TASK":
        return {};
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(TaskBtnReducer, {
    isVisible: false,
  });

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
  return (
    <section
      className={`AllTasks col-start-1 col-span-3 items-center p-12 relative`}
    >
      <GoToHomePage arrowImg="/icon/chevron-left-g.svg" />
      <img id="alltasks" src="title/All Tasks.svg" className="mx-auto" alt="" />
      <div className={`grid ${AllTasks_RWD_setting} pt-4`}>
        <TaskCard
          title="Task"
          time="10:00 - 12:00"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, voluptatibus?"
        />
        <TaskCard
          title="Task"
          time="10:00 - 12:00"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, voluptatibus?"
        />
        <TaskCard
          title="Task"
          time="10:00 - 12:00"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, voluptatibus?"
        />
        <TaskCard
          title="Task"
          time="10:00 - 12:00"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, voluptatibus?"
        />
        <TaskCard
          title="Task"
          time="10:00 - 12:00"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, voluptatibus?"
        />
        <TaskCard
          title="Task"
          time="10:00 - 12:00"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, voluptatibus?"
        />
        <TaskCard
          title="Task"
          time="10:00 - 12:00"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, voluptatibus?"
        />
        <TaskCard
          title="Task"
          time="10:00 - 12:00"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, voluptatibus?"
        />
        <TaskCard
          title="Task"
          time="10:00 - 12:00"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, voluptatibus?"
        />
      </div>
    </section>
  );
};

export default AllTasks;
