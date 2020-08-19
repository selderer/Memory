import React, { useState, useEffect } from 'react';
import s from './Card.module.scss';
import CardImage from './CardImage/CardImage';

const Card = (props) => {
  const [flip, setFlip] = useState(false);
  const [hasFlipped, setHasFlipped] = useState(false);
  const [firtsCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);

  let openCard = () => {
    setFlip(true);
    if (flip === false) {
      props.setStep();
    }

    if (!hasFlipped) {
      setHasFlipped(true);
      setFirstCard(props.item);
    }

    setHasFlipped(false);
    setSecondCard(props.item);

    checkForMatch();
  }

  let checkForMatch = () => {
    let match = firtsCard === secondCard;
    match ? onSuccses() : onFail();
  }

  let onSuccses = () => {
    setFlip(true);
  }

  let onFail = () => {
    setTimeout(() => {
      setFlip(false);
    }, 1500);
  }

  return (
    <div className={s.item} onClick={openCard}>
      <CardImage
        flip={flip}
        item={props.item}
      />
    </div>
  )
}

export default Card;