import { useNavigate } from "react-router-dom";

const GoToHomePage = ({ arrowImg }) => {
  const homepageBtn = useNavigate();
  const handleGoback = () => {
    homepageBtn("/");
  };
  return (
    <button
      onClick={handleGoback}
      className="absolute md:bottom-4 md:left-8 bottom-0 left-8"
    >
      <img src={arrowImg} alt="Go Back Home" />
    </button>
  );
};

export default GoToHomePage;
