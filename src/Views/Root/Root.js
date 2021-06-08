import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./Root.module.scss";
import Navigation from "../../components/Navigation/Navigation";
import MemesView from "../MemesView/MemesView";

function Root() {
  const list = useSelector((state) => state.list);

  return (
    <div className={styles.App}>
      <Router>
        <Navigation />
        <Route exact path="/" component={() => <p>Add Form</p>} />
        <Route
          path="/regular"
          component={() => <MemesView pathName={"Regular View"} list={list} />}
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
