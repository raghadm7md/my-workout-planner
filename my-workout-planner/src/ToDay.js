import React, { Component } from "react";
import AbsDay from "./Components/AbsDay";
import ArmsDay from "./Components/ArmsDay";
import ChestDay from "./Components/ChestDay";
import BackDay from "./Components/BackDay";
import FullBody from "./Components/FullBody";
import LegsDay from "./Components/LegsDay";

class ToDay extends Component {
  render() {
    const Abs = this.props.exercise.Abs.map((item, index) => {
      return <AbsDay Ex_Abs={item.name} rep={item.reps}
              set={item.sets} image={item.image} />;
    });
    const Arms = this.props.exercise.Arms.map((item, index) => {
      return <ArmsDay Ex_Arms={item.name} id={index} />;
    });
    return (
      <div>
        <h1> </h1>
        {Abs}
        {Arms}
        <BackDay />
        <ChestDay />
        <FullBody />
        <LegsDay />
      </div>
    );
  }
}

export default ToDay;
