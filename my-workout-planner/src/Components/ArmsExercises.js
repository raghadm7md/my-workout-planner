import React, { Component } from "react";
import ToDay from "../ToDay";
import ArmsDay from "./ArmsDay";

export default class ArmsExercises extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Arms: this.props.Arms,
    };
  }
  removeItem = (ExName) => {
    const arr = this.state.Arms;
     console.log(arr)
    for (let i = 0; i < this.state.Arms.length; i++) {
      if (this.state.Arms[i].name === ExName) {
        arr.splice(i, 1);
        this.setState({ Arms: arr });
      }
    }
  };
  componentDidMount() {
    this.setState({ Arms: this.props.Arms });
  }
  render() {
    const Arms = this.state.Arms.map((item, index) => {
      return (
        <ArmsDay
          Ex_Arms={item.name}
          key={index}
          rep={item.reps}
          set={item.sets}
          image={item.image}
          weight={item.weight}
          remove={this.removeItem}
        />
      );
    });
    return <div>{Arms}</div>;
  }
}
