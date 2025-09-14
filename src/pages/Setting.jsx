import React, { useContext } from "react";
import { UIContext } from "../contexts/UIContext";
import { AnimatePresence, motion } from "framer-motion";
import TitleImage from "../components/TitleImage";
import {
  SettingBtn,
  SettingIMG,
  SettingTitle,
} from "../components/Setting/SettingItems";
import { Fade, Slide } from "react-awesome-reveal";

const setting_svg = {
  light: "/project-todoList/title/Setting.svg",
  dark: "/project-todoList/title/Setting-dark.svg",
};

const sum_svg = {
  light: "/project-todoList/icon/sun-light-g.svg",
  dark: "/project-todoList/icon/sun-dark-g.svg",
};

const moon_svg = {
  light: "/project-todoList/icon/moon-light-g.svg",
  dark: "/project-todoList/icon/moon-dark-g.svg",
};

function selectColor(type, UICtx) {
  if (type === "theme") {
    const theme_color = {
      text: `font-['Luckiest_Guy'] ${
        UICtx.theme ? "text-[--dark-text-g]" : "text-[--light-text-g]"
      }`,
      btn: `w-[20rem] grid grid-cols-3 items-center  rounded-full mb-4 ${
        UICtx.theme ? "bg-[--dark-component-g]" : "bg-[--light-component-g]"
      }`,
    };
    return theme_color;
  } else if (type === "fontSize") {
    const fontSize_color = {
      text: `font-['Luckiest_Guy'] ${
        UICtx.theme ? "text-[--dark-text-y]" : "text-[--light-text-y]"
      }`,
      btn: "w-[20rem] items-center bg-[--light-component-y] rounded-full mb-4",
    };
    return fontSize_color;
  }
}

const Setting = () => {
  const UICtx = useContext(UIContext);
  return (
    <motion.section {...UICtx.motion_fade} className={`setting  h-full`}>
      <AnimatePresence mode="wait">
        <motion.div
          {...UICtx.motion_theme}
          className="col-start-1 col-span-3 items-start pt-12 relative h-full"
        >
          <TitleImage
            id="setting"
            src={UICtx.theme ? setting_svg.dark : setting_svg.light}
            className={`mx-auto`}
            alt="Setting.svg"
          />

          <div className="flex flex-col gap-8 items-center justify-center w-[80%]  py-8 mx-auto">
            {/* theme setting */}

            <section className="theme flex flex-col  gap-2 items-center justify-center w-full">
              <SettingTitle
                title="THEME"
                style_i={selectColor("theme", UICtx).text}
              />
              <Fade direction="left" duration={500} cascade damping={0.3}>
                {/* Light */}
                <SettingBtn
                  className={selectColor("theme", UICtx).btn}
                  onClick={() => UICtx.setTheme(false)}
                >
                  <SettingIMG
                    src={UICtx.theme ? sum_svg.dark : sum_svg.light}
                    alt={"Sun.svg"}
                  />
                  <SettingTitle
                    title="LIGHT"
                    style_i={selectColor("theme", UICtx).text}
                  />
                </SettingBtn>

                {/* Dark */}
                <SettingBtn
                  className={selectColor("theme", UICtx).btn}
                  onClick={() => UICtx.setTheme(true)}
                >
                  <SettingIMG
                    src={UICtx.theme ? moon_svg.dark : moon_svg.light}
                    alt={"Moon.svg"}
                  />
                  <SettingTitle
                    title="Dark"
                    style_i={selectColor("theme", UICtx).text}
                  />
                </SettingBtn>
              </Fade>
            </section>

            {/* font setting */}
            <section className="font-size flex flex-col  gap-2 items-center justify-center w-full">
              <SettingTitle
                title="FONT SIZE"
                style_i={selectColor("fontSize", UICtx).text}
              />
              <Fade direction="left" duration={500} cascade damping={0.3}>
                {/* Small */}
                <SettingBtn
                  className={selectColor("fontSize", UICtx).btn}
                  onClick={() => UICtx.setTextSize("small")}
                >
                  <SettingTitle
                    title="SMALL"
                    style_i={selectColor("fontSize", UICtx).text}
                  />
                </SettingBtn>

                {/* Medium */}
                <SettingBtn
                  className={selectColor("fontSize", UICtx).btn}
                  onClick={() => UICtx.setTextSize("medium")}
                >
                  <SettingTitle
                    title="MEDIUM"
                    style_i={selectColor("fontSize", UICtx).text}
                  />
                </SettingBtn>

                {/* Large */}
                <SettingBtn
                  className={selectColor("fontSize", UICtx).btn}
                  onClick={() => UICtx.setTextSize("large")}
                >
                  <SettingTitle
                    title="LARGE"
                    style_i={selectColor("fontSize", UICtx).text}
                  />
                </SettingBtn>
              </Fade>
            </section>
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.section>
  );
};

export default Setting;
