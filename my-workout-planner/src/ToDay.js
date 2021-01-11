import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AbsExercises from "./Components/AbsExercises";
import ArmsExercises from "./Components/ArmsExercises";
import LegExercises from './Components/LegExercises'

class ToDay extends Component {
  render() {
    return (
      <Router>
        <div>
          <Link to="/Abs">Abs workout</Link>
          <span> || </span>
          <Link to="/Arms">Arms workout </Link>
          <span> || </span>
          <Link to="/Legs">legs workout </Link>

          <div class="container">
            <div class="row row-cols-2">
              <div class="col">
                <Route
                  exact
                  path="/Abs"
                  render={(props) => (
                    <AbsExercises {...props} Abs={this.props.exercise.Abs} />
                  )}
                />
                <Route
                  exact
                  path="/Arms"
                  render={(props) => (
                    <ArmsExercises {...props} Arms={this.props.exercise.Arms} />
                  )}
                />
                <Route
                  exact
                  path="/legs"
                  render={(props) => (
                    <LegExercises {...props} legs={this.props.exercise.legs} />
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
