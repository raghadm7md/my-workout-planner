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
  AddExercise = (Ex,index) => {
    const newArray = this.state.Abs;
    
    newArray[index].done=true
    
    this.setState({ Abs: newArray });
  };
  
  render() {
    console.log(this.state.Abs)
    const Abs = this.state.Abs.map((item, index) => {
      return (
        <AbsDay
          Ex_Abs={item.name}
          key={index}
          num={index}
          rep={item.reps}
          set={item.sets}
          image={item.image}
          remove={this.removeItem}
          addToHistory={item}
          add={this.AddExercise}
        />
      );
    });
    return <div>{Abs}</div>;
  }
}
