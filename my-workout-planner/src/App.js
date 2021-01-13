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
      quote:''
    };
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    let API =`http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=json&lang=en`
      axios.get(API)
      .then((response) => {
        console.log('RESPONSE: ', response);
        console.log('DATA: ', response.data);
        let newQoute=response.data.quoteText
        this.setState({quote : newQoute })
      })
      .catch((err) => {
        console.log('ERR: ', err);
      });
    }
  addNewexercise = () => {};
  onSubmit = (event) => {
    event.preventDefault();
    // var webhooks_arr = this.state.webhooks;
    // webhooks_arr.push(this.state.value);
    // this.setState({webhooks: webhooks_arr});
  };
  render() {
    return (
      <div className="App">
        <h1>welcome to your fitness journey</h1>
        {/* <button onClick={this.Getquote}> Quote of the day </button> */}
        <div>
          <form className="form">
            Add your workout HERE!
            <label>Exercise name: </label>
            <input type="text" onChange={this.addNewexercise} />
            <label>Number of Sets: </label>
            <input type="text" onChange={this.addNewexercise} />
            <label>Number of Reps: </label>
            <input type="text" />
            <label>How much of waight: </label>
            <input type="text" onChange={this.addNewexercise} />

            <input type="radio" value="Arms" onChange={this.onValueChange} />
            <label for="male"> It is for your Arms?</label>

            <input type="radio" value="Abs" />
            <label for="male"> It is for your Abs ?</label>

            <input type="radio"  />
            <label for="male"> It is for your Legs ?</label>

            <input type="radio"  />
            <label for="male"> It is for your Back ?</label>

            <input type="radio"  />
            <label for="male"> It is for your Chest ?</label>
            
            <button onSubmit={this.onSubmit}>Submit</button>
          </form>
        </div>
        <ToDay exercise={this.state.exercise}  Qoute={this.state.quote}/>
      </div>
    );
  }
}

export default App;
