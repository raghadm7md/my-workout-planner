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
      quote: "",
      ExerciseName: "",
      Sets: "",
      Reps: "",
      Weight: "",
      Body: "",
    };
    this.formSubmit = this.formSubmit.bind(this);
  }

  componentDidMount() {
    // let API =`http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=json&lang=en`
    //   axios.get(API)
    //   .then((response) => {
    //     console.log('RESPONSE: ', response);
    //     console.log('DATA: ', response.data);
    //     let newQoute=response.data.quoteText
    //     this.setState({quote : newQoute })
    //   })
    //   .catch((err) => {
    //     console.log('ERR: ', err);
    //   });
  }

  formSubmit = (event) => {
    event.preventDefault();
    console.log("onSubmit!!!!!!")
    let name = this.state.ExerciseName;
    let sets = this.state.Sets;
    let reps = this.state.Reps;
    let weight = this.state.Weight;
    let body = this.state.Body;
    let NewData = this.state.exercise;
    
    for (const key in NewData) {
      if ( key === body ){
        body.push({
          "name": name,
          "image":"",
          "sets": sets,
          "reps": reps,
          "weight":weight
        })
      }
    }
    this.setState({Body : body})
  };
  render() {
    // console.log(this.state.ExerciseName);
    // console.log(this.state.Sets);
    // console.log(this.state.Reps);
    // console.log(this.state.Weight);
    console.log(this.state.Body);
    return (
      <div className="App">
        <h1>welcome to your fitness journey</h1>
        {/* <button onClick={this.Getquote}> Quote of the day </button> */}
        <div>
          <form className="form" onSubmit={this.formSubmit} >
            Add your workout HERE!
            <label>Exercise name: </label>
            <input
              type="text"
              onChange={(event) => {
                this.setState({ ExerciseName: event.target.value });
              }}
            />
            <label>Number of Sets: </label>
            <input
              type="text"
              onChange={(event) => {
                this.setState({ Sets: event.target.value });
              }}
            />
            <label>Number of Reps: </label>
            <input
              type="text"
              onChange={(event) => {
                this.setState({ Reps: event.target.value });
              }}
            />
            <label>How much of weight? </label>
            <input
              type="text"
              onChange={(event) => {
                this.setState({ Weight: event.target.value });
              }}
            />
            <input
              type="radio"
              value="Arms"
              onChange={(event) => {
                this.setState({ Body: event.target.value });
              }}
            />
            <label for="male"> It is for your Arms?</label>
            <input
              type="radio"
              value="Abs"
              onChange={(event) => {
                this.setState({ Body: event.target.value });
              }}
            />
            <label for="male"> It is for your Abs ?</label>
            <input
              type="radio"
              value="legs"
              onChange={(event) => {
                this.setState({ Body: event.target.value });
              }}
            />
            <label for="male"> It is for your Legs ?</label>
            <input
              type="radio"
              value="back"
              onChange={(event) => {
                this.setState({ Body: event.target.value });
              }}
            />
            <label for="male"> It is for your Back ?</label>
            <input
              type="radio"
              value="chest"
              onChange={(event) => {
                this.setState({ Body: event.target.value });
              }}
            />
            <label for="male"> It is for your Chest ?</label>
            <button type="submit" >Submit</button>
          </form>
        </div>
        <ToDay exercise={this.state.exercise} Qoute={this.state.quote} />
      </div>
    );
  }
}

export default App;
