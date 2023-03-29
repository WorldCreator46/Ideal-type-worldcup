import React, { useState } from 'react';
import LinesEllipsis from 'react-lines-ellipsis';
import './Profile.css';

function Profile({ name }) {
  const [imgSrc, setImgSrc] = useState(name);

  const onError = () => {
    setImgSrc(`2.png`);
  };

  return (
    <div className="profile">
      <img src={`${process.env.PUBLIC_URL}/${imgSrc}`} alt={name} onError={onError} />
      <LinesEllipsis className="name" text={name.trim()} maxLine="3" ellipsis="" basedOn="letters" />
    </div>
  );
}

export default Profile;
