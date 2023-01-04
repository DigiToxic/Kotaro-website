import React, {useState} from 'react';
import styled from 'styled-components'
import {Link} from 'react-scroll';

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);

  return (
    <Container>
      <Section1>
        <img className='XO4' src="/images/XO.png" alt="" />
        <img className='logo' src="/images/project.png" alt="" />
        <img className='XO5' src="/images/XO.png" alt="" />

        <OpenWrapper>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" color="white" xmlns="http://www.w3.org/2000/svg" onClick={() => setBurgerStatus(true)}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16"/></svg>
        </OpenWrapper>
      </Section1>
        <Section2>
          <Text>
          <Link activeClass="active" to="Body" spy={true} smooth={true}><p className='text1'>About</p></Link>
          <Link activeClass="active" to="Feature" spy={true} smooth={true}><p className='text'>KotaroMap</p></Link>
          <Link activeClass="active" to="Question" spy={true} smooth={true}><p className='text'>FAQ</p></Link>
          <p className='mint'>Mint</p>
          </Text>
          <Image>
            <a href="https://twitter.com/ProjectKotaro" rel="noreferrer" target="_blank"><img className='photo1' src="/images/twitter.png" alt="" /></a>
            <img className='photo2' src="/images/opensea.png" alt="" />
            <img className='photo3' src="/images/etherscan.png" alt="" />
          </Image>
          </Section2>

          <BurgerNav show={burgerStatus}>
            <CloseWrapper>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" height="50px" width="50px" xmlns="http://www.w3.org/2000/svg" onClick={() => setBurgerStatus(false)}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/></svg>
            </CloseWrapper>
              <li><Link to="Body" spy={true} smooth={true} onClick={() => setBurgerStatus(false)}>About</Link></li>
              <li><Link to="Feature" spy={true} smooth={true} onClick={() => setBurgerStatus(false)}>Kotaromap</Link></li>
              <li><Link to="Question" spy={true} smooth={true} onClick={() => setBurgerStatus(false)}>FAQ</Link></li>
              <li>Mint</li>
              <a href="https://twitter.com/ProjectKotaro" rel="noreferrer" target="_blank"><img src="/images/twitter.png" alt=""/></a>
              <img src="/images/opensea.png" alt=""/>
              <img src="/images/etherscan.png" alt=""/>
          </BurgerNav>
    </Container>
  )
}

export default Header

const Container = styled.div`
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  position: relative;
  top: 0;
  right: 0;
  left: 0;

  background-color: rgb(100, 0, 200);
  border-bottom-width: 3px;
  border-bottom-style: solid;
  border-bottom-color: black;
  z-index: 100;

  @media(max-width: 1100px) {
    height: 100px;
  }
`

const Section1 = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;

  @media(max-width: 1100px) {
    justify-content: space-between;
    margin-top: 13px;
  }
`

const Section2 = styled.div`
  display: flex;
  column-gap: 100px;
  align-items: center;
  justify-content: center;
  color: white;

  @media(max-width: 1100px) {
    display: none;
  }
`

const Text = styled.div`
  display: flex;
  column-gap: 100px;
  align-items: center;
  justify-content: space-around;

  p {
    cursor: pointer;
    font-family: Comic Sans MS;
    transition: 0.5s ease-in-out;

    &:hover {
      color: black;
      transition-timing-function: ease-in;
      transition-duration: 0.3s;
    }
  }

  @media(max-width: 1100px) {
    display: none;
  }
`

const Image = styled.div`
  display: flex;
  column-gap: 100px;
  align-items: center;
  justify-content: space-around;
  padding-right: 50px;
  padding-left: 50px;
  border-right: 2px solid rgb(0, 0, 0);
  border-left: 2px solid rgb(0, 0, 0);

  img {
    width: 40px;
    cursor: pointer;
  }
`

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: rgb(204, 153, 255);
  width: 35%;
  z-index: 2;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.3s;
  display: none;

  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, .2);
    font-weight: bold;
  }

  img {
    width: 40px;
    margin-right: 20px;
    margin-top: 40px;
  }


  @media(max-width: 1100px) {
    display: initial;
  }
`

const OpenWrapper = styled.div`
  width: 60px;
  margin-right: 30px;
  display: none;

  @media(max-width: 1100px) {
    display: initial;
  }
`

const CloseWrapper = styled.div`
  display: flex;
  justify-content: end
`