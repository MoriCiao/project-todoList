import { useNavigate } from "react-router-dom";

const GoToHomePage = ({ arrowImg }) => {
  const homepageBtn = useNavigate();
  const handleGoback = () => {
    homepageBtn("/");
  };
  return (
    <button
      onClick={handleGoback}
      className="fixed md:absolute md:bottom-4 md:left-4 bottom-4 left-4 p-1 border border-white/50 rounded-full hover:bg-white/50 group"
    >
      <img
        src={arrowImg}
        alt="Go Back Home"
        className="mx-auto -translate-x-[1px] group-hover:brightness-50"
      />
    </button>
  );
};

export default GoToHomePage;
