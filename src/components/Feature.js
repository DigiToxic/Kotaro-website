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
        <h1>KotaroMap</h1>
        <p>Our efforts have always been centered on four key components: producing amazing art, developing a strong community, assembling a qualified and experienced team, and using these building blocks to enable future growth. By prioritizing these areas, we aim to take Kotaro to the next level and create a sustainable model for long-term success. We really forgot the fourth huh?</p>
      </Text>

    <Picture>
      <Slider className='Overflow1'>
        <Marquee gradient={false} speed={200} className="Marquee">
          <FirstDiv>
            <img src="/images/Carousel/Nonoku1.png" alt="" />
          </FirstDiv>
          <SecondDiv>
            <img src="/images/Carousel/Nonoku2.png" alt="" />
          </SecondDiv>
          <ThirdDiv>
            <img src="/images/Carousel/Nonoku3.png" alt="" />
          </ThirdDiv>
          <ForthDiv>
            <img src="/images/Carousel/Nonoku1.png" alt="" />
          </ForthDiv>
          <FiveDiv>
            <img src="/images/Carousel/Nonoku2.png" alt="" />
          </FiveDiv>
          <SixDiv>
            <img src="/images/Carousel/Nonoku3.png" alt="" />
          </SixDiv>
        </Marquee>
      </Slider>

      <Slider className='Overflow2'>
        <Marquee gradient={false} direction="right" speed={200} className="Marquee">
          <FirstDiv>
            <img src="/images/Carousel/Nonoku4.png" alt="" />
          </FirstDiv>
          <SecondDiv>
            <img src="/images/Carousel/Nonoku5.png" alt="" />
          </SecondDiv>
          <ThirdDiv>
            <img src="/images/Carousel/Nonoku6.png" alt="" />
          </ThirdDiv>
          <ForthDiv>
            <img src="/images/Carousel/Nonoku4.png" alt="" />
          </ForthDiv>
          <FiveDiv>
            <img src="/images/Carousel/Nonoku5.png" alt="" />
          </FiveDiv>
          <SixDiv>
            <img src="/images/Carousel/Nonoku6.png" alt="" />
          </SixDiv>
        </Marquee>
      </Slider>

      <Slider className='Overflow3'>
        <Marquee gradient={false} speed={200} className="Marquee">
          <FirstDiv>
            <img src="/images/Carousel/Nonoku7.png" alt="" />
          </FirstDiv>
          <SecondDiv>
            <img src="/images/Carousel/Nonoku8.png" alt="" />
          </SecondDiv>
          <ThirdDiv>
            <img src="/images/Carousel/Nonoku9.png" alt="" />
          </ThirdDiv>
          <ForthDiv>
            <img src="/images/Carousel/Nonoku7.png" alt="" />
          </ForthDiv>
          <FiveDiv>
            <img src="/images/Carousel/Nonoku8.png" alt="" />
          </FiveDiv>
          <SixDiv>
            <img src="/images/Carousel/Nonoku9.png" alt="" />
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

  @media(max-width: 1100px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 100px;
  margin-right: 100px;
  text-align: center;
  color: white;
  font-family: Comic Sans MS;

  p {
    line-height: 40px;
    font-size: 26px;
  }

  @media(max-width: 1781px) {
    margin-top: 30px;
  }

  @media(max-width: 1682px) {
    margin-top: 80px;

    p {
      line-height: 35px;
      font-size: 26px;
    }
  }

  @media(max-width: 1570px) {
    margin-top: 80px;
  }

  @media(max-width: 1426px) {
    p {
      line-height: 35px;
      font-size: 22px;
    }
  }

  @media(max-width: 1270px) {
    margin-left: 70px;
    margin-right: 70px;
  }

  @media(max-width: 1240px) {
    margin-top: 40px;
  }

  @media(max-width: 1200px) {
    margin-left: 50px;
  }

  @media(max-width: 1100px) {
    margin-top: 10px;
    p {
      line-height: 30px;
      font-size: 20px;
    }
  }
`

const Picture = styled.div`
  margin-right: 40px;
  margin-top: 80px;
  width: 1000px;
  height: 627px;
  border: 10px solid black;
  border-radius: 20px;
  box-shadow: 1px 1px 40px;

  @media(max-width: 1683px) {
    width: 900px;
  }

  @media(max-width: 1571px) {
    width: 800px;
  }

  @media(max-width: 1410px) {
    width: 550px;
    height: 577px;
  }

  @media(max-width: 1100px) {
    border: 0px solid black;
    box-shadow: 0px 0px 0px;
    width: 100%;
    margin-right: 0px;
    margin-top: 40px;
  }
`

const Slider = styled.div`
  margin-right: 40px;
  width: 1000px;

  img {
    width: 153px;
    border-radius: 20px;
  } 

  @media(max-width: 1683px) {
    width: 900px;
  }

  @media(max-width: 1571px) {
    width: 800px;
  }

  @media(max-width: 1410px) {
    width: 550px;
  }

  @media(max-width: 1100px) {
    width: 100%;
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

  @media(max-width: 1390px) {
    left: 50px;
    top: 760px;

    img {
      width: 220px;
    }
  }

  @media(max-width: 1294px) {
    left: 50px;
    top: 790px;
  }

  @media(max-width: 1285px) {
    left: 50px;
    top: 740px;
  }

  @media(max-width: 1280px) {
    left: 50px;
    top: 762px;
  }

  @media(max-width: 1253px) {
    left: 50px;
    top: 648px;
  }

  @media(max-width: 1217px) {
    left: 10px;
    top: 665px;
  }

  @media(max-width: 1182px) {
    left: 10px;
    top: 596px;
  }

  @media(max-width: 1159px) {
    left: 0px;
    top: 630px;

    img {
      width: 200px;
    }
  }

  @media(max-width: 1108px) {
    left: -10px;
    top: 660px;
  }

  @media(max-width: 1100px) {
    top: 890px;
  }

  @media(max-width: 1030px) {
    left: 100px;
    top: 830px;
  }

  @media(max-width: 801px) {
    top: 710px;
  }

  @media(max-width: 701px) {
    left: 20px;
    top: 740px;
  }

  @media(max-width: 630px) {
    top: 760px;
  }

  @media(max-width: 590px) {
    top: 775px;

    img {
      width: 180px;
    }
  }

  @media(max-width: 569px) {
    top: 795px;
  }

  @media(max-width: 526px) {
    left: 8px;
    top: 740px;

    img {
      width: 170px;
    }
  }

  @media(max-width: 498px) {
    top: 770px;
  }

  @media(max-width: 456px) {
    left: -4px;
    top: 780px;

    img {
      width: 150px;
    }
  }

  @media(max-width: 420px) {
    top: 750px;
  }
`