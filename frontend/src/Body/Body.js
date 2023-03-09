import React from 'react';
import styles from './Body.module.css';
import Content from './Content/Content';
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

export default Body;
