
import { motion } from 'framer-motion'
import { useContext } from 'react'
import { Bounce, Fade } from 'react-awesome-reveal'
import { UIContext } from '../../contexts/UIContext'


const ImgStick  = ({color}) =>{
   const imgGreen = "/project-todoList/animiteItems/animate-g-1.webp"
   const imgYellow = "/project-todoList/animiteItems/animate-y-1.webp"
    return (
        <img src={color === "green" ? imgGreen  : imgYellow } alt="動畫便條紙" className='w-full h-auto' />
    )
}

const ImgDiv = ({color,top ,left, bottom , right , delay , rotate}) =>{

    return(
        <motion.div 
            initial={{rotate: 0 ,scale: 0.8}}
            animate={{rotate: rotate ,scale: [0.8,1.25,1]} }
            transition={{
                scale:{delay: delay*0.5 ,duration:1.25},
                rotate:{delay: delay ,duration: 0.5} }}
            className={`absolute top-${top} left-${left} bottom-${bottom} right-${right} w-[20%]`}>
            <ImgStick color={color}/>
        </motion.div>
    )
}


export default function TodoAnimite() {
    const UICtx = useContext(UIContext)
  return (
    <div className='relative w-full sm:h-full h-full flex items-center justify-center'>
        <Fade triggerOnce={true} cascade damping={0.5} >
            <ImgDiv color="yellow" top={"[10%]"} left={"[15%]"} delay={1} rotate={-20}/>
            <ImgDiv color="green" top={"[10%]"} right={"[15%]"} delay={1.4} rotate={20}/>
            <ImgDiv color="green" bottom={"[10%]"} left={"[15%]"} delay={1.8} rotate={-20}/>
            <ImgDiv color="yellow" bottom={"[10%]"} right={"[15%]"} delay={2.2} rotate={20}/>
        </Fade>
        <motion.div 
            initial={{y: 20, opacity:0}}
            animate={{y: 0, opacity:1 , rotate: -5 }}
            transition={{
               opacity: { delay: 2.4 }
            }}
            className='w-full h-full flex lg:flex-row flex-col gap-8 items-center justify-center font-["Luckiest_Guy"] tracking-widest select-none'>
                <Bounce triggerOnce={true} cascade delay={2500} damping={0.3}>
                    <span 
                        className={`text-[6rem] text-shadow-lg/50 ${UICtx.theme ? "text-white text-shadow-yellow-800/50" : "text-green-400 text-shadow-black/50" }`} >
                            Record
                    </span>
                    <span 
                        className={`text-[6rem] text-shadow-lg/50 ${UICtx.theme ? "text-white text-shadow-yellow-800/50" : "text-yellow-400 text-shadow-black/50" }`} >
                            Your
                    </span>
                    <span 
                        className={`text-[6rem] text-shadow-lg/50 ${UICtx.theme ? "text-white text-shadow-yellow-800/50" : "text-red-400 text-shadow-black/50" }`} >
                            Life!
                    </span>
                </Bounce>

        </motion.div>
    </div>
  )
}
