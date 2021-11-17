import { render, screen, fireEvent } from "@testing-library/react";
import TodoApp from "./TodoApp";

describe("<TodoApp />", () => {
  const setup = () => {
    render(<TodoApp />);
    const { getByText, getByTestId } = screen;

    return {
      ...screen,
      getByText,
      getByTestId,
    };
  };

  it("renders TodoForm and TodoList", () => {
    const { getByText, getByTestId } = setup();
    getByText("등록"); // TodoForm 존재 유무 확인
    getByTestId("TodoList"); // TodoList 존재 유무 확인
  });

  it("renders two defaults todos", () => {
    const { getByText } = setup();
    getByText("TDD 배우기");
    getByText("리액트 배우기");
    getByText("react-testing-library 사용하기");
  });
});
