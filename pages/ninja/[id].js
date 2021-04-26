import styles from "../../styles/Ninja.module.css";

export const getStaticPaths = async () => {
  const res = await fetch("http://fakeapi.jsonparseronline.com/users");
  const data = await res.json();

  const paths = data.map((ninja) => {
    return {
      params: { id: ninja.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (args) => {
  const id = args.params.id;
  const res = await fetch("http://fakeapi.jsonparseronline.com/users/" + id);
  const data = await res.json();

  return {
    props: { ninja: data },
  };
};

const Details = ({ ninja }) => {
  return (
    <div>
      <h1 className={styles.name}>{ninja.firstName + " " + ninja.lastName}</h1>
      <p className={styles.attr}>Username : {ninja.username}</p>
      <p className={styles.attr}>Email : {ninja.email}</p>
      <p className={styles.attr}>Gender : {ninja.gender}</p>
      <p className={styles.attr}>City : {ninja.address.city}</p>
      <p className={styles.attr}>Country : {ninja.address.country}</p>
    </div>
  );
};

export default Details;
