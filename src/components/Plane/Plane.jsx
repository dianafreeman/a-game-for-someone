import React, { useRef, useState } from 'react';

function Plane(props) {
  // Set up state for the hovered and active state
  const [isHovered, setHover] = useState(false);
  const [isActive, setActive] = useState(false);

  return (
    <mesh
      {...props}
      onClick={() => setActive(!isActive)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
      receiveShadow
    >
      <planeBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshPhysicalMaterial attach="material" color={isActive ? 'maroon' : isHovered ? 'green' : 'gray'} />
    </mesh>
  );
}

export default Plane;
