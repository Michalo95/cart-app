import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <div>
        <button
          onClick={() => this.props.onReset()}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.props.counters.map((counter) => (
          <Counter //These are objects created to be used in counter.jsx file
            key={counter.id}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
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
