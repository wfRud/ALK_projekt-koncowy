import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Root.module.scss";
import Navigation from "../../components/Navigation/Navigation";
import MemesView from "../MemesView/MemesView";
import FormView from "../FormView/FormView";

import * as listActions from "../../store/list/actions";

function Root() {
  const mainList = useSelector((state) => state.mainList);
  // const { mainList: list } = state;

  const [regularList, setRegularList] = useState([]);
  const [hotList, setHotList] = useState([]);
  const [favoriteList, setFavoriteList] = useState([]);

  // const regularList = useSelector((state) => state.regularList);
  // const hotList = useSelector((state) => state.hotList);
  // const favoriteList = useSelector((state) => state.favoriteList);

  const dispatch = useDispatch();

  const handleVote = (e) => {
    const currentId = Number(e.nativeEvent.path[3].id);
    const name = e.currentTarget.dataset.name;

    dispatch(listActions.vote(currentId, name));
  };

  const handleSetFave = (e) => {
    const currentId = Number(e.nativeEvent.path[3].id);
    dispatch(listActions.setFave(currentId));
  };

  // const clearSpecificArray = () => {
  //   for (const key in state) {
  //     if (
  //       Array.isArray(state[key]) &&
  //       key !== "mainList" &&
  //       state[key].length > 0
  //     ) {
  //       dispatch(listActions.clear(key));
  //     }
  //   }
  // };

  const setArrays = (arr) => {
    const regularArr = arr.filter((meme) => meme.upvote - meme.downvote <= 5);
    const hotArr = arr.filter((meme) => meme.upvote - meme.downvote > 5);
    const favoriteArr = arr.filter((meme) => meme.favorite);

    setRegularList([...regularArr]);
    setHotList([...hotArr]);
    setFavoriteList([...favoriteArr]);

    // arr.forEach((meme) => {
    //   meme.upvote - meme.downvote > 5
    //     ? dispatch(listActions.insert(true, meme))
    //     : dispatch(listActions.insert(false, meme));

    //   return meme.favorite ? dispatch(listActions.insertFave(meme)) : null;
    // });
  };

  useEffect(() => {
    window.localStorage.getItem("mainList") &&
      dispatch(
        listActions.setMainList(
          JSON.parse(window.localStorage.getItem("mainList"))
        )
      );
  }, []);

  useEffect(() => {
    setArrays(mainList);
    mainList.length > 0 &&
      window.localStorage.setItem("mainList", JSON.stringify(mainList));
  }, [mainList]);

  return (
    <div className={styles.App}>
      <Router>
        <Navigation />
        <Route path="/" component={FormView} exact />
        <Route path="/regular">
          <MemesView
            list={regularList}
            handleVote={handleVote}
            handleSetFave={handleSetFave}
          />
        </Route>

        <Route path="/hot">
          <MemesView
            list={hotList}
            handleVote={handleVote}
            handleSetFave={handleSetFave}
          />
        </Route>
        <Route path="/favorite">
          <MemesView
            list={favoriteList}
            handleVote={handleVote}
            handleSetFave={handleSetFave}
          />
        </Route>
      </Router>
    </div>
  );
}

export default Root;
