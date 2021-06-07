import React from "react";
import styles from "./Navigation.module.scss";

const Navigation = () => (
  <nav className={styles.navigation}>
    <span className={styles.logo_cnt}>
      <h2 className={styles.logo}>MEME</h2>
    </span>

    <ul className={styles.nav_items}>
      <li className={styles.nav_item}>Regular</li>
      <li className={styles.nav_item}>Hot</li>
    </ul>
  </nav>
);

export default Navigation;
