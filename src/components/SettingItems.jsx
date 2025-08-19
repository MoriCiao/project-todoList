import React, { useContext } from "react";
import { UIContext } from "../contexts/UIContext";

export const SettingTitle = ({ title, style_i }) => {
  const UICtx = useContext(UIContext);

  return <h3 className={`${style_i} ${UICtx.h3_size}`}>{title}</h3>;
};

export const SettingIMG = ({ src, alt }) => (
  <img src={src} alt={alt} className="col-start-1 m-auto" />
);

export const SettingBtn = ({ children, className, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};
