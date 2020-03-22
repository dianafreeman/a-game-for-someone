import React, { useRef, useState, useEffect } from 'react';
import { useFrame } from 'react-three-fiber';

function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef();

  // Set up state for the hovered and active state
  // const [hovered, setHover] = useState(false);
  // const [active, setActive] = useState(false);

  useEffect(() => {
    console.log(mesh.current);
  });
  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => (mesh.current.rotation.z = mesh.current.rotation.z += 0.01));


  return (
    <mesh
      {...props}
      ref={mesh}
      // onClick={() => setActive(!active)}
      // onPointerOver={() => setHover(true)}
      // onPointerOut={() => setHover(false)}
    >
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" color="darkred" />
    </mesh>
  );
}

export default Box;
