import React, { Component } from "react";
import "./App.css";
import ToDay from './ToDay'
import Data from './Data'
import Progress from './Progress'

class App extends Component {
  constructor() {
    super();
    this.state = {
      exercise: Data ,
    }; 
  }


  render() {
    let rr = this.state.exercise
    console.log(rr)
    return (
      <div className="App">
        <h1>welcome to your fitness journey</h1>
        <Progress/>
        <ToDay exercise={this.state.exercise}/>
      </div>
    );
  }
}

export default App;
