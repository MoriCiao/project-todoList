import React, { useContext } from "react";
import GoToHomePage from "../components/GoBackBtn";
import { UIContext } from "../contexts/UIContext";
import { AnimatePresence, motion } from "framer-motion";
import TitleImage from "../components/TitleImage";
const Setting = () => {
  const UICtx = useContext(UIContext);

  const textSytle_theme = `transition-all duration-500 font-['Luckiest_Guy'] ${
    UICtx.theme ? "text-[--dark-text-g]" : "text-[--light-text-g]"
  }`;

  const btnStyle_theme = `transition-all duration-500 w-[20rem] grid grid-cols-3 items-center ${
    UICtx.theme ? "bg-[--dark-component-g]" : "bg-[--light-component-g]"
  } rounded-full mb-4`;

  const textSytle_FontSize = `transition-all duration-500 font-['Luckiest_Guy'] ${
    UICtx.theme ? "text-[--dark-text-y]" : "text-[--light-text-y]"
  }`;

  const btnStyle_FontSize =
    "transition-all duration-500 w-[20rem] items-center bg-[--light-component-y] rounded-full mb-4";

  return (
    <motion.section {...UICtx.motion_fade} className={`setting  h-full`}>
      <AnimatePresence mode="wait">
        <motion.div
          {...UICtx.motion_theme}
          className="col-start-1 col-span-3 items-start pt-12 relative h-full"
        >
          <GoToHomePage
            arrowImg={
              UICtx.theme
                ? "/project-todoList/icon/chevron-left-dark-g.svg"
                : "/project-todoList/icon/chevron-left-g.svg"
            }
          />

          <TitleImage
            id="setting"
            src={
              UICtx.theme
                ? "/project-todoList/title/Setting-dark.svg"
                : "/project-todoList/title/Setting.svg"
            }
            className={`mx-auto`}
            alt="Setting.svg"
          />

          <div className="flex flex-col gap-8 items-center justify-center w-[80%]  py-8 mx-auto">
            {/* theme setting */}
            <section className="theme flex flex-col  gap-2 items-center justify-center w-full">
              <h3 className={`${textSytle_theme} ${UICtx.h3_size}`}>THEME</h3>
              <button
                className={btnStyle_theme}
                onClick={() => UICtx.setTheme(false)}
              >
                <img
                  src={
                    UICtx.theme
                      ? "/project-todoList/icon/sun-dark-g.svg"
                      : "/project-todoList/icon/sun-light-g.svg"
                  }
                  className="col-start-1 m-auto"
                  alt=""
                />
                <h3 className={`${textSytle_theme} ${UICtx.h3_size}`}>LIGHT</h3>
              </button>
              <button
                className={btnStyle_theme}
                onClick={() => UICtx.setTheme(true)}
              >
                <img
                  src={
                    UICtx.theme
                      ? "/project-todoList/icon/moon-dark-g.svg"
                      : "/project-todoList/icon/moon-light-g.svg"
                  }
                  className="col-start-1 m-auto"
                  alt=""
                />
                <h3 className={`${textSytle_theme} ${UICtx.h3_size}`}>Dark</h3>
              </button>
            </section>

            {/* font setting */}
            <section className="font-size flex flex-col  gap-2 items-center justify-center w-full">
              <h3 className={`${textSytle_FontSize} ${UICtx.h3_size}`}>
                FONT SIZE
              </h3>
              <button
                className={`${btnStyle_FontSize} ${UICtx.h3_size}`}
                onClick={() => UICtx.setTextSize("small")}
              >
                <h3 className={`${textSytle_FontSize} ${UICtx.h3_size}`}>
                  SMALL
                </h3>
              </button>
              <button
                className={btnStyle_FontSize}
                onClick={() => UICtx.setTextSize("medium")}
              >
                <h3 className={`${textSytle_FontSize} ${UICtx.h3_size}`}>
                  MEDIUM
                </h3>
              </button>
              <button
                className={btnStyle_FontSize}
                onClick={() => UICtx.setTextSize("large")}
              >
                <h3 className={`${textSytle_FontSize} ${UICtx.h3_size}`}>
                  BIG
                </h3>
              </button>
            </section>
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.section>
  );
};

export default Setting;
