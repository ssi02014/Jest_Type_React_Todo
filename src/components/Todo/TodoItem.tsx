import React, { useCallback } from 'react';

interface Props {
  todo: {
    id: number;
    text: string;
    done: boolean
  };
  onToggle?: (id:number) => void;
  onRemove?: (id:number) => void;
}

const TodoItem = ({ todo, onToggle, onRemove }: Props) => {
  const { id, text, done } = todo;
  const toggle = useCallback(() => onToggle(id), [id, onToggle]);
  const remove = useCallback(() => onRemove(id), [id, onRemove]);

  return (
    <li>
      <span
        style={{
          textDecoration: done ? 'line-through' : 'none'
        }}
        onClick={toggle}
      >{text}</span>
      <button onClick={remove}>삭제</button>
    </li>
  );
};

export default TodoItem;