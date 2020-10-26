import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import { useTodoState } from './TodoContext';
import TodoList from './TodoList';

const TodoBodyBox = styled.div`
  flex: 1;
  padding: 20px 30px 40px;
  overflow-y: auto;
`;

function TodoBody() {
  const TodoList = useTodoState();
  console.log(TodoList);  //<TodoItem text="프로젝트 생성1" done={true} />
  return (
  <TodoBodyBox>
   {TodoList.map(todo => 
      <TodoItem 
        key={todo.id} 
        id={todo.id}
        text={todo.text} 
        done={todo.done} 
      />
   )}
  </TodoBodyBox>
  );
}

export default TodoBody;