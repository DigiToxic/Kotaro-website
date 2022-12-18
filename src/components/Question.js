import React, {useState} from 'react';
import styled from 'styled-components'

function Question() {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const [isVisible4, setIsVisible4] = useState(false);
  const [isVisible5, setIsVisible5] = useState(false);
  const [isVisible6, setIsVisible6] = useState(false);
  const [isVisible7, setIsVisible7] = useState(false);
  
  const [rotation, setRotation] = useState(0);
  const [rotation2, setRotation2] = useState(0);
  const [rotation3, setRotation3] = useState(0);
  const [rotation4, setRotation4] = useState(0);
  const [rotation5, setRotation5] = useState(0);
  const [rotation6, setRotation6] = useState(0);
  const [rotation7, setRotation7] = useState(0);


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

  const handleClick7 = () => {
    setRotation7(rotation7 + 180);
  };

  return (
    <Container id='Question'>
      <h2>Frequently Asked Questions</h2>

      <XO>
        <img src="/images/XO.png" alt="" />
      </XO>

      <Box>
        <Answer>
          <p>Q: What is Lorem Ipsum?</p>

          <Arrow rotation={rotation} onClick={handleClick}>
            <img src="/images/arrow.png" onClick={() => setIsVisible(!isVisible)}/>
          </Arrow>
        </Answer>
        <BurgerNav isVisible={isVisible}>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </BurgerNav>
      </Box>

      <Box>
        <Answer2>
          <p>Q: What is Lorem Ipsum?</p>
          <Arrow rotation={rotation2} onClick={handleClick2}>
            <img src="/images/arrow.png" onClick={() => setIsVisible2(!isVisible2)}/>
          </Arrow>
        </Answer2>
        <BurgerNav isVisible={isVisible2}>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </BurgerNav>
      </Box>

      <Box>
        <Answer2>
          <p>Q: What is Lorem Ipsum?</p>
          <Arrow rotation={rotation3} onClick={handleClick3}>
            <img src="/images/arrow.png" onClick={() => setIsVisible3(!isVisible3)}/>
          </Arrow>
        </Answer2>
        <BurgerNav isVisible={isVisible3}>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </BurgerNav>
      </Box>

      <Box>
        <Answer2>
          <p>Q: What is Lorem Ipsum?</p>
          <Arrow rotation={rotation4} onClick={handleClick4}>
            <img src="/images/arrow.png"  onClick={() => setIsVisible4(!isVisible4)}/>
          </Arrow>
        </Answer2>
        <BurgerNav isVisible={isVisible4}>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </BurgerNav>
      </Box>

      <Box>
      <Answer2>
        <p>Q: What is Lorem Ipsum?</p>
          <Arrow rotation={rotation5} onClick={handleClick5}>
            <img src="/images/arrow.png"  onClick={() => setIsVisible5(!isVisible5)}/>
          </Arrow>
      </Answer2>
        <BurgerNav isVisible={isVisible5}>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </BurgerNav>
      </Box>

      <Box>
      <Answer2>
        <p>Q: What is Lorem Ipsum?</p>
        <Arrow rotation={rotation6} onClick={handleClick6}>
          <img src="/images/arrow.png"  onClick={() => setIsVisible6(!isVisible6)}/>
        </Arrow>
      </Answer2>
        <BurgerNav isVisible={isVisible6}>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </BurgerNav>
      </Box>

      <Box2>
      <Answer3>
        <p>Q: What is Lorem Ipsum?</p>
        <Arrow rotation={rotation7} onClick={handleClick7}>
          <img src="/images/arrow.png"  onClick={() => setIsVisible7(!isVisible7)}/>
        </Arrow>
      </Answer3>
        <BurgerNav2 isVisible={isVisible7}>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </BurgerNav2>
      </Box2>
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
    text-align: center;
    width: 200px;
  }
`
const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Box2 = styled(Box)`
  border-bottom: 2px solid rgb(0, 0, 0);
  margin-right: 130px;
  margin-left: 130px;
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

const XO = styled.div`
  position: absolute;
  right: 150px;
  top: 1530px;

    img {
      width: 200px;
      rotate: 50deg;
    }
`


const BurgerNav = styled.div`
  margin-right: 100px;
  margin-left: 120px;
  ${props => props.isVisible ? '' : 'display: none;'};

  p {
    font-family: Comic Sans MS;
    font-size: 15px;
  }
`

const BurgerNav2 = styled.div`
  margin-left: 20px;
  ${props => props.isVisible ? '' : 'display: none;'};

  p {
    font-family: Comic Sans MS;
    font-size: 15px;
  }
`