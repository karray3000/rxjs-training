import React, { useState, useRef } from 'react';

const Box = () => {
  const [xCoordinate, setXCoordinate] = useState(0);
  const [yCoordinate, setYCoordinate] = useState(0);
  const ref = useRef()
  
  return (
  <div
    ref={ref}
    style={{ height: '100px', width: '100px', backgroundColor: 'black', transform: `translate(${xCoordinate}px, ${yCoordinate}px)` }}
  />
  );
}

export default Box;
