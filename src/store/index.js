import { configureStore } from "@reduxjs/toolkit";
import cartReducers from "./cart-slice";
import favoritesReducers from "./favorites-slice";

const store = configureStore({
  reducer: { cart: cartReducers, favorites: favoritesReducers },
});

export default store;
