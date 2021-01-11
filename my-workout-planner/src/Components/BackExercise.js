import React, { Component } from 'react'
import BackDay from './BackDay'

export default class BackExercise extends Component {
    render() {
        const back = this.props.back.map((item, index) => {
            return (
              <BackDay
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
                {back}
            </div>
        )
    }
}
