import React, { useState } from 'react';
import { FaSearch, FaTrophy } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './Header.css';

function Header({ sortBy, setSortBy, period, setPeriod, imageVideo, setImageVideo }) {
  const movePage = useNavigate();
  const [searchData, SetSearchData] = useState('');
  const onChange = (e) => {
    SetSearchData(e.target.value);
  };
  const onChangeSortBy = (e) => {
    setSortBy(e.target.value);
  };
  const onChangePeriod = (e) => {
    setPeriod(e.target.value);
  };
  const onChangeImageVideo = (e) => {
    setImageVideo(e.target.value);
  };
  const submitEvent = (e) => {
    e.preventDefault();
    if (searchData !== undefined && searchData !== '') {
      movePage(`/search/${searchData}`);
    } else {
      movePage('/');
    }
    SetSearchData('');
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      submitEvent(e);
    }
  };

  return (
    <div className="headerContainer">
      <div
        onClick={() => {
          movePage('/');
        }}
        className="logoContainer"
      >
        <h1 className="logo">
          <FaTrophy />
          <span> &nbsp;이상형 월드컵</span>
        </h1>
      </div>
      <form className="searchContainer">
        <input
          type="text"
          className="searchBox"
          value={searchData}
          onChange={onChange}
          placeholder=""
          required={true}
          onSubmit={submitEvent}
          onKeyDown={onKeyDown}
        />
        <FaSearch onClick={submitEvent} />
      </form>
      <div className="optionContainer">
        <select value={sortBy} className="SortBy" onChange={onChangeSortBy}>
          <option className="popularity">인기순</option>
          <option className="latest">최신순</option>
        </select>
        <select value={period} className="Period" onChange={onChangePeriod}>
          <option className="all">전체</option>
          <option className="yaer">년</option>
          <option className="month">월</option>
          <option className="week">주</option>
          <option className="day">일</option>
        </select>
        <select value={imageVideo} className="SelectImageVideo" onChange={onChangeImageVideo}>
          <option className="all">전체</option>
          <option className="image">이미지</option>
          <option className="video">영상</option>
        </select>
      </div>
    </div>
  );
}

export default Header;
