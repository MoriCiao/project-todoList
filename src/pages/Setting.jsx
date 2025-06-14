import React from "react";
import GoToHomePage from "../components/GoBackBtn";
const textSytle_theme =
  "font-['Luckiest_Guy'] text-[--light-text-g] text-[3rem]";
const btnStyle_theme =
  "w-[20rem] grid grid-cols-3 items-center bg-[--light-component-g] rounded-full mb-4";

const textSytle_FontSize =
  "font-['Luckiest_Guy'] text-[--light-text-y] text-[3rem]";
const btnStyle_FontSize =
  "w-[20rem] items-center bg-[--light-component-y] rounded-full mb-4";

const Setting = () => {
  return (
    <section className="setting col-start-1 col-span-3 items-center p-12 relative">
      <GoToHomePage arrowImg="/icon/chevron-left-g.svg" />
      <img
        id="setting"
        src="title/Setting.svg"
        alt="Setting.svg"
        className="mx-auto"
      />

      <div className="flex flex-col items-center w-[80%] max-w-[30rem] mt-8 mx-auto">
        {/* theme setting */}
        <section className="Theme flex flex-col">
          <h2 className={textSytle_theme}>THEME</h2>
          <button className={btnStyle_theme}>
            <img
              src="icon/sun-light-g.svg"
              className="col-start-1 m-auto"
              alt=""
            />
            <h2 className={`${textSytle_theme}`}>LIGHT</h2>
          </button>
          <button className={btnStyle_theme}>
            <img
              src="icon/moon-light-g.svg"
              className="col-start-1 m-auto"
              alt=""
            />
            <h2 className={`${textSytle_theme}`}>Dark</h2>
          </button>
        </section>

        {/* font setting */}
        <section className="Theme flex flex-col">
          <h2 className={textSytle_FontSize}>FONT SIZE</h2>
          <button className={btnStyle_FontSize}>
            <h2 className={`${textSytle_FontSize} `}>SMALL</h2>
          </button>
          <button className={btnStyle_FontSize}>
            <h2 className={`${textSytle_FontSize}`}>MIDDLE</h2>
          </button>
          <button className={btnStyle_FontSize}>
            <h2 className={`${textSytle_FontSize}`}>BIG</h2>
          </button>
        </section>
      </div>
    </section>
  );
};

export default Setting;
