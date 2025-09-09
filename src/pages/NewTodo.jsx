import { useContext, useRef, useEffect, useCallback } from "react";
import { TasksContext } from "../contexts/TasksContext";
import { UIContext } from "../contexts/UIContext";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "flatpickr/dist/themes/confetti.css";
import {
  NewtodoDate,
  NewtodoInput,
  NewtodoLabel,
  NewtodoTextArea,
  SubmitBtn,
} from "../components/NewTodoItems";
import TitleImage from "../components/TitleImage";

const NewTodo = () => {
  const UICtx = useContext(UIContext);
  const tasksCtx = useContext(TasksContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleInputTask = () => {
    if (
      tasksCtx.newTodo.taskName === "" ||
      // tasksCtx.newTodo.startTime === "" ||
      tasksCtx.newTodo.endTime === ""
    ) {
      alert("請輸入任務名稱及選擇開始與結束的日期!");
      return;
    }
    if (tasksCtx.newTodo.startTime > tasksCtx.newTodo.endTime) {
      alert("開始日期不可大於結束日期");
      return;
    }

    const newTask = {
      id: Date.now().toString(),
      taskName: tasksCtx.newTodo.taskName,
      startTime: tasksCtx.newTodo.startTime,
      endTime: tasksCtx.newTodo.endTime,
      taskDescript: tasksCtx.newTodo.descript,
      // 開闔文字
      isCheck: false,
    };

    // 將新資料用 dispatch 導入 Reducer 裡的state.allTask
    tasksCtx.dispatch({ type: "ADD_TASK", payload: newTask });

    // 資料送出後，須把每個參數重新設定
    tasksCtx.setNewTodo({
      taskName: "",
      date: {
        startTime: "",
        endTime: "",
      },
      descript: "",
    });
    // 資料輸入成功後，將頁面導向 Alltasks
    navigate("/alltasks");
  };

  const taskRef = useRef(null);

  useEffect(() => {
    taskRef.current.focus();
  }, []);

  return (
    <motion.section
      {...UICtx.motion_fade}
      className={`newtodo col-start-1 col-span-3 items-center p-12 relative h-full`}
    >
      {/* Newtodo Image */}
      <TitleImage
        id="newtodo"
        src={
          UICtx.theme
            ? "/project-todoList/title/New Todo-dark.svg"
            : "/project-todoList/title/New Todo.svg"
        }
        className={`mx-auto`}
        alt="NewTodo.svg"
      />

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-8 items-center w-[80%] mx-auto  p-2"
      >
        {/* Task Name */}
        <div className="newtodo-Taskname flex flex-col w-full justify-center items-center">
          {/* TaskName label */}
          <NewtodoLabel htmlFor="task-name" name="Task Name" />
          {/* TaskName Input */}
          <NewtodoInput
            type="text"
            name="mission"
            id="mission"
            placeholder="Input Task..."
            maxLength={15}
            className={`InputItem border-0 rounded indent-4 w-[20rem] h-[3rem] ${
              UICtx.p_size
            } ${
              UICtx.theme
                ? "bg-[--dark-component-y] text-[--dark-text-y] placeholder-[--dark-text-y]"
                : "bg-[--light-component-y] text-[--light-text-y] placeholder-[--light-text-y]"
            }`}
            value={tasksCtx.newTodo.taskName}
            onChange={(e) => {
              if (e.target.value.length > 15) {
                alert("最多輸入15個字");
              }
              tasksCtx.setNewTodo((prev) => ({
                ...prev,
                taskName: String(e.target.value),
              }));
            }}
            ref={taskRef}
          />
        </div>

        {/* Deadline */}
        <div className="newtodo-Date flex flex-col w-full justify-center items-center">
          <NewtodoLabel htmlFor="deadline" name="Deadline" />
          <div className="flex flex-col gap-4 items-center w-[20rem]">
            <section className="grid grid-cols-4 items-center">
              <NewtodoLabel htmlFor="start" type="date" name="Start" />
              <NewtodoDate
                name={"start"}
                id={"start"}
                placeholder={"請選擇日期..."}
                value={tasksCtx.newTodo.startTime}
                onChange={(e) =>
                  tasksCtx.setNewTodo((prev) => ({
                    ...prev,
                    startTime: e.target.value,
                  }))
                }
              />
            </section>
            {/* End Time */}
            <section className="grid grid-cols-4 items-center">
              <NewtodoLabel htmlFor="end" type="date" name="End" />

              <NewtodoDate
                name={"end"}
                id={"end"}
                placeholder={"請選擇日期..."}
                value={tasksCtx.newTodo.endTime}
                onChange={(e) =>
                  tasksCtx.setNewTodo((prev) => ({
                    ...prev,
                    endTime: e.target.value,
                  }))
                }
              />
            </section>
          </div>
        </div>

        {/* Description */}
        <div className="newtodo-Description flex flex-col w-full justify-center items-center">
          <NewtodoLabel htmlFor="descript" name="Descript" />
          <NewtodoTextArea
            maxlength="200"
            rows="4"
            placeholder="Describe the task"
            value={tasksCtx.taskDescript}
            onChange={(e) =>
              tasksCtx.setNewTodo((prev) => ({
                ...prev,
                descript: e.target.value,
              }))
            }
          />
        </div>

        <div className="newtodo-Submit flex flex-col w-full justify-center items-center">
          {/* submit btn */}
          <SubmitBtn
            type={"submit"}
            onClick={() => handleInputTask()}
            text="ADD"
          />
        </div>
      </form>
    </motion.section>
  );
};

export default NewTodo;
