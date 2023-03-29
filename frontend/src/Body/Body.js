import moment from 'moment';
import 'moment-timezone';
import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import mainData from '../Src';
import './Body.css';
import Content from './Content/Content';
import Header from './Header/Header';
import PageBar from './PageBar/PageBar';

function Body({ keyword, sortBy, setSortBy, period, setPeriod, imageVideo, setImageVideo }) {
  const [pageNumber, setNumber] = useState(1);
  const [arraySize, setSize] = useState(3);
  const movePage = useNavigate();

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
    let keywordStep, imageVideoStep, periodStep, sortByStep;

    if (keyword === undefined) {
      keywordStep = [...mainData];
    } else {
      keywordStep = mainData.filter((item) => item.title.includes(keyword));
    }

    if (keywordStep.length === 0) {
      keywordStep = [...mainData];
      movePage('/');
    }

    if (imageVideo === '전체') {
      imageVideoStep = [...keywordStep];
    } else if (imageVideo === '이미지') {
      imageVideoStep = keywordStep.filter((item) => item.ImageVideoClassification === 'Image');
    } else if (imageVideo === '영상') {
      imageVideoStep = keywordStep.filter((item) => item.ImageVideoClassification === 'Video');
    }

    if (imageVideoStep.length === 0) {
      imageVideoStep = [...keywordStep];
      setImageVideo('전체');
    }

    if (period === '전체') {
      periodStep = [...imageVideoStep];
    } else if (period === '년') {
      periodStep = imageVideoStep.filter((item) => moment().diff(item.LastRevisionDate, 'days') <= 365);
    } else if (period === '월') {
      periodStep = imageVideoStep.filter((item) => moment().diff(item.LastRevisionDate, 'days') <= 31);
    } else if (period === '주') {
      periodStep = imageVideoStep.filter((item) => moment().diff(item.LastRevisionDate, 'days') <= 7);
    } else if (period === '일') {
      periodStep = imageVideoStep.filter((item) => moment().diff(item.LastRevisionDate, 'days') <= 1);
    }

    if (periodStep.length === 0) {
      periodStep = [...imageVideoStep];
      setPeriod('전체');
    }

    if (sortBy === '인기순') {
      sortByStep = periodStep.sort((a, b) => b.NumberOfTimesPlayed - a.NumberOfTimesPlayed);
    } else if (sortBy === '최신순') {
      sortByStep = periodStep.sort((a, b) => moment(a.LastRevisionDate).diff(moment(b.LastRevisionDate)));
    }

    const tempList = [...sortByStep];
    const newArr = [[]];
    for (let i = 0; i < tempList.length; i += chunkSize) {
      newArr.push(tempList.slice(i, i + chunkSize));
    }
    return newArr;
  }, [arraySize, sortBy, period, imageVideo, setImageVideo, setPeriod, keyword, movePage]);
  return (
    <div className="bodyContainer">
      <Header
        sortBy={sortBy}
        setSortBy={setSortBy}
        period={period}
        setPeriod={setPeriod}
        imageVideo={imageVideo}
        setImageVideo={setImageVideo}
      />
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
