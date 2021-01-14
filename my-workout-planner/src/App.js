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
      SelectedValue: "",
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
    console.log("onSubmit!!!!!!");
    let name = this.state.ExerciseName;
    let sets = this.state.Sets;
    let reps = this.state.Reps;
    let weight = this.state.Weight;
    let Selected = this.state.SelectedValue;
    let NewData = this.state.exercise;
    console.log(NewData);
    const obj = {
      name: name,
      image: "",
      sets: sets,
      reps: reps,
      weight: weight,
    };
    if (Selected === "Abs") {
      console.log(Selected);
      console.log(NewData);
      let abs = this.state.exercise.Abs;
      abs.unshift(obj);
      this.setState({ exercise: abs });
    } else if (Selected === "Arms") {
      console.log(Selected);
      console.log(NewData);
      let arms = this.state.exercise.Arms;
      arms.unshift(obj);
      this.setState({ exercise: arms });
    } else if (Selected === "back") {
      console.log(Selected);
      console.log(NewData);
      let back = this.state.exercise.back;
      back.unshift(obj);
      this.setState({ exercise: back });
    } else if (Selected === "chest") {
      console.log(Selected);
      console.log(NewData);
      let chest = this.state.exercise.chest;
      chest.unshift(obj);
      this.setState({ exercise: chest });
    } else if (Selected === "legs") {
      console.log(Selected);
      console.log(NewData);
      let legs = this.state.exercise.legs;
      legs.unshift(obj);
      this.setState({ exercise: legs });
    }

    this.setState({ exercise: NewData });

    this.setState({ ExerciseName: "" });
    this.setState({ Sets: "" });
    this.setState({ Reps: "" });
    this.setState({ Weight: "" });
    this.setState({ SelectedValue: "" });
  };
  render() {
    return (
      <div className="App">
       <div>
          <img className="image1" src='https://cdn.mos.cms.futurecdn.net/h2QrfCQi872ZEdKHP9qHgY-1200-80.jpg'></img>
          <div class="top-left"><h1>welcome to your fitness journey</h1></div>
        <img className="image2" src='https://images.firstpost.com/wp-content/uploads/2020/07/gym-shutterstock-640.jpg'></img>
        </div>

        <div class="container">
            <div class="row row-cols-2">
              <div class="col-sm">
              <div>
          <form className="form" onSubmit={this.formSubmit}>
            Add your workout HERE!
            <div>
              <label>Exercise name: </label>
              <input
                value={this.state.ExerciseName}
                type="text"
                onChange={(event) => {
                  this.setState({ ExerciseName: event.target.value });
                }}
              />
              <label>Number of Sets: </label>
              <input
                value={this.state.Sets}
                type="text"
                onChange={(event) => {
                  this.setState({ Sets: event.target.value });
                }}
              />
              <label>Number of Reps: </label>
              <input
                value={this.state.Reps}
                type="text"
                onChange={(event) => {
                  this.setState({ Reps: event.target.value });
                }}
              />
              <label>How much of weight? </label>
              <input
                value={this.state.Weight}
                type="text"
                onChange={(event) => {
                  this.setState({ Weight: event.target.value });
                }}
              />
            </div>
            <div>    
            <select value={this.state.SelectedValue} onChange={(event) => {
                  this.setState({ SelectedValue: event.target.value });
                }} >
              <option value="" >Select here</option>
              <option value="Arms" >Arms</option>
              <option value="Abs" >Abs</option>
              <option value="legs">legs</option>
              <option value="back">back</option>
              <option value="chest">chest</option>
            </select>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
              </div>
              <div class="col">
               
  <ToDay exercise={this.state.exercise} Qoute={this.state.quote} />
              </div>
            </div>
          </div>

       
      
      </div>
    );
  }
}

export default App;
