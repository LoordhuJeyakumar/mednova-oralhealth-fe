import React from "react";
import "./CustomButton.css";

function CustomButton({ variant, size, children, onClick, customClass }) {
  return (
    <button
      className={`btn ${variant} ${size} ${customClass}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default CustomButton;
