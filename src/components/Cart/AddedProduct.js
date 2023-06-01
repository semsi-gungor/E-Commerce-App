import React from 'react';
import classes from './AddedProduct.module.css';

import { AiOutlineCheckCircle, AiOutlineClose } from 'react-icons/ai';

export default function AddedProduct() {
  return (
    <div className={classes.container}>
      <div className={classes.productHeader}>
        <p>
          <AiOutlineCheckCircle className={classes.checked} />
          <span>Sepetinize Eklendi</span>
        </p>
        <AiOutlineClose className={classes.close} />
      </div>
      <div className={classes.productBody}>
        <div
          className={classes.imgContainer}
          style={{
            backgroundImage:
              'url(https://static.e-stradivarius.net/5/photos3/2023/V/0/1/p/7078/125/001/7078125001_6_1_1.jpg)',
          }}
        ></div>
        <div className={classes.productInfo}>
          <p className={classes.title}>Lorem ipsum dolor sit</p>
          <p className={classes.size}>M</p>
        </div>
      </div>
      <button className={classes.checkoutButton}>Siparişi Onayla</button>
      <a href="#" className={classes.cartButton}>
        Sepeti görüntüle
      </a>
    </div>
  );
}
