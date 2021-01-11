import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AbsDay from "./Components/AbsDay";
import ArmsDay from "./Components/ArmsDay";
import ChestDay from "./Components/ChestDay";
import BackDay from "./Components/BackDay";
import FullBody from "./Components/FullBody";
import LegsDay from "./Components/LegsDay";
import AbsExercises from "./Components/AbsExercises";
class ToDay extends Component {
  render() {
    const Arms = this.props.exercise.Arms.map((item) => {
      return (
        <ArmsDay
          Ex_Arms={item.name}
          rep={item.reps}
          set={item.sets}
          image={item.image}
          weight={item.weight}
        />
      );
    });
    return (
      <Router>
        <div>
          <Link to="/Abs">Abs workout </Link>
          <div class="container">
            <div class="row row-cols-2">
              <div class="col">
                <Route
                  exact path="/Abs"
                  render={(props) => (
                    <AbsExercises {...props} Abs={this.props.exercise.Abs} />
                  )}
                />
              </div>
              <div class="col">
                <h1>the history</h1>
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default ToDay;
