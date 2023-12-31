import React from "react";
import "./input.css";
const Input = ({ type, value, placeholder, name, inputDisabled, onChange }) => {
  return (
    <div className="appInput">
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        name={name}
        required
        disabled={inputDisabled}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
