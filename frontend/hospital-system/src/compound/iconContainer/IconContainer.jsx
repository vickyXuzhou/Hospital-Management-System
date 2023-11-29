import React from "react";
import "./iconContainer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { fa-backward-fast } from "@fortawesome/free-solid-svg-icons";
// import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBackwardFast,
  faBackward,
  faForward,
  faForwardFast,
} from "@fortawesome/free-solid-svg-icons";
const IconContainer = () => {
  return (
    <div className="containerIcons">
      <div className="IconSection1">
        <FontAwesomeIcon icon={faBackwardFast} className="lightBlue" />
        <FontAwesomeIcon icon={faBackward} className="green" />
        <div className="iconBtn">Record 10</div>
        <FontAwesomeIcon icon={faForward} className="green" />
        <FontAwesomeIcon icon={faForwardFast} className="lightBlue" />
      </div>
      {/* <div className="IconSection2">
        <div>IconContainer</div>
      </div> */}
    </div>
  );
};

export default IconContainer;
