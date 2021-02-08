import React, { Component } from "react";

export class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "admin",
      password: "",
      hasLoginFailed: false,
      showSuccessMessage: false,
    };
  }

  //method to handle state change for username and password
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
    // console.log(this.state);
  };

  loginClicked = () => {
    //admin, password
    if (this.state.username === "admin" && this.state.password === "password") {
      //react router history api
      this.props.history.push(`/welcome/${this.state.username}`);
    } else {
      this.setState({ hasLoginFailed: true });
      this.setState({ showSuccessMessage: false });
    }
    // console.log(this.state);
  };

  render() {
    return (
      <div>
        {this.state.hasLoginFailed && <div>Invalid Credentials</div>}
        {this.state.showSuccessMessage && <div>Successful</div>}
        Username:
        <input
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.handleChange}
        />
        Password:
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <button onClick={this.loginClicked}>Login</button>
      </div>
    );
  }
}

export default LoginComponent;
