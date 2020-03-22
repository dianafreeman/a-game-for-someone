/* eslint-disable no-param-reassign */
/* eslint-disable react/prop-types */
import React from 'react';
import { Canvas } from 'react-three-fiber';
import * as THREE from 'three';
import Plane from '../Plane';
import Bob from '../Bob';

const Light = ({ brightness, color }) => (
  <rectAreaLight
    width={3}
    height={3}
    color={color}
    intensity={brightness}
    position={[0, 0, 7]}
    lookAt={[0, 0, 0]}
    penumbra={2}
    // castShadow
  />
);

function BackDrop() {
  return (
    <mesh receiveShadow position={[0, -1, -5]}>
      <planeBufferGeometry attach="geometry" args={[500, 500]} />
      <meshStandardMaterial attach="material" color="white" />
    </mesh>
  );
}

const GameCanvas = () => (
  <Canvas
    camera={{ position: [0, -2, 2.5] }}
    onCreated={({ gl }) => {
      gl.shadowMap.enabled = true;
      gl.shadowMap.type = THREE.PCFShadowMap;
    }}
  >
    <Light brightness={15} color="white" />
    <ambientLight intensity={0.1} castShadow />
    <Bob />

    Start new ROW
    <Plane position={[-1, -1, 0]} />
    <Plane position={[0, -1, 0]} />
    <Plane position={[1, -1, 0]} />
    <Plane position={[1, -1, 0]} />
    {/* Start new ROW */}
    <Plane position={[-1, 0, 0]} />
    <Plane position={[0, 0, 0]} />
    <Plane position={[1, 0, 0]} />
    <Plane position={[1, 0, 0]} />
    {/* Start new ROW */}
    <Plane position={[-1, 1, 0]} />
    <Plane position={[0, 1, 0]} />
    <Plane position={[1, 1, 0]} />
    <Plane position={[1, 1, 0]} />
    {/* Start new ROW */}
    <Plane position={[-1, 1, 0]} />
    <Plane position={[0, 1, 0]} />
    <Plane position={[1, 1, 0]} />
    <Plane position={[1, 1, 0]} />
    <BackDrop />

  </Canvas>
);


export default GameCanvas;
