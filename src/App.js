import React from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoBody from './components/TodoBody';
import TodoCreate from './components/TodoCreate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <TodoList>
        <TodoHead />
        <TodoBody />
        <TodoCreate />
      </TodoList>
    </>
  );
}

export default App;
