import "./App.css";
import emotionReset from "emotion-reset";
import TodoHead from "./component/TodoHead";
import TodoTemplate from "./component/TodoTemplete";
import { Global, css } from "@emotion/react";
import TodoList from "./component/TodoList";
import TodoCreate from "./component/TodoCreate";
import { TodoProvider } from "./TodoContext";

const styled = css`
  background-color: #e9ecef;
  ${emotionReset}

  *, *::after, *::before {
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-smoothing: antialiased;
  }
`;

function App() {
  return (
    <>
      <Global styles={styled} />
      <TodoProvider>
        <TodoTemplate>
          <TodoHead />
          <TodoList />
          <TodoCreate />
        </TodoTemplate>
      </TodoProvider>
    </>
  );
}

export default App;
