import React, { Component } from "react";

export class ListTodosComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: 1, description: "Learn React" },
        { id: 2, description: "Become an Expert at React" },
        { id: 3, description: "Develop Pomodoro App" },
      ],
    };
  }

  render() {
    // return <div>Welcome {this.props.match.params.name}</div>;
    return (
      <div>
        <h1> List Todos</h1>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>description</th>
            </tr>
          </thead>
          <tbody>
            {this.state.todos.map((todo) => (
              <tr>
                <td>{todo.id}</td>
                <td>{todo.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ListTodosComponent;
