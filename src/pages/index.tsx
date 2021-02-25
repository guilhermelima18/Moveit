import Header from '../components/Header/index';
import Avatar from '../components/Avatar/index';
import Challenge from '../components/Challenge/index';
import StopWatch from '../components/StopWatch/index';

import Head from 'next/head';
import Init from '../components/ChallengeInit';
import { CountdownProvider } from '../contexts/CountdownContext';

export default function Home() {
    return (
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
    );
}