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
            <Switch>
              <Route path="/" exact component={LoginComponent} />
              <Route path="/login" component={LoginComponent} />
              {/* <Route path="/welcome/:name" component={ListTodosComponent} /> */}
              <Route path="/todos" component={ListTodosComponent} />
              <Route component={ErrorComponent} />
            </Switch>
          </>
        </Router>
      </div>
    );
  }
}
function ErrorComponent() {
  return <div>An Error Occurred. This URL does not exist</div>;
}
export default TodoApp;
