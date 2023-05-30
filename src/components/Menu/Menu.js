import React, { useState } from "react";
import Categories from "./Categories";
import SubCategories from "./SubCategories";
import { BsX } from "react-icons/bs";
import classes from "./Menu.module.css";

const suBcategories = [
  {
    id: 0,
    suBcategories: [
      { id: 0, title: "T-SHIRT" },
      { id: 1, title: "BLAZER" },
      { id: 2, title: "BLAZER" },
      { id: 3, title: "BLAZER" },
      { id: 4, title: "BLAZER" },
      { id: 5, title: "BLAZER" },
      { id: 6, title: "BLAZER" },
      { id: 7, title: "BLAZER" },
      { id: 8, title: "BLAZER" },
      { id: 9, title: "BLAZER" },
      { id: 10, title: "BLAZER" },
      { id: 11, title: "BLAZER" },
      { id: 12, title: "BLAZER" },
      { id: 13, title: "BLAZER" },
      { id: 14, title: "BLAZER" },
      { id: 15, title: "BLAZER" },
      { id: 16, title: "BLAZER" },
      { id: 17, title: "BLAZER" },
      { id: 18, title: "BLAZER" },
      { id: 19, title: "BLAZER" },
      { id: 20, title: "BLAZER" },
      { id: 21, title: "BLAZER" },
    ],
  },
  {
    id: 1,
    suBcategories: [
      { id: 0, title: "BLAZERe" },
      { id: 1, title: "BLAZER" },
      { id: 2, title: "BLAZER" },
      { id: 3, title: "BLAZER" },
      { id: 4, title: "BLAZER" },
      { id: 5, title: "BLAZER" },
      { id: 6, title: "BLAZER" },
      { id: 7, title: "BLAZER" },
      { id: 8, title: "BLAZER" },
      { id: 9, title: "BLAZER" },
      { id: 10, title: "BLAZER" },
      { id: 11, title: "BLAZER" },
      { id: 12, title: "BLAZER" },
      { id: 13, title: "BLAZER" },
      { id: 14, title: "BLAZER" },
      { id: 15, title: "BLAZER" },
      { id: 16, title: "BLAZER" },
      { id: 17, title: "BLAZER" },
      { id: 18, title: "BLAZER" },
      { id: 19, title: "BLAZER" },
      { id: 20, title: "BLAZER" },
      { id: 21, title: "BLAZER" },
    ],
  },
  {
    id: 2,
    suBcategories: [
      { id: 0, title: "BLAZERc" },
      { id: 1, title: "BLAZER" },
      { id: 2, title: "BLAZER" },
      { id: 3, title: "BLAZER" },
      { id: 4, title: "BLAZER" },
      { id: 5, title: "BLAZER" },
      { id: 6, title: "BLAZER" },
      { id: 7, title: "BLAZER" },
      { id: 8, title: "BLAZER" },
      { id: 9, title: "BLAZER" },
      { id: 10, title: "BLAZER" },
      { id: 11, title: "BLAZER" },
      { id: 12, title: "BLAZER" },
      { id: 13, title: "BLAZER" },
      { id: 14, title: "BLAZER" },
      { id: 15, title: "BLAZER" },
      { id: 16, title: "BLAZER" },
      { id: 17, title: "BLAZER" },
      { id: 18, title: "BLAZER" },
      { id: 19, title: "BLAZER" },
      { id: 20, title: "BLAZER" },
      { id: 21, title: "BLAZER" },
    ],
  },
  {
    id: 3,
    suBcategories: [
      { id: 0, title: "BLAZERh" },
      { id: 1, title: "BLAZER" },
      { id: 2, title: "BLAZER" },
      { id: 3, title: "BLAZER" },
      { id: 4, title: "BLAZER" },
      { id: 5, title: "BLAZER" },
      { id: 6, title: "BLAZER" },
      { id: 7, title: "BLAZER" },
      { id: 8, title: "BLAZER" },
      { id: 9, title: "BLAZER" },
      { id: 10, title: "BLAZER" },
      { id: 11, title: "BLAZER" },
      { id: 12, title: "BLAZER" },
      { id: 13, title: "BLAZER" },
      { id: 14, title: "BLAZER" },
      { id: 15, title: "BLAZER" },
      { id: 16, title: "BLAZER" },
      { id: 17, title: "BLAZER" },
      { id: 18, title: "BLAZER" },
      { id: 19, title: "BLAZER" },
      { id: 20, title: "BLAZER" },
      { id: 21, title: "BLAZER" },
    ],
  },
];

const categories = [
  { id: 0, title: "KADIN" },
  { id: 1, title: "ERKEK" },
  { id: 2, title: "ÇOCUK" },
  { id: 3, title: "HOME" },
];

export default function Menu({ onClose, animate }) {
  const [activeCategoryId, setActiveCategoryId] = useState(0);
  const [activeSubCategoryId, setActiveSubCategoryId] = useState(0);

  function setCategory(id) {
    setActiveCategoryId(id);
    setActiveSubCategoryId(0);
  }

  function setsubCategory(id) {
    setActiveSubCategoryId(id);
  }

  return (
    <div className={classes.container}>
      <div
        className={`${classes.menu} ${
          animate ? classes.slideOut : classes.slideIn
        }`}
      >
        <div className={classes.xIcon} onClick={onClose}>
          <BsX />
        </div>
        <Categories
          setCategory={setCategory}
          categories={categories}
          activeId={activeCategoryId}
        />
        <SubCategories
          suBcategories={suBcategories[activeCategoryId].suBcategories}
          activeSubCategory={activeSubCategoryId}
          setCategory={setsubCategory}
          onClose={onClose}
        />
      </div>
      <div
        className={`${classes.shadow} ${
          animate ? classes.disappear : classes.appear
        }`}
        onClick={onClose}
      ></div>
    </div>
  );
}
