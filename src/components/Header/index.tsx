import { useContext } from 'react';
import styled from 'styled-components';
import { ChallengesContext } from '../../contexts/ChallengesContext';

const ExperienceBar = styled.header`
    width: 100%;
    max-width: 1200px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    span {
        color: #333;
        font-size: 1rem;
    }

    div#progress {
        flex: 1;
        height: 4px;
        border-radius: 4px;
        background: var(--gray-line);
        margin: 0 1.5rem;
        position: relative;
    }

    div#progress2 {
        height: 4px;
        border-radius: 4px;
        background: var(--green);
    }

    span.current-experience {
        position: absolute;
        top: 12px;
        transform: translateX(-50%);
    }
`;

export default function Header() {
    const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext);

    const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;

    return (
        <ExperienceBar>
            <span>0 XP</span>
            <div id="progress">
                <div id="progress2" style={{ width: `${percentToNextLevel}%` }} />
                <span className="current-experience" style={{ left: `${percentToNextLevel}%` }}>
                    {currentExperience} XP
                </span>
            </div>
            <span>{experienceToNextLevel} XP</span>
        </ExperienceBar>
    );
}