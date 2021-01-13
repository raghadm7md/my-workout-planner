import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AbsExercises from "./Components/AbsExercises";
import ArmsExercises from "./Components/ArmsExercises";
import BackExercise from "./Components/BackExercise";
import LegExercises from "./Components/LegExercises";
import ChestExercise from "./Components/ChestExercise";
import AbsDay from "./Components/AbsDay";
import ArmsDay from "./Components/ArmsDay";

class ToDay extends Component {
  
  render() {
    return (
      <Router>
        <div>
          <Link to="/Abs">Abs workout</Link>
          <span> || </span>
          <Link to="/Arms">Arms workout </Link>
          <span> || </span>
          <Link to="/Legs">Legs workout </Link>
          <span> || </span>
          <Link to="/back">Back workout </Link>
          <span> || </span>
          <Link to="/chest">Chest workout </Link>

          <div class="container">
            <div class="row row-cols-2">
              <div class="col">
                <Route
                  path="/Abs"
                  render={(props) => (
                    <AbsExercises {...props} Abs={this.props.exercise.Abs} />
                  )}
                />
                <Route
                  path="/Arms"
                  render={(props) => (
                    <ArmsExercises {...props} Arms={this.props.exercise.Arms} />
                  )}
                />
                <Route
                  path="/legs"
                  render={(props) => (
                    <LegExercises {...props} legs={this.props.exercise.legs} />
                  )}
                />
                <Route
                  path="/back"
                  render={(props) => (
                    <BackExercise {...props} back={this.props.exercise.back} />
                  )}
                />
                <Route
                  path="/chest"
                  render={(props) => (
                    <ChestExercise
                      {...props}
                      chest={this.props.exercise.chest}
                    />
                  )}
                />
              </div>
              <div class="col">
                <h1>Done !!</h1>
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default ToDay;
