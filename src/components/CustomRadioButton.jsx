import React from "react";

const CustomRadioButton = ({ name, options, onChange }) => {
  console.log(options);

  return (
    <div className="radio-group">
      {options.map((option) => (
        <label key={option.value} className="radio-label">
          <input
            type="radio"
            name={name}
            value={option.value}
            onChange={onChange}
          />
          <span className="option">{option.value}</span>
          <span className="label-text">{option.answerText}</span>
          <span className="custom-radio"></span>
        </label>
      ))}
    </div>
  );
};

export default CustomRadioButton;
