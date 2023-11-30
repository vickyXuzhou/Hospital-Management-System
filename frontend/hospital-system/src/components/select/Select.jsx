import React from "react";
import "./select.css";
const Select = ({ name, value, options }) => {
  return (
    <select name={name} value={value} className="appSelect">
      {options.map((option, index) => {
        return (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        );
      })}
    </select>
  );
};

export default Select;
