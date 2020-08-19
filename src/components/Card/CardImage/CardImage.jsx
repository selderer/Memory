import React, { useState, useEffect } from 'react';
import question from '../../../assets/images/question.png';
import s from '../Card.module.scss';


const CardImage = (props) => {
    const [image, setImage] = useState('');

    const loadImage = async () => {
        const data = await import(`../../../assets/images/${props.item}.png`);
        const { default: image } = data;


        setImage(image);
    }

    useEffect(() => {
        loadImage();
    }, []);

    return (
        <>
            <img src={!props.flip ? question : image} alt="" className={s.frontFace} />
        </>
    )
}

export default CardImage;