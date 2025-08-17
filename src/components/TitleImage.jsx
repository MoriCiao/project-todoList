import React from "react";

const TitleImage = ({ id, src, alt, className }) => {
  return <img id={id} src={src} alt={alt} className={className} />;
};

export default TitleImage;
