import React from "react";

const TaskCard = ({ title, time, description }) => {
  return (
    <div className="task relative p-4 rounded-md w-[20rem] h-10rem bg-[--light-component-g]">
      <div className="grid grid-cols-4 items-end">
        <h2 className="title col-start-1 col-span-2 text-[1.5rem]">{title}</h2>
        <p className="col-start-3 col-span-2">{time}</p>
      </div>
      <p className="descript h-[10rem] p-4 rounded-md bg-[--light-component-g]">
        {description}
      </p>
      <button className="absolute top-4 right-4">
        <img src="/icon/trash-g.svg" className="" alt="" />
      </button>
    </div>
  );
};

const AllTasks_RWD_setting = [
  "2xl:grid-cols-3",
  "2xl:gap-12",
  "xl:grid-cols-2",
  "2xl:gap-10",
  "md:grid-cols-1",
  "md:gap-4 ",
  "sm:grid-cols-1",
  "sm:gap-4",
].join(" ");

const AllTasks = () => {
  return (
    <section className="AllTasks col-start-1 col-span-3 flex flex-col items-center p-12">
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
