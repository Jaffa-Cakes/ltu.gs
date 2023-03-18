import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>LTU Gaming Society</title>
        <meta name="description" content="The official La Trobe Gaming Society, home to both casual and competitive gaming, alongside social gatherings and events." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <main className={styles.main}>
        <Image src="/images/logo.png" className={styles.logo} alt="LTUGS - La Trobe Gaming Society Logo" width="200" height="200"></Image>
        <h1 className={styles.title}>
          LTU Gaming Society
        </h1>

        <p className={styles.description}>
          Casual and Competitive Video Game and Tabletop Club
        </p>

        <div className={styles.grid}>
          <a href="https://discord.gg/K9gCCey" className={styles.card}>
            <h2>Discord &rarr;</h2>
            <p>For latest updates and events.</p>
          </a>

          <a href="https://twitter.com/LTU_GS/" className={styles.card}>
            <h2>Twitter &rarr;</h2>
            <p>See exactly what we&apos;re thinking.</p>
          </a>

          <a
            href="https://www.instagram.com/ltugamingsociety/"
            className={styles.card}
          >
            <h2>Instagram &rarr;</h2>
            <p>See photos and videos from our most recent events!</p>
          </a>

          <a
            href="https://www.facebook.com/ltugs"
            className={styles.card}
          >
            <h2>Facebook &rarr;</h2>
            <p>
              Follow our page to see us in your feed!
            </p>
          </a>

          <a
            href="https://forms.gle/K5oJvYwaTFMnAfRB6"
            className={styles.card}
          >
            <h2>Student Member Sign-up &rarr;</h2>
            <p>If you are a La Trobe student, register for the club here.</p>
          </a>

          <a
            href="https://forms.gle/B8KAa4yF6XcMwie2A"
            className={styles.card}
          >
            <h2>Associate Member Sign-up &rarr;</h2>
            <p>
              If you are not a La Trobe student, register for the club here.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <p><a href="mailto:ltugs@latrobe.edu.au">ltugs@latrobe.edu.au</a></p>
      </footer>
    </div>
  )
}

export default Home
