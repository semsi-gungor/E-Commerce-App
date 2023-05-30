import React from "react";
import classes from "./AddToCartLoader.module.css";

export default function AddToCartLoader() {
  return (
    <div class={classes.loader}>
      <div className={`${classes.bar} ${classes.first}`}></div>
      <div className={`${classes.bar} ${classes.second}`}></div>
      <div className={`${classes.bar} ${classes.third}`}></div>
    </div>
  );
}
