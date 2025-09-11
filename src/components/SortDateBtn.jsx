import React from "react";
import { motion } from "framer-motion";
const SortDateBtn = ({ text, type, onClick, className }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
      type={type}
      onClick={onClick}
      className={className}
    >
      {text}
    </motion.button>
  );
};

export default SortDateBtn;
