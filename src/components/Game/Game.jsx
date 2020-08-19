import React, { useEffect } from 'react';
import s from './Game.module.scss';
import { levelMapping } from "../../assets/constants/index";
import Card from '../Card/Card';
import { useState } from 'react';
import Timer from './Timer/Timer';
import Start from '../Start/Start';

const Game = (props) => {

  useEffect(() => {
      props.setCards();
  }, []);

  let nextLevelHandler = () => {
    props.nextLevel();
    props.setCards();
  }

  return (
    <div>
      <h1>Steps: {props.steps}</h1>
      <h1>Point: {props.point}</h1>
      {/* <Timer started={started} ></Timer> */}
      <button onClick={nextLevelHandler}>next level</button>

      <div className={s.container} style={{
        gridTemplateColumns: `repeat(${levelMapping[props.level].columns}, 200px)`,
        gridTemplateRows: `repeat(${levelMapping[props.level].rows}, 210px)`,
        marginTop: levelMapping[props.level].margins
      }}>
        {props.cards.map((item, i) => (
          <Card
            key={i}
            item={item}
            setStep={props.setStep}
          />
        ))}
      </div>
    </div>
  )
}

export default Game;