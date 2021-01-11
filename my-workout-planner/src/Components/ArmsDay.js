import React, { Component } from "react";
import EditExercise from "./EditExercise";

export default class ArmsDay extends Component {
  constructor() {
    super();
    this.state = {
      showComponent: false,
    };
  }
  EditAbsExercises = () => {
    this.setState({ showComponent: true });
    console.log(this.state.showComponent)
  };
  hide = () => {
    this.setState({ showComponent: false });
    console.log(this.state.showComponent)
  };
  render() {
    return (
      <div className="Ex">
        <div class="container">
          <button onClick={this.EditAbsExercises} class="btn btn-secondary" >Edit</button>
          {this.state.showComponent ? <EditExercise hide={this.hide}/> : null}
          <div class="row">
            <div class="col">
              <h2>{this.props.Ex_Arms}</h2>
            </div>
            <div class="col">
              <img src={this.props.image} width={150} />
            </div>
          </div>
          <div class="row">
            <div class="col">
              <h4>Reps = {this.props.set}</h4>
            </div>
            <div class="col">
              <h4>Sets = {this.props.rep}</h4>
            </div>
            <div class="col">
              <h4>weight = {this.props.weight}</h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
