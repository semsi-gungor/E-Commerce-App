import React, { useEffect, useState } from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';
import classes from './ScrollUpButton.module.css';

let lastScroll = 0;

export default function ScrollUpButton() {
  const [scrollDirection, setScrolldirection] = useState(false);

  function scrollHandler() {
    let position = window.pageYOffset;

    if (position < 1000) {
      setScrolldirection(false);
      return;
    }

    if (lastScroll > position) {
      setScrolldirection(true);
    }

    if (lastScroll < position) {
      setScrolldirection(false);
    }
    lastScroll = position;
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler, { passive: true });

    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className={classes.container}
      style={{ transform: scrollDirection ? '' : 'translateY(200%)' }}
      onClick={scrollToTop}
    >
      <AiOutlineArrowUp />
    </div>
  );
}
