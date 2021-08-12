import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
//import "./App.css";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  //Lifecycle hooks can only be used with class components
  constructor() {
    //Called once, it is the right place to initialize the properties in this class
    super(); //Calls the constructor of its parent class
    console.log("App - Constructor");
  }

  componentDidMount() {
    //This method is called after our component is rendered into the DOM and it's the perfect place to make Ajax calls to get data from the server.
    console.log("App - Mounted"); //When a component is mounted, it means that component is in the DOM
  }

  // (...) spread operator is used for cloning objects, arrays, etc.
  handleIncrement = (chooseCounter) => {
    //when the increment button is pressed, the chooseCounter gets populated with its ID and value
    const newCounters = [...this.state.counters]; //cloning current array; Don't want to directly change the state, we want React to do it by using setState
    const index = newCounters.indexOf(chooseCounter); //grabs the first occurance of a value; 4 if id 1 is chosen
    //newCounters[index] = { ...chooseCounter }; //cloning the chooseCounter object that we are using as an argument in this function/method.
    newCounters[index].value++;
    this.setState({ counters: newCounters });
  };

  handleReset = () => {
    const newCounters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters: newCounters });
  };

  //Event handler
  handleDelete = (counterId) => {
    console.log("Event Handler Called", counterId);
    const newCounters = this.state.counters.filter((c) => c.id !== counterId); //Only display true conditions; if id 2 was pressed (c.id 2 == counterId 2 which is false), do not store in new array

    this.setState({ counters: newCounters }); //We are setting counters = newCounters

    // this.setState((prevState) => {
    //   return { counters: prevState.counters.filter((c) => c.id !== counterId) };
    // });
  };

  render() {
    //App and all it's children are Rendered and then mounted
    console.log("App - Rendered"); //Basically returns an element that represents our virtual DOM';Now React gets that virtual DOM and renders it in the actual browser DOM.

    return (
      <React.Fragment>
        <NavBar //These are objects created to be used in navbar.jsx file
          totalCounters={this.state.counters.filter((c) => c.value > 0).length} //Display a number of counters that have a value greater than zero
        />
        <main>
          <Counters //These are objects created to be used in counters.jsx file
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
