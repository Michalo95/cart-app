import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 }
    ],
  };

  //Event handler
  handleDelete = (counterId) => {
    console.log("Event Handler Called", counterId);
    const newCounters = this.state.counters.filter((c) => c.id !== counterId); //Only display true conditions; if id 2 was pressed, do not store in new array

    this.setState({ counters: newCounters }); //We are setting counters = newCounters

    // this.setState((prevState) => {
    //   return { counters: prevState.counters.filter((c) => c.id !== counterId) };
    // });
  };

  render() {
    return (
      <div>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            counter={counter} //includes all the properties
            //value={counter.value}
            //id={counter.id}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
