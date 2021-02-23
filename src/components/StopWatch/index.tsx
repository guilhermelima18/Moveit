import { useState, useEffect } from 'react';
import styled from 'styled-components';

const SectionStopWatch = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 30px 0;

    span {
        height: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 6rem;
        font-family: 'Rajdhani', sans-serif;
        color: #333;
    }

    div {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    .seconds,
    .minutes {
        display: flex;
        flex-direction: row;
        width: 50%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .minutes p,
    .seconds p {
        width: 100%;
        font-family: 'Rajdhani', sans-serif;
        font-size: 6rem;
        color: #333;
        border: 2px solid rgba(128, 128, 128, 0.4);
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 2px;
    }

    button {
        background-color: var(--blue);
        border: 0;
        outline: none;
        width: 100%;
        min-width: 250px;
        height: 70px;
        border-radius: 5px;
        color: var(--white);
        font-size: 1.2rem;
        transition: 400ms;
        margin-top: 20px;
    }

    button:hover {
        background-color: var(--blue-dark);
    }
`;

export default function StopWatch() {
    const [time, setTime] = useState(25 * 60);
    const [active, setActive] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    function startCountdown() {
        setActive(true);
    };

    useEffect(() => {
        if (active && time > 0) {
            setTimeout(() => {
                setTime(time - 1);
            }, 1000)
        }
    }, [active, time])

    return (
        <SectionStopWatch>
            <div>
                <div className="minutes">
                    <p>{minuteLeft}</p>
                    <p>{minuteRight}</p>
                </div>
                <span>:</span>
                <div className="seconds">
                    <p>{secondLeft}</p>
                    <p>{secondRight}</p>
                </div>
            </div>
            <button
                type="button"
                onClick={startCountdown}
            >
                Iniciar um ciclo
            </button>
        </SectionStopWatch>
    );
}