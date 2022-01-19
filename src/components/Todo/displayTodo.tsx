import {Todo} from '@components/CheckBox';
import {useEffect, useState} from 'react';
import {Todo as TodoList} from './index';

export const DisplayTodos = ({todos}: {todos: TodoList[]}) => {
  const [filteredTodo, setFilteredTodo] = useState(todos);
  const [todoToDelete, setTodoToDelete] = useState('');

  useEffect(() => {
    const newTodo = todos.filter((todo) => {
      return todo.id !== todoToDelete;
    });
    setFilteredTodo(newTodo);
  }, [todoToDelete, todos]);

  const todosList = filteredTodo.map((todo) => {
    return (
      <Todo
        key={todo.id}
        id={todo.id}
        status={todo.completed}
        deleteTodo={setTodoToDelete}
      >
        {todo.content}
      </Todo>
    );
  });

  return <>{todosList}</>;
};
