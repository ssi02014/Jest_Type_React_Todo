import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from './TodoList';

describe('<TodoList />', () => {
  const sampleTodos = [
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
  ];
  const setup = () => {
    const onToggle = jest.fn();
    const onRemove = jest.fn();
    render(
      <TodoList todos={sampleTodos} onToggle={onToggle} onRemove={onRemove} />  
    );
    const { getByText, getAllByText } = screen;
    return {
      ...screen,
      getAllByText,
      getByText,
      onToggle,
      onRemove,
    }
  }

  it('renders todos properly', () => {
    const { getByText } = setup();
    getByText(sampleTodos[0].text);
    getByText(sampleTodos[1].text);
    getByText(sampleTodos[2].text);
  });

  it('calls onToggle and onRemove', () => {
    const { getByText, getAllByText, onToggle, onRemove } = setup();

    fireEvent.click(getByText(sampleTodos[0].text));
    expect(onToggle).toBeCalledWith(sampleTodos[0].id);

    fireEvent.click(getAllByText('삭제')[0]);
    expect(onRemove).toBeCalledWith(sampleTodos[0].id);
  });
});