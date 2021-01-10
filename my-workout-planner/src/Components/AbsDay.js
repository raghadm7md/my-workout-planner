import React, { Component } from 'react'

export default class AbsDay extends Component {
    render() {
        return (
            <div className="Ex">
              <h3>{this.props.Ex_Abs}</h3> 
            <p>Sets = {this.props.rep} Reps = {this.props.set}</p>
            <img src={this.props.image} width={100}/>
            </div>
        )
    }
}
