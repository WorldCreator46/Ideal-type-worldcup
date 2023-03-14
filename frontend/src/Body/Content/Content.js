import React from 'react';
import LinesEllipsis from 'react-lines-ellipsis';
import Buttons from './Buttons/Buttons';
import './Content.css';
import Profile from './Profile/Profile';

function Content({ id, title, description, firstPlace, secondPlace }) {
  return (
    <div className="content">
      <div className="profilesContainer">
        <Profile name={firstPlace} />
        <Profile name={secondPlace} />
      </div>
      <div className="detailsContainer">
        <LinesEllipsis
          className="title"
          text={title.trim()}
          maxLine="10"
          ellipsis=""
          basedOn="letters"
          style={{ maxWidth: '299px', maxHeight: '43px', overflow: 'hidden' }}
        />
        <LinesEllipsis
          className="description"
          text={description.trim()}
          maxLine="50"
          ellipsis=""
          basedOn="letters"
          style={{ maxWidth: '299px', maxHeight: '17px', overflow: 'hidden' }}
        />
        <Buttons id={id} />
      </div>
    </div>
  );
}

export default Content;
