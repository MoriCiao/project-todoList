import React from "react";
import GoToHomePage from "../components/GoBackBtn";

const NewtodoLabel = ({ htmlFor, name, className }) => {
  return (
    <label htmlFor={htmlFor} className={className}>
      {name}
    </label>
  );
};

const NewtodoInput = ({ type, name, id, placeholder, className }) => {
  return (
    <input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      className={className}
    />
  );
};

const NewtodoTextArea = ({ maxlength, rows, placeholder, className }) => {
  return (
    <textarea
      maxLength={maxlength}
      rows={rows}
      placeholder={placeholder}
      className={className}
    ></textarea>
  );
};

const lableStyle =
  "p-4 font-[Istok Web] text-center text-[1.5rem] text-[--light-text-y] mt-4";

const NewTodo = () => {
  return (
    <section
      className={`newtodo AllTasks col-start-1 col-span-3 items-center p-12 relative`}
    >
      <GoToHomePage arrowImg="/icon/chevron-left-y.svg" />

      <img
        id="newtodo"
        src="/title/New Todo.svg"
        alt="New Todo.svg"
        className="mx-auto"
      />

      <form className="flex flex-col items-center w-[80%] max-w-[30rem] mx-auto">
        {/* Task Name */}
        <NewtodoLabel
          htmlFor="task-name"
          className={lableStyle}
          name="Task Name"
          required
        />
        <NewtodoInput
          type="text"
          name="mission"
          id="mission"
          placeholder="Input Task..."
          className="border rounded indent-4 w-[20rem]"
        />

        {/* Deadline */}
        <NewtodoLabel
          htmlFor="deadline"
          className={lableStyle}
          name="Deadline"
        />
        <div className="flex flex-col gap-4 items-center w-[20rem]">
          <section className="grid grid-cols-4 items-center">
            <NewtodoLabel
              htmlFor="start"
              className="text-start text-[1.2rem] text-[--light-text-y] col-span-1 col-start-1"
              name="Start"
            />
            <NewtodoInput
              type="date"
              name="start"
              id="start"
              className="w-[15rem] h-[2rem] border rounded p-2 col-span-4 col-start-2"
            />
          </section>
          <section className="grid grid-cols-4 items-center">
            <NewtodoLabel
              htmlFor="end"
              className="text-start text-[1.2rem] text-[--light-text-y] col-span-1 col-start-1"
              name="End"
            />
            <NewtodoInput
              type="date"
              name="End"
              id="End"
              className="w-[15rem] h-[2rem] border rounded p-2 col-span-4 col-start-2"
            />
          </section>
        </div>
        {/* Descript */}
        <NewtodoLabel
          htmlFor="descript"
          className={lableStyle}
          name="Descript"
        />
        <NewtodoTextArea
          maxlength="200"
          rows="4"
          placeholder="Describe the task"
          className="border rounded resize-none h-40 w-[20rem] booder indent-2"
        />
        <button className="mt-2 w-[10rem] h-[2.5rem] rounded-full bg-[--light-component-y]  ">
          <p className="text-[2rem] font-['Luckiest_Guy'] text-[--light-text-y] w-full text-center leading-tight">
            ADD
          </p>
        </button>
      </form>
    </section>
  );
};

export default NewTodo;
