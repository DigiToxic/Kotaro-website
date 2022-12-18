import React from 'react'
import styled from 'styled-components'
import Marquee from "react-fast-marquee";

function feature() {
  return (
  <Container id='Feature'>
      <XO2>
        <img src="/images/XO.png" alt="" />
      </XO2>

      <Text>
        <h2>Section 2</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. <br />
        <br />
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </Text>

    <Picture>
      <Slider className='Overflow1'>
        <Marquee gradient={false} speed={200} className="Marquee">
          <FirstDiv>
            <img src="/images/Carousel/Nonoku1.png" />
          </FirstDiv>
          <SecondDiv>
            <img src="/images/Carousel/Nonoku2.png" />
          </SecondDiv>
          <ThirdDiv>
            <img src="/images/Carousel/Nonoku3.png" />
          </ThirdDiv>
          <ForthDiv>
            <img src="/images/Carousel/Nonoku1.png" />
          </ForthDiv>
          <FiveDiv>
            <img src="/images/Carousel/Nonoku2.png" />
          </FiveDiv>
          <SixDiv>
            <img src="/images/Carousel/Nonoku3.png" />
          </SixDiv>
        </Marquee>
      </Slider>

      <Slider className='Overflow2'>
        <Marquee gradient={false} direction="right" speed={200} className="Marquee">
          <FirstDiv>
            <img src="/images/Carousel/Nonoku4.png" />
          </FirstDiv>
          <SecondDiv>
            <img src="/images/Carousel/Nonoku5.png" />
          </SecondDiv>
          <ThirdDiv>
            <img src="/images/Carousel/Nonoku6.png" />
          </ThirdDiv>
          <ForthDiv>
            <img src="/images/Carousel/Nonoku4.png" />
          </ForthDiv>
          <FiveDiv>
            <img src="/images/Carousel/Nonoku5.png" />
          </FiveDiv>
          <SixDiv>
            <img src="/images/Carousel/Nonoku6.png" />
          </SixDiv>
        </Marquee>
      </Slider>

      <Slider className='Overflow3'>
        <Marquee gradient={false} speed={200} className="Marquee">
          <FirstDiv>
            <img src="/images/Carousel/Nonoku7.png" />
          </FirstDiv>
          <SecondDiv>
            <img src="/images/Carousel/Nonoku8.png" />
          </SecondDiv>
          <ThirdDiv>
            <img src="/images/Carousel/Nonoku9.png" />
          </ThirdDiv>
          <ForthDiv>
            <img src="/images/Carousel/Nonoku7.png" />
          </ForthDiv>
          <FiveDiv>
            <img src="/images/Carousel/Nonoku8.png" />
          </FiveDiv>
          <SixDiv>
            <img src="/images/Carousel/Nonoku9.png" />
          </SixDiv>
        </Marquee>
      </Slider>
    </Picture>
  </Container>
  )
}

export default feature

const Container = styled.div`
  background-color: rgb(100, 0, 200);
  padding-bottom: 60px;
  display: flex;
  justify-content: space-between;
`

const Text = styled.div`
  margin-left: 100px;
  margin-right: 100px;
  margin-top: 60px;
  text-align: center;
  color: white;
  font-family: Comic Sans MS;

  p {
    line-height: 30px;
    font-size: 20px;
  }
`

const Picture = styled.div`
  margin-right: 40px;
  margin-top: 80px;
  width: 600px;
  height: 627px;
  border: 10px solid black;
  border-radius: 20px;
  box-shadow: 1px 1px 40px;
`

const Slider = styled.div`
  margin-right: 40px;
  width: 600px;

  img {
    width: 153px;
    border-radius: 20px;
  } 
`

const FirstDiv = styled.div`
  margin-left: 60px;
`

const SecondDiv = styled.div`
  margin-left: 60px;
`

const ThirdDiv = styled.div`
  margin-left: 60px;
`

const ForthDiv = styled.div`
  margin-left: 60px;
`

const FiveDiv = styled.div`
  margin-left: 60px;
`

const SixDiv = styled.div`
  margin-left: 60px;
`

const XO2 = styled.div`
  position: absolute;
  left: 50px;
  top: 740px;

    img {
      width: 220px;
      rotate: 5deg;
    }
`