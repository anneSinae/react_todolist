import React from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoBody from './components/TodoBody';
import { TodoProvider } from './components/TodoContext';
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
    <TodoProvider>
      <GlobalStyle />
      <TodoList>
        <TodoHead />
        <TodoBody />
        <TodoCreate />
      </TodoList>
    </TodoProvider>
  );
}

export default App;
