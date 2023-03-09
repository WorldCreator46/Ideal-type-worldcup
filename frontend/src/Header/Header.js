import React from 'react';
import { FaTrophy } from 'react-icons/fa';
import styles from './Header.module.css';

function Header() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.LogoContainer}>
        <h1 className={styles.Logo}>
          <FaTrophy /> 이상형 월드컵
        </h1>
      </div>
    </div>
  );
}

export default Header;
