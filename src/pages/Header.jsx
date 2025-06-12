import React, { Fragment } from "react";
import { Link } from "react-router-dom";
const headerBtn = [
  {
    id: 1,
    type: "button",
    link: "alltasks",
    href: "#alltasks",
    text: "ALL TASKS",
    img_bg: "/icon/Ellipse-light-g.svg",
    img_content: "/icon/list-light-g.svg",
    bg_color: "bg-[--light-component-g]",
    span_className: "text-[--light-text-g] text-[2.5rem] font-['Luckiest_Guy']",
  },
  {
    id: 2,
    type: "button",
    link: "newtodo",
    href: "#newtodo",
    text: "NEW TODO",
    img_bg: "/icon/Ellipse-light-y.svg",
    img_content: "/icon/plus-light-y.svg",
    bg_color: "bg-[--light-component-y]",
    span_className: "text-[--light-text-y] text-[2.5rem] font-['Luckiest_Guy']",
  },
  {
    id: 3,
    type: "button",
    link: "setting",
    href: "#setting",
    text: "SETTING",
    img_bg: "/icon/Ellipse-light-g.svg",
    img_content: "/icon/Settings.svg",
    bg_color: "bg-[--light-component-g]",
    span_className: "text-[--light-text-g] text-[2.5rem] font-['Luckiest_Guy']",
  },
];

const RWD_Btn = ["md:grid", "md:grid-cols-5", "sm:flex"];

const Header = () => {
  return (
    <section className="header-section h-auto flex flex-col items-center">
      <Link to="/" className="py-4">
        <h1>My List</h1>
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
                  <span className={btn.span_className}>{btn.text}</span>
                </div>
              </button>
            </Link>
          );
        })}
      </nav>
    </section>
  );
};

export default Header;
