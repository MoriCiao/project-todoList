import React, { useContext, useEffect } from "react";
import { TasksContext } from "../../contexts/TasksContext";
import { Zoom } from "react-awesome-reveal";
import { UIContext } from "../../contexts/UIContext";

const Loading = () => {
  const UICtx = useContext(UIContext);
  const tasksCtx = useContext(TasksContext);

  return (
    <section
      className={`loading-page bg-balck/50 fixed inset-0 z-100 flex items-center justify-center backdrop-blur-sm`}
    >
      <Zoom>
        <p
          className={`flex h-50 w-50 items-center justify-center rounded-full bg-black font-[--font-title] text-4xl text-white`}
        >
          Loading
        </p>
      </Zoom>
    </section>
  );
};
export default Loading;
