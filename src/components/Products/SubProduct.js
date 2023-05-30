import React from "react";
import ProductImg from "./ProductImg";
import classes from "./SubProduct.module.css";

export default function SubProduct({
  children,
  title,
  id,
  url1,
  url2,
  sizes,
  price,
  iconOnClick,
  onAddToCart,
  index,
}) {
  return (
    <div className={classes.container}>
      <ProductImg
        url1={url1}
        url2={url2}
        sizes={sizes}
        id={id}
        index={index}
        onAddToCart={onAddToCart}
      />
      <div className={classes.infoContainer}>
        <span className={classes.price}>{`${price} TL`}</span>
        <p className={classes.title}>{title}</p>
        <div className={classes.icon} onClick={iconOnClick}>
          {children}
        </div>
      </div>
    </div>
  );
}
