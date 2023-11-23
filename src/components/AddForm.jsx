import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/modules/todos";

function AddForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const todos = useSelector((state) => state.todos.todos);

  const dispatch = useDispatch();

  const onSubmitHandler = (e) => {
    console.log(todos);
    e.preventDefault();
    if (title === "" || content == "") return;
    dispatch(
      addTodo({
        id: todos.length + 1,
        title: title,
        content: content,
        isDone: false,
      })
    );
    setTitle("");
    setContent("");
  };
  return (
    <Container>
      <form onSubmit={onSubmitHandler}>
        <StInput
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <StInput
          value={content}
          onChange={(event) => setContent(event.target.value)}
        />
        <Stbutton>추가하기</Stbutton>
      </form>
    </Container>
  );
}

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
const StInput = styled.input``;
const Stbutton = styled.button``;
export default AddForm;
