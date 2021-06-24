import React from "react";
import styles from "./MemesView.module.scss";
import Mem from "../../components/Mem/Mem";
import travoltaGif from "../../assets/images/travolta_confused.gif";

const MemesView = ({ list, handleVote, handleSetFave }) => (
  <div className={styles.container}>
    {list.length > 0 ? (
      list.map((listItem) => {
        return (
          <Mem
            key={listItem.id}
            {...listItem}
            handleVote={handleVote}
            handleSetFave={handleSetFave}
          />
        );
      })
    ) : (
      <div className={styles.gif_container}>
        <img
          src={travoltaGif}
          alt="travolta gif"
          className={styles.arrayEmptyGif}
        />
      </div>
    )}
  </div>
);

export default MemesView;
