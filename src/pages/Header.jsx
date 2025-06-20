import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import { todoContext } from "../components/todoCotext";

const RWD_Btn = ["md:grid", "md:grid-cols-5", "sm:flex"];

const Header = () => {
  const { textSize, sizeClass, theme } = useContext(todoContext);

  const headerBtn = [
    {
      id: 1,
      type: "button",
      link: "alltasks",
      href: "#alltasks",
      text: "ALL TASKS",
      img_bg: "/icon/Ellipse-light-g.svg",
      img_content: theme ? "/icon/list-dark-g.svg" : "/icon/list-light-g.svg",
      bg_color: theme ? "bg-[--dark-component-g]" : "bg-[--light-component-g]",
      span_className: theme ? "text-[--dark-text-g] " : "text-[--light-text-g]",
    },
    {
      id: 2,
      type: "button",
      link: "newtodo",
      href: "#newtodo",
      text: "NEW TODO",
      img_bg: theme ? "/icon/Ellipse-dark-y.svg" : "/icon/Ellipse-light-y.svg",
      img_content: theme ? "/icon/plus-dark-y.svg" : "/icon/plus-light-y.svg",
      bg_color: theme ? "bg-[--dark-component-y]" : "bg-[--light-component-y]",
      span_className: theme ? "text-[--dark-text-y] " : "text-[--light-text-y]",
    },
    {
      id: 3,
      type: "button",
      link: "setting",
      href: "#setting",
      text: "SETTING",
      img_bg: "/icon/Ellipse-light-g.svg",
      img_content: theme
        ? "/icon/Settings-dark.svg"
        : "/icon/Settings-light.svg",
      bg_color: theme ? "bg-[--dark-component-g]" : "bg-[--light-component-g]",
      span_className: theme ? "text-[--dark-text-g] " : "text-[--light-text-g]",
    },
  ];

  return (
    <section
      className={` ${
        theme ? "bg-[--dark-bg]" : "bg-[--light-bg]"
      } header-section  p-4 h-full`}
    >
      <div
        className={`${sizeClass[textSize]} flex flex-col items-center justify-start`}
      >
        <Link to="/" className="py-4">
          <h1 className={`${theme ? "text-[--light-bg]" : "text-[--dark-bg]"}`}>
            My List
          </h1>
        </Link>
        <nav className="flex flex-col ">
          {headerBtn.map((btn) => {
            return (
              <Link to={btn.link} key={btn.id} className="mb-4 w-full">
                <button
                  type={btn.type}
                  className={`${btn.bg_color} w-full grid grid-cols-5 rounded-xl p-4`}
                >
                  <div
                    className={`${btn.bg_color} col-span-1 col-start-1 rounded-full  w-[4rem] h-[4rem] flex items-center justify-center`}
                  >
                    <img className="stroke-none" src={btn.img_content} alt="" />
                  </div>
                  <div className="col-span-4 col-start-2">
                    <span
                      className={`${btn.span_className} text-[2.5rem] font-['Luckiest_Guy']`}
                    >
                      {btn.text}
                    </span>
                  </div>
                </button>
              </Link>
            );
          })}
        </nav>
      </div>
    </section>
  );
};

export default Header;
