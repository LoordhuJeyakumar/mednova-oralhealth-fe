import React from "react";

const CustomRadioButton = ({ name, options, onChange }) => {


  return (
    <div className="radio-group">
      {options.map((option, index) => (
        <label key={option._id} className="radio-label">
          <input
            type="radio"
            name={name}
            value={option.optionValue}
            onChange={onChange}
            required
          />

          <span className="option">{String.fromCharCode(65 + index)}</span>
          <span className="label-text">{option.optionText}</span>
          <span className="custom-radio"></span>
        </label>
      ))}
    </div>
  );
};

export default CustomRadioButton;
