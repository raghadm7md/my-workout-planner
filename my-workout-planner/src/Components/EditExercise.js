import React, { Component } from "react";

export default class EditExercise extends Component {
  constructor() {
    super();
    this.state = {
      Reps: "",
      Sets: "",
      weight: "",
    };
  }
  Update = () => {
    console.log(this.state.Reps);
  };
  render() {
    return (
      <div>
        <div class="modal-body">
          <form>
            <label class="col-form-label">Reps :</label>
            <input
              class="form-control"
              id="Reps"
              onChange={(event) => {
                this.setState({ Reps: event.target.value });
              }}
              value={this.state.Reps}
            />
            <label class="col-form-label">Sets :</label>
            <input class="form-control" id="message-text" />
            <label class="col-form-label">Weight :</label>
            <input class="form-control" id="message-text" />
          </form>
        </div>
        <div class="modal-footer">
          <button
            onClick={this.props.hide}
            type="button"
            class="btn btn-secondary"
          >
            Cancel
          </button>
          <button onClick={this.Update} type="button" class="btn btn-primary">
            Update
          </button>
        </div>
      </div>
    );
  }
}
