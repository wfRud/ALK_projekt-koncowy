import React from "react";
import styles from "./MemesView.module.scss";
import Mem from "../../components/Mem/Mem";
import travoltaGif from "../../assets/images/travolta_confused.gif";

const MemesView = ({ list, handleVote, handleSetFave }) => (
  <div className={styles.container}>
    {list.length > 0 ? (
      list.map((listItem) => {
        const { id, title, upvote, downvote, favorite, img, source } = listItem;

        return (
          <Mem
            id={id}
            key={id}
            title={title}
            upvote={upvote}
            downvote={downvote}
            favorite={favorite}
            img={img}
            source={source}
            handleVote={handleVote}
            handleSetFave={handleSetFave}
          />
        );
      })
    ) : (
      <img
        src={travoltaGif}
        alt="travolta gif"
        className={styles.arrayEmptyGif}
      />
    )}
  </div>
);

export default MemesView;
