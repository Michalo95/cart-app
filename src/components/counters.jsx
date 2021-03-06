import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    console.log("Counters - Rendered");

    const {onReset, counters, onDelete, onIncrement} = this.props;

    return (
      <div>
        <button
          onClick={onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {counters.map((counter) => (
          <Counter //These are objects created to be used in counter.jsx file
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counters={counter} //includes all the properties
            //value={counter.value} ^^^^^^
            //id={counter.id} ^^^^^^^^
          />
        ))}
      </div>
    );
  }
}

export default Counters;
