import React from "react";
import classes from "./CartForm.module.css";

import { Link } from "react-router-dom";

let totalPrice = 0;

export default function CartForm({ totalAmount, onClose }) {
  return (
    <div className={classes.container}>
      <div className={classes.totalPrice}>
        <span>Toplam</span>
        <span>{`${totalAmount} TL`}</span>
      </div>
      <Link
        to="/checkout"
        className={classes.purchase}
        onClick={() => onClose()}
      >
        <div className={classes.purchaseButton}>SATIN AL</div>
      </Link>
    </div>
  );
}
