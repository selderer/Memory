import React, { useState, useEffect } from 'react';
import s from './Card.module.scss';
import CardImage from './CardImage/CardImage';

const Card = (props) => {
  const [opened, setOpened] = useState(false);

  let openCard = () => {
    setOpened(true);
    if (opened === false) {
        props.setStep();
    }
    //props.setPoint();
  }

  let onSuccsess = useEffect(() => {
    
  }, [])

  return (
    <div className={s.item} onClick={openCard}>
      <CardImage
        opened={opened}
        item={props.item} 
      />
    </div>
  )
}

export default Card;
