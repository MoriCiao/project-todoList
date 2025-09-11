import React, { useContext } from "react";
import { UIContext } from "../../contexts/UIContext";
import { motion } from "framer-motion";
export const SettingTitle = ({ title, style_i }) => {
  const UICtx = useContext(UIContext);

  return <h3 className={`${style_i} ${UICtx.h3_size}`}>{title}</h3>;
};

export const SettingIMG = ({ src, alt }) => (
  <img src={src} alt={alt} className="col-start-1 m-auto" />
);

export const SettingBtn = ({ children, className, onClick }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
      className={className}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};
