import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Counter.css";

class CounterButton extends Component {
  /*Props are
    by: variable to store value of increment amount
    incrementMethod(): method from parent Counter.jsx
    decrementMethod(): method from parent Counter.jsx
  */
  constructor() {
    super(); //  Error many people make
  }

  render = () => {
    return (
      <div className="counter">
        <button onClick={() => this.props.incrementMethod(this.props.by)}>
          +{this.props.by}
        </button>
        <button onClick={() => this.props.decrementMethod(this.props.by)}>
          -{this.props.by}
        </button>
      </div>
    );
  };
}
//default props values
CounterButton.defaultProps = {
  by: 1,
};

CounterButton.propTypes = {
  by: PropTypes.number,
};

export default CounterButton;
