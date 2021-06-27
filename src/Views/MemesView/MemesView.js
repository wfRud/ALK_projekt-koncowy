import React from "react";
import styles from "./MemesView.module.scss";
import Mem from "../../components/Mem/Mem";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const MemesView = ({ list, handleVote, handleSetFave }) =>
  list.length > 0 ? (
    <TransitionGroup className={styles.container}>
      {list.map((listItem) => (
        <CSSTransition
          enter={false}
          key={listItem.id}
          timeout={600}
          classNames="item"
          enter={false}
        >
          <Mem
            {...listItem}
            handleVote={handleVote}
            handleSetFave={handleSetFave}
          />
        </CSSTransition>
      ))}
    </TransitionGroup>
  ) : (
    <div className={styles.container}>
      <div className={styles.message}>There is no content to display</div>
    </div>
  );

export default MemesView;
