import React, { useContext, useEffect } from "react";
import { todoContext } from "../components/todoCotext";
import { scale } from "framer-motion";
const HomePage = () => {
  const { textSize, setTextSize, sizeClass, theme, bgLightImg, bgDarkImg } =
    useContext(todoContext);

  useEffect(() => {}, []);

  return (
    <section className={`${sizeClass[textSize]} overflow-hidden`}>
      <div
        className={`py-10  m-auto max-w-[45rem] w-full ${
          theme ? "scale-[1.5] " : ""
        }`}
      >
        <img className={``} src={theme ? bgDarkImg : bgLightImg} alt="" />
      </div>
    </section>
  );
};

export default HomePage;
HomePage;
