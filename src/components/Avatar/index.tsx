import { useContext } from 'react';
import styled from 'styled-components';
import { ChallengesContext } from '../../contexts/ChallengesContext';

const SectionAvatar = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;

    img {
        max-width: 80px;
        border-radius: 50%;
    }

    .name {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 30px;
    }

    .name h3 {
        font-size: 1.5rem;
        margin-bottom: 10px;
    }

    .name p {
        font-size: 16px;
    }

    p img {
        margin-right: 0.5rem;
    }
`;

export default function Avatar() {
    const { level } = useContext(ChallengesContext);

    return (
        <SectionAvatar>
            <img src="https://avatars.githubusercontent.com/u/60123147?s=460&u=40de475fddcfeca4220eba6ec78f0bb6d2c9b2a9&v=4" alt="Avatar" />
            <div className="name">
                <h3>Guilherme Lima</h3>
                <p><img src="icons/level.svg" alt="Ícone" />Level {level}</p>
            </div>
        </SectionAvatar>
    );
}