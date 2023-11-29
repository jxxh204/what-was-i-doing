import styled from "@emotion/styled";
import React from "react";
import { useTodoState } from "../TodoContext";
import { css } from "@emotion/react";

const TodoHeadBlock = styled.section`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e9ecef;
  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }
  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }
`;
const NoTaskTitle = styled.div`
  color: #20c997;
  font-size: 18px;
  margin-top: 40px;
  font-weight: bold;
  display: initial;
  ${(props: { length: number }) =>
    props.length &&
    css`
      display: none;
    `}
`;
const DropDownTask = styled.div`
  color: #20c997;
  font-size: 18px;
  margin-top: 40px;
  font-weight: bold;
  display: none;
  ${(props: { length: number }) =>
    props.length &&
    css`
      display: initial;
    `}
`;

function TodoHead() {
  const today = new Date();
  const dateString = today.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const dayName = today.toLocaleDateString("ko-KR", { weekday: "long" });

  const todos = useTodoState();
  // const unDoneTodo = todos.filter((todo) => !todo.done);

  return (
    <TodoHeadBlock>
      {/* <h1>{dateString}</h1>
      <div className="day">{dayName}</div> */}
      <NoTaskTitle length={todos.length}>
        오늘 해야할 일 3가지 적어보기
      </NoTaskTitle>
      <DropDownTask length={todos.length}>집중의 공간</DropDownTask>
    </TodoHeadBlock>
  );
}

export default TodoHead;
