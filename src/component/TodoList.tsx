import styled from "@emotion/styled";
import React from "react";
import TodoItem from "./TodoItem";
import { useTodoState } from "../TodoContext";

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
  background: gray; /* 사이즈 조정이 잘 되고 있는지 확인하기 위한 임시 스타일 */
`;

function TodoList() {
  const todos = useTodoState();
  return (
    <TodoListBlock>
      {todos.map((todo) => (
        <TodoItem
          text={todo.text}
          done={todo.done}
          id={todo.id}
          key={"todo_key_" + todo.id}
        />
      ))}
    </TodoListBlock>
  );
}

export default TodoList;
