import React from "react";

function CustomTabMobile({ id, name, onClick, isActive }) {
  return (
    <span
      className={`mobile-tab ${isActive ? "active" : ""}`}
      onClick={() => onClick(id)}
    ></span>
  );
}

export default CustomTabMobile;
