import React from 'react';
import styles from './form.module.css';
import Input from '../../Input';
import logo from '../../../../assets/logo1.svg';
import { Link } from 'react-router-dom';
const Form = () => {
  return (
    <div className={styles.background}>
      <form className={styles.form}>
        <img src={logo}></img>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Input placeholder={'Аты'}></Input>
          <Input placeholder={'Тегі'}></Input>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '10px',
            gap: '20px',
          }}>
          <Input placeholder={'Email'}></Input>
          <Input placeholder={'Құпия сөз'}></Input>
          <Input placeholder={'Құпиясөзді қайтала'}></Input>
        </div>
        <Link>Тіркелу</Link>
        <Link>Кіру</Link>
      </form>
    </div>
  );
};

export default Form;
