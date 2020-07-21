import React, {useEffect, useState} from 'react';
import s from './Game.module.scss';
import Card from "../Card/Card";
import {shuffle} from "../../helpers/indes";
import {levelMapping} from "../../assets/constants";

const Game = (props) => {
  const [level, setLevel] = useState(1);
  const [data, setData] = useState([]);
  const [steps, setSteps] = useState(0);
  const [point, setPoint] = useState(0);

  useEffect(() => {
    let arr = [];
    for (let i = 1; i <= levelMapping[level].items / 2; i++) {
      arr.push(i);
    }

    const shuffledArr = shuffle([...arr, ...arr]);

    setData(shuffledArr);
  }, []);

  const flip = (item) => {
    setSteps(steps + 1);
  };

  return (
    <div>
      <h1>Steps: {steps}</h1>
      <h1>Point: {point}</h1>

      <div className={s.container} style={{
        gridTemplateColumns: `repeat(${levelMapping[level].columns}, 200px)`,
        gridTemplateRows: `repeat(${levelMapping[level].rows}, 210px)`
      }}>
        {data.map((item, i) => (
          <Card
            key={i}
            item={item}
            flip={flip}
          />
        ))}
      </div>
    </div>
  )
}

export default Game;
