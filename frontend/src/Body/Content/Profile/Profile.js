import React from 'react';
import LinesEllipsis from 'react-lines-ellipsis';
import './Profile.css';

function Profile({ name }) {
  return (
    <div className="profile">
      <img src={'2.png'} alt={name} />
      <LinesEllipsis className="name" text={name.trim()} maxLine="3" ellipsis="" basedOn="letters" />
    </div>
  );
}

export default Profile;
