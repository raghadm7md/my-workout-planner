import React, { Component } from 'react'
import AbsDay from "./AbsDay";


export default class AbsExercises extends Component {
    render() {
        const Abs = this.props.Abs.map((item) => {
            return (
              <AbsDay
                Ex_Abs={item.name}
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
