import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Root.module.scss";
import Preloader from "../../components/Preloader/Preloader";
import Navigation from "../../components/Navigation/Navigation";
import MemesView from "../MemesView/MemesView";
import FormView from "../FormView/FormView";
import { CSSTransition } from "react-transition-group";

import * as listActions from "../../store/list/actions";

function Root() {
  const allMemeList = useSelector((state) => state.allMemeList);

  const [regularList, setRegularList] = useState([]);
  const [hotList, setHotList] = useState([]);
  const [favoriteList, setFavoriteList] = useState([]);
  const [loading, setLoading] = useState(true);

  const routes = [
    {
      path: "/regular",
      name: "Regular",
      Component: MemesView,
      list: regularList,
    },
    { path: "/hot", name: "Hot", Component: MemesView, list: hotList },
    {
      path: "/favorite",
      name: "Favorite",
      Component: MemesView,
      list: favoriteList,
    },
    { path: "/", name: "Add new", Component: FormView },
  ];

  const dispatch = useDispatch();

  const handleVote = (e, id) => {
    const name = e.currentTarget.dataset.name;
    dispatch(listActions.vote(id, name));
  };

  const handleSetFave = (id) => {
    dispatch(listActions.setFave(id));
  };

  const loadData = async () => {
    await new Promise((r) => setTimeout(r, 2000));

    // Toggle loading state
    setLoading((loading) => !loading);
  };

  const setArrays = (arr) => {
    const regularArr = arr.filter((meme) => meme.upvote - meme.downvote <= 5);
    const hotArr = arr.filter((meme) => meme.upvote - meme.downvote > 5);
    const favoriteArr = arr.filter((meme) => meme.favorite);

    setRegularList([...regularArr]);
    setHotList([...hotArr]);
    setFavoriteList([...favoriteArr]);
  };
  useEffect(() => {
    window.localStorage.getItem("allMemeList") &&
      dispatch(
        listActions.setMemeList(
          JSON.parse(window.localStorage.getItem("allMemeList"))
        )
      );

    loadData();
  }, []);

  useEffect(() => {
    setArrays(allMemeList);
    allMemeList.length > 0 &&
      window.localStorage.setItem("allMemeList", JSON.stringify(allMemeList));
  }, [allMemeList]);

  return (
    <div className={styles.App}>
      {loading && <Preloader />}
      <Router>
        <Navigation routes={routes} />
        {routes.map(({ path, Component, list }) => (
          <Route key={path} path={path} exact>
            {({ match }) => (
              <CSSTransition
                in={match != null}
                timeout={300}
                classNames="page"
                unmountOnExit
              >
                <Component
                  list={list}
                  handleVote={handleVote}
                  handleSetFave={handleSetFave}
                />
              </CSSTransition>
            )}
          </Route>
        ))}
      </Router>
    </div>
  );
}

export default Root;
