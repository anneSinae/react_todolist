import React from 'react';
import styled from 'styled-components';

const TodoHeadBox = styled.div`
  padding: 40px 30px 24px;
  border-bottom: 1px solid #e9ecef;

  h1 {
    margin: 0;
    font-size: 32px;
    color:#343a40;
  }

  .day {
    margin-top: 5px;
    color: #868e96;
    font-size: 20px;
  }

  .tasks-left {
    color: #20c997;
    font-size: 18px;
    margin-top: 40px;
    font-weight:bold;
  }
`;

function TodoHead() {
  return (
    <TodoHeadBox>
      <h1>2020년 10월 5일</h1>
      <div className="day">일요일</div>
      <div className="tasks-left">할 일 2개 남음</div>
    </TodoHeadBox>
  );
}

export default TodoHead;