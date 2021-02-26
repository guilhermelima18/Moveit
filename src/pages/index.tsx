import Header from '../components/Header/index';
import Avatar from '../components/Avatar/index';
import Challenge from '../components/Challenge/index';
import StopWatch from '../components/StopWatch/index';

import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Init from '../components/ChallengeInit';
import { CountdownProvider } from '../contexts/CountdownContext';
import { ChallengesProvider } from '../contexts/ChallengesContext';

interface HomeProps {
    level: number;
    currentExperience: number;
    challengesCompleted: number;
}

export default function Home(props: HomeProps) {
    return (
        <ChallengesProvider
            level={props.level}
            currentExperience={props.currentExperience}
            challengesCompleted={props.challengesCompleted}
        >
            <div className="container">
                <Head>
                    <title>Início | move.it</title>
                </Head>

                <Header />
                <CountdownProvider>
                    <main>
                        <section className="content-left">
                            <Avatar />
                            <Challenge />
                            <StopWatch />
                        </section>
                        <section className="content-right">
                            <Init />
                        </section>
                    </main>
                </CountdownProvider>
            </div>
        </ChallengesProvider>
    );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const { level, currentExperience, challengesCompleted } = ctx.req.cookies;
    return {
        props: {
            level: Number(level),
            currentExperience: Number(currentExperience),
            challengesCompleted: Number(challengesCompleted)
        }
    }
}