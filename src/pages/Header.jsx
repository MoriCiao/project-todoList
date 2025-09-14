import { useContext } from "react";
import { Link } from "react-router-dom";
import { UIContext } from "../contexts/UIContext";
import { AnimatePresence, motion } from "framer-motion";
import {
  HeaderLink,
  HeaderIcon,
  HeaderTitle,
  themeOption,
} from "../components/HeaderBtnItems";
import { Fade } from "react-awesome-reveal";

const Header = () => {
  const UICtx = useContext(UIContext);

  return (
    <AnimatePresence mode="wait">
      <motion.section
        // key值是為了分割
        key={UICtx.theme ? "dark" : "light"}
        {...UICtx.motion_theme}
        className={`relative ${
          UICtx.theme ? "bg-[--dark-bg]" : "bg-[--light-bg]"
        } header-section  p-4 h-full `}
      >
        <div className={` flex flex-col items-center justify-start`}>
          <Link to="/" className="py-4">
            <h1
              className={`transition-all duration-500 font-['Luckiest_Guy'] ${
                UICtx.theme ? "text-[--light-bg]" : "text-[--dark-bg]"
              } ${UICtx.h1_size} `}
            >
              My List
            </h1>
          </Link>
          <nav className="flex flex-col gap-4 md:w-[80%] w-[90%]">
            <Fade direction="up" triggerOnce={true} cascade damping={0.5}>
              {/* "ALL TASKS" */}
              <HeaderLink
                link="alltasks"
                onClick={() => UICtx.handleScroll(UICtx.mainRef)}
                themeBgColor={themeOption("green", UICtx).bg}
              >
                <HeaderIcon
                  bgColor={themeOption("green", UICtx).bg}
                  src={
                    UICtx.theme
                      ? "/project-todoList/icon/list-dark-g.svg"
                      : "/project-todoList/icon/list-light-g.svg"
                  }
                />
                <HeaderTitle
                  label="ALL TASKS"
                  themeTextColor={themeOption("green", UICtx).text}
                  h3_size={UICtx.h3_size}
                />
              </HeaderLink>
              {/* "NEW TODO" */}
              <HeaderLink
                link="newtodo"
                onClick={() => UICtx.handleScroll(UICtx.mainRef)}
                themeBgColor={themeOption("yellow", UICtx).bg}
              >
                <HeaderIcon
                  bgColor={themeOption("yellow", UICtx).bg}
                  src={
                    UICtx.theme
                      ? "/project-todoList/icon/plus-dark-y.svg"
                      : "/project-todoList/icon/plus-light-y.svg"
                  }
                />
                <HeaderTitle
                  label="NEW TODO"
                  themeTextColor={themeOption("yellow", UICtx).text}
                  h3_size={UICtx.h3_size}
                />
              </HeaderLink>
              {/* "SETTING" */}
              <HeaderLink
                link="setting"
                onClick={() => UICtx.handleScroll(UICtx.mainRef)}
                themeBgColor={themeOption("green", UICtx).bg}
              >
                <HeaderIcon
                  bgColor={themeOption("green", UICtx).bg}
                  src={
                    UICtx.theme
                      ? "/project-todoList/icon/Settings-dark.svg"
                      : "/project-todoList/icon/Settings-light.svg"
                  }
                />
                <HeaderTitle
                  label="SETTING"
                  themeTextColor={themeOption("green", UICtx).text}
                  h3_size={UICtx.h3_size}
                />
              </HeaderLink>
            </Fade>
          </nav>
        </div>
      </motion.section>
    </AnimatePresence>
  );
};

export default Header;
