import styled from 'styled-components';
import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import { CountdownContext } from '../../contexts/CountdownContext';

const Rewards = styled.div`
    background-color: var(--white);
    width: 100%;
    height: 95%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .challengeNotActiveContainer {
        display: flex;
        flex-direction: column;
    }
    
    h3 {
        font-size: 30px;
        text-align: center;
        margin-bottom: 20px;
        line-height: 44px;
    }

    span {
        text-align: center;
        margin: 20px 0;
        line-height: 28px;
    }

    span img {
        margin: 15px 0;
    }

    .challengeActive {
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    .challengeActive header {
        width: 80%;
        height: 80px;
        color: var(--blue);
        font-weight: 600;
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.25rem;
        border-bottom: 1px solid var(--gray-line);
    }

    .challengeActive main {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    main img {
        width: 130px;
        margin-bottom: 10px;
    }

    main strong {
        margin: 15px 0;
        font-size: 26px;
        text-align: center;
    }

    main p {
        font-size: 18px;
        margin-top: 5px;
        text-align: center;
        line-height: 26px;
    }

    footer {
        display: flex;
        justify-content: center;
        margin-top: 20px;
        padding: 25px 0;
    }

    footer button {
        width: 45%;
        height: 50px;
        margin: 0 5px;  
        border: 0;
        outline: none;  
        border-radius: 8px; 
        color: var(--white);
        transition: 400ms;
    }

    footer button:hover {
        filter: brightness(0.9);
    }

    button.challengeFailedButton {
        background-color: var(--red);
    }

    button.challengeSucceededButton {
        background-color: var(--green);
    }
`;

export default function Init() {
    const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);
    const { resetCountdown } = useContext(CountdownContext);

    function handleChallengeSucceeded() {
        completeChallenge();
        resetCountdown();
    }

    function handleChallengeFailed() {
        resetChallenge();
        resetCountdown();
    }

    return (
        <Rewards>
            {activeChallenge ? (
                <div className="challengeActive">
                    <header>Ganhe {activeChallenge.amount} XP</header>
                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} />
                        <strong>Novo desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>
                    <footer>
                        <button
                            type="button"
                            className="challengeFailedButton"
                            onClick={handleChallengeFailed}
                        >
                            Falhei
                        </button>

                        <button
                            type="button"
                            className="challengeSucceededButton"
                            onClick={handleChallengeSucceeded}
                        >
                            Completei
                        </button>
                    </footer>
                </div>
            ) : (
                    <div className="challengeNotActiveContainer">
                        <h3>
                            Inicie um ciclo <br />
                        para receber desafios
                    </h3>
                        <span>
                            <img src="icons/level-up.svg" alt="Subir de level" /> <br />
                        Avance de level completando <br />
                        os desafios.
                    </span>
                    </div>
                )}
        </Rewards>
    );
}