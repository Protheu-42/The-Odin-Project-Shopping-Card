import styles from "./Homepage.module.css";

function Homepage() {
  return (
    <main className={styles.shopPage}>
      <div className={styles.container}>
        <div className={styles.featured}>IMG1</div>
        <div className={styles.main}>IMG2</div>
        <div className={styles.secondary}>IMG3</div>
        <div className={styles.side}>IMG4</div>
      </div>
    </main>
  );
}

export default Homepage;
