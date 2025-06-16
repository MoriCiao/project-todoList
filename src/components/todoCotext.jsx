import { createContext, useState } from "react";
import React from "react";

export const todoContext = createContext();
export const TextSizeProvider = ({ children }) => {
  // 字體大小變更
  const [textSize, setTextSize] = useState("medium");
  const sizeClass = {
    small: "scale-[80%]",
    medium: "scale-100",
    large: "scale-[115%]",
  };
  // 深淺色主題變更
  const [theme, setTheme] = useState(false);

  return (
    <todoContext.Provider value={{ textSize, setTextSize, sizeClass }}>
      {children}
    </todoContext.Provider>
  );
};
