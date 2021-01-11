import React, { Component } from "react";

export default class AbsDay extends Component {
  render() {
    return (
      <div className="Ex">
        <div class="container">
          <div class="row">
            <div class="col"><h2>{this.props.Ex_Abs}</h2></div>
            <div class="col"><img src={this.props.image} width={150}/></div>
          </div>
          <div class="row">
            <div class="col"><h4>Reps = {this.props.set}</h4></div>
            <div class="col"><h4>Sets = {this.props.rep}</h4></div>
            <div class="col"></div>
          </div>
        </div>
      </div>
    );
  }
}
