import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ListTodosComponent } from "./ListTodosComponent";
import { LoginComponent } from "./LoginComponent";

class TodoApp extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <>
            <HeaderComponent />
            <Switch>
              <Route path="/" exact component={LoginComponent} />
              <Route path="/login" component={LoginComponent} />
              {/* <Route path="/welcome/:name" component={ListTodosComponent} /> */}
              <Route path="/todos/:name" component={ListTodosComponent} />
              <Route component={ErrorComponent} />
            </Switch>
            <FooterComponent />
          </>
        </Router>
      </div>
    );
  }
}

class HeaderComponent extends Component {
  render() {
    return (
      <div>
        Header <hr />
      </div>
    );
  }
}

class FooterComponent extends Component {
  render() {
    return (
      <div>
        <hr />
        Footer
      </div>
    );
  }
}

function ErrorComponent() {
  return <div>An Error Occurred. This URL does not exist</div>;
}
export default TodoApp;
