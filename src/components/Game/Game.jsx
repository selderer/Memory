import React from 'react';
import s from './Game.module.scss';
import CardContainer from '../Card/CardContainer';

const Game = (props) => {
    return (
        <div className={s.container}>
           <CardContainer /> 
           <CardContainer /> 
           <CardContainer /> 
           <CardContainer /> 
           <CardContainer /> 
           <CardContainer /> 
           <CardContainer /> 
           <CardContainer /> 
           <CardContainer /> 
           <CardContainer /> 
           <CardContainer /> 
           <CardContainer /> 
        </div>
    )
}

export default Game;