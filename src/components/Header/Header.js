import React, { useState, useEffect, useContext } from "react";
import { BsBag, BsSearch, BsPerson, BsHeart } from "react-icons/bs";
import { HiMenu } from "react-icons/hi";
import Menu from "../Menu/Menu";
import Cart from "../Cart/Cart";
import Search from "../Search/Search";
import classes from "./Header.module.css";

import { Link } from "react-router-dom";

import useDelayedAnimation from "../../hooks/use-delayed-unmount";

import { useSelector } from "react-redux";

let lastScroll = 0;

export default function Header() {
  const [scrollDirection, setScrolldirection] = useState(true);
  const [btnHighlighted, setBtnHighlighted] = useState(false);

  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    if (cart.itemsCount === 0) return;

    setBtnHighlighted(true);

    const timer = setTimeout(() => {
      setBtnHighlighted(false);
    }, 350);

    return () => {
      clearTimeout(timer);
    };
  }, [cart.itemsCount]);

  function scrollHandler() {
    let position = window.pageYOffset;

    if (lastScroll > position) {
      setScrolldirection(true);
    }

    if (lastScroll < position) {
      setScrolldirection(false);
    }
    lastScroll = position;
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler, { passive: true });

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const [menuIsMounted, menuIsAnimating, toggleMenu] = useDelayedAnimation(300);

  const [cartIsMounted, cartIsAnimating, toggleCart] = useDelayedAnimation(300);

  const [searchIsMounted, searchIsAnimating, toggleSearch] =
    useDelayedAnimation(300);

  return (
    <>
      {menuIsMounted && <Menu onClose={toggleMenu} animate={menuIsAnimating} />}
      {cartIsMounted && <Cart onClose={toggleCart} animate={cartIsAnimating} />}
      {searchIsMounted && (
        <Search onClose={toggleSearch} animate={searchIsAnimating} />
      )}
      <header
        className={classes.container}
        style={{ transform: scrollDirection ? "" : "translateY(-100%)" }}
      >
        <div className={classes.leftContainer}>
          <div onClick={toggleMenu} className={classes.icon}>
            <HiMenu />
          </div>
          <Link to="/" className={classes.logo}>
            LOGO
          </Link>
        </div>

        <div className={classes.rightContainer}>
          <div className={classes.icon} onClick={toggleSearch}>
            <BsSearch />
          </div>
          <Link className={classes.icon} to="userpage">
            <BsPerson />
          </Link>
          <Link className={classes.icon} to="favorites">
            <BsHeart />
          </Link>
          <div
            className={`${classes.icon} ${classes.cartIcon} ${
              btnHighlighted && classes.quiver
            }`}
            onClick={toggleCart}
          >
            <BsBag />
            <span>{cart.itemCount}</span>
          </div>
        </div>
      </header>
    </>
  );
}
