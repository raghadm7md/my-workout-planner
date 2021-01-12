import React, { Component } from "react";
import ToDay from "../ToDay";
import ArmsDay from "./ArmsDay";

export default class ArmsExercises extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Arms: this.props.Arms,
    };
  }
  removeItem = (index) => {
    const arr = this.state.Arms;
    arr.splice(index, 1);
    console.log(arr)
    this.setState({ Arms: arr });
  };
  render() {
    const Arms = this.state.Arms.map((item, index) => {
      return (
        <ArmsDay
          Ex_Arms={item.name}
          key={index}
          rep={item.reps}
          set={item.sets}
          image={item.image}
          weight={item.weight}
          remove={this.removeItem}
        />
      );
    });
    return (
      <div>
        {Arms}
      </div>
    );
  }
}
