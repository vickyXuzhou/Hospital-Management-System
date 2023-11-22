import React from "react";
import "./textArea.css";
const TextArea = ({ name, value }) => {
  return (
    <div>
      <textarea value={value} name={name} id="" cols="30" rows="10"></textarea>
    </div>
  );
};

export default TextArea;
