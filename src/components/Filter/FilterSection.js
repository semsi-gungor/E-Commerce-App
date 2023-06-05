import React from 'react';
import classes from './FilterSection.module.css';
import ModalMenu from '../UI/ModalMenu/ModalMenu';
import useDelayedAnimation from '../../hooks/use-delayed-unmount';

export default function FilterSection() {
  const [menuIsMounted, menuIsAnimating, toggleMenu] = useDelayedAnimation(300);

  return (
    <>
      {menuIsMounted && (
        <ModalMenu
          onClose={toggleMenu}
          animate={menuIsAnimating}
          direction="right"
        />
      )}
    </>
  );
}
