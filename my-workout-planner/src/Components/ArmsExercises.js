import React, { Component } from "react";
import ToDay from "../ToDay";
import ArmsDay from "./ArmsDay";

export default class ArmsExercises extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     weight : this.props.Arms.weight
  //   };
  // }
  render() {
    const Arms = this.props.Arms.map((item, index) => {
      return (
        <ArmsDay
          Ex_Arms={item.name}
          key={index}
          rep={item.reps}
          set={item.sets}
          image={item.image}
          weight={item.weight}
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
