import React, { Component } from "react";

export default class AbsDay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Exercise: this.props.addToHistory,
    };
  }

  handelClike = (event) => {
    event.preventDefault();
    this.props.remove(this.props.Ex_Abs);
  };
  MarkedDoneExercise = () => {
    this.props.add(this.state.Exercise, this.props.num);
  };
  render() {
    return (
      <div className="Ex">
        <div class="container">
          <div class="row">
            <div class="col">
              <h2>{this.props.Ex_Abs}</h2>
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
            <div class="col"></div>
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
        </div>
      </div>
    );
  }
}
