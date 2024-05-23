import React, { useEffect, useState } from 'react';

const lightsToFlash = ['red', 'green', 'yellow'];
//5, 3, 1
const Homepage = () => {

    const [timer, setTimer] = useState(1);
    const [lightGlow, setLightGlow] = useState(lightsToFlash[0]);

    useEffect(() => {
        const timerId = setInterval(() => {
            setTimer(prevState => {
                if (prevState === 9) return 1;
                return prevState + 1;
            })
        }, 1000);

        return () => {
            clearInterval(timerId);
        }

    }, []);

    useEffect(() => {
        if (timer === 5 || timer === 1) {
            setLightGlow(lightsToFlash[0]);
        } else if (timer === 6) {
            setLightGlow(lightsToFlash[1]);
        } else if (timer === 9) {
            setLightGlow(lightsToFlash[2]);
        }
    }, [timer])

    return (
        <div className='container'>
            <div>{lightGlow}- {timer}</div>
        </div>
    );
}

export default Homepage;