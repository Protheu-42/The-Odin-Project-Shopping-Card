import styles from "./Homepage.module.css";

function Homepage() {
  return (
    <main className={styles.shopPage}>
      <div className={styles.container}>
        <div className={styles.featured}>
          <img src="/assets/07721544833-A7M.webp" alt="" srcset="" />
        </div>
        <div className={styles.main}>
          <img src="/assets/notebook.jpeg" alt="" />
        </div>
        <div className={styles.secondary}>
          <img
            src="/assets/D_NQ_NP_750614-MLA101666714972_122025-O.webp"
            alt=""
            srcset=""
          />
        </div>
        <div className={styles.side}>
          <img
            src="/assets/Minimal_Silver_Rings_Stack_for_Men_Clean_Everyday_Jewelry_Aesthetic.webp"
            alt=""
            srcset=""
          />
        </div>
      </div>
    </main>
  );
}

export default Homepage;
