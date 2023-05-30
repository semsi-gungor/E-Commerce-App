import React from 'react';
import classes from './Bars.module.css';

export default function Bars(props) {
  let bars = Array(props.count);

  for (let i = 0; i < bars.length; i++) {
    bars[i] = (
      <div
        key={i}
        className={classes.bar}
        onClick={props.onClick.bind(null, i)}
      ></div>
    );
  }

  bars[props.index] = (
    <div
      ket={props.index}
      className={classes.bar}
      style={{ backgroundColor: 'rgb(32, 32, 32)' }}
    ></div>
  );

  return <div className={classes.container}>{bars}</div>;
}
