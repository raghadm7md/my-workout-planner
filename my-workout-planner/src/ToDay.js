import React, { Component } from "react";
import AbsDay from "./Components/AbsDay";
import ArmsDay from "./Components/ArmsDay";
import ChestDay from "./Components/ChestDay";
import BackDay from "./Components/BackDay";
import FullBody from "./Components/FullBody";
import LegsDay from "./Components/LegsDay";

class ToDay extends Component {
  render() {
    const Abs = this.props.exercise.Abs.map((item) => {
      return (
        <AbsDay
          Ex_Abs={item.name}
          rep={item.reps}
          set={item.sets}
          image={item.image}
        />
      );
    });
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
      <div>
        <BackDay />
        <ChestDay />
        <FullBody />
        <LegsDay />
        <div class="container">
          <div class="row row-cols-2">
            <div class="col">{Abs} {Arms}</div>
            <div class="col">
              <h1>the history</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ToDay;
