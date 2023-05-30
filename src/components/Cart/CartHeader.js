import React from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { BsX } from 'react-icons/bs';
import classes from './CartHeader.module.css';

export default function CartHeader(props) {
  return (
    <div className={classes.container}>
      <div className={classes.leftHeader}>
        <span>Sepetiniz</span>
        <span>{`(${props.amount})`}</span>
      </div>
      <div className={classes.rightHeader}>
        <span>Favoriler</span>
        <span className={classes.heart}>
          <AiFillHeart />
        </span>
      </div>
      <div className={classes.xIcon} onClick={props.onClick}>
        <BsX />
      </div>
    </div>
  );
}
