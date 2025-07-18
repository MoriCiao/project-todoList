import React, { useContext, useEffect } from "react";
import GoToHomePage from "../components/GoBackBtn";
import { todoContext } from "../components/todoCotext";
import { AnimatePresence, motion } from "framer-motion";
const Setting = () => {
  const {
    textSize,
    setTextSize,
    sizeClass,
    theme,
    setTheme,
    motion_fade,
    motion_theme,
  } = useContext(todoContext);

  const textSytle_theme = `font-['Luckiest_Guy'] ${
    theme ? "text-[--dark-text-g]" : "text-[--light-text-g]"
  } text-[3rem]`;

  const btnStyle_theme = `w-[20rem] grid grid-cols-3 items-center ${
    theme ? "bg-[--dark-component-g]" : "bg-[--light-component-g]"
  } rounded-full mb-4`;

  const textSytle_FontSize = `font-['Luckiest_Guy'] ${
    theme ? "text-[--dark-text-y]" : "text-[--light-text-y]"
  } text-[3rem]`;

  const btnStyle_FontSize =
    "w-[20rem] items-center bg-[--light-component-y] rounded-full mb-4";

  useEffect(() => {
    console.log("Theme變化了!");
  }, [theme]);

  return (
    <motion.section {...motion_fade} className={`setting  `}>
      <AnimatePresence
        mode="wait"
        onExitComplete={() => console.log("主題切換動畫已完成...")}
      >
        <motion.div
          {...motion_theme}
          className="col-start-1 col-span-3 items-start pt-12 relative"
        >
          <GoToHomePage
            arrowImg={
              theme
                ? "/project-todoList/icon/chevron-left-dark-g.svg"
                : "/project-todoList/icon/chevron-left-g.svg"
            }
          />
          <img
            id="setting"
            src={
              theme
                ? "/project-todoList/title/Setting-dark.svg"
                : "/project-todoList/title/Setting.svg"
            }
            alt="Setting.svg"
            className="mx-auto"
          />

          <div className="flex flex-col items-center w-[80%] max-w-[30rem] mt-8 mx-auto">
            {/* theme setting */}
            <section className="theme flex flex-col">
              <h2 className={textSytle_theme}>THEME</h2>
              <button
                className={btnStyle_theme}
                onClick={() => setTheme(false)}
              >
                <img
                  src={
                    theme
                      ? "/project-todoList/icon/sun-dark-g.svg"
                      : "/project-todoList/icon/sun-light-g.svg"
                  }
                  className="col-start-1 m-auto"
                  alt=""
                />
                <h2 className={`${textSytle_theme}`}>LIGHT</h2>
              </button>
              <button className={btnStyle_theme} onClick={() => setTheme(true)}>
                <img
                  src={
                    theme
                      ? "/project-todoList/icon/moon-dark-g.svg"
                      : "/project-todoList/icon/moon-light-g.svg"
                  }
                  className="col-start-1 m-auto"
                  alt=""
                />
                <h2 className={`${textSytle_theme} `}>Dark</h2>
              </button>
            </section>

            {/* font setting */}
            <section className="font-size flex flex-col">
              <h2 className={textSytle_FontSize}>FONT SIZE</h2>
              <button
                className={btnStyle_FontSize}
                onClick={() => setTextSize("small")}
              >
                <h2 className={`${textSytle_FontSize}`}>SMALL</h2>
              </button>
              <button
                className={btnStyle_FontSize}
                onClick={() => setTextSize("medium")}
              >
                <h2 className={`${textSytle_FontSize}`}>MEDIUM</h2>
              </button>
              <button
                className={btnStyle_FontSize}
                onClick={() => setTextSize("large")}
              >
                <h2 className={`${textSytle_FontSize}`}>BIG</h2>
              </button>
            </section>
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.section>
  );
};

export default Setting;
