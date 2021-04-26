import styles from "../../styles/Ninja.module.css";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("http://fakeapi.jsonparseronline.com/users");
  const data = await res.json();

  return {
    props: { ninja: data },
  };
};

const Ninja = ({ ninja }) => {
  return (
    <div>
      <h1>All Ninja</h1>
      {ninja.map((nj) => (
        <Link href={"/ninja/" + nj.id} key={nj.id}>
          <a className={styles.single}>
            <h3>{nj.firstName + " " + nj.lastName}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Ninja;
