import React, { useContext, useEffect } from "react";
import { todoContext } from "../components/todoCotext";
import { motion } from "framer-motion";
const HomePage = () => {
  const {
    textSize,

    sizeClass,
    theme,
    bgLightImg,
    bgDarkImg,
    motion_fade,
  } = useContext(todoContext);

  return (
    <motion.section
      {...motion_fade}
      className={`${sizeClass[textSize]} overflow-hidden`}
    >
      <div
        className={`py-10  m-auto max-w-[45rem] w-full ${
          theme ? "scale-[1.5] " : ""
        }`}
      >
        <img
          className={``}
          src={theme ? bgDarkImg : bgLightImg}
          alt="HomePageIMG"
        />
      </div>
    </motion.section>
  );
};

export default HomePage;
HomePage;
