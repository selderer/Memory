import React, {useEffect, useState} from 'react';
import question from '../../assets/images/question.png';
import s from './Card.module.scss';

const Card = (props) => {
  const [image, setImage] = useState('');
  const [opened, setOpened] = useState(false);

  const loadImage = async () => {
    const data = await import(`../../assets/images/${1}.png`);
    const {default: image} = data;
    setImage(image);
  }

  useEffect(() => {
    loadImage();
  }, []);

  const flip = () => {
    setOpened(!opened);
    props.flip(props.item);
  }

  return (
    <div className={s.item} onClick={flip}>
      <div>
        <img src={!opened ? question : image} alt="" className={s.frontFace}/>
      </div>
    </div>
  )
}

export default Card;
