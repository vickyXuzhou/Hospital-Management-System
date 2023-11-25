import React from "react";
import "./textArea.css";
const TextArea = ({ name, tvalue, onChange }) => {
  return (
    <div>
      <textarea
        value={tvalue}
        name={name}
        id=""
        // cols="30"
        rows="5"
        onChange={onChange}
      >
        {/* {tvalue} */}
      </textarea>
    </div>
  );
};

export default TextArea;
