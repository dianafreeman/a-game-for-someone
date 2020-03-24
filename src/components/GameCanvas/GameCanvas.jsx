/* eslint-disable no-param-reassign */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import {
  Canvas, extend, useThree, useFrame,
} from 'react-three-fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import * as THREE from 'three';
import Grid from '../Grid';
import Bobble from '../Bobble';

const BackDrop = () => (
  <mesh receiveShadow position={[0, -1, -5]}>
    <planeBufferGeometry attach="geometry" args={[500, 500]} />
    <meshStandardMaterial attach="material" color="white" />
  </mesh>
);

const Lights = () => (
  <>
    <directionalLight
      width={3}
      height={3}
      color="white"
      intensity={1}
      position={[0, 1, 1]}
      lookAt={[0, 0, 0]}
      penumbra={1}
      castShadow
    />
    <ambientLight intensity={0.1} />
  </>
);

function CameraControl() {
  const { camera, gl } = useThree();
  useEffect(() => {
    const controls = new OrbitControls(camera, gl.domElement);
    return () => {
      controls.dispose();
    };
  }, [camera, gl]);
  return null;
}

function GameCanvas() {
  const [active, setActive] = useState([0, 0]);

  return (
    <Canvas
      camera={{ position: [0, -3.0, 3.5], zoom: 1.5 }}
      onCreated={({ gl }) => {
        gl.shadowMap.enabled = true;
        gl.shadowMap.type = THREE.PCFShadowMap;
      }}
    >
      <CameraControl />
      <Lights />
      <Bobble activeXY={active} />
      <Grid
        activeXY={active}
        onSquareClick={([x, y]) => {
          setActive([x, y]);
        }}
      />
      <BackDrop />
    </Canvas>
  );
}


export default GameCanvas;
