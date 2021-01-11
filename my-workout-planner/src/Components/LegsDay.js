import React, { Component } from "react";
import EditExercise from "./EditExercise";

export default class LegsDay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: false,
      weight: this.props.weight,
    };
  }
  EditAbsExercises = () => {
    this.setState({ showComponent: true });
    console.log(this.state.showComponent);
  };
  hide = () => {
    this.setState({ showComponent: false });
    console.log(this.state.showComponent);
  };
  UpdateEx_weight = (newUpdate) => {
    this.setState({ weight: newUpdate });
  };
  render() {
    return (
      <div className="Ex">
        <div class="container">
          <button onClick={this.EditAbsExercises} class="btn btn-secondary">
            Edit
          </button>
          {this.state.showComponent ? (
            <EditExercise hide={this.hide} Update={this.UpdateEx_weight} />
          ) : null}
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
              <h4>weight = {this.state.weight}</h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
