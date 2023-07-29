// ფაილი: components/TodoItem.tsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { Todo } from '../types';
import { entityUpdated, entityRemoved } from '../store/entitiesSlice';

interface TodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(entityUpdated({ ...todo, completed: !todo.completed }));
  };

  const handleDelete = () => {
    dispatch(entityRemoved(todo.id));
  };

  return (
    <div>
      <input type="checkbox" checked={todo.completed} onChange={handleToggle} />
      <span>{todo.text}</span>
      <button onClick={handleDelete}>წაშალეთ</button>
    </div>
  );
};

export default TodoItem;
