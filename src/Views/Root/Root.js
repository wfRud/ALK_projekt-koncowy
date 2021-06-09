import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Root.module.scss";
import Navigation from "../../components/Navigation/Navigation";
import MemesView from "../MemesView/MemesView";
import action from "../../store/actions/actions";

function Root() {
  const list = useSelector((state) => state.list);
  const dispatch = useDispatch();

  const handleVote = (e) => {
    const currentId = Number(e.nativeEvent.path[3].id);
    const name = e.currentTarget.dataset.name;

    dispatch(action.upvote(currentId, name));
    // switch (name) {
    //   case "upvote":

    //     break;
    //   case "downvote":
    //     dispatch(action.upvote());

    //     break;
    //   default:
    //     return;
    // }
  };

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
