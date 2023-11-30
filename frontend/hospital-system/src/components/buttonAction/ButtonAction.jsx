import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faArrowsRotate,
  faPenToSquare,
  faSquareXmark,
  faTowerObservation,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import "./buttonAction.css";
const ButtonAction = ({ iconName, className, type, onclick }) => {
  const iconComponent = {
    add: faAddressBook,
    edit: faPenToSquare,
    delete: faTrashCan,
    refresh: faArrowsRotate,
    viewAll: faTowerObservation,
    closeIcon: faSquareXmark,
  };

  const IconComponent = iconComponent[iconName];
  return (
    <>
      <button className="buttonIcon">
        <FontAwesomeIcon
          icon={IconComponent}
          className={className}
          onclick={onclick}
          type={type}
        />
      </button>
    </>
  );
};

export default ButtonAction;
