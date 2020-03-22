import React from 'react';
import { Canvas } from 'react-three-fiber';
import Box from '../Box';


const GameCanvas = () => (
  <Canvas camera={{ position: [2, 2, 2] }}>
    <ambientLight />
    <pointLight position={[-10, 15, 10]} />
    <Box />
  </Canvas>
);


export default GameCanvas;
