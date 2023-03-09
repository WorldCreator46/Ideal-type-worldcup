import React from 'react';
import Buttons from './Buttons/Buttons';
import styles from './Content.module.css';
import Profile from './Profile/Profile';
function Content({ id, title, description, firstPlace, secondPlace }) {
  return (
    <div className={styles.A}>
      <div>
        <Profile name={firstPlace} />
        <Profile name={secondPlace} />
      </div>
      <div>
        <h2>{title}</h2>
        <p>
          <span>{description}</span>
        </p>
        <Buttons id={id} />
      </div>
    </div>
  );
}

export default Content;
