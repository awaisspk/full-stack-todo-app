import {TodoLayout} from '@src/Layouts/todoLayout';
import {v4 as uuidv4} from 'uuid';
import React, {useEffect, useState} from 'react';
import {CreateTodo} from './Createtodo';
import {DisplayTodos} from './displayTodo';
import {useMutation} from 'react-query';
import axios from 'axios';

export type Todo = {
  id: string;
  content: string;
  completed: boolean;
  createdAt?: Date;
};

export const TodoList = ({todoslist}: {todoslist: Todo[]}) => {
  const [value, setValue] = useState('');
  const [todos, setTodo] = useState<Todo[] | []>(todoslist);
  const [removeTodo, setRemoveTodo] = useState('');

  useEffect(() => {
    setTodo((todos) => todos.filter((todo) => todo.id !== removeTodo));
  }, [removeTodo]);

  const mutation = useMutation((newTodo: Todo) => {
    return axios.post('/api/todos', newTodo);
  });

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!value) {
      return;
    }
    const newTodo = {id: uuidv4(), content: value, completed: false};
    setTodo([...todos, newTodo]);
    console.log(newTodo);
    mutation.mutate(newTodo);
    setValue('');
  };

  return (
    <TodoLayout>
      <CreateTodo
        value={value}
        setValue={setValue}
        handleSubmit={handleSubmit}
      />
      <DisplayTodos todos={todos} removeTodo={setRemoveTodo} />
    </TodoLayout>
  );
};
