import React from "react";

const Input = ({ type, value, placeholder, name, inputDisabled, onChange }) => {
  return (
    <div>
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
