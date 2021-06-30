import React, { Component } from "react";

class Counter extends Component {
  //state = {
  //value: this.props.counters.value, //counters is an object that was created in the counters.jsx
  //;

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

  render() {
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

/*
  <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
        <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </React.Fragment> //Basically a div, gets rid of multiple div's in console
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state; //Grabbing the count property from state so we don't have to keep writing "this.state.count"
    return count === 0 ? "Zero" : count;
  }
*/

/*
  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;

    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }
  render() {
    return (
      <div>{this.renderTags()}</div> //Basically a div, gets rid of multiple div's in console
    );
  }
}
*/
