import React, { useState, useEffect, useRef } from 'react';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import Bars from './Bars';
import classes from './Slider.module.css';

const slides = [
  {
    id: 0,
    title: 'Lorem',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    imgSrc:
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-4.0.3',
    isDark: false,
  },
  {
    id: 1,
    title: 'Lorem',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    imgSrc:
      'https://images.unsplash.com/photo-1494578379344-d6c710782a3d?ixlib=rb-4.0.3',
    isDark: false,
  },
  {
    id: 2,
    title: 'Lorem',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    imgSrc:
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-4.0.3',
    isDark: false,
  },
  {
    id: 3,
    title: 'Lorem',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    imgSrc:
      'https://images.unsplash.com/photo-1585960622850-ed33c41d6418?ixlib=rb-4.0.3',
    isDark: false,
  },
];

export default function Slider() {
  const [index, setIndex] = useState(0);

  const intervalRef = useRef(null);

  function clickHandler(index) {
    setIndex(index);
    clearTimer();
  }

  function clearTimer() {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }

  function slideToLeftHandler() {
    setIndex((prevIndex) => {
      if (prevIndex > 0) {
        return prevIndex - 1;
      } else {
        setIndex(3);
      }
    });
    clearTimer();
  }

  function slideToRightHandler() {
    setIndex((prevIndex) => {
      if (prevIndex < 3) {
        return prevIndex + 1;
      } else {
        setIndex(0);
      }
    });
    clearTimer();
  }

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIndex((prevIndex) => {
        if (prevIndex < 3) {
          return prevIndex + 1;
        } else {
          setIndex(0);
        }
      });
    }, 5000);

    return () => clearInterval(intervalRef.current);
  }, [index]);

  return (
    <div className={classes.container}>
      <div
        className={classes.slider}
        style={{ transform: `translateX(${index * -100}vw)` }}
      >
        {slides.map((slide) => {
          return (
            <div key={slide.id} className="image-container">
              <img src={slide.imgSrc} />
            </div>
          );
        })}
      </div>

      <div
        className={`${classes.arrowContainer} ${classes.left}`}
        onClick={slideToLeftHandler}
      >
        <SlArrowLeft />
      </div>
      <div
        className={`${classes.arrowContainer} ${classes.right}`}
        onClick={slideToRightHandler}
      >
        <SlArrowRight />
      </div>

      <Bars count={slides.length} index={index} onClick={clickHandler} />
    </div>
  );
}
