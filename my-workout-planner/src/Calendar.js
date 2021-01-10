import React, { Component } from 'react'
import ToDay from './ToDay'
import Progress from './Progress'


class Calendar extends Component {
    render() {
        return (
            <div>
                <h1>here will be your Calendar</h1>
                <ToDay EX_name={this.props.exercise[0].name}/>
                <Progress/>
            </div>
        )
    }
}

export default Calendar