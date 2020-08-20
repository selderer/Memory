import React from 'react';
import s from './Statistics.module.scss';

const Statistics = (props) => {
    return (
        <div className={s.statistics}>
            <h1 className={s.steps}>Steps: {props.steps}</h1>
            <h1 className={s.points}>Point: {props.point}</h1>
        </div>
    )
}

export default Statistics;