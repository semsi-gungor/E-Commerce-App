import React from 'react';
import classes from './ModalMenu.module.css';

export default function ModalMenu({ onClose, animate, direction, children }) {
  let slideOut;
  let slideIn;

  if (direction === 'right') {
    slideOut = classes.slideOutRight;
    slideIn = classes.slideInRight;
  } else if (direction === 'left') {
    slideOut = classes.slideOutLeft;
    slideIn = classes.slideInLeft;
  }

  return (
    <div className={classes.container}>
      <div className={classes.shadow} onClick={onClose}></div>
      <div className={`${classes.menu} ${animate ? slideOut : slideIn}`}>
        {children}
      </div>
    </div>
  );
}
