import React from "react";
import CartHeader from "./CartHeader";
import CartForm from "./CartForm";
import CartProducts from "./CartProducts";
import classes from "./Cart.module.css";

import { useSelector } from "react-redux";

export default function Cart({ onClose, animate }) {
  const cart = useSelector((state) => state.cart);

  return (
    <div className={classes.container}>
      <div
        className={`${classes.shadow} ${
          animate ? classes.disappear : classes.appear
        }`}
        onClick={onClose}
      ></div>
      <div
        className={`${classes.cart} ${
          animate ? classes.slideOut : classes.slideIn
        }`}
      >
        <CartHeader onClick={onClose} amount={cart.itemCount} />
        <CartProducts products={cart.products} itemCount={cart.itemCount} />
        <CartForm
          products={cart.products}
          totalAmount={cart.totalAmount}
          onClose={onClose}
        />
      </div>
    </div>
  );
}
