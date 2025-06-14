import React from "react";
import { useNavigate } from "react-router-dom";

const GoToHomePage = ({ arrowImg }) => {
  const homepageBtn = useNavigate();
  const handleGoback = () => {
    homepageBtn("/");
  };
  return (
    <button onClick={handleGoback} className="absolute top-12">
      <img src={arrowImg} alt="Go Back Home" />
    </button>
  );
};

export default GoToHomePage;
