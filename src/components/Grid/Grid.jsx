import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Plane from '../Plane';

const Grid = ({
  size = 6,
  onSquareClick,
}) => {
  const Row = ({ y }) => {
    const r = [];
    for (let x = 0; x < size; x += 1) {
      r.push(<Plane onClick={onSquareClick} xPos={x} yPos={y} key={x} />);
    }
    return r;
  };

  const ScaledGrid = () => {
    const out = [];
    for (let i = 0; i < size; i += 1) {
      out.push(<Row y={i} />);
    }
    return out;
  };
  return (
    <>
      <ScaledGrid />
    </>
  );
};
Grid.propTypes = {
  size: PropTypes.number.isRequired,
  onSquareClick: PropTypes.func.isRequired,
};

export default Grid;
