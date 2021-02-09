import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
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
              <Route path="/logout" component={LogoutComponent} />
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
      <header>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div>
            <a href="" className="navbar-brand">
              admin
            </a>
          </div>
          <ul className="navbar-nav">
            <li>
              <Link className="nav-link" to="/todos/admin">
                Home
              </Link>
            </li>
            {/* <li>
              <Link className="nav-link" to="/todos">
                Todos
              </Link>
            </li> */}
          </ul>
          <ul className="navbar-nav navbar-collapse justify-content-end">
            <li>
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/logout">
                Logout
              </Link>
            </li>
          </ul>
        </nav>
      </header>
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

class LogoutComponent extends Component {
  render() {
    return (
      <>
        <h1>Logged out successfully!</h1>
      </>
    );
  }
}

function ErrorComponent() {
  return <div>An Error Occurred. This URL does not exist</div>;
}
export default TodoApp;
