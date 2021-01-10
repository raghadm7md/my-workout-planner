import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Calendar from "./Calendar";

const Planner = {
  exercise: [
    {
      name: "sit-up",
      part: "abs",
      sets: 3,
      reps: 15,
      wight: "",
    },
  ],
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      exercise: Planner.exercise,
    };
  }
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
        <h1>welcome to your fitness journey</h1>
        <Calendar exercise={this.state.exercise} />
      </div>
    );
  }
}

export default App;
