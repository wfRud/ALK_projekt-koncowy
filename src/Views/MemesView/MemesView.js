import React from "react";
import styles from "./MemesView.module.scss";
import Mem from "../../components/Mem/Mem";
import { TransitionGroup } from "react-transition-group";
import Fade from "react-reveal/Fade";

const MemesView = ({ list, handleVote, handleSetFave }) =>
  list.length > 0 ? (
    <TransitionGroup className={styles.container}>
      {list.map((listItem) => (
        <Fade
          enter={false}
          key={listItem.id}
          duration={600}
          right
          unmountOnExit
        >
          <Mem
            {...listItem}
            handleVote={handleVote}
            handleSetFave={handleSetFave}
          />
        </Fade>
      ))}
    </TransitionGroup>
  ) : (
    <div className={styles.container}>
      <div className={styles.message}>There is no content to display</div>
    </div>
  );

export default MemesView;
