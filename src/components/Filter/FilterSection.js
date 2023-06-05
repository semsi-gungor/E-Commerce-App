import React from 'react';
import classes from './FilterSection.module.css';
import ModalMenu from '../UI/ModalMenu/ModalMenu';

export default function FilterSection({
  toggle,
  isAnimating,
  direction,
  children,
}) {
  return (
    <ModalMenu onClose={toggle} animate={isAnimating} direction={direction} />
  );
}
