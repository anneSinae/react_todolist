import React from 'react';
import styled from 'styled-components';

const TodoListBox = styled.div`
  width: 500px;
  height: 780px;

  position: relative;
  background: white;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.04);
  border-radius: 20px;

  margin: 100px auto 32px;

  display: flex;
  flex-direction: column;
`;

function TodoList({ children }) {
  return <TodoListBox>{children}</TodoListBox>;
}

export default TodoList;