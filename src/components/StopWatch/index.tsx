import { useContext } from 'react';
import styled from 'styled-components';
import { CountdownContext } from '../../contexts/CountdownContext';

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

    button.btn-stopWatch {
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

    button.btn-stopWatch:not(:disabled):hover {
        background-color: var(--blue-dark);
    }

    button.btn-stopWatch:disabled {
        background-color: var(--white);
        color: var(--text);
        cursor: not-allowed;
    }

    .btn-active {
        background-color: var(--white);
        color: var(--title);
        border: 1px solid #333;
        outline: none;
        width: 100%;
        min-width: 250px;
        height: 70px;
        border-radius: 5px;
        font-size: 1.2rem;
        transition: 400ms;
        margin-top: 20px;
    }

    .btn-active:hover {
        background-color: red;
        color: var(--white);
        border: 0;
    }
`;



export default function StopWatch() {
    const { minutes,
            seconds,
            hasFinished,
            isActive,
            startCountdown,
            resetCountdown } = useContext(CountdownContext);

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

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

            { hasFinished ? (
                <button
                    disabled
                    className="btn-stopWatch"
                >
                    Ciclo encerrado
                </button>
            ) : (
                    <>
                        { isActive ? (
                            <button
                                type="button"
                                className="btn-active"
                                onClick={resetCountdown}
                            >
                                Abandonar ciclo
                            </button>
                        ) : (
                                <button
                                    type="button"
                                    className="btn-stopWatch"
                                    onClick={startCountdown}
                                >
                                    Iniciar um ciclo
                                </button>
                            )}
                    </>
                )}
        </SectionStopWatch>
    );
}