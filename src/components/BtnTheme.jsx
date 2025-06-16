import React from "react";

const BtnTheme = ({ theme, setTheme }) => {
  return (
    <button
      className={`absolute rounded-full text-[--dark-text-y] bg-[--dark-bg] top-4 left-4  border-2 p-2`}
      onClick={() => setTheme(!theme)}
    >
      Theme
    </button>
  );
};

export default BtnTheme;
