import React from "react";

const SortDateBtn = ({ text, type, onClick, className }) => {
  return (
    <button type={type} onClick={onClick} className={className}>
      {text}
    </button>
  );
};

export default SortDateBtn;
