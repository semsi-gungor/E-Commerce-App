import React, { useState } from 'react';
import classes from './Filter.module.css';
import { BsFilterRight } from 'react-icons/bs';

export default function Filter({ onClick }) {
  const [display, setDisplay] = useState(true);

  return (
    <div className={classes.container}>
      <div
        className={classes.display}
        onClick={() => {
          setDisplay(!display);
        }}
      >
        <span>{`${display ? "4'lü" : "2'li"} görünüm`}</span>
        <div className={classes.displayType}>
          {display ? (
            <>
              <div className={classes.rectangle}></div>
              <div className={classes.rectangle}></div>
              <div className={classes.rectangle}></div>
              <div className={classes.rectangle}></div>
            </>
          ) : (
            <>
              <div className={classes.rectangle}></div>
              <div className={classes.rectangle}></div>
            </>
          )}
        </div>
      </div>
      <div className={classes.filter}>
        <span>Filtreler</span>
        <BsFilterRight onClick={onClick} />
      </div>
    </div>
  );
}
