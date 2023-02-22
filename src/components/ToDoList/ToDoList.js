import React from 'react';
import { Item, List } from './ToDoList.styled';

export const ToDoList = ({ todos, onDeleteTodo }) => (
  <List>
    {todos.map(({ id, text }) => (
      <Item key={id}>
        <p>{text}</p>
        <button onClick={() => onDeleteTodo(id)}>Видалити</button>
      </Item>
    ))}
  </List>
);
