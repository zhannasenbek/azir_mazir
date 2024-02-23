import React from 'react';
import styles from './cardElement.module.css';
const CardElement = ({ digit, text }) => {
  return (
    <div>
      <div className={styles.card}>
        <div className={styles.card__digit}>{digit}</div>
        <div className={styles.card__block}></div>
        <div className={styles.card__text}>{text}</div>
      </div>
    </div>
  );
};

export default CardElement;
