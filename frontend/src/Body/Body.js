import React, { useEffect, useMemo, useState } from 'react';
import mainData from '../Src';
import './Body.css';
import Content from './Content/Content';
import Header from './Header/Header';

function Body() {
  const [pageNumber, setNumber] = useState(0);
  const [arraySize, setArray] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 699) {
        setArray(2);
      } else if (width >= 700 && width <= 1099) {
        setArray(4);
      } else if (width >= 1100 && width <= 1439) {
        setArray(6);
      } else if (width >= 1440 && width <= 1849) {
        setArray(8);
      } else if (width >= 1850 && width <= 2219) {
        setArray(15);
      } else if (width >= 2220 && width <= 2599) {
        setArray(18);
      } else {
        setArray(24);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const splitDatas = useMemo(() => {
    const chunkSize = arraySize;
    const newArr = [];
    for (let i = 0; i < mainData.length; i += chunkSize) {
      newArr.push(mainData.slice(i, i + chunkSize));
    }

    return newArr;
  }, [arraySize]);
  return (
    <div className="bodyContainer">
      <Header />
      <div className="gridContainer">
        {splitDatas[pageNumber].map((data, index) => {
          return (
            <Content
              key={`mainData${index}`}
              id={data.id}
              title={data.title}
              description={data.description}
              firstPlace={data.firstPlace}
              secondPlace={data.secondPlace}
            />
          );
        })}
      </div>
    </div>
  );
}
export default Body;
