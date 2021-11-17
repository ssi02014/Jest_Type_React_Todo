import React from 'react';
import TodoItem from './TodoItem';

interface TodoProps {
  id: number;
  text: string;
  done: boolean;
}
interface Props {
  todos: TodoProps[];
  onToggle: (id:number) => void;
  onRemove: (id:number) => void;
}
const TodoList = ({ todos, onToggle, onRemove }: Props) => {
  return (
    <ul data-testid="TodoList">
      {todos && todos.map(todo => {
        return (
          <TodoItem
            todo={todo} 
            key={todo.id}
            onToggle={onToggle}
            onRemove={onRemove}
          />
        )
      })}
    </ul>
  );
};

export default TodoList;