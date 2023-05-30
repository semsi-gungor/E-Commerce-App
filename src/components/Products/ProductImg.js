import React from "react";
import Size from "./Size";
import classes from "./ProductImg.module.css";
import AddToCartLoader from "../UI/Loader/AddToCartLoader";
import { BsCheckLg } from "react-icons/bs";

import { useNavigate, useLocation } from "react-router-dom";

import { useSelector } from "react-redux";
import { STATUS } from "../../utils/status";

export default function ProductImg(props) {
  const { setStatus } = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  function onAddHandler(size) {
    props.onAddToCart(size);
  }

  let isLoading = setStatus === STATUS.LOADING;
  let isFulfilled = setStatus === STATUS.SUCCSESS;
  let isIdle = setStatus === STATUS.IDLE;

  return (
    <div className={classes.imgContainer}>
      <img className={classes.imgFront} src={props.url1} />
      <img
        onClick={() => {
          console.log(props.index);
          navigate(pathname + "/" + props.index);
        }}
        className={classes.imgBack}
        src={props.url2}
      />

      <div className={classes.sizeContainer}>
        {isLoading && (
          <div className={classes.loader}>
            <AddToCartLoader />
          </div>
        )}

        {isFulfilled && (
          <div className={classes.loader}>
            <span>Sepete eklendi. </span>
            <BsCheckLg />
          </div>
        )}

        {isIdle &&
          Object.entries(props.sizes).map((size, index) => {
            return (
              <Size
                key={index}
                size={size[0]}
                available={size[1]}
                onAdd={onAddHandler}
              />
            );
          })}
      </div>
    </div>
  );
}
