import React from "react";
import styles from "./MemesView.module.scss";
import Mem from "../../components/Mem/Mem";

const MemesView = ({ list, pathName, handleVote }) => (
  <div className={styles.container}>
    <h2 className={styles.heading}>You're on {pathName}</h2>
    <div className={styles.memesContainer}>
      {/* {console.log(list)} */}
      {list ? (
        list.map((listItem) => {
          const { id, title, upvote, downvote, img } = listItem;

          return (
            <Mem
              id={id}
              key={id}
              title={title}
              upvote={upvote}
              downvote={downvote}
              img={img}
              handleVote={handleVote}
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
