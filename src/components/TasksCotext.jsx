import React, {
  createContext,
  useState,
  useReducer,
  useEffect,
  useMemo,
} from "react";

// ====== Tasks Context ======
export const TasksContext = createContext();

export const TasksProvider = ({ children }) => {
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
  };

  const decreaseBtn = () => {
    // 按照時間大到小排序
    const newTasksList = [...allTasks].sort(
      (a, b) => new Date(b.startTime) - new Date(a.startTime)
    );

    setAllTasks(newTasksList);
  };

  const defaultTasks = [
    {
      taskName: "學習 React 基礎",
      startTime: "2025-06-21T08:00:00.000Z",
      endTime: "2025-06-21T10:00:00.000Z",
      taskDescript: "觀看 React 官方教學並製作 TODO List",
      isCheck: false,
    },
    {
      taskName: "閱讀 JavaScript 書籍",
      startTime: "2025-06-22T07:30:00.000Z",
      endTime: "2025-06-22T09:00:00.000Z",
      taskDescript: "閱讀《你不知道的 JavaScript》第一章",
      isCheck: false,
    },
    {
      taskName: "練習 Git 指令",
      startTime: "2025-06-23T06:00:00.000Z",
      endTime: "2025-06-23T07:30:00.000Z",
      taskDescript: "練習 git init / clone / commit / push 流程",
      isCheck: false,
    },
    {
      taskName: "設計個人網頁",
      startTime: "2025-06-24T09:00:00.000Z",
      endTime: "2025-06-24T11:00:00.000Z",
      taskDescript: "使用 HTML/CSS 架設個人作品集首頁",
      isCheck: false,
    },
    {
      taskName: "撰寫學習筆記",
      startTime: "2025-06-25T13:00:00.000Z",
      endTime: "2025-06-25T14:00:00.000Z",
      taskDescript: "整理本週 JavaScript 學習重點並發佈到 Notion",
      isCheck: false,
    },
  ];

  function getInitialStorage() {
    const saved = localStorage.getItem("mylistTasks");

    try {
      if (!saved) {
        // 裡面無任何資料
        localStorage.setItem("mylistTasks", JSON.stringify(defaultTasks));
        return { allTasks: defaultTasks };
      }
      return { allTasks: JSON.parse(saved) };
    } catch (e) {
      console.error("本機加載失敗...", e);
      return { allTasks: defaultTasks };
    }
  }

  const TaskBtnReducer = (state, action) => {
    switch (action.type) {
      case "DELETE_TASK":
        const filteredTasks = state.allTasks.filter(
          (task) => task.taskName !== action.payload
        );
        return { ...state, allTasks: filteredTasks };
      case "IS_CHECK":
        const toggledTasks = state.allTasks.map((task) =>
          task.taskName === action.payload
            ? { ...task, isCheck: !task.isCheck }
            : task
        );
        return { ...state, allTasks: toggledTasks };
      case "ADD_TASK": {
        return { ...state, allTasks: [...state.allTasks, action.payload] };
      }
      case "RAISE_BTN": {
        const newTasksList = [...state.allTasks].sort((a, b) => {
          return new Date(a.startTime) - new Date(b.startTime);
        });
        return { ...state, allTasks: newTasksList };
      }
      case "DECREASE_BTN": {
        const newTasksList = [...state.allTasks].sort((a, b) => {
          return new Date(b.startTime) - new Date(a.startTime);
        });
        return { ...state, allTasks: newTasksList };
      }

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(TaskBtnReducer, {}, getInitialStorage);

  const value = useMemo(
    () => ({
      state,
      dispatch,
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
    }),
    [state, taskName, startTime, endTime, taskDescript]
  );

  useEffect(() => {
    try {
      localStorage.setItem("mylistTasks", JSON.stringify(state.allTasks));

      // console.log("localStorage 已更新 ...");
    } catch (e) {
      console.error("儲存失敗 ：", e);
    }
  }, [state.allTasks]);
  return (
    <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
  );
};
