import React, { useState } from "react";
import styles from "./Navigation.module.scss";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const [active, setActive] = useState(false);
  const handleBurgerAction = () => setActive(!active);

  return (
    <div
      className={`${styles.container} ${
        active ? styles.container__active : ""
      }`}
    >
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
            exact
            to="/"
            className={`${styles.nav_item} meme_button`}
            activeClassName={styles.active}
          >
            New
          </NavLink>
        </ul>
      </nav>

      <div className={styles.burger_container}>
        <div
          className={`${styles.burger} ${active ? styles.burger__active : ""}`}
          onClick={handleBurgerAction}
        >
          <span
            className={`${styles.burger_line} ${styles.burger_line_1}`}
          ></span>
          <span
            className={`${styles.burger_line} ${styles.burger_line_2}`}
          ></span>
          <span
            className={`${styles.burger_line} ${styles.burger_line_3}`}
          ></span>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
