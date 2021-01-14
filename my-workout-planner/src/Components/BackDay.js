import React, { Component } from "react";
import BackExercise from "./BackExercise";
import EditExercise from "./EditExercise";

export default class BackDay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: false,
      Exercise: this.props.addToHistory,
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
    console.log(newUpdate);
    this.props.edit(newUpdate , this.props.Ex_Back)
  };
  handelClike = (event) => {
    event.preventDefault();
    this.props.remove(this.props.Ex_Back);
  };
  MarkedDoneExercise = () => {
    this.props.add(this.props.num);
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
              <h2>{this.props.Ex_Back}</h2>
            </div>
            <div class="col">
              <img src={this.props.image} width={150} />
              <button onClick={this.MarkedDoneExercise}>
                {this.state.Exercise.done ? "yaaaaa!!" : "Done it "}
              </button>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <h4>Reps= {this.props.set}</h4>
            </div>
            <div class="col">
              <h4>Sets= {this.props.rep}</h4>
            </div>
            <div class="col">
              <h4>weight= {this.props.weight}</h4>
            </div>
          </div>
          <button onClick={this.handelClike} class="btn btn-secondary">
            delete
          </button>
        </div>
      </div>
    );
  }
}
