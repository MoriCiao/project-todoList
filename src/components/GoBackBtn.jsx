import { useNavigate } from "react-router-dom";

const GoToHomePage = ({ arrowImg }) => {
  const homepageBtn = useNavigate();
  const handleGoback = () => {
    homepageBtn("/");
  };
  return (
    <button onClick={handleGoback} className="absolute bottom-4 left-0">
      <img src={arrowImg} alt="Go Back Home" />
    </button>
  );
};

export default GoToHomePage;
