import React from 'react';
import Slider from '../components/Slider/Slider';
import classes from './HomePage.module.css';

export default function HomePage() {
  return (
    <div className={classes.container}>
      <Slider />
    </div>
  );
}
