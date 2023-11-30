import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBackwardFast,
  faBackward,
  faForward,
  faForwardFast,
} from "@fortawesome/free-solid-svg-icons";
import "./buttonArrow.css";
const ButtonArrow = ({ iconName, className }) => {
  const arrowComponent = {
    arrowBack: faBackward,
    arrowFront: faForward,
    doubleBack: faBackwardFast,
    doubleFront: faForwardFast,
  };
  const ArrowComponent = arrowComponent[iconName];
  return (
    < >
      <FontAwesomeIcon icon={ArrowComponent} className={className} />
    </>
  );
};

export default ButtonArrow;
