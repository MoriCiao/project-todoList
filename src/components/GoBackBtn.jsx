import { useNavigate } from "react-router-dom";

const GoToHomePage = ({ arrowImg }) => {
  const homepageBtn = useNavigate();
  const handleGoback = () => {
    homepageBtn("/");
  };
  return (
    <button
      onClick={handleGoback}
      className="absolute md:bottom-2 md:left-4 bottom-0 left-"
    >
      <img src={arrowImg} alt="Go Back Home" />
    </button>
  );
};

export default GoToHomePage;
