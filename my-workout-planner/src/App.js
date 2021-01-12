import React, { Component } from "react";
import "./App.css";
import axios from 'axios';
import ToDay from './ToDay'
import Data from './Data'

class App extends Component {
  constructor() {
    super();
    this.state = {
      exercise: Data ,
    }; 
  }


Getquote=()=>{
  let API =`http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=json&lang=en`
  axios.post(API)
  .then((response) => {
    console.log('RESPONSE: ', response);
    console.log('DATA: ', response.data);

    
  })
  .catch((err) => {
    console.log('ERR: ', err);
  });
}

  render() {
    return (
      <div className="App">
        <h1>welcome to your fitness journey</h1>
        <ToDay exercise={this.state.exercise}/>
        <button onClick={this.Getquote}> hhhhhhheeerreee </button>
      </div>
    );
  }
}

export default App;


