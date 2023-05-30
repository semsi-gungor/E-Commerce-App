import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import classes from "./Search.module.css";

export default function Search({ onClose, animate }) {
  return (
    <div
      className={`${classes.container} ${
        animate ? classes.slideOut : classes.slideIn
      }`}
    >
      <div className={classes.backIcon} onClick={onClose}>
        <BsArrowLeft />
      </div>
    </div>
  );
}
