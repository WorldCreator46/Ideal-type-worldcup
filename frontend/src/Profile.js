import React from 'react';
import styles from './Profile.module.css';
function Profile({ name }) {
  return (
    <div className={styles.A}>
      <img src={name + '.png'} alt={name} />
      <p>
        <span>{name}</span>
      </p>
    </div>
  );
}

export default Profile;
