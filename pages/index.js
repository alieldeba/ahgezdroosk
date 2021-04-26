import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninja" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem, Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Molestias aut, repellat ipsum facere voluptate dicta obcaecati
          deserunt nobis suscipit eaque?Lorem, Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Molestias aut, repellat ipsum facere
          voluptate dicta obcaecati deserunt nobis suscipit eaque?
        </p>
        <p className={styles.text}>
          Lorem, Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Molestias aut, repellat ipsum facere voluptate dicta obcaecati
          deserunt nobis suscipit eaque?Lorem, Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Molestias aut, repellat ipsum facere
          voluptate dicta obcaecati deserunt nobis suscipit eaque?Lorem, Lorem,
          ipsum dolor sit amet consectetur adipisicing elit. Molestias aut,
          repellat ipsum facere voluptate dicta obcaecati deserunt nobis
          suscipit eaque?
        </p>
      </div>
    </>
  );
}
