import { render, screen, fireEvent } from '@testing-library/react';
import TodoForm from './TodoForm';

describe('<TodoForm />', () => {
  const setup = (props = {}) => {
    render(<TodoForm {...props} />)
    const { getByText, getByPlaceholderText } = screen;
    const input =  getByPlaceholderText("할 일을 입력하세요");
    const button = getByText('등록');

    return {
      ...screen,
      input,
      button,
    }
  }

  it('has input and a button', () => {
    const {input, button } = setup();
    expect(input).toBeTruthy(); // 해당 값이 true인지 확인
    expect(button).toBeTruthy();
  });

  it('changes input', () => {
    const { input } = setup();

    fireEvent.change(input, {
      target: {
        value: 'TDD 배우기',
      }
    });
    expect(input).toHaveAttribute('value', 'TDD 배우기');
  });

  it('calls onInsert and celars input', () => {
    const onInsert = jest.fn(); //목 함수
    const {input, button } = setup({ onInsert });

    fireEvent.change(input, {
      target: {
        value: 'TDD 배우기',
      }
    });

    fireEvent.click(button);
    expect(onInsert).toBeCalledWith('TDD 배우기');
    expect(input).toHaveAttribute('value', '');
  });
});