import React from "react";
import classes from "./Size.module.css";

function Size({ size, available, onAdd }) {
  return (
    <div
      className={classes.sizeContainer}
      onClick={available ? onAdd.bind(null, size) : undefined}
    >
      <span className={available ? classes.avaliable : classes.notAvaliable}>
        {size.toUpperCase()}
      </span>
    </div>
  );
}

export default Size;
