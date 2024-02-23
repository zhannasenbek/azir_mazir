import React from 'react';
import logo from '../../assets/logo.png';
import styles from './footer.module.css';
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img src={logo} className={styles.footer__img}></img>
      <div className={styles.footer__containerText}>
        <div>
          <div className={styles.footer__text_bold}>Біз туралы</div>
          <div className={styles.footer__text_marginTop}>Features</div>
          <div>Live share</div>
          <div>Video record</div>
        </div>
        <div className={styles.footer__textSecond}>
          <div className={styles.footer__text_bold}>Бізбен байланысу</div>
          <div className={styles.footer__text_marginTop}>Featured artists</div>
          <div>The portal</div>
          <div>Live events</div>
        </div>
      </div>
      <div className={styles.footer__buttonContainer}>
        <button className={styles.footer__tirkeluButton}>Тіркелу</button>
        <button className={styles.footer_kiruButton}>Кіру</button>
      </div>
    </footer>
  );
};

export default Footer;
