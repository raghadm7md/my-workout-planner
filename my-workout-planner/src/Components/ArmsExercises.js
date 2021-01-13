import React, { Component } from "react";
import ArmsDay from "./ArmsDay";

export default class ArmsExercises extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Arms: this.props.Arms,
      // DoneEx:[],
    };
  }
  removeItem = (ExName) => {
    const arr = this.state.Arms;
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].name === ExName) {
        arr.splice(i, 1);
        this.setState({ Arms: arr });
      }
    }
  };
  EditItem = (newW, item) => {
    const newArray = this.state.Arms;
    console.log(newArray);
    for (let i = 0; i < newArray.length; i++) {
      if (newArray[i].name === item) {
        let val = newArray[i];
        val.weight = newW;
        newArray.findIndex((element, index) => {
          if (element === val) {
            newArray.splice(index, 1, val);
            this.setState({ Arms: newArray });
          }
        });
        console.log(newArray);
      }
    }
  };
  // componentDidMount() {
  //   this.setState({ Arms: this.props.Arms });
  // }

  AddExercise = (Ex, index) => {
    const newArray = this.state.Arms;
    // for (let i = 0; i < newArray.length; i++) {
    //   if (newArray[i].name === Ex.name) {
    //    // newArray[i] = Ex;
    //    console.log("Done!!")
    //     console.log(newArray)
    //   }
    // }
    newArray[index].done=true
    
    this.setState({ Arms: newArray });
   // console.log(this.state.Arms);
  };

  render() {
    const Arms = this.state.Arms.map((item, index) => {
      return (
        <ArmsDay
          Ex_Arms={item.name}
          key={index}
          num={index}
          rep={item.reps}
          set={item.sets}
          image={item.image}
          weight={item.weight}
          remove={this.removeItem}
          edit={this.EditItem}
          addToHistory={item}
          add={this.AddExercise}
        />
      );
    });
    console.log(this.state.Arms);
    return <div>{Arms}</div>;
  }
}
