import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Todo } from './types';
import { CrudAPI } from './api'; // შეამოწმეთ ფაილის დარექტორია და იმპორტები

import TodoItem from './TodoItem';

const TodoList: React.FC = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state: any) => Object.values(state.entities.entities) as Todo[]);

  useEffect(() => {
    // შეინახეთ ენთიტები სიაში რედაქსში
    CrudAPI.getAll().then((entities: Todo[]) => {
      entities.forEach((entity) => dispatch(entityAdded(entity)));
    });
  }, [dispatch]);

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
