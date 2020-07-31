import React, { useEffect } from 'react';
import s from './Game.module.scss';
import { levelMapping } from "../../assets/constants/index";
import Card from '../Card/Card';

const Game = (props) => {

  useEffect(() => {
    props.setCards();
  }, []);

  let nextLevel1 = () => {
    props.nextLevel();
    props.setCards();
  }

  return (
    <div>
      <h1>Steps: {props.steps}</h1>
      <h1>Point: {props.point}</h1>
      <button onClick={nextLevel1}>next level</button>


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
