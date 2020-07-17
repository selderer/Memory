import React from 'react';
import question from '../../assets/images/question.png';
import s from './Card.module.scss';
import kittie from '../../assets/images/kittie.png'

const Card = (props) => {
    return (<>

        <div className={s.item + " " + s.flip} onClick={props.flipCard}>
            {props.flipped ?
                <img src={kittie} alt="" className={s.backFace} />
                :
                <img src={question} alt="" className={s.frontFace} />
            }
        </div>
    </>
    )
}

export default Card;