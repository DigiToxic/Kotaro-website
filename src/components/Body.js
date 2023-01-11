import React from "react";
import styled from "styled-components";

function body() {
  return (
    <Container id="Body">
      <img className="MainPfp" src="/images/Kotaro.jpg" alt="" />
      <XO3>
        <img src="/images/XO.png" alt="" />
      </XO3>

      <Text>
        <h1>About</h1>
        <p>
          Kotaro is an original 3D collection of 6000 avatars digitally sculpted
          NFTs on the Ethereum blockchain to spread Japanese culture. The
          artwork combines a 3D Japanese style with unique details in each of
          the characters.
        </p>
        <div id="Feature"></div>
      </Text>
    </Container>
  );
}

export default body;

const Container = styled.div`
  margin-top: 160px;
  background-color: rgb(178, 102, 255);
  padding-bottom: 50px;
  display: flex;
  justify-content: space-between;

  img {
    width: 800px;
    margin-top: 50px;
    margin-left: 50px;
    border-radius: 40px;
  }

  @media (max-width: 1441px) {F
    img {
      width: 760px;
    }
  }

  @media (max-width: 1335px) {F
    img {
      width: 700px;
    }
  }

  @media (max-width: 1284px) {
    img {
      width: 650px;
    }
  }

  @media (max-width: 1230px) {
    img {
      width: 550px;
    }
  }

  @media (max-width: 1182px) {
    img {
      width: 500px;
    }
  }

  @media (max-width: 1100px) {
    margin-top: 100px;
  }

  @media (max-width: 1252px) {
    img {
      width: 450px;
    }
  }

  @media (max-width: 1100px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
      margin-left: 0px;
      width: 800px;
    }
  }

  @media (max-width: 1030px) {
    img {
      width: 700px;
    }
  }

  @media (max-width: 801px) {
    img {
      width: 600px;
    }
  }

  @media (max-width: 801px) {
    img {
      width: 500px;
    }
  }

  @media (max-width: 525px) {
    img {
      width: 400px;
    }
  }

  @media (max-width: 425px) {
    img {
      width: 375px;
    }
  }
`;
const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 20px;
  margin-right: 80px;
  margin-left: 80px;
  text-align: center;
  color: white;
  font-family: Comic Sans MS;

  p {
    line-height: 40px;
    font-size: 30px;
  }

  h1 {
    font-family: Comic Sans MS;
    font-size: 40px;
  }

  @media (max-width: 1253px) {
    p {
      line-height: 30px;
      font-size: 20px;
    }
  }

  @media (max-width: 1441px) {
    margin-left: 60px;
  }

  @media (max-width: 1182px) {
    p {
      line-height: 28px;
      font-size: 18px;
      margin-top: 0px;
    }
  }

  @media (max-width: 1100px) {
    margin-left: 80px;
  }
`;

const XO3 = styled.div`
  position: absolute;
  right: 2%;
  top: 585px;

  img {
    width: 200px;
    rotate: 48deg;
  }

  @media (max-width: 1478px) {
    right: 2%;
    top: 600px;

    img {
      width: 180px;
    }
  }

  @media (max-width: 1441px) {
    right: 2%;
    top: 590px;

    img {
      width: 160px;
    }
  }

  @media (max-width: 1441px) {
    right: 2%;
    top: 590px;

    img {
      width: 160px;
    }
  }

  @media (max-width: 1397px) {
    right: 2%;
    top: 120px;

    img {
      width: 160px;
    }
  }

  @media (max-width: 1100px) {
    right: 2%;
    top: 120px;

    img {
      width: 140px;
    }
  }

  @media (max-width: 952px) {
    right: 10%;
    top: 560px;
  }

  @media (max-width: 801px) {
    right: 10%;
    top: 430px;
  }

  @media (max-width: 525px) {
    right: 10%;
    top: 370px;
  }

  @media (max-width: 430px) {
    right: 5%;

    img {
      width: 120px;
    }
  }
`;
