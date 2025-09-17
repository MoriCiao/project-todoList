import React, { useContext, useEffect } from "react";
import { UIContext } from "../contexts/UIContext";
import { motion } from "framer-motion";
import TodoAnimite from "../components/todoAnimite/TodoAnimite";
const HomePage = () => {
  const UICtx = useContext(UIContext);

  return (
    <motion.section
      {...UICtx.motion_fade}
      className={`flex h-full w-full overflow-hidden`}
    >
      <TodoAnimite />
    </motion.section>
  );
};

export default HomePage;
HomePage;
