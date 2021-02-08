import React, { Component } from "react";

class TodoApp extends Component {
  render() {
    return (
      <div className="App">
        <LoginComponent />
      </div>
    );
  }
}

class LoginComponent extends Component {
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
      console.log("Successful");
      this.setState({ showSuccessMessage: true });
      this.setState({ hasLoginFailed: false });
    } else {
      console.log("Failed");
      this.setState({ hasLoginFailed: true });
      this.setState({ showSuccessMessage: false });
    }
    // console.log(this.state);
  };

  showInvalidCredentialsMessage = (props) => {
    if (props.hasLoginFailed) {
      return <div>Invalid Credentials</div>;
    }
    return null;
  };

  showSuccessfulMessage = (props) => {
    if (props.showSuccessMessage) {
      return <div>Successful</div>;
    }
    return null;
  };

  // handlePasswordChange = (event) => {
  //   console.log(event.target.value);
  //   this.setState({
  //     password: event.target.value,
  //   });
  // };
  render() {
    return (
      <div>
        <this.showInvalidCredentialsMessage
          hasLoginFailed={this.state.hasLoginFailed}
        />
        <this.showSuccessfulMessage
          showSuccessMessage={this.state.showSuccessMessage}
        />
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

export default TodoApp;
