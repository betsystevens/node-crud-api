import { useState, useEffect } from 'react';
import getFlowers from './getFlowers.js';

/*
  fetch flowers from db
  each row of the table -> array -> string
*/
function ShowList() {
  const [flower, setFlowers] = useState([]);
  useEffect(() => {
    getFlowers().then((flowers) => {
      const list = flowers.map((flower) => {
        return <p key={flower.id}>{Object.values(flower).join(' ')}</p>;
      });
      setFlowers(list);
    });
  }, []);
  return <div>{flower}</div>;
}

export default ShowList;
