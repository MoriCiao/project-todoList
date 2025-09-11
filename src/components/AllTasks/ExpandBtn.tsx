import React, { useContext } from 'react'
import { UIContext } from '../../contexts/UIContext'
import { motion } from 'framer-motion'
import { TasksContext } from '../../contexts/TasksContext'
const ExpandBtn = ({task , setExpand }) => {
    const { theme } = useContext(UIContext)
    const tasksCtx = useContext(TasksContext);
    
  return (
    <motion.button 
        whileHover={{scale : 1.15 , filter: "brightness(0.5)"}}
        whileTap={{scale: 0.95}}
        onClick={()=> setExpand({task : task , isOpen: true})}
        type='button' className={`p-1 h-10 w-10`}>
        <img 
          src={theme 
            ? "/project-todoList/icon/external-link-dark.svg" 
            : "/project-todoList/icon/external-link-light.svg"}
          alt="修改按鈕" 
          className={`w-fit h-fit`}/>    
    </motion.button>
  )
}


export default ExpandBtn