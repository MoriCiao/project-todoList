import React, { useContext, useEffect } from "react";
import { UIContext } from "../components/UIContext";
import { motion } from "framer-motion";
const HomePage = () => {
  const UICtx = useContext(UIContext);
  return (
    <motion.section
      {...UICtx.motion_fade}
      className={` overflow-hidden w-full h-full flex `}
    >
      <img
        className={`object-fit  w-[80%] sm:m-auto`}
        src={UICtx.homepageBG}
        alt="HomePageIMG"
        loading="eager"
      />
    </motion.section>
  );
};

export default HomePage;
HomePage;
