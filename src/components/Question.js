import React, { useState } from 'react';
import styled from 'styled-components'

function Question() {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const [isVisible4, setIsVisible4] = useState(false);
  const [isVisible5, setIsVisible5] = useState(false);
  const [isVisible6, setIsVisible6] = useState(false);
  
  const [rotation, setRotation] = useState(0);
  const [rotation2, setRotation2] = useState(0);
  const [rotation3, setRotation3] = useState(0);
  const [rotation4, setRotation4] = useState(0);
  const [rotation5, setRotation5] = useState(0);
  const [rotation6, setRotation6] = useState(0);

  const handleClick = () => {
    setRotation(rotation + 180)
  };

  const handleClick2 = () => {
    setRotation2(rotation2 + 180);
  };

  const handleClick3 = () => {
    setRotation3(rotation3 + 180);
  };

  const handleClick4 = () => {
    setRotation4(rotation4 + 180);
  };

  const handleClick5 = () => {
    setRotation5(rotation5 + 180);
  };

  const handleClick6 = () => {
    setRotation6(rotation6 + 180);
  };

  return (
    <Container id='Question'>
      <h2>Frequently Asked Questions</h2>

      <XO>
        <img src="/images/XO.png" alt="" />
      </XO>

      <div rotation={rotation} onClick={handleClick}>
      <Box onClick={() => setIsVisible(!isVisible)}>
        <Answer>
          <p>1- Who are we?</p>
          <Arrow rotation={rotation} onClick={handleClick}>
            <img src="/images/arrow.png" alt="" onClick={() => setIsVisible(!isVisible)}/>
          </Arrow>
        </Answer>
        <BurgerNav isVisible={isVisible}>
            <p>Ledding by a team of blockchain enthusiasts and collectors that have experience in fields like business management, design, and software development.</p>
        </BurgerNav>
      </Box>
      </div>

      <div rotation={rotation2} onClick={handleClick2}>
      <Box onClick={() => setIsVisible2(!isVisible2)} rotation={rotation2}>
        <Answer2>
          <p>2- Utility? </p>
          <Arrow rotation={rotation2} onClick={handleClick2}>
            <img src="/images/arrow.png" alt="" onClick={() => setIsVisible2(!isVisible2)}/>
          </Arrow>
        </Answer2>
          <BurgerNav3 isVisible={isVisible2}>
              <p>Utility is a mysterious force that drives our actions, yet it remains hidden from view. We can only trust our instincts and make our best guesses. Even the most carefully planned actions can be upended by the unpredictable nature of utility. Only time will tell!</p>
          </BurgerNav3>
      </Box>
      </div>

      <div rotation={rotation3} onClick={handleClick3}>
      <Box onClick={() => setIsVisible3(!isVisible3)}>
        <Answer2>
          <p>3- How do I get on the allowlist?</p>
          <Arrow rotation={rotation3} onClick={handleClick3}>
            <img src="/images/arrow.png" alt="" onClick={() => setIsVisible3(!isVisible3)}/>
          </Arrow>
        </Answer2>
        <BurgerNav4 isVisible={isVisible3}>
            <p>Join our community by registering for our <a href="https://www.premint.xyz/home/" rel="noreferrer" target="_blank">premint</a> or engaging with our tweets, and become a part of our mission to shape the future of NFT.</p>
        </BurgerNav4>
      </Box>
      </div>

      <div rotation={rotation4} onClick={handleClick4}>
      <Box onClick={() => setIsVisible4(!isVisible4)}>
        <Answer2>
          <p>4- What is the total supply?</p>
          <Arrow rotation={rotation4} onClick={handleClick4}>
            <img src="/images/arrow.png" alt="" onClick={() => setIsVisible4(!isVisible4)}/>
          </Arrow>
        </Answer2>
        <BurgerNav5 isVisible={isVisible4}>
          <p>Kotaro's total supply is limited to 6,000 NFTs.</p>
        </BurgerNav5>
      </Box>
      </div>

      <div rotation={rotation5} onClick={handleClick5}>
      <Box onClick={() => setIsVisible5(!isVisible5)}>
        <Answer2>
          <p>5- What is the mint price for one Kotaro and When can I mint?</p>
          <Arrow rotation={rotation5} onClick={handleClick5}>
            <img src="/images/arrow.png" alt="" onClick={() => setIsVisible5(!isVisible5)}/>
          </Arrow>
        </Answer2>
        <BurgerNav6 isVisible={isVisible5}>
          <p>We will be sharing all the exciting details with you in the near future. Stay tune for updates on our latest updates by following us on <a href="https://twitter.com/ProjectKotaro" rel="noreferrer" target="_blank">Twitter.</a></p>
        </BurgerNav6>
      </Box>
      </div>

      <div rotation={rotation6} onClick={handleClick6}>
      <Box2 onClick={() => setIsVisible6(!isVisible6)}>
      <Answer3>
        <p>6- How do I collab with you?</p>
        <Arrow rotation={rotation6} onClick={handleClick6}>
          <img src="/images/arrow.png" alt="" onClick={() => setIsVisible6(!isVisible6)}/>
        </Arrow>
      </Answer3>
        <BurgerNav2 isVisible={isVisible6}>
            <p>Fill out this <a href="https://www.google.com/" rel="noreferrer" target="_blank">collab form</a> or DM us on twitter and we will get in touch with you!</p>
        </BurgerNav2>
      </Box2>
      </div>
    </Container>
  )
}

export default Question

const Container = styled.div`
  background-color: rgb(178, 102, 255);
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;

  h2 {
    margin-top: 40px;
    margin-bottom: 30px;
  }
`
const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

const Box2 = styled(Box)`
  border-bottom: 2px solid rgb(0, 0, 0);
`

const Answer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  padding-left: 20px;
  border-top: 2px solid rgb(0, 0, 0);
  width: 1300px;

  p {
    font-family: Comic Sans MS;
    font-size: 22px;
  }

  @media(max-width: 1420px) {
    width: 1200px;
  }

  @media(max-width: 1330px) {
    width: 1000px;
  }

  @media(max-width: 1125px) {
    width: 800px;
  }

  @media(max-width: 920px) {
    width: 700px;
  }

  @media(max-width: 790px) {
    width: 600px;
  }

  @media(max-width: 655px) {
    width: 500px;
  }

  @media(max-width: 525px) {
    width: 400px;
  }

  @media(max-width: 430px) {
    width: 300px;
  }
`

const Answer2 = styled(Answer)`
  border-bottom: 0px solid rgb(0, 0, 0);
  margin-top: 0px;
`

const Answer3 = styled(Answer)`
`

const Arrow = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-right: 20px;
  transform: rotate(${props => props.rotation}deg);
  transition: .3s;

  img {
    width: 50px;
  }
`

const BurgerNav = styled.div`
  height: ${props => (props.isVisible ? "100px": 0)};
  transition: height 0.3s ease-in-out;
  overflow: hidden;
  margin-right: 80px;

  p {
    font-family: Comic Sans MS;
    font-size: 17px;
  }

  @media(max-width: 1421px) {
    margin-right: 80px;
    width: 1100px;
  }

  @media(max-width: 1330px) {
    margin-right: 30px;
    width: 950px;
  }

  @media(max-width: 1125px) {
    margin-right: 30px;
    width: 750px;
  }

  @media(max-width: 920px) {
    margin-right: 30px;
    width: 650px;
  }

  @media(max-width: 790px) {
    margin-right: 30px;
    width: 550px;
  }

  @media(max-width: 655px) {
    margin-right: 30px;
    width: 450px;
  }

  @media(max-width: 525px) {
    margin-right: 30px;
    width: 350px;
    height: ${props => (props.isVisible ? "110px": 0)};
  }

  @media(max-width: 430px) {
    height: ${props => (props.isVisible ? "160px": 0)};
    margin-right: 30px;
    width: 250px;
    p {
      margin-top: 0px;
    }
  }
`

const BurgerNav2 = styled.div`
  margin-right: 670px;
  height: ${props => (props.isVisible ? "100px": 0)};
  transition: height 0.3s ease-in-out;
  overflow: hidden;

  p {
    font-family: Comic Sans MS;
    font-size: 17px;
  }

  @media(max-width: 1420px) {
    margin-right: 570px;
  }

  @media(max-width: 1330px) {
    margin-right: 30px;
    width: 950px;
  }

  @media(max-width: 1125px) {
    margin-right: 30px;
    width: 750px;
  }

  @media(max-width: 920px) {
    width: 650px;
  }

  @media(max-width: 790px) {
    width: 550px;
  }

  @media(max-width: 655px) {
    width: 450px;;
  }

  @media(max-width: 525px) {
    width: 350px;
  }

  @media(max-width: 430px) {
    width: 250px;
    p {
      margin-top: 0px;
    }
  }
`

const BurgerNav3 = styled.div`
  height: ${props => (props.isVisible ? "100px": 0)};
  transition: height 0.3s ease-in-out;
  overflow: hidden;
  margin-right: 80px;
  width: 1200px;

  p {
    font-family: Comic Sans MS;
    font-size: 17px;
  }

  @media(max-width: 1420px) {
    width: 1100px;
  }

  @media(max-width: 1330px) {
    margin-right: 30px;
    width: 950px;
  }

  @media(max-width: 1125px) {
    margin-right: 30px;
    width: 750px;
  }

  @media(max-width: 920px) {
    width: 650px;
    height: ${props => (props.isVisible ? "120px": 0)};
  }

  @media(max-width: 790px) {
    width: 550px;
    height: ${props => (props.isVisible ? "120px": 0)};
  }

  @media(max-width: 655px) {
    width: 450px;
    height: ${props => (props.isVisible ? "140px": 0)};
  }

  @media(max-width: 525px) {
    width: 350px;
    height: ${props => (props.isVisible ? "190px": 0)};
  }

  @media(max-width: 430px) {
    width: 250px;
    height: ${props => (props.isVisible ? "230px": 0)};
    p {
      margin-top: 0px;
    }
  }
`

const BurgerNav4 = styled.div`
  margin-right: 160px;
  height: ${props => (props.isVisible ? "100px": 0)};
  transition: height 0.3s ease-in-out;
  overflow: hidden;

  p {
    font-family: Comic Sans MS;
    font-size: 17px;
  }

  @media(max-width: 1421px) {
    margin-right: 60px;
  }

  @media(max-width: 1330px) {
    margin-right: 30px;
    width: 950px;
  }

  @media(max-width: 1125px) {
    width: 750px;
  }

  @media(max-width: 921px) {
    width: 650px;
  }

  @media(max-width: 790px) {
    width: 550px;
  }

  @media(max-width: 655px) {
    width: 450px;
  }

  @media(max-width: 525px) {
    width: 350px;
    height: ${props => (props.isVisible ? "120px": 0)};
  }

  @media(max-width: 430px) {
    width: 250px;
    height: ${props => (props.isVisible ? "140px": 0)};
    p {
      margin-top: 0px;
    }
  }
`

const BurgerNav5 = styled.div`
  margin-right: 910px;
  height: ${props => (props.isVisible ? "100px": 0)};
  transition: height 0.3s ease-in-out;
  overflow: hidden;

  p {
    font-family: Comic Sans MS;
    font-size: 17px;
  }

  @media(max-width: 1421px) {
    margin-right: 810px;
  }

  @media(max-width: 1330px) {
    margin-right: 610px;
  }

  @media(max-width: 1125px) {
    margin-right: 410px;
  }

  @media(max-width: 920px) {
    margin-right: 310px;
  }

  @media(max-width: 790px) {
    margin-right: 210px;
  }

  @media(max-width: 655px) {
    margin-right: 110px;
  }

  @media(max-width: 525px) {
    margin-right: 10px;
  }

  @media(max-width: 430px) {
    width: 275px;
    margin-right: 10px;
    p {
      margin-top: 0px;
    }
  }
`
const BurgerNav6 = styled.div`
  margin-right: 170px;
  height: ${props => (props.isVisible ? "100px": 0)};
  transition: height 0.3s ease-in-out;
  overflow: hidden;

  p {
    font-family: Comic Sans MS;
    font-size: 17px;
  }

  @media(max-width: 1421px) {
    margin-right: 70px;
  }
  
  @media(max-width: 1330px) {
    margin-right: 40px;
    width: 950px;
  }

  @media(max-width: 1150px) {
    margin-right: 40px;
  }

  @media(max-width: 1125px) {
    width: 750px;
  }

  @media(max-width: 920px) {
    width: 650px;
  }

  @media(max-width: 790px) {
    width: 550px;
  }

  @media(max-width: 655px) {
    width: 450px;
  }

  @media(max-width: 525px) {
    width: 350px;
    height: ${props => (props.isVisible ? "120px": 0)};
  }

  @media(max-width: 430px) {
    width: 250px;
    height: ${props => (props.isVisible ? "140px": 0)};
    p {
      margin-top: 0px;
    }
  }
`

const XO = styled.div`
  position: absolute;
  right: 150px;
  top: 1530px;

  img {
    width: 200px;
    rotate: 50deg;
  }

  @media(max-width: 1410px) {
    top: 1490px;
  }

  @media(max-width: 1390px) {
    top: 1470px;
  }

  @media(max-width: 1335px) {
    top: 1440px;
  }
  
  @media(max-width: 1284px) {
    top: 1410px;
  }

  @media(max-width: 1253px) {
    top: 1285px;
  }

  @media(max-width: 1100px) {
    right: 5%;
    top: 1840px;
  }

  @media(max-width: 1030px) {
    top: 1800px;
  }

  @media(max-width: 850px) {
    top: 1830px;
  }

  @media(max-width: 800px) {
    top: 1710px;
  }

  @media(max-width: 796px) {
    top: 1730px;
  }

  @media(max-width: 732px) {
    top: 1760px;
  }

  @media(max-width: 680px) {
    top: 1780px;

    img {
      width: 170px;
    }
  }

  @media(max-width: 655px) {
    top: 1810px;
  }

  @media(max-width: 648px) {
    top: 1840px;
  }


  @media(max-width: 600px) {
    right: 6%;
    top: 1850px;

    img {
      width: 140px;
    }
  }

  @media(max-width: 592px) {
    top: 1880px;
  }

  @media(max-width: 569px) {
    top: 1910px;
  }

  @media(max-width: 536px) {
    top: 1940px;
  }

  @media(max-width: 526px) {
    top: 1880px;
  }

  @media(max-width: 508px) {
    right: 4%;
    top: 1900px;
  }

  @media(max-width: 498px) {
    right: 3%;
    top: 1930px;

    img {
      width: 120px;
    }
  }

  @media(max-width: 460px) {
    top: 1970px;
  }

  @media(max-width: 440px) {
    top: 2020px;
  }

  @media(max-width: 420px) {
    top: 1970px;
  }
`