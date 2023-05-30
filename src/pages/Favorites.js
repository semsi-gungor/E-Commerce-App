import React from "react";
import SubProduct from "../components/Products/SubProduct";
import ScrollUpButton from "../components/UI/ScrollUp/ScrollUpButton";
import classes from "./Favorites.module.css";
import { BiTrashAlt } from "react-icons/bi";

import { useSelector, useDispatch } from "react-redux";
import { favoritesAcitons } from "../store/favorites-slice";

export default function ProductsPage() {
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  function onAddToCartHandler() {}

  function deleteFromFav(favItemId) {
    dispatch(favoritesAcitons.removeFromCart(favItemId));
  }

  let anyFav = favorites.itemCount > 0;

  return (
    <div className={classes.container}>
      <ScrollUpButton />
      {!anyFav && <div>Henüz favorilere eklenmiş bir ürün bulunmamakta.</div>}
      {anyFav &&
        favorites.products.map((product) => {
          return (
            <SubProduct
              key={product.favItemId}
              url1={product.url1}
              url2={product.url2}
              sizes={product.sizes}
              id={product.favItemId}
              price={product.price}
              title={product.title}
              iconOnClick={() => {}}
              onAddToCart={onAddToCartHandler}
            >
              <BiTrashAlt
                onClick={deleteFromFav.bind(null, product.favItemId)}
              />
            </SubProduct>
          );
        })}
    </div>
  );
}
