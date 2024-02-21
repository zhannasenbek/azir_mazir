import React from 'react';
import styles from './card.module.css';
import CardElement from './__cardElement/CardElement';
const Card = () => {
  return (
    <div className={styles.menu}>
      <div className={styles.menu__mainText}>Бұл қалай жұмыс істейді?</div>
      <CardElement digit={1} text={'Өзіңізде бар өнімдерді белгілеп шығасыз'} />
      <CardElement digit={2} text={'Рецепт іздеу батырмасын басасыз'} />
      <CardElement digit={3} text={'Рецепт іздеу батырмасын басасыз'} />
      <CardElement digit={4} text={'Рецепт іздеу батырмасын басасыз'} />
    </div>
  );
};

export default Card;
