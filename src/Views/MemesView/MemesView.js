import React from "react";
import styles from "./MemesView.module.scss";

const MemesView = ({ list, pathName }) => (
  <div className={styles.container}>{pathName}</div>
);

export default MemesView;
