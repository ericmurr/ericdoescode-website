import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Eric Does Code</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hi! I'm <span className={styles.authorName}>Eric</span>
        </h1>

        <p className={styles.description}>
          I do code
        </p>

        {/* <div className={styles.grid}>
          <a href="https://www.ericmurr.com" className={styles.card}>
            <h3>My Website &rarr;</h3>
            <p>www.ericmurr.com</p>
          </a>
        </div> */}
      </main>
    </div>
  )
}
