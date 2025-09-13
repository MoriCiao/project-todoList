import React, { useContext } from "react";
import { UIContext } from "../contexts/UIContext";
import { motion } from "framer-motion";
import TodoAnimite from "../components/todoAnimite/TodoAnimite";
const HomePage = () => {
  const UICtx = useContext(UIContext);
  return (
    <motion.section
      {...UICtx.motion_fade}
      className={` overflow-hidden w-full h-full flex `}
    >
      <TodoAnimite />
      {/* <img
        className={`object-fit  w-[80%] sm:m-auto`}
        src={UICtx.homepageBG}
        alt="HomePageIMG"
        loading="eager"
      /> */}
    </motion.section>
  );
};

export default HomePage;
HomePage;
