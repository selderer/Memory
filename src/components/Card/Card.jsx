import React, { useState } from 'react';
import question from '../../assets/images/question.png';
import s from './Card.module.scss';

const Card = (props) => {
    let [flipped, flipCard] = useState(false);

    let imageRef = React.createRef();

    let showBackImage = () => {
        flipCard(true);
    }

    return (<>
        <div className={s.item} onClick={showBackImage}>
            {flipped ?
                <div>
                    {props.images
                        .sort(() => Math.random() - 0.5)
                        .map((img, i) => {
                            return (
                                <div>
                                    <img
                                        ref={imageRef}
                                        className={s.backFace}
                                        src={img.image}
                                        key={i}
                                        alt={img.name}
                                    />
                                </div>
                            )
                        }
                        )
                    }
                </div>
                :
                <div>
                    <img src={question} alt="" className={s.frontFace} />
                </div>
            }
        </div>
    </>)
}

console.log(Math.random() - 0.5);
export default Card;