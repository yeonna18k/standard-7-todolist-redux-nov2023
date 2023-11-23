import React from "react";
import styled from "styled-components";
import AddForm from "../components/AddForm";
import TodoListContainer from "../components/TodoListContainer";
import DoneListContainer from "../components/DoneListContainer";

function Home() {
  return (
    <Container>
      <AddForm />
      <TodoListContainer />
      <DoneListContainer />
    </Container>
  );
}
const Container = styled.div``;

export default Home;
