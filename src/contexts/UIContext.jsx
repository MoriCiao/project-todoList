import React, { createContext, useMemo, useRef, useState } from "react";

// ====== UI Context ======
export const UIContext = createContext();

const bgLightImg = "/project-todoList/main-bg-note-light.webp";
const bgDarkImg = "/project-todoList/main-bg-note-dark.webp";

export const UIProvider = ({ children }) => {
  const [textSize, setTextSize] = useState("medium");

  function userTheme() {
    const savedTheme = localStorage.getItem("todoTheme");
    if (!savedTheme) return true;
    const userTheme = savedTheme === "dark" ? true : false;
    return userTheme;
  }

  // 深淺色主題變更
  const [theme, setTheme] = useState(userTheme());

  const h1_size = `${
    textSize === "large"
      ? "text-[5rem]"
      : textSize === "medium"
      ? "text-[4rem]"
      : textSize === "small"
      ? "text-[3rem]"
      : null
  }`;
  const h3_size = `${
    textSize === "large"
      ? "text-[3.5rem]"
      : textSize === "medium"
      ? "text-[3rem]"
      : textSize === "small"
      ? "text-[2.5rem]"
      : null
  }`;
  const h5_size = `${
    textSize === "large"
      ? "text-[2rem]"
      : textSize === "medium"
      ? "text-[1.75rem]"
      : textSize === "small"
      ? "text-[1.5rem]"
      : null
  }`;

  const p_size = `${
    textSize === "large"
      ? "text-[1.25rem]"
      : textSize === "medium"
      ? "text-[1.1rem]"
      : textSize === "small"
      ? "text-[1rem]"
      : null
  }`;
  const motion_fade = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  const motion_theme = {
    initial: { opacity: 0.0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.5 },
  };

  const homepageBG = theme ? bgDarkImg : bgLightImg;

  // scroll
  const mainRef = useRef(null);
  const headerRef = useRef(null);
  const handleScroll = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      textSize,
      setTextSize,
      h1_size,
      h3_size,
      h5_size,
      p_size,
      motion_fade,
      motion_theme,
      homepageBG,
      mainRef,
      headerRef,
      handleScroll,
    }),
    [theme, textSize]
  );

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};
