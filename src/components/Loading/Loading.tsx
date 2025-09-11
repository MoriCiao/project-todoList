import React, { useContext, useEffect } from 'react'
import { TasksContext } from '../../contexts/TasksContext';
import { Zoom } from 'react-awesome-reveal';
import { UIContext } from '../../contexts/UIContext';

const Loading = () =>{
    const UICtx = useContext(UIContext);
    const tasksCtx = useContext(TasksContext);
    
  return (
    <section className={`loading-page fixed inset-0 z-100 flex items-center justify-center backdrop-blur-sm bg-balck/50`}>
        <Zoom>
            <p className={`rounded-full text-4xl w-50 h-50 text-white font-[--font-title] bg-black flex items-center justify-center`}>
              Loading
            </p>
        </Zoom>
    </section>
  )
}
export default Loading