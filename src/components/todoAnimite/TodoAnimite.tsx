
import { motion } from 'framer-motion'
import { useContext } from 'react'
import { Bounce, Fade } from 'react-awesome-reveal'
import { UIContext } from '../../contexts/UIContext'


const ImgSticky  = ({color = "green"} ) =>{
   const imgGreen = "/project-todoList/animiteItems/animate-g-1.webp"
   const imgYellow = "/project-todoList/animiteItems/animate-y-1.webp"
    return (
        <img src={color === "green" ? imgGreen  : imgYellow } alt="動畫便條紙" className='w-full h-auto' />
    )
}

type ImgDivProps = {
    color :string;
    top? :string;
    left? :string;
    bottom? :string;
    right? :string;
    delay? :number;
    rotate?: number
}

const ImgDiv = ({color,top ,left, bottom , right , delay = 0 , rotate = 0 }:ImgDivProps) =>{

    return(
        <motion.div 
            initial={{rotate: 0 ,scale: 0.8}}
            animate={{rotate: rotate ,scale: [0.8,1.25,1]} }
            transition={{
                scale:{delay: delay * 0.5 ,duration:1.25},
                rotate:{delay: delay ,duration: 0.5} }}
            className={`absolute top-${top} left-${left} bottom-${bottom} right-${right} w-[20%]`}>
            <ImgSticky color={color}/>
        </motion.div>
    )
}


export default function TodoAnimite() {
    const UICtx = useContext(UIContext)
    const textShadow = UICtx.theme 
    ? [`0 5px 5px #9afc863f`, `0 15px 20px #ff80002f`, `0 5px 5px #ff525254`] 
    : [`0 5px 5px #0000007f`, `0 15px 20px #0000007f`, `0 5px 5px #0000007f`]
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
                    <motion.span 
                        initial={{ y : 0}}
                        animate={{ y : [10, -10 ,10] ,textShadow: textShadow}}
                        transition={{duration: 3 , repeat: Infinity ,delay: 4}}
                        className={`block text-[6rem] text-shadow-lg/50 ${UICtx.theme ? "text-white" : "text-green-400" }`} >
                            Record
                    </motion.span>
                    <motion.span 
                        initial={{ y : 0}}
                        animate={{ y : [10, -10 ,10] ,textShadow: textShadow}}
                        transition={{duration: 3 , repeat: Infinity ,delay: 4.2}}
                        className={`block text-[6rem] text-shadow-lg/50 ${UICtx.theme ? "text-white" : "text-yellow-400" }`} >
                            Your
                    </motion.span>
                    <motion.span 
                        initial={{ y : 0 }}
                        animate={{ y : [10, -10 ,10] ,textShadow: textShadow}}
                        transition={{duration: 3 , repeat: Infinity ,delay: 4.4}}
                        className={`block text-[6rem] text-shadow-lg/50 ${UICtx.theme ? "text-white" : "text-red-400" }`} >
                            Life!
                    </motion.span>
                </Bounce>

        </motion.div>
    </div>
  )
}
