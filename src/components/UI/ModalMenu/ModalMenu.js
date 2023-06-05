import React from 'react';
import classes from './ModalMenu.module.css';

export default function ModalMenu({ direction, children }) {
  return (
    <div className={classes.container}>
      <div className={classes.shadow}></div>
      <div className={classes.menu}>{children}</div>
    </div>
  );
}
