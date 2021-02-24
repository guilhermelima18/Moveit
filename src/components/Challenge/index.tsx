import { useContext } from 'react';
import styled from 'styled-components';
import { ChallengesContext } from '../../contexts/ChallengesContext';

const SectionChallenge = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    margin: 60px 0;

    .challengers {
        padding-bottom: 5px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 10px;
    }

    .challengers span {
        font-size: 1.1rem;
}

    .challenge-progress {
        width: 100%;
        height: 5px;
        border-radius: 4px;
        background: var(--gray-line);
        position: absolute;
        bottom: 0;
    }
`;

export default function Challenge() {
    const { challengesCompleted } = useContext(ChallengesContext);

    return (
        <SectionChallenge>
            <div className="challengers">
                <span>Desafios completos</span>
                <span>{challengesCompleted}</span>
            </div>
            <div className="challenge-progress" />
        </SectionChallenge>
    );
}