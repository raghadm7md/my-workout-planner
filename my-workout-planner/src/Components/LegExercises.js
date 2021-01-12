import React, { Component } from "react";
import LegsDay from "./LegsDay";

export default class LegExercises extends Component {
  constructor(props) {
    super(props);
    this.state = {
      legs: this.props.legs,
    };
  }

  removeItem = (ExName) => {
    const newArray = this.state.legs;
    console.log(newArray);
    for (let i = 0; i < newArray.length; i++) {
      if (newArray[i].name === ExName) {
        newArray.splice(i, 1);
        this.setState({ legs: newArray });
      }
    }
  };

  EditItem = (newW, item) => {
    const newArray = this.state.legs;
    console.log(newArray);
    for (let i = 0; i < newArray.length; i++) {
      if (newArray[i].name === item) {
        let val = newArray[i];
        val.weight = newW;
        newArray.findIndex((element, index) => {
          if (element === val) {
            newArray.splice(index, 1, val);
            this.setState({ legs: newArray });
          }
        });
        console.log(newArray);
      }
    }
  };
  render() {
    const legs = this.props.legs.map((item, index) => {
      return (
        <LegsDay
          Ex_legs={item.name}
          key={index}
          rep={item.reps}
          set={item.sets}
          image={item.image}
          weight={item.weight}
          remove={this.removeItem}
          edit={this.EditItem}
        />
      );
    });
    return <div>{legs}</div>;
  }
}
