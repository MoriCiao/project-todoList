import React, { Fragment, use, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { todoContext } from "../components/todoCotext";
import { AnimatePresence, motion } from "framer-motion";

const Header = () => {
  const {
    textSize,
    sizeClass,
    theme,
    handleScroll,
    motion_theme,
    pathname,
    h1_size,
    h3_size,
  } = useContext(todoContext);
  const headerBtn = [
    {
      id: 1,
      type: "button",
      link: "alltasks",
      href: "#alltasks",
      text: "ALL TASKS",
      img_bg: "/project-todoList/icon/Ellipse-light-g.svg",
      img_content: theme
        ? "/project-todoList/icon/list-dark-g.svg"
        : "/project-todoList/icon/list-light-g.svg",
      bg_color: theme ? "bg-[--dark-component-g]" : "bg-[--light-component-g]",
      span_className: theme ? "text-[--dark-text-g] " : "text-[--light-text-g]",
    },
    {
      id: 2,
      type: "button",
      link: "newtodo",
      href: "#newtodo",
      text: "NEW TODO",
      img_bg: theme
        ? "/project-todoList/icon/Ellipse-dark-y.svg"
        : "/project-todoList/icon/Ellipse-light-y.svg",
      img_content: theme
        ? "/project-todoList/icon/plus-dark-y.svg"
        : "/project-todoList/icon/plus-light-y.svg",
      bg_color: theme ? "bg-[--dark-component-y]" : "bg-[--light-component-y]",
      span_className: theme ? "text-[--dark-text-y] " : "text-[--light-text-y]",
    },
    {
      id: 3,
      type: "button",
      link: "setting",
      href: "#setting",
      text: "SETTING",
      img_bg: "/project-todoList/icon/Ellipse-light-g.svg",
      img_content: theme
        ? "/project-todoList/icon/Settings-dark.svg"
        : "/project-todoList/icon/Settings-light.svg",
      bg_color: theme ? "bg-[--dark-component-g]" : "bg-[--light-component-g]",
      span_className: theme ? "text-[--dark-text-g] " : "text-[--light-text-g]",
    },
  ];

  return (
    <AnimatePresence mode="wait">
      <motion.section
        // key值是為了分割
        key={theme ? "dark" : "light"}
        {...motion_theme}
        className={`relative ${
          theme ? "bg-[--dark-bg]" : "bg-[--light-bg]"
        } header-section  p-4 h-full `}
      >
        <div className={` flex flex-col items-center justify-start`}>
          <Link to="/" className="py-4">
            <h1
              className={`transition-all duration-500 ${
                theme ? "text-[--light-bg]" : "text-[--dark-bg]"
              } ${h1_size} `}
            >
              My List
            </h1>
          </Link>
          <nav className="flex flex-col md:w-[80%] w-[90%]">
            {headerBtn.map((btn) => {
              return (
                <Link
                  to={btn.link}
                  key={btn.id}
                  className={`mb-4 w-full  isClickBtn ${btn.bg_color} flex items-center justify-center rounded-xl p-4 border border-white/50 lg:h-auto h-30
                `}
                  onClick={handleScroll}
                >
                  <div
                    className={`${btn.bg_color} rounded-full  w-[5rem]  h-[5rem]  flex items-center justify-center `}
                  >
                    <img className="w-[60%]" src={btn.img_content} alt="" />
                  </div>

                  <div className="w-[75%] text-center">
                    <h3
                      className={`${btn.span_className} ${h3_size} transition-all duration-500 tracking-widest font-['Luckiest_Guy']`}
                    >
                      {btn.text}
                    </h3>
                  </div>
                </Link>
              );
            })}
          </nav>
        </div>
      </motion.section>
    </AnimatePresence>
  );
};

export default Header;
