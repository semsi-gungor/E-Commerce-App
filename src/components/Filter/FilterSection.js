import React from 'react';
import classes from './FilterSection.module.css';
import ModalMenu from '../UI/ModalMenu/ModalMenu';
import PriceBar from './PriceBar';
import Sizes from './Sizes';

export default function FilterSection({
  toggle,
  isAnimating,
  direction,
  children,
}) {
  return (
    <ModalMenu onClose={toggle} animate={isAnimating} direction={direction}>
      <div className={classes.container}>
        <Sizes maxValue="2000" />
      </div>
    </ModalMenu>
  );
}
