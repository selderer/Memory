import React, { useEffect } from 'react';
import s from './Game.module.scss';
import { levelMapping } from "../../assets/constants/index";
import Card from '../Card/Card';
import Statistics from '../Statictics/Statistics';

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
      <Statistics steps={props.steps} point={props.point}
      />
      {/* <Timer started={started} ></Timer> */}
      <button onClick={nextLevelHandler} className={s.nextButton}>Next Level</button>

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
            setPoint={props.setPoint}
          />
        ))}
      </div>
    </div>
  )
}

export default Game;