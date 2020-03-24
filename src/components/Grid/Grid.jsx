import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Plane from '../Plane';
// import {
//   negToPosRange,
// } from './utils/grid';

// // const Row = ({ y, length, onClick }) => {
// //   const r = [];
// //   for (let x = 0; x < length; x += 1) {
// //     r.push(<Plane onClick={onClick} xPos={x} yPos={y} key={x} />);
// //   }
// //   return r;
// // };

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

function Grid({ onSquareClick, activeXY }) {
  return (
    <>
      {placements.map((row) => row.map((cell) => <Plane onClick={onSquareClick} xPos={cell[0]} yPos={cell[1]} key={`plane-row-${row}-cell-${cell}`} isActive={cell.toString() === activeXY.toString()} />))}
    </>
  );
}

Grid.propTypes = {
  activeXY: PropTypes.arrayOf(PropTypes.nubmer).isRequired,
  onSquareClick: PropTypes.func.isRequired,
};

export default Grid;
