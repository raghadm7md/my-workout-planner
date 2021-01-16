import React, { Component } from "react";
import BackDay from "./BackDay";

export default class BackExercise extends Component {
  constructor(props) {
    super(props);
    this.state = {
      back: this.props.back,
    };
  }

  EditItem = (newW, item) => {
    const newArray = this.state.back;
    console.log(newArray);
    for (let i = 0; i < newArray.length; i++) {
      if (newArray[i].name === item) {
        let val = newArray[i];
        val.weight = newW;
        newArray.findIndex((element, index) => {
          if (element === val) {
            newArray.splice(index, 1, val);
            this.setState({ back: newArray });
          }
        });
        console.log(newArray);
      }
    }
  };

  removeItem = (ExName) => {
    const newArray = this.state.back;
    console.log(newArray);
    for (let i = 0; i < newArray.length; i++) {
      if (newArray[i].name === ExName) {
        newArray.splice(i, 1);
        this.setState({ back: newArray });
      }
    }
  };
  AddExercise = (index) => {
    const newArray = this.state.back;

    newArray[index].done = true;

    this.setState({ back: newArray });
  };

  removeAll = () => {
    this.setState({ back: [] });
  };

  render() {
    const back = this.state.back.map((item, index) => {
      return (
        <BackDay
          Ex_Back={item.name}
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
    return (
      <div>
        {back}
        <button onClick={this.removeAll} class="btn btn-secondary">
          Delete all Exercises
        </button>
      </div>
    );
  }
}
