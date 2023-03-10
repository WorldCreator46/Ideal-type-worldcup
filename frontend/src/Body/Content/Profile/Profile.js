import React from 'react';
import LinesEllipsis from 'react-lines-ellipsis';
import styles from './Profile.module.css';

function Profile({ name }) {
  return (
    <div className={styles.profile}>
      <img src={'2.png'} alt={name} />
      <LinesEllipsis className={styles.name} text={name} maxLine="1" ellipsis="..." trimRight basedOn="letters" />
    </div>
  );
}

export default Profile;
