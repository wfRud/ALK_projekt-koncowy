import React from "react";
import { ReactComponent as DownVoteIcon } from "../../assets/iCons/DownvoteIcon.svg";
import { ReactComponent as UpVoteIcon } from "../../assets/iCons/UpvoteIcon.svg";
import { ReactComponent as StarIcon } from "../../assets/iCons/Staricon.svg";
import styles from "./Mem.module.scss";

const Mem = ({
  id,
  title,
  upvote,
  downvote,
  favorite,
  img,
  handleVote,
  handleSetFave,
}) => (
  <div className={styles.container} id={id}>
    <div className={styles.Top_bar}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.Icon_box}>
        <StarIcon
          className={`${styles.Icon} ${
            favorite ? styles.Icon__favorite_active : styles.Icon__favorite
          }`}
          onClick={(e) => handleSetFave(e)}
        />
      </div>
    </div>
    <div className={styles.imageCnt}>
      <img src={img} alt="meme pic" className={styles.image} />
    </div>
    <div className={styles.Icons_cnt}>
      <div className={styles.Icon_box}>
        <UpVoteIcon
          className={`${styles.Icon} ${styles.Icon__upVote}`}
          onClick={(e) => handleVote(e)}
          data-name="upvote"
        />
        <span className={styles.counter}>{upvote}</span>
      </div>
      <div className={styles.Icon_box}>
        <DownVoteIcon
          className={`${styles.Icon} ${styles.Icon__downVote}`}
          onClick={(e) => handleVote(e)}
          data-name="downvote"
        />
        <span className={styles.counter}>{downvote}</span>
      </div>
    </div>
  </div>
);

export default Mem;
