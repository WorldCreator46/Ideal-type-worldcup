import React from 'react';
import { FaPlayCircle, FaShareSquare, FaTrophy } from 'react-icons/fa';
import styles from './Buttons.module.css';

function Buttons({ id }) {
  const start = () => {};
  const ranking = () => {};
  const sharing = () => {};
  return (
    <div className={styles.ButtonContainer}>
      <button className={styles.startButton} onClick={start}>
        <FaPlayCircle />
        <span className={styles.buttonText}>시작하기</span>
      </button>
      <button className={styles.rankingButton} onClick={ranking}>
        <FaTrophy />
        <span className={styles.buttonText}>랭킹보기</span>
      </button>
      <button className={styles.sharingButton} onClick={sharing}>
        <FaShareSquare />
        <span className={styles.buttonText}>공유</span>
      </button>
    </div>
  );
}
export default Buttons;
