import React, { useEffect } from "react";
import ProductsPage from "./pages/Products";
import UserPage from "./pages/User";
import HomePage from "./pages/Home";
import FavoritesPage from "./pages/Favorites";
import CheckOutPage from "./pages/Checkout";
import ProductDetailsPage, {
  loader as productDetailsLoader,
} from "./pages/ProductDetails";
import "./style.css";

import { getCart, sendCart, cartAcitons } from "./store/cart-slice";
import { getFavorites, sendFavorites } from "./store/favorites-slice";
import { useDispatch, useSelector } from "react-redux";

import RootLayout from "./pages/Root";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

let initialCart = true;
let initialFavorites = true;

export default function App() {
  const cart = useSelector((state) => state.cart);
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  useEffect(() => {
    if (initialCart) {
      initialCart = false;
      return;
    }

    dispatch(sendCart(cart));

    setTimeout(() => {
      dispatch(cartAcitons.idleStatus());
    }, 2000);
  }, [cart.itemCount, dispatch]);

  useEffect(() => {
    dispatch(getFavorites());
  }, [dispatch]);

  useEffect(() => {
    if (initialFavorites) {
      initialFavorites = false;
      return;
    }

    dispatch(sendFavorites(favorites));
  }, [favorites.itemCount, dispatch]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: ":productType",
          children: [
            {
              index: true,
              element: <ProductsPage />,
            },
            {
              path: ":productId",
              element: <ProductDetailsPage />,
              loader: productDetailsLoader,
            },
          ],
        },
        {
          path: "favorites",
          element: <FavoritesPage />,
        },
        {
          path: "userpage",
          element: <UserPage />,
        },
        {
          path: "checkout",
          element: <CheckOutPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
