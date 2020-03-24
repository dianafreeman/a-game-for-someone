import React, { useState } from 'react';

const Plane = ({
  xPos, yPos, onClick, isActive, ...rest
}) => {
  // Set up state for the hovered and active state
  const [isHovered, setHover] = useState(false);
  // const [isActive, setActive] = useState(false);

  return (
    <mesh
      {...rest}
      position={[xPos, yPos, 0]}
      onClick={() => {
        // setActive(!isActive);
        onClick && onClick([xPos, yPos]);
      }}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
      receiveShadow
    >
      <planeBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshPhysicalMaterial attach="material" color={isActive ? 'maroon' : isHovered ? 'green' : 'gray'} />
    </mesh>
  );
};

export default Plane;
