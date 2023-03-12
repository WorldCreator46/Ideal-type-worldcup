import React from 'react';
import { FaTrophy } from 'react-icons/fa';
import './Header.css';

function Header() {
  return (
    <div className="headerContainer">
      <div className="logoContainer">
        <h1 className="logo">
          <FaTrophy />
          &nbsp;이상형 월드컵
        </h1>
      </div>
    </div>
  );
}

export default Header;
