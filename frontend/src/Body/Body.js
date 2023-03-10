import React from 'react';
import { VariableSizeGrid as Grid } from 'react-window';
import styles from './Body.module.css';
import Content from './Content/Content';

function Body({ mainData }) {
  const cellWidth = 369;
  const cellHeight = 337;
  const columnCount = 6;
  const columnGap = 9;
  const rowGap = 10;

  const getCellSize = (index) => {
    const columnWidth = 352;
    const rowHeight = cellHeight + rowGap;
    const columnIndex = index % columnCount;
    const rowIndex = Math.floor(index / columnCount);

    const left = columnIndex * (columnWidth + columnGap) + 20;
    const top = rowIndex * rowHeight + 20;
    const isLastRow = rowIndex === Math.floor((mainData.length - 1) / columnCount);
    const bottom = isLastRow ? 0 : rowHeight;
    return {
      width: columnWidth,
      height: cellHeight,
      left,
      top,
      bottom,
    };
  };

  const Cell = ({ columnIndex, rowIndex, style }) => {
    const index = rowIndex * columnCount + columnIndex;
    const { width, height, top, left, bottom } = getCellSize(index);
    console.log({ ...style, top, left, bottom, width, height });
    return (
      <div style={{ ...style, top, left, bottom, width, height }}>
        <Content
          id={mainData[index].id}
          title={mainData[index].title}
          description={mainData[index].description}
          firstPlace={mainData[index].firstPlace}
          secondPlace={mainData[index].secondPlace}
        />
      </div>
    );
  };

  return (
    <div className={styles.BodyContainer}>
      <Grid
        columnCount={columnCount}
        columnWidth={() => cellWidth}
        rowCount={Math.ceil(mainData.length / columnCount)}
        rowHeight={() => cellHeight + rowGap}
        height={window.innerHeight - 40}
        width={window.innerWidth}
        className={styles.ContentContainer}
      >
        {Cell}
      </Grid>
    </div>
  );
}

export default Body;
