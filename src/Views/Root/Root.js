import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Root.module.scss";
import Navigation from "../../components/Navigation/Navigation";
import MemesView from "../MemesView/MemesView";
import action from "../../store/regular/actions";

function Root() {
  const list = useSelector((state) => state.regular.list);
  const dispatch = useDispatch();

  const handleVote = (e) => {
    const currentId = Number(e.nativeEvent.path[3].id);
    const name = e.currentTarget.dataset.name;

    dispatch(action.upvote(currentId, name));
  };

  const filterMemesArray = (arr) => {
    arr.filter((mem) => mem.upvote - mem.downvote > 5);
  };

  useEffect(() => {
    filterMemesArray(list);
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
              list={list}
              handleVote={handleVote}
            />
          )}
        />
        <Route
          path="/hot"
          component={() => <MemesView pathName={"Hot View"} />}
        />
      </Router>
    </div>
  );
}

export default Root;
