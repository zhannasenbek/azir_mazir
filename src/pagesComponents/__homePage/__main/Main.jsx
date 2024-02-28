import React from 'react';
import main from '../../../assets/mainPage.jpg';
import user from '../../../assets/user.png';
import heart from '../../../assets/heart.png';
import logo from '../../../assets/logo.svg';
import styles from './main.module.css';
const Main = () => {
  return (
    <div>
      <div className={styles.main__container}>
        <img src={main} className={styles.main__image} alt='Main Page' />

        <header className={styles.main__header}>
          <img src={logo} className={styles.main__logo}></img>
          <img src={user} className={styles.main__userLogo} alt='User Logo' />
          <img
            src={heart}
            className={styles.main__heartLogo}
            alt='hear Logo'></img>
        </header>

        <div className={styles.main__textContainer}>
          <p className={styles.main__text}>
            Үйде тамақ әзірлегенді ұнататындар
            <p className={styles.main__subtextMain}>
              үшін инновациялық қызмет!
            </p>
          </p>
          <p className={styles.main__subText}>
            Ингредиенттеріңізбен жасалған дәмді рецепттерді табыңыз! <br />{' '}
            Дүкенге бармай-ақ, өзіңізде бар нәрсені енгізіп, сәйкес <br />
            келетін рецепттерді алыңыз!
          </p>
        </div>
        <div className={styles.main__buttonContainer}>
          <button className={styles.main__izdeu}>Рецепттерді іздеу...</button>
          <button className={styles.main__tandau}>Өнімдерді таңдау</button>
        </div>
      </div>
    </div>
  );
};

export default Main;
