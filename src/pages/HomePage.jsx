import React, { useContext, useEffect } from "react";
import { todoContext } from "../components/todoCotext";
import { motion } from "framer-motion";
const HomePage = () => {
  const { theme, bgLightImg, bgDarkImg, motion_fade } = useContext(todoContext);

  return (
    <motion.section
      {...motion_fade}
      className={` overflow-hidden w-full h-full flex `}
    >
      <img
        className={`object-fit  w-[80%] sm:m-auto`}
        src={theme ? bgDarkImg : bgLightImg}
        alt="HomePageIMG"
        loading="eager"
      />
    </motion.section>
  );
};

export default HomePage;
HomePage;
