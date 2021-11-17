import React, { useCallback, useState } from 'react';

interface Props  {
  onInsert?: (value: string) => void;
}

const TodoForm = ({ onInsert }: Props) => {
  const [value, setValue] = useState('');
  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);
  const onSubmit = useCallback((e: any) => {
    e.preventDefault();

    if (onInsert) onInsert(value);
    setValue("");
  }, [onInsert, value]);

  return (
    <form onSubmit={onSubmit}>
      <input 
        type="text"
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={onChange}
      />
      <button type="submit">등록</button>
    </form>
  );
};

export default TodoForm;