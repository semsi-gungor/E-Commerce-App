import React from "react";
import classes from "./Colors.module.css";

function Colors({ items, onChooseColor }) {
  return (
    <div className={classes.container}>
      {items.map((item, index) => {
        return (
          <div
            onClick={onChooseColor.bind(null, index)}
            key={index}
            className={classes.color}
            style={{ backgroundColor: item.colorCode }}
          ></div>
        );
      })}
    </div>
  );
}

export default Colors;
