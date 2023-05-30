import React from 'react';
import classes from './Categories.module.css';

export default function Categories({ setCategory, categories, activeId }) {
  function setActive(id) {
    setCategory(id);
  }

  return (
    <ul className={classes.categories}>
      {categories.map((category) => {
        return (
          <li
            onClick={setActive.bind(null, category.id)}
            key={category.id}
            className={`${classes.categoryItems} ${
              category.id === activeId && classes.active
            }`}
          >
            <p>{category.title}</p>
          </li>
        );
      })}
    </ul>
  );
}
