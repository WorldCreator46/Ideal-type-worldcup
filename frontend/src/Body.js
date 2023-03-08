import React from 'react';
import styles from './Body.module.css';
import Buttons from './Buttons';
/**
 * mainData :
 *
 * id : 월드컵게임 아이디,
 *
 * title : 월드컵게임 제목,
 *
 * description : 월드컵게임 설명,
 *
 * firstPlace : 가장 많이 우승 한 선택지,
 *
 * secondPlace : 두번째로 많이 우승 한 선택지
 */
function Body({ mainData }) {
  return (
    <div className={styles.BodyContainer}>
      {mainData.map((i) => {
        return (
          <Content
            id={i.id}
            title={i.title}
            description={i.description}
            firstPlace={i.firstPlace}
            secondPlace={i.secondPlace}
          />
        );
      })}
    </div>
  );
}

function Content({ id, title, description, firstPlace, secondPlace }) {
  return (
    <div>
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

function Profile({ name }) {
  return (
    <div>
      <img src={name + '.png'} alt={name} />
      <p>
        <span>{name}</span>
      </p>
    </div>
  );
}

export default Body;
