import React from "react";
import styles from "./MemesView.module.scss";
import Mem from "../../components/Mem/Mem";

const MemesView = ({ list, pathName, handleVote, handleSetFave }) => (
  <div className={styles.container}>
    <h2 className={styles.heading}>You're on {pathName}</h2>

    <div className={styles.memesContainer}>
      {list.length > 0 ? (
        list.map((listItem) => {
          const {
            id,
            title,
            upvote,
            downvote,
            favorite,
            img,
            source,
          } = listItem;

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
        <h2>There's no memes to display</h2>
      )}
    </div>
  </div>
);

export default MemesView;
