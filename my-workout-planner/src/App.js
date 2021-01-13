import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import ToDay from "./ToDay";
import Data from "./Data";

class App extends Component {
  constructor() {
    super();
    this.state = {
      exercise: Data,
    };
  }

  Getquote = () => {
    // let API =`http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=json&lang=en`
    // axios.post(API)
    // .then((response) => {
    //   console.log('RESPONSE: ', response);
    //   console.log('DATA: ', response.data);
    // })
    // .catch((err) => {
    //   console.log('ERR: ', err);
    // });
  };

  render() {
    return (
      <div className="App">
        <h1>welcome to your fitness journey</h1>
        <button onClick={this.Getquote}> Quote of the day </button>
        <div>
          <form className='form'>
            <label>Exercise name:</label>
            <input type="text"  />
            <label>Number of Sets:</label>
            <input type="text"  />
            <label >Number of Reps:</label>
            <input type="text"  />
            <label >How much of waight </label>
            <input type="text" value="Doe" />
            <input type="radio" id="male" name="gender" value="male" />
            <label for="male">Male</label>
            <input type="radio" id="female" name="gender" value="female" />
            <label for="female">Female</label>
            <input type="radio" id="other" name="gender" value="other" />
            <label for="other">Other</label>
          </form>
        </div>
        <ToDay exercise={this.state.exercise} />
      </div>
    );
  }
}

export default App;
