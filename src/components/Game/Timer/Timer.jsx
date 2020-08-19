import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const Timer = (props) => {
    const [seconds, setSeconds] = useState(0);

    let tick = () => {
        setSeconds(seconds + 1);
    }

    useEffect(() => {
        if (props.started) {
            let interval = setInterval(() => tick(), 1000);
            return () => {
                clearInterval(interval);
            }
        }
    });

    return (
        <>
            <h1>Timer: {seconds}</h1>
        </>
    )
}

export default Timer;