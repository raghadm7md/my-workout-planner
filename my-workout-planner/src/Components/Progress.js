import React, { Component } from "react";
import ArmsDay from "./ArmsDay";

class Progress extends Component {
  constructor(props) {
    super(props);
    this.AddExercise = this.AddExercise.bind(this);
    this.state = {
      litsOfEx: {},
    };
    
  }
  
  render() {
    return (
      <div>
        {/* <ArmsDay AddExercise={this.AddExercise}/> */}
        <h1>Your history will be here</h1>
      </div>
    );
  }
}
export default Progress;
