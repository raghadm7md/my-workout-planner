import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AbsExercises from "./Components/AbsExercises";
import ArmsExercises from "./Components/ArmsExercises";
import BackExercise from "./Components/BackExercise";
import LegExercises from "./Components/LegExercises";
import ChestExercise from "./Components/ChestExercise";


class ToDay extends Component {
  
  render() {
    return (
      <Router>
        <div className="menu" >
          <Link to="/Abs">Abs workout</Link>
          <span> || </span>
          <Link to="/Arms">Arms workout </Link>
          <span> || </span>
          <Link to="/Legs">Legs workout </Link>
          <span> || </span>
          <Link to="/back">Back workout </Link>
          <span> || </span>
          <Link to="/chest">Chest workout </Link>
          <hr className="line"/>
          <div class="container">
            <div class="row row-cols-2">
              <div class="col-8">
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
              <div class="col-4">
                <h3> - Quote of the day - </h3>
                <h4> " {this.props.Qoute} " </h4>
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default ToDay;
