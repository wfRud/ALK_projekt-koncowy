import React from "react";
import styles from "./Preloader.module.scss";

const Preloader = () => (
  <div className={styles.preloader}>
    <div className={styles.container}>
      <span className={styles.up}>M</span>
      <span className={styles.down}>E</span>
      <span className={styles.up}>M</span>
      <span className={styles.down}>E</span>
    </div>
  </div>
);

export default Preloader;
