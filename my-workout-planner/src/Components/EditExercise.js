import React, { Component } from "react";
export default class EditExercise extends Component {
  constructor() {
    super();
    this.state = {
      weight: "",
    };
  }

  Updateweight =(event)=>{
    event.preventDefault();
    this.props.Update(this.state.weight);
  }

  render() {
    return (
      <div>
        <div class="modal-body">
          <form>
            <label class="col-form-label">Weight :</label>
            <input
              class="form-control"
              id="Reps"
              onChange={(event) => {
                this.setState({ weight: event.target.value });
              }}
              value={this.state.weight}
            />
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
          <button onClick={this.Updateweight} type="button" class="btn btn-primary">
            Update
          </button>
        </div>
      </div>
    );
  }
}
