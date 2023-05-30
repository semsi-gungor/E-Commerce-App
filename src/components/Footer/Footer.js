import React from 'react';
import {
  AiOutlineCopyrightCircle,
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineTwitter,
  AiOutlineYoutube,
} from 'react-icons/ai';
import classes from './Footer.module.css';

export default function Footer() {
  return (
    <div className={classes.container}>
      <div className={classes.footerContainer}>
        <div className={classes.footerLinkContainer}>
          <div className={classes.footerLinks}>
            <h4>Yardım</h4>
            <a href="#">SSS ve İletişim</a>
            <a href="#">Siparişimin durumu</a>
            <a href="#">İade işlemleri</a>
            <a href="#">Hesabım</a>
          </div>
        </div>
        <div className={classes.footerLinkContainer}>
          <div className={classes.footerLinks}>
            <h4>Şirket</h4>
            <a href="#">SSS ve İletişim</a>
            <a href="#">Siparişimin durumu</a>
            <a href="#">İade işlemleri</a>
            <a href="#">Hesabım</a>
          </div>
        </div>
        <div className={classes.footerLinkContainer}>
          <div className={classes.footerLinks}>
            <h4>Ödeme Yöntemleri</h4>
            <a href="#">SSS ve İletişim</a>
            <a href="#">Siparişimin durumu</a>
            <a href="#">İade işlemleri</a>
            <a href="#">Hesabım</a>
          </div>
        </div>
      </div>

      <div className={classes.socialContainer}>
        <div className={classes.socialIcon}>
          <a href="#">
            <AiOutlineInstagram />
          </a>
        </div>
        <div className={classes.socialIcon}>
          <a href="#">
            <AiOutlineFacebook />
          </a>
        </div>
        <div className={classes.socialIcon}>
          <a href="#">
            <AiOutlineTwitter />
          </a>
        </div>
        <div className={classes.socialIcon}>
          <a href="#">
            <AiOutlineYoutube />
          </a>
        </div>
      </div>

      <div className={classes.rights}>
        <AiOutlineCopyrightCircle />
        <p>Her hakkı saklıdır. 2023</p>
      </div>
    </div>
  );
}
