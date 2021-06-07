import React from "react";
import styles from "./Root.module.scss";
import Navigation from "../../components/Navigation/Navigation";
import MemesView from "../MemesView/MemesView";

import { BrowserRouter as Router, Route } from "react-router-dom";

function Root() {
  return (
    <div className={styles.App}>
      <Router>
        <Navigation />
        <Route exact path="/" component={() => <p>Add Form</p>} />
        <Route
          path="/regular"
          component={() => <MemesView pathName={"Regular View"} />}
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
