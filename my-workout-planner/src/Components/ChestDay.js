import React, { Component } from "react";
import EditExercise from "./EditExercise";
export default class ChestDay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: false,
      weight: this.props.weight,
      Exercise: this.props.addToHistory,
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
    console.log(newUpdate);
    this.props.edit(newUpdate, this.props.Ex_Chest);
  };
  handelClike = (event) => {
    event.preventDefault();
    this.props.remove(this.props.Ex_Chest);
  };
  MarkedDoneExercise = () => {
    this.props.add(this.props.num);
  };
  render() {
    return (
      <div className="Ex">
        <div class="container">
          {this.state.showComponent ? (
            <EditExercise hide={this.hide} Update={this.UpdateEx_weight} />
          ) : null}
          <div class="row">
            <div class="col">
              <h2>{this.props.Ex_Chest}</h2>
            </div>
            <div class="col">
              <img src={this.props.image} width={150} />
            </div>
          </div>
          <div class="row">
            <div class="col">
              <h4>Sets= {this.props.set}</h4>
            </div>
            <div class="col">
              <h4>Reps= {this.props.rep}</h4>
            </div>
            <div class="col">
              <h4>weight= {this.props.weight}</h4>
            </div>
          </div>
        </div>
        <div class="modal-footer">
        <button onClick={this.handelClike} class="btn btn-secondary">
          delete
        </button>
        <button onClick={this.EditAbsExercises} class="btn btn-secondary">
          Edit
        </button>
        <button onClick={this.MarkedDoneExercise} class="btn btn-primary">
          {this.state.Exercise.done ? "yaaaaa!!" : "Done it "}
        </button>
        </div>
      </div>
    );
  }
}
