import React, { Component } from "react";
import ChestDay from "./ChestDay";

export default class ChestExercise extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chest: this.props.chest,
    };
  }

  removeItem = (ExName) => {
    const newArray = this.state.chest;
    console.log(newArray);
    for (let i = 0; i < newArray.length; i++) {
      if (newArray[i].name === ExName) {
        newArray.splice(i, 1);
        this.setState({ chest: newArray });
      }
    }
  };

  EditItem = (newW, item) => {
    const newArray = this.state.chest;
    console.log(newArray);
    for (let i = 0; i < newArray.length; i++) {
      if (newArray[i].name === item) {
        let val = newArray[i];
        val.weight = newW;
        newArray.findIndex((element, index) => {
          if (element === val) {
            newArray.splice(index, 1, val);
            this.setState({ chest: newArray });
          }
        });
        console.log(newArray);
      }
    }
  };
  render() {
    const chest = this.state.chest.map((item, index) => {
      return (
        <ChestDay
          Ex_Chest={item.name}
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
    return <div>{chest}</div>;
  }
}
