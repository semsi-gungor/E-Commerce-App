import React, { useState } from "react";
import Colors from "./Colors";
import { AiFillHeart } from "react-icons/ai";
import classes from "./Product.module.css";
import SubProduct from "./SubProduct";

import { useDispatch } from "react-redux";
import { cartAcitons } from "../../store/cart-slice";
import { favoritesAcitons } from "../../store/favorites-slice";

export default function Product({ product, index }) {
  const [cardIndex, setCardIndex] = useState(0);

  const dispatch = useDispatch();

  function chooseColorHandler(id) {
    setCardIndex(id);
  }

  function onAddToCartHandler(size) {
    const item = {
      id: product.id,
      subProductIndex: cardIndex,
      price: product.price,
      title: product.title,
      url: product.subProducts[cardIndex].images.url3,
      size: size,
      color: product.subProducts[cardIndex].colorName,
      cartItemId: product.id + size + cardIndex.toString(),
    };

    dispatch(cartAcitons.addToCart(item));
  }

  function addToFavHandler() {
    let item = {
      url1: product.subProducts[cardIndex].images.ulr1,
      url2: product.subProducts[cardIndex].images.url2,
      sizes: product.subProducts[cardIndex].sizes,
      id: product.id,
      price: product.price,
      title: product.title,
      favItemId: product.id + cardIndex.toString(),
    };
    dispatch(favoritesAcitons.addToCart(item));
  }

  return (
    <div className={classes.container}>
      <SubProduct
        url1={product.subProducts[cardIndex].images.ulr1}
        url2={product.subProducts[cardIndex].images.url2}
        sizes={product.subProducts[cardIndex].sizes}
        id={product.id}
        index={index}
        price={product.price}
        title={product.title}
        iconOnClick={() => {}}
        onAddToCart={onAddToCartHandler}
      >
        <AiFillHeart onClick={addToFavHandler} />
      </SubProduct>
      {product.subProducts.length > 1 && (
        <Colors
          onChooseColor={chooseColorHandler}
          items={product.subProducts}
        />
      )}
    </div>
  );
}
