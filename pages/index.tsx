import Head from 'next/head';
import React from 'react';
import styles from '../styles/Home.module.css';

export default function Home(): React.ReactNode {
    return (
        <div className={styles.container}>
            <Head>
                <title>Eric Does Code</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Hi! I&apos;m&nbsp;
                    <span className={styles.authorName}>Eric</span>
                </h1>
                <p className={styles.description}>I do code</p>
            </main>
        </div>
    );
}
