import React, { useContext, useEffect } from "react";
import GoToHomePage from "../components/GoBackBtn";
import { todoContext } from "../components/todoCotext";
import { AnimatePresence, motion } from "framer-motion";
const Setting = () => {
  const { theme, setTheme, motion_fade, motion_theme, setTextSize, h3_size } =
    useContext(todoContext);

  const textSytle_theme = `transition-all duration-500 font-['Luckiest_Guy'] ${
    theme ? "text-[--dark-text-g]" : "text-[--light-text-g]"
  }`;

  const btnStyle_theme = `transition-all duration-500 w-[20rem] grid grid-cols-3 items-center ${
    theme ? "bg-[--dark-component-g]" : "bg-[--light-component-g]"
  } rounded-full mb-4`;

  const textSytle_FontSize = `transition-all duration-500 font-['Luckiest_Guy'] ${
    theme ? "text-[--dark-text-y]" : "text-[--light-text-y]"
  }`;

  const btnStyle_FontSize =
    "transition-all duration-500 w-[20rem] items-center bg-[--light-component-y] rounded-full mb-4";

  useEffect(() => {}, [theme]);

  return (
    <motion.section {...motion_fade} className={`setting  h-full`}>
      <AnimatePresence mode="wait">
        <motion.div
          {...motion_theme}
          className="col-start-1 col-span-3 items-start pt-12 relative h-full"
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

          <div className="flex flex-col gap-8 items-center justify-center w-[80%]  py-8 mx-auto">
            {/* theme setting */}
            <section className="theme flex flex-col  gap-2 items-center justify-center w-full">
              <h3 className={`${textSytle_theme} ${h3_size}`}>THEME</h3>
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
                <h3 className={`${textSytle_theme} ${h3_size}`}>LIGHT</h3>
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
                <h3 className={`${textSytle_theme} ${h3_size}`}>Dark</h3>
              </button>
            </section>

            {/* font setting */}
            <section className="font-size flex flex-col  gap-2 items-center justify-center w-full">
              <h3 className={`${textSytle_FontSize} ${h3_size}`}>FONT SIZE</h3>
              <button
                className={`${btnStyle_FontSize} ${h3_size}`}
                onClick={() => setTextSize("small")}
              >
                <h3 className={`${textSytle_FontSize} ${h3_size}`}>SMALL</h3>
              </button>
              <button
                className={btnStyle_FontSize}
                onClick={() => setTextSize("medium")}
              >
                <h3 className={`${textSytle_FontSize} ${h3_size}`}>MEDIUM</h3>
              </button>
              <button
                className={btnStyle_FontSize}
                onClick={() => setTextSize("large")}
              >
                <h3 className={`${textSytle_FontSize} ${h3_size}`}>BIG</h3>
              </button>
            </section>
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.section>
  );
};

export default Setting;
