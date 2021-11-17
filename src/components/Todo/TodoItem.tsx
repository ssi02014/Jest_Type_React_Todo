import React from 'react';

interface Props {
  todo: {
    id: number;
    text: string;
    done: boolean
  };
}

const TodoItem = ({ todo }: Props) => {
  const { id, text, done } = todo;

  return (
    <li>
      <span>{text}</span>
      <button>삭제</button>
    </li>
  );
};

export default TodoItem;