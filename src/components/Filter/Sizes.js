import React, { useState } from 'react';
import classes from './Sizes.module.css';

let initialSizes = [
  {
    title: 'XS',
    active: false,
  },
  {
    title: 'S',
    active: false,
  },
  {
    title: 'M',
    active: false,
  },
  {
    title: 'L',
    active: false,
  },
  {
    title: 'XL',
    active: false,
  },
];

export default function Sizes() {
  const [sizes, setSizes] = useState(initialSizes);

  function setActiveHandler(title) {
    let temp = [...sizes];
    let item = temp.find((e) => e.title === title);
    item.active = !item.active;
    setSizes(temp);
  }

  console.log(sizes);

  return (
    <div className={classes.container}>
      {sizes.map((size, index) => {
        return (
          <button
            key={index}
            className={`${size.active ? classes.activeSize : classes.passive}`}
            onClick={setActiveHandler.bind(null, size.title)}
          >
            {size.title}
          </button>
        );
      })}
    </div>
  );
}
