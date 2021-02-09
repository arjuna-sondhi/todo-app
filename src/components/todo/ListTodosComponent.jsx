import React, { Component } from "react";

export class ListTodosComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          description: "Learn React",
          done: false,
          targetDate: new Date(),
        },
        {
          id: 2,
          description: "Become an Expert at React",
          done: false,
          targetDate: new Date(),
        },
        {
          id: 3,
          description: "Develop Pomodoro App",
          done: false,
          targetDate: new Date(),
        },
      ],
    };
  }

  render() {
    // return <div>Welcome {this.props.match.params.name}</div>;
    return (
      <div>
        <div>Welcome {this.props.match.params.name}</div>
        <div>
          <h1> List Todos</h1>
          <div className="container">
            <table className="table">
              <thead>
                <tr>
                  <th>description</th>
                  <th>Completed?</th>
                  <th>Target Date</th>
                </tr>
              </thead>
              <tbody>
                {this.state.todos.map((todo) => (
                  <tr>
                    <td>{todo.id}</td>
                    <td>{todo.description}</td>
                    <td>{todo.done.toString()}</td>
                    <td>{todo.targetDate.toString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default ListTodosComponent;
