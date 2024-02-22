import React, { useState } from 'react';
import styles from './card.module.css';
import CardElement from './__cardElement/CardElement';

const Card = () => {
  const [card, setCard] = useState([
    {
      number: 1,
      text: 'Өзіңізде бар өнімдерді белгілеп шығасыз',
    },
    {
      number: 2,
      text: 'Рецепт іздеу батырмасын басасыз',
    },
    {
      number: 3,
      text: 'Өзіңізге ұнаған рецептін таңдайсыз',
    },
    {
      number: 4,
      text: 'Өзіңізге ұнаған рецептін таңдайсыз',
    },
  ]);
  return (
    <div className={styles.menu}>
      <div className={styles.menu__mainText}>Бұл қалай жұмыс істейді?</div>
      <div className={styles.cardContainer}>
        {card.map((item, index)=>(
        <CardElement key={index} digit={item.number} text={item.text}></CardElement>
        ))}
      </div>
    </div>
  );
};

export default Card;
