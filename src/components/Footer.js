import React from "react";
import styled from "styled-components";

function footer() {
  return (
    <Container>
      <Image1>
        <img src="/images/XO.png" alt="" />
      </Image1>
      <Image2>
        <img src="/images/project.png" alt="" />
      </Image2>
    </Container>
  );
}

export default footer;

const Container = styled.div`
  background-color: rgb(100, 0, 200);
  height: 115px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Image1 = styled.div`
  margin-left: 5%;

  img {
    width: 150px;
  }
`;

const Image2 = styled.div`
  margin-right: 5%;
  img {
    width: 153px;
    200px;
  }
`;
