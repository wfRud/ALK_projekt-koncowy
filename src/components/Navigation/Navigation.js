import React from "react";
import styles from "./Navigation.module.scss";
import { NavLink } from "react-router-dom";

const Navigation = () => (
  <nav className={styles.navigation}>
    <span className={styles.logo_cnt}>
      <h2 className={styles.logo}>MEME</h2>
    </span>

    <ul className={styles.nav_items}>
      <NavLink
        to="/regular"
        className={`${styles.nav_item} meme_button`}
        activeClassName={styles.active}
      >
        Regular
      </NavLink>
      <NavLink
        to="/hot"
        className={`${styles.nav_item} meme_button`}
        activeClassName={styles.active}
      >
        Hot
      </NavLink>
      <NavLink
        to="/favorite"
        className={`${styles.nav_item} meme_button`}
        activeClassName={styles.active}
      >
        Favorite
      </NavLink>
      <NavLink
        to="/add"
        className={`${styles.nav_item} meme_button`}
        activeClassName={styles.active}
      >
        New
      </NavLink>
    </ul>
  </nav>
);

export default Navigation;
