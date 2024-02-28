import React from 'react';
import styles from './cardElement.module.css';
const CardElement = ({ digit, text, src }) => {
  console.log(src);
  return (
    <div>
      <div className={styles.card}>
        <div className={styles.card__digit}>{digit}</div>
        <div className={styles.card__imgContainer}>
          <img src={src} className={styles.card__img}></img>
        </div>
        <div className={styles.card__text}>{text}</div>
      </div>
    </div>
  );
};

export default CardElement;
