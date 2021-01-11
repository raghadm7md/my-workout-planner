import React, { Component } from 'react'
import ChestDay from './ChestDay'

export default class ChestExercise extends Component {
    render() {
        const chest = this.props.chest.map((item, index) => {
            return (
              <ChestDay
                Ex_Arms={item.name}
                key={index}
                rep={item.reps}
                set={item.sets}
                image={item.image}
                weight={item.weight}
              />
            );
          });
        return (
            <div>
               {chest} 
            </div>
        )
    }
}
