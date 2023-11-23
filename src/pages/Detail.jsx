import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Detail() {
  return (
    <Container>
      <Link to="/">
        {" "}
        <HomeBtn>Home</HomeBtn>
      </Link>

      <TodoCard></TodoCard>
    </Container>
  );
}
const Container = styled.div``;
const HomeBtn = styled.button``;
const TodoCard = styled.div``;
export default Detail;
