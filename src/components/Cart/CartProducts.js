import React from "react";
import classes from "./CartProducts.module.css";
import { BiTrashAlt, BiHeart } from "react-icons/bi";

import { useDispatch } from "react-redux";
import { cartAcitons } from "../../store/cart-slice";

export default function CartProducts({ products, itemCount }) {
  const dispatch = useDispatch();

  function removeFromCartHandler(cartItemId) {
    dispatch(cartAcitons.removeFromCart(cartItemId));
  }

  return (
    <div className={classes.container}>
      {itemCount > 0 &&
        products.map((product, index) => {
          return (
            <div key={index} className={classes.productCard}>
              <div className={classes.productImg}>
                <img src={product.url} />
              </div>
              <div className={classes.productInfo}>
                <p>{product.title}</p>
                <div className={classes.price}>
                  <p>{`${product.price} TL`}</p>
                  <span>{product.quantity > 1 && `x${product.quantity}`}</span>
                </div>
                <p>{product.size.toUpperCase()}</p>
                <p className={classes.color}>{product.color}</p>
              </div>
              <div className={classes.buttons}>
                <div className={classes.icon}>
                  <BiHeart />
                </div>
                <div
                  className={classes.icon}
                  onClick={removeFromCartHandler.bind(null, product.cartItemId)}
                >
                  <BiTrashAlt />
                </div>
              </div>
            </div>
          );
        })}
      {itemCount === 0 && (
        <div className={classes.empty}>
          <p>Alışveriş sepetiniz boş.</p>
        </div>
      )}
    </div>
  );
}
