/* eslint-disable consistent-return */
/* eslint-disable no-use-before-define */
import React, {
  useRef, useState,
} from 'react';
import PropTypes from 'prop-types';
import useInterval from '@use-it/interval';
import { useSpring, a } from 'react-spring/three';


const Bobble = ({ activeXY, ...props }) => {
  const mesh = useRef();
  const [xPos, yPos] = activeXY;
  const [goUp, setGoUp] = useState(true);
  const springProps = useSpring({
    position: goUp ? [xPos, yPos, 0.5] : [xPos, yPos, 0.75],
  });
  useInterval(() => {
    setGoUp(!goUp);
  }, 400);

  return (
    <a.mesh
      {...props}
      ref={mesh}
      castShadow
      position={springProps.position}
      onClick={() => setGoUp(!goUp)}
    >
      <sphereBufferGeometry attach="geometry" args={[0.25, 30, 30]} />
      <meshPhysicalMaterial
        attach="material"
        color="turquoise"
      />
    </a.mesh>
  );
};

Bobble.propTypes = {
  activeXY: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default Bobble;
