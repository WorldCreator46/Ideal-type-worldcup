import React, { useEffect, useMemo, useState } from 'react';
import mainData from '../Src';
import './Body.css';
import Content from './Content/Content';
import Header from './Header/Header';
import PageBar from './PageBar/PageBar';

function Body() {
  const [pageNumber, setNumber] = useState(1);
  const [arraySize, setSize] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      setSize(sizeCalc());
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const splitDatas = useMemo(() => {
    const chunkSize = arraySize;
    const newArr = [[]];
    for (let i = 0; i < mainData.length; i += chunkSize) {
      newArr.push(mainData.slice(i, i + chunkSize));
    }
    return newArr;
  }, [arraySize]);
  return (
    <div className="bodyContainer">
      <Header splitDatas={splitDatas} />
      <div className="gridContainer">
        {splitDatas[pageNumber]
          ? splitDatas[pageNumber].map((data, index) => (
              <Content
                key={`mainData${index}`}
                id={data.id}
                title={data.title}
                description={data.description}
                firstPlace={data.firstPlace}
                secondPlace={data.secondPlace}
              />
            ))
          : splitDatas[1].map((data, index) => (
              <Content
                key={`mainData${index}`}
                id={data.id}
                title={data.title}
                description={data.description}
                firstPlace={data.firstPlace}
                secondPlace={data.secondPlace}
              />
            ))}
      </div>
      <PageBar totalLength={splitDatas.length} pageNumber={pageNumber} setNumber={setNumber} />
    </div>
  );
}

function sizeCalc() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  let [r, c] = [1, 1];
  if (width <= 699) {
    r = 1;
  } else if (width >= 700 && width <= 1099) {
    r = 2;
  } else if (width >= 1100 && width <= 1439) {
    r = 3;
  } else if (width >= 1440 && width <= 1849) {
    r = 4;
  } else if (width >= 1850 && width <= 2219) {
    r = 5;
  } else if (width >= 2220 && width <= 2599) {
    r = 6;
  } else {
    r = 7;
  }
  if (height <= 849) {
    c = 1;
  } else if (height >= 850 && height <= 1199) {
    c = 2;
  } else if (height >= 1200 && height <= 1499) {
    c = 3;
  } else {
    c = 4;
  }
  return r * c;
}
export default Body;
