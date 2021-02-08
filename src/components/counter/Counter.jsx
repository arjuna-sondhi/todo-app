import React, { Component } from "react";
import CounterButton from "./CounterButton";
import "./Counter.css";

class Counter extends Component {
  constructor() {
    super(); //  Error many people make

    //storing counter in state, use this to update state of object
    this.state = {
      counter: 0,
    };

    //arrow function prevents the need for binding
    //this.increment = this.increment.bind(this);
  }

  increment = (by) => {
    //Update the state : increment counter of previous state by "by"
    this.setState((prevState) => {
      return { counter: prevState.counter + by };
    });
  };

  decrement = (by) => {
    //Update the state : decrement counter of previous state by "by"
    this.setState((prevState) => {
      return { counter: prevState.counter - by };
    });
  };

  reset = () => {
    this.setState({
      counter: 0,
    });
  };

  render() {
    return (
      <div className="counter">
        <CounterButton
          by={1}
          incrementMethod={this.increment}
          decrementMethod={this.decrement}
        />
        <CounterButton
          by={5}
          incrementMethod={this.increment}
          decrementMethod={this.decrement}
        />
        <CounterButton
          by={10}
          incrementMethod={this.increment}
          decrementMethod={this.decrement}
        />
        <div>
          <button className="reset" onClick={this.reset}>
            Reset
          </button>
        </div>
        <span className="count">{this.state.counter}</span>
      </div>
    );
  }
}

export default Counter;
