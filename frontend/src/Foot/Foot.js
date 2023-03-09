import React from 'react';
import styles from './Foot.module.css';

function Foot() {
  return (
    <div className={styles.FootContainer}>
      <p>
        <span className={styles.FootSpan}>Copyright © 2023 [회사/웹사이트 이름]. All rights reserved.</span>
      </p>
    </div>
  );
}

export default Foot;
