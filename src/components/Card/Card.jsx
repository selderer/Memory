import React from 'react';
import question from '../../assets/images/question.png';
import s from './Card.module.scss';
import koala from '../../assets/images/koala.png'

const Card = (props) => {

    let flipTheCard = () => {
        props.flipCard()
    }

    return (<>

        <div className={s.item + " " + s.flip} onClick={props.flipCard}>
            {props.flipped ?
                <img src={koala} alt="" className={s.backFace} />
                :
                <img src={question} alt="" className={s.frontFace} />
            }
        </div>
    </>
    )
}

export default Card;