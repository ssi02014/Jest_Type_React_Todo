import React, { useCallback, useRef, useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const TodoApp = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'TDD 배우기',
      done: true,
    },
    {
      id: 2,
      text: '리액트 배우기',
      done: false,
    },
    {
      id: 3,
      text: 'react-testing-library 사용하기',
      done: false,
    },
  ]);

  const nextId = useRef(4);

  const onInsert = useCallback((text: string) => {
    const todo = {
      id: nextId.current,
      text,
      done: false,
    }

    setTodos([...todos, todo]);
    nextId.current += 1;
  }, [todos]);

  const onToggle = useCallback(id => {
      const newTodos = todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo, 
            done: !todo.done
          }
        }
        return todo;
      });

      setTodos(newTodos);
  },[todos]);

  const onRemove = useCallback(id => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  },[todos]);

  return (
    <>
     <TodoForm data-testid="helloworld" onInsert={onInsert} />
     <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} /> 
    </>
  );
};

export default TodoApp;