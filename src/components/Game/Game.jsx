import React, { useEffect } from 'react';
import s from './Game.module.scss';
import { levelMapping } from "../../assets/constants/index";
import Card from '../Card/Card';
import Statistics from '../Statictics/Statistics';

const Game = (props) => {
  useEffect(() => {
      props.setCards();
      console.log(levelMapping);
  }, []);

  let nextLevelHandler = () => {
    props.nextLevel();
    props.setCards();
  }

  return (
    <div>
      <Statistics steps={props.steps} point={props.point}/>
      <button onClick={nextLevelHandler} className={s.nextButton}>Next Level</button>

      <div className={s.container} style={{
        gridTemplateColumns: `repeat(${levelMapping[1].columns}, 200px)`,
        gridTemplateRows: `repeat(${levelMapping[1].rows}, 210px)`,
        marginTop: levelMapping[1].margins
      }}>
        {props.cards.map((item, i) => (
          <Card
            key={i}
            item={item}
            setStep={props.setStep}
            image={props.image}
            setImage={props.setImage}
          />
        ))}
      </div>
    </div>
  )
}

export default Game;