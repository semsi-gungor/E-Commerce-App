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
      <button
        onClick={() => {
          dispatch(uiActions.showAddedProduct());
          setTimeout(() => {
            dispatch(uiActions.hideAddedProduct());
          }, 2000);
        }}
      >
        Toggle
      </button>
      {showAddedProduct && (
        <div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
          tempore facere nisi, minima nihil obcaecati nobis cum omnis nulla qui
          aspernatur accusamus, fugit explicabo? Quas vel amet at mollitia
          quisquam?
        </div>
      )}
    </div>
  );
}
