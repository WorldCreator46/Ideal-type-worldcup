import React from 'react';
import './Body.css';
import Content from './Content/Content';
function Body({ mainData }) {
  return (
    <div className="bodyContainer">
      <div className="gridContainer">
        {mainData.map((data, index) => (
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
    </div>
  );
}
export default Body;
