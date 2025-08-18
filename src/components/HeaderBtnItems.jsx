import { Link } from "react-router-dom";

export function themeOption(color_tpye, UICtx) {
  const g_theme = {
    bg: UICtx.theme ? "bg-[--dark-component-g]" : "bg-[--light-component-g]",
    text: UICtx.theme ? "text-[--dark-text-g] " : "text-[--light-text-g]",
  };

  const y_theme = {
    bg: UICtx.theme ? "bg-[--dark-component-y]" : "bg-[--light-component-y]",
    text: UICtx.theme ? "text-[--dark-text-y] " : "text-[--light-text-y]",
  };

  if (color_tpye === "green") {
    return g_theme;
  } else if (color_tpye === "yellow") {
    return y_theme;
  }
}

export const HeaderIcon = ({ bgColor, src, alt = "headerIcon" }) => {
  return (
    <div
      className={`rounded-full  w-[5rem]  h-[5rem]  flex items-center justify-center ${bgColor}`}
    >
      <img className="w-[60%]" src={src} alt={alt} />
    </div>
  );
};

export const HeaderTitle = ({ label, themeTextColor, h3_size }) => {
  return (
    <div className="w-[75%] text-center">
      <h3
        className={`transition-all duration-500 tracking-widest font-['Luckiest_Guy'] ${themeTextColor} ${h3_size} `}
      >
        {label}
      </h3>
    </div>
  );
};

export const HeaderLink = ({ link, onClick, themeBgColor, children }) => {
  return (
    <Link
      to={link}
      className={`isClickBtn w-full  flex items-center justify-center rounded-xl p-4 border border-white/50 lg:h-auto h-30 ${themeBgColor}  `}
      onClick={onClick}
    >
      {children[0]}
      {children[1]}
    </Link>
  );
};
