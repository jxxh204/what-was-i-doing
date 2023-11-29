import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React, { useState } from "react";
import { useTodoDispatch, useTodoNextId } from "../TodoContext";

const CircleButton = styled.button`
  background: #38d9a9;
  &:hover {
    background: #63e6be;
  }
  &:active {
    background: #20c997;
  }

  z-index: 5;
  cursor: pointer;
  width: 80px;
  height: 80px;
  display: block;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  position: absolute;
  left: 50%;
  bottom: 0px;
  transform: translate(-50%, 50%);
  color: white;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.125s all ease-in;
`;

const InsertFormPositioner = styled.div`
  width: 100%;
  bottom: 0;
  left: 0;
  position: absolute;
`;

const InsertForm = styled.form`
  background: #f8f9fa;
  padding-left: 32px;
  padding-top: 32px;
  padding-right: 32px;
  padding-bottom: 72px;

  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid #e9ecef;
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;

function TodoCreate() {
  // const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const onToggle = () => {
    setValue("");
    setOpen(!open);
  };
  const onChange = (e) => setValue(e.target.value);

  const dispatch = useTodoDispatch();
  const nextId = useTodoNextId();

  // const onSubmit = (e: React.FormEvent) => {
  //   // form으로 하면 enter 자동 적용
  //   e.preventDefault();
  //   console.log(e);
  //   dispatch({
  //     type: "CREATE",
  //     todo: { id: nextId.current, text: value, done: false },
  //     id: nextId.current,
  //   });
  //   setValue("");
  //   setOpen(false);

  //   nextId.current += 1;
  // };

  return (
    <>
      {/* {open && (
        <InsertFormPositioner>
          <InsertForm onSubmit={onSubmit}>
            <Input
              autoFocus
              placeholder="할 일을 입력 후, Enter 를 누르세요"
              onChange={onChange}
            />
          </InsertForm>
        </InsertFormPositioner>
      )} */}
      <CircleButton onClick={onToggle}>+</CircleButton>
    </>
  );
}

export default TodoCreate;