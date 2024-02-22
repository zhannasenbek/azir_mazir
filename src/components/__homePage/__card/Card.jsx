import React from 'react';
import styles from './card.module.css';

const Card = () => {
  return (
    <div className={styles.menu}>
      <div className={styles.menu__mainText}>Бұл қалай жұмыс істейді?</div>
      <div className={styles.cardContainer}>
        <div className={styles.card}>1 Өзіңізде бар өнімдерді белгілеп шығасыз</div>
        <div className={styles.card}>2 Рецепт іздеу батырмасын басасыз</div>
        <div className={styles.card}>3 Өзіңізге ұнаған рецептін таңдайсыз</div>
        <div className={styles.card}>4 Өзіңізге ұнаған рецептін таңдайсыз</div>
      </div>
    </div>
  );
};

export default Card;
