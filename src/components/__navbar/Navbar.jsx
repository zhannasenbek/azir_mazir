import React from 'react';
import styles from './navbar.module.css';
import user from '../../assets/user.png';
import heart from '../../assets/heart.png';
import logo from '../../assets/logo.svg';
const Navbar = () => {
  return (
    <div>
      <header className={styles.main__header}>
        <img src={logo} className={styles.main__logo}></img>
        <img src={user} className={styles.main__userLogo} alt='User Logo' />
        <img
          src={heart}
          className={styles.main__heartLogo}
          alt='hear Logo'></img>
      </header>
    </div>
  );
};

export default Navbar;
