import React from 'react';
import { Canvas } from 'react-three-fiber';
import Box from '../Box';


const GameCanvas = () => (
  <Canvas camera={{ position: [0, 7, 2] }}>
    <ambientLight />
    <pointLight position={[10, 10, 10]} />
    <Box />
  </Canvas>
);

// GameCanvas.propTypes = {
//   children: PropTypes.oneOfType([
//     PropTypes.arrayOf(PropTypes.node),
//     PropTypes.node,
//   ]).isRequired,
// };

export default GameCanvas;
