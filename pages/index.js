import Head from "next/head";
import styles from "../styles/Home.module.css";
import Landing from "../components/Main/Landing";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Frensbook</title>
        <meta
          name="Networking made simpler using one click."
          content="Frensbook - Networking made simpler using one click."
        />
        <link rel="icon" href="/handshakefavicon.webp" />
      </Head>

      <main className={styles.main}>
        <Landing />
      </main>
    </div>
  );
}
