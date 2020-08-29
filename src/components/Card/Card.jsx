import React, { useState, useEffect } from 'react';
import s from './Card.module.scss';
import CardImage from './CardImage/CardImage';

const Card = (props) => {
  const [flip, setFlip] = useState(false);
  
  let openCard = () => {
    setFlip(true);
    if (flip === false) {
      props.setStep();
    }
  }

  return (
    <div className={s.card} onClick={openCard}>
      <CardImage
        flip={flip}
        item={props.item}
        image={props.image}
        setImage={props.setImage}
      />
    </div>
  )
}

export default Card;