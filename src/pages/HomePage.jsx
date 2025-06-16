import React, { useContext } from "react";
import { todoContext } from "../components/todoCotext";
const HomePage = () => {
  const { textSize, setTextSize, sizeClass } = useContext(todoContext);
  return (
    <section className={`${sizeClass[textSize]} border-2 border-red-500`}>
      HomePage
    </section>
  );
};

export default HomePage;
HomePage;
