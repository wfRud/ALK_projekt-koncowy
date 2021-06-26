import React from "react";
import styles from "./MemesView.module.scss";
import Mem from "../../components/Mem/Mem";

const MemesView = ({ list, handleVote, handleSetFave }) => (
  <div className={styles.container}>
    {list.length > 0 ? (
      list.map((listItem) => (
        <Mem
          key={listItem.id}
          {...listItem}
          handleVote={handleVote}
          handleSetFave={handleSetFave}
        />
      ))
    ) : (
      <div className={styles.message}>There is no content to display</div>
    )}
  </div>
);

export default MemesView;
