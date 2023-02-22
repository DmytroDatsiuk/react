import React, { Component } from 'react';
import { Box } from './App.styled';
import { ColorPicker } from './ColorPicker/ColorPicker';
import { Counter } from './Counter/Counter';
import { Dropdown } from './Dropdown/Dropdown';
import { GlobalStyle } from './Global.styled';
import { ToDoList } from './ToDoList/ToDoList';
import todos from './todos.json';

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

export class App extends Component {
  state = {
    todos,
  };

  deleteTodos = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  render() {
    const { todos } = this.state;

    const completedTodos = todos.reduce(
      (acc, todo) => (todo.completed ? acc + 1 : acc),
      0
    );

    return (
      <Box>
        <GlobalStyle />
        <Counter />
        <Dropdown />
        <ColorPicker options={colorPickerOptions} />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span>Загальна кількість: {todos.length}</span>
          <span>Кількість виконаних: {completedTodos}</span>
        </div>
        <ToDoList todos={todos} onDeleteTodo={this.deleteTodos} />
      </Box>
    );
  }
}
