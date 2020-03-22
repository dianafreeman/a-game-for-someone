/* eslint-disable consistent-return */
/* eslint-disable no-use-before-define */
import React, {
  useRef, useState, useEffect, setInterval,
} from 'react';
import { useFrame } from 'react-three-fiber';
import { useSpring, a } from 'react-spring/three';
import useInterval from '@use-it/interval';
/*
 *

SphereBufferGeometry(radius : Float, widthSegments : Integer, heightSegments : Integer, phiStart : Float, phiLength : Float, thetaStart : Float, thetaLength : Float)

radius — sphere radius. Default is 1.
widthSegments — number of horizontal segments. Minimum value is 3, and the default is 8.
heightSegments — number of vertical segments. Minimum value is 2, and the default is 6.
phiStart — specify horizontal starting angle. Default is 0.
phiLength — specify horizontal sweep angle size. Default is Math.PI * 2.
thetaStart — specify vertical starting angle. Default is 0.
thetaLength — specify vertical sweep angle size. Default is Math.PI.
 *
 */
const Bobble = (props) => {
  // This reference will give us direct access to the mesh
  const mesh = useRef();
  const MAX = 1;
  const MIN = 0;
  const [goUp, setGoUp] = useState(true);

  const springProps = useSpring({
    position: goUp ? [1, 0, 0.5] : [1, 0, 0.75],
  });
  useInterval(() => {
    setGoUp(!goUp);
  }, 400);
  // // Rotate mesh every frame, this is outside of React without overhead
  // useFrame(() => (mesh.current.position.z <= MAX ? goUp() : goDown()));
  /*
if mesh ZPositon < 1.5
  keep moving up frame by frame
if mesh


*/


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

export default Bobble;
