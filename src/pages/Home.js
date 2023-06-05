import React from 'react';
import Slider from '../components/Slider/Slider';
import classes from './HomePage.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../store/ui-slice';

export default function HomePage() {
  const { showAddedProduct } = useSelector((state) => state.ui);
  const dispatch = useDispatch();

  return (
    <div className={classes.container}>
      <Slider />
    </div>
  );
}
