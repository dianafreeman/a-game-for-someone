import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Plane from '../Plane';

const Row = ({ y, length, onClick }) => {
  const r = [];
  for (let x = 0; x < length; x += 1) {
    r.push(<Plane onClick={onClick} xPos={x} yPos={y} key={x} />);
  }
  return r;
};

/*
 size = 3
 origin = 0,0

 sideLength = (size - 1) / 2
 OriginRow = -sideLength -> [0,0] => +sideLength
 */
const zeroToHalf = (half) => {
  const out = [];
  for (let i = 0; i < (half / 2); i += 1) {
    out.push(i);
  }
  return out;
};

const negToPos = (pos) => {
  const reversed = [...pos].reverse();
  const neg = reversed.slice(0, -1).map((i) => -i);
  return [...neg, ...pos];
};


// const cell = (x, y) => [x, y];
const placements = [
  [
    [-1, -1], [0, -1], [1, -1],
  ],
  [
    [-1, 0], [0, 0], [1, 0],
  ],
  [
    [-1, 1], [0, 1], [1, 1],
  ],
];

const makeXs = (size) => negToPos(zeroToHalf((size - 1 / 2)));

const RowData = (xSize, yPosition) => {
  const xS = makeXs(xSize);
  return xS.map((x) => [x, yPosition]);
};

function Grid({ size = 5, onSquareClick }) {
  return (
    <>
      {placements.map((row) => row.map((cell) => <Plane onClick={onSquareClick} xPos={cell[0]} yPos={cell[1]} key={`plane-row-${row}-cell-${cell}`} />))}
    </>
  );
}

Grid.propTypes = {
  size: PropTypes.number.isRequired,
  onSquareClick: PropTypes.func.isRequired,
};

export default Grid;
