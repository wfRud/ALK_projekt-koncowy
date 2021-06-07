import React from "react";
import mem1 from "../../assets/images/mem1.jpg";
import { ReactComponent as DownVoteIcon } from "../../assets/iCons/DownvoteIcon.svg";
import { ReactComponent as UpVoteIcon } from "../../assets/iCons/UpvoteIcon.svg";
import styles from "./Mem.module.scss";

const Mem = () => (
  <div className={styles.container}>
    <h2 className={styles.title}>Lorem ipsum dolor sit amet</h2>
    <div className={styles.imageCnt}>
      <img src={mem1} alt="meme pic" className={styles.image} />
    </div>
    <div className={styles.Icons_cnt}>
      <div className={styles.Icon_box}>
        <UpVoteIcon className={`${styles.Icon} ${styles.Icon__upVote}`} />
        <span className={styles.counter}>8</span>
      </div>
      <div className={styles.Icon_box}>
        <DownVoteIcon className={`${styles.Icon} ${styles.Icon__downVote}`} />
        <span className={styles.counter}>5</span>
      </div>
    </div>
  </div>
);

export default Mem;
