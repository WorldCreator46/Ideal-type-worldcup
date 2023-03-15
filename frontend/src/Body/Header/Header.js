import React, { useState } from 'react';
import { FaSearch, FaTrophy } from 'react-icons/fa';
import './Header.css';

function Header({ splitDatas }) {
  const [searchData, SetSearchData] = useState('');
  const onChange = (e) => {
    SetSearchData(e.target.value);
  };
  const submitEvent = () => {};
  return (
    <div className="headerContainer">
      <div className="logoContainer">
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
        />
        <FaSearch onClick={submitEvent} />
      </form>
      <div className="optionContainer"></div>
    </div>
  );
}

export default Header;
