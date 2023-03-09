import React from 'react';
import LinesEllipsis from 'react-lines-ellipsis';
import Buttons from './Buttons/Buttons';
import styles from './Content.module.css';
import Profile from './Profile/Profile';

function Content({ id, title, description, firstPlace, secondPlace }) {
  return (
    <div className={styles.content}>
      <div className={styles.profilesContainer}>
        <Profile name={firstPlace} />
        <Profile name={secondPlace} />
      </div>
      <div className={styles.detailsContainer}>
        <LinesEllipsis className={styles.title} text={title} maxLine="2" ellipsis="..." trimRight basedOn="letters" />
        <LinesEllipsis
          className={styles.description}
          text={description}
          maxLine="2"
          ellipsis="..."
          trimRight
          basedOn="letters"
        />
        <Buttons id={id} />
      </div>
    </div>
  );
}

export default Content;
