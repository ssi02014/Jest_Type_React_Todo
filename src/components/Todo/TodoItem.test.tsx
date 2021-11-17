import { render, screen, fireEvent } from '@testing-library/react';
import TodoItem from './TodoItem';

interface Props {
  todo?: {
    id: number;
    text: string;
    done: boolean
  };
}

describe('<TodoItem />', () => {
  const sampleTodo = {
    id: 1,
    text: "TDD 배우기",
    done: false,
  };

  const setup = (props: Props = {}) => {
    const initialProps = { todo: sampleTodo }
    render(<TodoItem {...initialProps} {...props} />);
    const { getByText } = screen;
    const todo =  props.todo || initialProps.todo;
    const span = getByText(todo.text);
    const button = getByText('삭제');

    return {
      ...screen,
      span,
      button,
    }
  }

  it('has span and button', () => {
    const { span, button } = setup();
    expect(span).toBeTruthy();
    expect(button).toBeTruthy();
  });
})