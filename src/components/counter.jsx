import React, { Component } from "react";

class Counter extends Component {
  //Updating phase visualization in console
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    if (prevProps.counter !== this.props.counter) {
      // Ajax call and get new data from the server
    }
  }
  //Unmounting phase visualization in console
  componentWillUnmount() {
    console.log("Counter - Unmount");
  }
  render() {
    console.log("Counter - Rendered");

    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counters)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counters.id)} //counters is an object that was created in the counters.jsx
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div> //Basically a div, gets rid of multiple div's in console
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counters.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counters;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;

//A method, like a function, is a set of instructions that perform a task.
//The difference is that a method is associated with an object, while a function is not.

// constructor() {   //This is used for binding, otherwise you can't use "this" within the function or method
//   super();
//   this.handleIncrement = this.handleIncrement.bind(this);
// }

//New method of binding instead of creating a constructor
//handleIncrement = () => {
//this.setState({ value: this.state.value + 1 });
//};
