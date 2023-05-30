import React from "react";
import classes from "./SubCategories.module.css";

import { Link } from "react-router-dom";

export default function SubCategories({
  suBcategories,
  activeSubCategory,
  setCategory,
  onClose,
}) {
  function setActive(id) {
    setCategory(id);
    onClose();
  }

  return (
    <ul className={classes.productCategories}>
      {suBcategories.map((category) => {
        return (
          <li
            onClick={setActive.bind(null, category.id)}
            key={category.id}
            className={`${classes.productCategory} ${
              category.id === activeSubCategory && classes.active
            }`}
          >
            <Link to={category.title.toLowerCase()}>{category.title}</Link>
          </li>
        );
      })}
    </ul>
  );
}
