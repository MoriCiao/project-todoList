import { createContext, useState } from "react";
import React from "react";

export const todoContext = createContext();
export const TextSizeProvider = ({ children }) => {
  // 字體大小變更
  const [textSize, setTextSize] = useState("medium");
  const sizeClass = {
    small: "scale-[80%]",
    medium: "scale-100",
    large: "scale-[115%]",
  };
  // 深淺色主題變更
  const [theme, setTheme] = useState(true);

  // New TOdo 資料獲取，導入AllTasks裡，編列出各個Task
  const [allTasks, setAllTasks] = useState([]);

  const [taskName, setTaskName] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [taskDescript, setTaskDescript] = useState("");

  // sortBtn
  const raiseBtn = () => {
    // 按照時間大小排序
    const newTasksList = [...allTasks].sort(
      (a, b) => new Date(a.startTime) - new Date(b.startTime)
    );

    setAllTasks(newTasksList);
    console.log("小到大排序成功!!");
  };

  const decreaseBtn = () => {
    // 按照時間大到小排序
    const newTasksList = [...allTasks].sort(
      (a, b) => new Date(b.startTime) - new Date(a.startTime)
    );

    setAllTasks(newTasksList);
    console.log("大到小排序成功!!");
  };

  return (
    <todoContext.Provider
      value={{
        theme,
        setTheme,
        textSize,
        setTextSize,
        sizeClass,
        allTasks,
        setAllTasks,
        taskName,
        setTaskName,
        startTime,
        setStartTime,
        endTime,
        setEndTime,
        taskDescript,
        setTaskDescript,
        raiseBtn,
        decreaseBtn,
      }}
    >
      {children}
    </todoContext.Provider>
  );
};
