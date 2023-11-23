import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function DoneListContainer() {
  const { todos } = useSelector((state) => state.todos);
  const navigate = useNavigate();
  return (
    <Container>
      <StH1>DoneList</StH1>
      <TodoCards>
        {todos
          .filter((item) => item.isDone == true)
          .map((todo) => {
            return (
              <TodoCard
                onClick={() => {
                  navigate("detail");
                }}
              >
                <p>{todo.title}</p>
                <p>{todo.content}</p>
                {/* <button>삭제</button>
                <button>취소</button> */}
              </TodoCard>
            );
          })}
      </TodoCards>
    </Container>
  );
}
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
const StH1 = styled.h1``;
const TodoCards = styled.div`
  display: flex;
`;
const TodoCard = styled.div`
  width: 200px;
  border: 1px solid pink;
  border-radius: 10px;
  margin: 10px;
  padding: 10px;
  &:hover {
    cursor: pointer;
  }
  & button {
    cursor: pointer;
    border: 1px solid pink;
    border-radius: 10px;
    background-color: transparent;
    float: right;
  }
`;

export default DoneListContainer;
