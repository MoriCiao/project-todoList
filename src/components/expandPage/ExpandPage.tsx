import React, { SetStateAction, useContext, useEffect, useRef, useState } from 'react'
import { TasksContext } from '../../contexts/TasksContext';
import { Zoom } from 'react-awesome-reveal';
import { TaskDate, TaskTitle } from '../AllTasks/TaskCardItems';
import { UIContext } from '../../contexts/UIContext';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'; 

export type Task = {
    taskName: string
    taskDescript: string
    startTime: string
    endTime: string 
    isCheck: boolean
}

export type ExpandState = {
  task : Task 
  isOpen : boolean
}

export type taskProps = {
  expand : ExpandState
  setExpand:React.Dispatch<SetStateAction<ExpandState>> ;
  themeOptions :string
}


const ExpandPage = ({expand , setExpand ,themeOptions} : taskProps) =>{
    console.log(expand)
    const UICtx = useContext(UIContext);
    const tasksCtx = useContext(TasksContext);
    const expandRef = useRef<HTMLTextAreaElement | null>(null)
    const task = expand.task
    const navigte = useNavigate()
    const handleDescript = () =>{
      
      tasksCtx.dispatch({type : "REVISE_DESCRIPT" ,payload : task})
      setExpand({task: {
        taskName: "",
        taskDescript: "",
        startTime: "",
        endTime: "",
        isCheck: false,
      },
      isOpen: false})
     
      setTimeout(()=>{
         navigte(0)
        tasksCtx.dispatch({ type: "LOADING_STATUS" ,payload :false})
      },1500)
      
    }
  useEffect(()=>{
    if(expandRef.current) expandRef.current.focus()
  },[])
  return (
    <section className={`expand-page fixed inset-0 z-99 flex items-start justify-center backdrop-blur-sm 
          bg-black/50`}>
        <Zoom>
            <div className={`m-auto mt-12 w-[92vw] px-12 py-8 max-w-xl  border flex flex-col gap-4 text-white 
                bg-[--dark-bg] border-white/50`}>
       
                <TaskTitle task={task} UICtx={UICtx} themeOptions={themeOptions}/>
                <TaskDate task={task} UICtx={UICtx} themeOptions={themeOptions}/>

                <textarea 
                  ref={expandRef}
                  value={task?.taskDescript ?? ""}
                  onChange={(e)=>setExpand((prev)=>({...prev, task: {...task, taskDescript : e.target.value}}))}
                  className={`text-xl h-50 border bg-white/50 flex items-start justify-start p-4 text-black `}/>
                
                <motion.button 
                  whileHover={{scale : 1.15 ,backgroundColor: "rgb(255,255,255)" , color: "rgb(0,0,0)"}}
                  whileTap={{scale: 0.95}}
                  className='px-4 border m-auto rounded w-20'onClick={handleDescript}>Save</motion.button>
            </div>
        </Zoom>
    </section>
  )
}
export default ExpandPage