import React, { useEffect, useState } from 'react';
import { FaBackward, FaForward, FaPlay } from 'react-icons/fa';
import './PageBar.css';

function PageBar({ pageNumber, setNumber, totalLength }) {
  const [viewer, setView] = useState([]);
  const first = () => {
    setNumber(1);
  };

  const backward = () => {
    let temp = pageNumber - 5;
    if (temp > 0) {
      setNumber(temp);
    } else {
      first();
    }
  };

  const forward = () => {
    let temp = pageNumber + 5;
    if (temp < totalLength) {
      setNumber(temp);
    } else {
      end();
    }
  };

  const end = () => {
    setNumber(totalLength - 1);
  };

  useEffect(() => {
    let temp = [];
    if (pageNumber < 3) {
      temp = [1, 2, 3, 4, 5];
    } else if (pageNumber > totalLength - 3) {
      temp = [totalLength - 5, totalLength - 4, totalLength - 3, totalLength - 2, totalLength - 1];
    } else {
      temp = [pageNumber - 2, pageNumber - 1, pageNumber, pageNumber + 1, pageNumber + 2];
    }
    setView(temp);
  }, [pageNumber, totalLength]);

  const onClick = (num) => {
    if (num < totalLength) {
      setNumber(num);
    }
  };

  return (
    <div className="PageBarDiv">
      <span onClick={first} className="icon">
        <FaBackward />
      </span>
      <span onClick={backward} className="icon">
        <FaPlay style={{ transform: 'rotate(180deg)' }} />
      </span>
      {viewer.map((n) => (
        <span key={n} onClick={() => onClick(n)} className={n === pageNumber ? 'select number' : 'number'}>
          {n}
        </span>
      ))}
      <span onClick={forward} className="icon">
        <FaPlay />
      </span>
      <span onClick={end} className="icon">
        <FaForward />
      </span>
    </div>
  );
}

export default PageBar;
