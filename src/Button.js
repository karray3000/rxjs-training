import React, { useRef } from 'react';
import { ajax } from 'rxjs/ajax';

function Button() {
  const ref = useRef();
  const getAlbums = () => {  
    const userId = Math.round(Math.random() * 10);
    return ajax(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`);
  };
  return (<button ref={ref}>lol</button>);
}

export default Button;
