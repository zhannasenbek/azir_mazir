import React from 'react';
import main from '../../assets/mainPage.jpg';
import styles from './homepage.module.css';
import user from '../../assets/user.png';
import heart from '../../assets/heart.png';

const Home = () => {
  return (
    <div className={styles.main}>
      <div className={styles.main__container}>
        <img src={main} className={styles.main__image} alt='Main Page' />
        <div className={styles.main__logoContainer}>
          <img
            src='https://s3-alpha-sig.figma.com/img/07a2/b899/eb7c17c2555284c53e0a8998aaa1756d?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZtYAHPVZvs2q3p3Q3PBgS4pEQB7lonsikQXxMjC7z4H1TU4vx-50k78v3Lg~Ttj94FfyVssu4MMi4eOgO4hbYX4dW8YyNL5qM5l16TJzxYf6DTTyMcHFSgh650d~OD5fBC803hPzNA5HxESi8mSenqgHNUs~kvv-tbO9P~ooh6D2lJ4lr27JvtDLL1WnXMVFRIzg32763gcpd08iUxzlACZAz380wN1O5KgwgkcS3QMfThQ7cZbOuYVju9521OBwo0Gi7e-fP0s~kqHDQGAPMhFfwbtpftN2DPUR3NMuA5LzQkLyo6Bpiy9U59f6QyMQAZSV0Dkh9phQsIiocCH1Xw__'
            className={styles.main__cookerLogo}
            alt='Cooker Logo'
          />
          <img src={user} className={styles.main__userLogo} alt='User Logo' />
          <img
            src={heart}
            className={styles.main__heartLogo}
            alt='hear Logo'></img>
        </div>
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

export default Home;
