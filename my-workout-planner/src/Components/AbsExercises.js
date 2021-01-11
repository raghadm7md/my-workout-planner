import React, { Component } from 'react'
import AbsDay from "./AbsDay";
import EditExercise from './EditExercise';

export default class AbsExercises extends Component {
    render() {
        const Abs = this.props.Abs.map((item , index) => {
            return (
              <AbsDay
                Ex_Abs={item.name}
                key={index}
                rep={item.reps}
                set={item.sets}
                image={item.image}
              />
            );
          });
        return (
            <div>
              {Abs}  
            </div>
        )
    }
}
