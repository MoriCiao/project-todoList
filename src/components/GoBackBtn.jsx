import { useNavigate } from "react-router-dom";

const GoToHomePage = ({ arrowImg }) => {
  const homepageBtn = useNavigate();
  const handleGoback = () => {
    homepageBtn("/");
  };
  return (
    <button
      onClick={handleGoback}
      className="fixed md:bottom-[-2rem] md:left-4 sm:bottom-0 sm:left-0"
    >
      <img src={arrowImg} alt="Go Back Home" />
    </button>
  );
};

export default GoToHomePage;
