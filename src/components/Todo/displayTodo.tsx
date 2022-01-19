import {Todo} from '@components/CheckBox';
import React from 'react';
import {Todo as TodoList} from './index';

type DisplayTodosProps = {
  todos: TodoList[];
  removeTodo: React.Dispatch<React.SetStateAction<string>>;
};

export const DisplayTodos = ({todos, removeTodo}: DisplayTodosProps) => {
  const todosList = todos.map((todo) => {
    return (
      <Todo
        key={todo.id}
        id={todo.id}
        status={todo.completed}
        deleteTodo={removeTodo}
      >
        {todo.content}
      </Todo>
    );
  });

  return <>{todosList}</>;
};
