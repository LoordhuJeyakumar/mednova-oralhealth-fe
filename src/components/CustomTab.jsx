import React from "react";

function CustomTab({ id, name, onClick, isActive }) {
  return (
    <div
      className={`custom-tab ${isActive ? "active" : ""}`}
      onClick={() => onClick(id)}
    >
      <div className="tab-number">{id}</div>
      <div className="tab-text">{name}</div>
    </div>
  );
}

export default CustomTab;
