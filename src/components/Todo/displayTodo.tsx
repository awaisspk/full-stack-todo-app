import {Todo} from '@components/CheckBox';
import {Todo as TodoList} from './index';

export const DisplayTodos = ({todos}: {todos: TodoList[]}) => {
  const todosList = todos.map((todo) => {
    return (
      <Todo key={todo.id} id={todo.id} status={todo.completed}>
        {todo.content}
      </Todo>
    );
  });

  return <>{todosList}</>;
};
