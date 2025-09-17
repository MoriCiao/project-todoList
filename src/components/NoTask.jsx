import React from "react";
import { useNavigate } from "react-router-dom";

const NoTask = ({ themeOptions }) => {
  const navigate = useNavigate();

  return (
    <div
      className={`rounded-md p-4 text-center ${themeOptions.themeBg} ${themeOptions.themeFont}`}
    >
      <p className={`p-4 ${themeOptions.themeFont}`}>目前暫無任務</p>
      <button
        className={`rounded-md px-4 py-2 ${themeOptions.themeBg} ${themeOptions.themeFont} font-bold`}
        onClick={() => {
          navigate("/newtodo");
        }}
      >
        Add Task
      </button>
    </div>
  );
};

export default NoTask;
