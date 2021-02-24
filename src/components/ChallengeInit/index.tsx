import styled from 'styled-components';

const Rewards = styled.div`
    background-color: var(--white);
    width: 100%;
    height: 95%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
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
`;

export default function Init() {
    return (
        <Rewards>
            <h3>
                Inicie um ciclo <br />
                para receber desafios
            </h3>
            <span>
                <img src="icons/level-up.svg" alt="Subir de level"/> <br />
                Avance de level completando <br />
                os desafios.
            </span>
        </Rewards>
    );
}