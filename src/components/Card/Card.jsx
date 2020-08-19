import React, { useState, useEffect } from 'react';
import s from './Card.module.scss';
import CardImage from './CardImage/CardImage';

const Card = (props) => {
  const [flip, setFlip] = useState(false);
  const [hasFlipped, setHasFlipped] = useState(false);
  const [firtsCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);

  let resetFirstAndSecondCards = () => {
    setFirstCard(null);
    setSecondCard(null);
  }

  let openCard = () => {
    setFlip(true);
    if (flip === false) {
      props.setStep();
    }

    if (!hasFlipped) {
      setHasFlipped(true);
      let first = props.item;
      setFirstCard(first);
    }

    setHasFlipped(false);
    let second = props.item;
    setSecondCard(second);


    checkForMatch();
  }

  let checkForMatch = () => {
    let match = firtsCard === secondCard;
    !match ? onSuccses() : onFail();
  }

  let onSuccses = () => {
    setFlip(true);
    resetFirstAndSecondCards()
  }

  let onFail = () => {
    setTimeout(() => {
      setFlip(false);
    }, 1500);
    resetFirstAndSecondCards();
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