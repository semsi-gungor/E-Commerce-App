import { configureStore } from '@reduxjs/toolkit';
import cartReducers from './cart-slice';
import favoritesReducers from './favorites-slice';
import uiReducers from './ui-slice';

const store = configureStore({
  reducer: { cart: cartReducers, favorites: favoritesReducers, ui: uiReducers },
});

export default store;
