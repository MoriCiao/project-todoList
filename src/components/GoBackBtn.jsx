import { useNavigate } from "react-router-dom";
import { UIContext } from "../contexts/UIContext";
import { useContext } from "react";

const GoToHomePage = () => {
  const UICtx = useContext(UIContext);
  const navigate = useNavigate();
  const back_svg = {
    light: "/project-todoList/icon/chevron-left-g.svg",
    dark: "/project-todoList/icon/chevron-left-dark-g.svg",
  };
  return (
    <button
      onClick={() => navigate("/")}
      className={`fixed md:absolute md:bottom-4 md:left-4 bottom-4 left-4 p-1 border border-white/50 rounded-full  group ${
        UICtx.theme ? "hover:bg-white/20" : "hover:bg-black/20"
      }`}
    >
      <img
        src={UICtx.theme ? back_svg.dark : back_svg.light}
        alt="Go Back Home"
        className="mx-auto -translate-x-[1px] group-hover:brightness-50"
      />
    </button>
  );
};

export default GoToHomePage;
