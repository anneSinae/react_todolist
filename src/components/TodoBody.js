import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoBodyBox = styled.div`
  flex: 1;
  padding: 20px 30px 40px;
  overflow-y: auto;
`;

function TodoBody() {
  return (
  <TodoBodyBox>
    <TodoItem text="프로젝트 생성1" done={true} />
    <TodoItem text="프로젝트 생성2" done={true} />
    <TodoItem text="프로젝트 생성3" done={false} />
    <TodoItem text="프로젝트 생성4" done={false} />
  </TodoBodyBox>
  );
}

export default TodoBody;