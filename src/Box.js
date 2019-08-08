import React, { useEffect, useState, useRef } from 'react';
import { fromEvent } from 'rxjs';
import { skipUntil, takeUntil, repeat, distinctUntilChanged, mergeMap } from 'rxjs/operators';

// drag and drop component
const Box = () => {
  const [xCoordinate, setXCoordinate] = useState(0);
  const [yCoordinate, setYCoordinate] = useState(0);
  const ref = useRef()

  useEffect(() => {
    const move$ = fromEvent(document, 'mousemove');
    const up$ = fromEvent(document, 'mouseup');
    const down$ = fromEvent(ref.current, 'mousedown');
    const criterion = (e) => `${Math.floor(e.x / 10)}-${Math.floor(e.y / 10)}`;

    // First method
    // const drag$ = move$.pipe(
    //   distinctUntilChanged((a, b) => criterion(a) === criterion(b)),
    //   skipUntil(down$),
    //   takeUntil(up$),
    //   repeat()
    // )
  
    // 
    const drag$ = down$.pipe(
      mergeMap((down) => move$.pipe(takeUntil(up$)))
    )

    drag$.subscribe((e) => {
      console.log('drag');
      setXCoordinate(e.x);
      setYCoordinate(e.y)
    })
  }, []);
  
  return (
  <div
    ref={ref}
    style={{ height: '100px', width: '100px', backgroundColor: 'black', transform: `translate(${xCoordinate}px, ${yCoordinate}px)` }}
  />
  );
}

export default Box;
