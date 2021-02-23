import Header from '../components/Header/index';
import Avatar from '../components/Avatar/index';
import Challenge from '../components/Challenge/index';
import StopWatch from '../components/StopWatch/index';

import Head from 'next/head';

export default function Home() {
    return (
        <div className="container">
            <Head>
                <title>Início | move.it</title>
            </Head>

            <Header />
            <main>
                <section className="content-left">
                    <Avatar />
                    <Challenge />
                    <StopWatch />
                </section>
                <section className="content-right">

                </section>
            </main>
        </div>
    );
}