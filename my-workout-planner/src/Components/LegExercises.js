import React, { Component } from "react";
import LegsDay from "./LegsDay";

export default class LegExercises extends Component {
  render() {
    const legs = this.props.legs.map((item, index) => {
      return (
        <LegsDay
          Ex_Arms={item.name}
          key={index}
          rep={item.reps}
          set={item.sets}
          image={item.image}
          weight={item.weight}
        />
      );
    });
    return <div>{legs}</div>;
  }
}
