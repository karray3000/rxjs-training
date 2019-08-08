import React, { useRef, useEffect } from 'react';
import { ajax } from 'rxjs/ajax';
import { fromEvent, timer } from 'rxjs';
import { flatMap, throttle } from 'rxjs/operators';

function Button() {
  const ref = useRef();
  const getAlbums = () => {  
    const userId = Math.round(Math.random() * 10);
    return ajax(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`);
  };
  useEffect(() => {
    const click$ = fromEvent(ref.current, 'mousedown')
      .pipe(
        throttle(() => timer(300)),
        flatMap(getAlbums)
      );
    click$.subscribe((value) => { console.log(value); })
  }, []);

  
  return (<button ref={ref}>lol</button>);
}

export default Button;
