import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Root.module.scss";
import Navigation from "../../components/Navigation/Navigation";
import MemesView from "../MemesView/MemesView";

import * as listActions from "../../store/list/actions";

function Root() {
  const state = useSelector((state) => state);
  const list = useSelector((state) => state.mainList);
  const regularList = useSelector((state) => state.regularList);
  const hotList = useSelector((state) => state.hotList);
  const favoriteList = useSelector((state) => state.favoriteList);

  const dispatch = useDispatch();

  const handleVote = (e) => {
    const currentId = Number(e.nativeEvent.path[3].id);
    const name = e.currentTarget.dataset.name;

    dispatch(listActions.upvote(currentId, name));
  };

  const handleSetFave = (e) => {
    const currentId = Number(e.nativeEvent.path[3].id);
    dispatch(listActions.setFave(currentId));
  };

  const clearSpecificArray = () => {
    for (const key in state) {
      if (
        Array.isArray(state[key]) &&
        key !== "mainList" &&
        state[key].length > 0
      ) {
        dispatch(listActions.clear(key));
      }
    }
  };

  const setArrays = (arr) => {
    let isHot = false;
    clearSpecificArray();

    arr.forEach((meme) => {
      meme.upvote - meme.downvote > 5 ? (isHot = true) : (isHot = false);
      dispatch(listActions.insert(isHot, meme));
      return meme.favorite ? dispatch(listActions.insertFave(meme)) : null;
    });
  };

  useEffect(() => {
    setArrays(list);
  }, [list]);

  return (
    <div className={styles.App}>
      <Router>
        <Navigation />

        <Route exact path="/" component={() => <p>Add Form</p>} />
        <Route
          path="/regular"
          component={() => (
            <MemesView
              pathName={"Regular View"}
              list={regularList}
              handleVote={handleVote}
              handleSetFave={handleSetFave}
            />
          )}
        />
        <Route
          path="/hot"
          component={() => (
            <MemesView
              pathName={"Hot View"}
              list={hotList}
              handleVote={handleVote}
              handleSetFave={handleSetFave}
            />
          )}
        />
        <Route
          path="/favorite"
          component={() => (
            <MemesView
              pathName={"Favorite View"}
              list={favoriteList}
              handleVote={handleVote}
              handleSetFave={handleSetFave}
            />
          )}
        />
      </Router>
    </div>
  );
}

export default Root;
