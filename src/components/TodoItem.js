import React from 'react';
import styled, { css } from 'styled-components';
import { MdDone, MdDelete } from 'react-icons/md';

const CheckCircle = styled.div`
  width: 30px;
  height: 30px;
  border-radius 50%;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${props => props.done && css`
    border: 1px solid #38d9a9;
    color:#38d9a9;
  `}

`;
const Text = styled.div`
  flex: 1;
  font-size: 20px;
  color: #495057;
  ${props => props.done && css`
    color:#ced4da;
  `}
`;
const Remove = styled.div`
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 22px;
  cursor: pointer;
  &:hover {
    color: #ff6d6d;
  }
`;
const TodoItemBox = styled.div`
  display: flex;
  margin: 10px 0;
  align-items: center;
  font-size: 15px;
  &:hover {
    ${Remove} {
      opacity: 1;
    }
  }
`;

function TodoItem({ id, done, text }) {
  return (
    <TodoItemBox>
      <CheckCircle done={done}>{done && <MdDone />}</CheckCircle>
      <Text done={done}>{text}</Text>
      <Remove>
        <MdDelete />
      </Remove>
    </TodoItemBox>
  );
}

export default TodoItem;