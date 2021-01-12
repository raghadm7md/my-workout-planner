import React, { Component } from "react";
import AbsDay from "./AbsDay";

export default class AbsExercises extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Abs: this.props.Abs
    };
  }

  removeItem = (ExName) => {
    const newArray = this.state.Abs;
    console.log(newArray);
    for (let i = 0; i < newArray.length; i++) {
      if (newArray[i].name === ExName) {
        newArray.splice(i, 1);
        this.setState({ Abs: newArray });
      }
    }
  };
  
  render() {
    const Abs = this.state.Abs.map((item, index) => {
      return (
        <AbsDay
          Ex_Abs={item.name}
          key={index}
          rep={item.reps}
          set={item.sets}
          image={item.image}
          remove={this.removeItem}
        />
      );
    });
    return <div>{Abs}</div>;
  }
}
