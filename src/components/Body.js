import React from 'react'
import styled from 'styled-components'

function body() {
  return (
    <Container id='Body'>
        <img className='MainPfp' src="/images/Kotaro.jpg" alt="" />
      <XO3>
        <img src="/images/XO.png" alt="" />
      </XO3>

      <Text>
        <h2>Section 1</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </Text>
    </Container>
  )
}

export default body

const Container = styled.div`
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
`
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
    line-height: 30px;
    font-size: 20px;
  }

  h2 {
    font-family: Comic Sans MS;
    font-size: 30px;
  }
`

const XO3 = styled.div`
  position: absolute;
  right: 20px;
  top: 565px;

    img {
      width: 200px;
      rotate: 48deg;
    }
`