import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-scroll';

function Header() {
  return (
    <Container>
      <Section1>
        <img className='XO4' src="/images/XO.png" alt="" />
        <img className='logo' src="/images/project.png" alt="" />
        <img className='XO5' src="/images/XO.png" alt="" />
      </Section1>
        <Section2>
          <Text>
          <Link activeClass="active" to="Body" spy={true} smooth={true}><p className='text1'>Section 1</p></Link>
          <Link activeClass="active" to="Feature" spy={true} smooth={true}><p className='text'>Section 2</p></Link>
          <Link activeClass="active" to="Question" spy={true} smooth={true}><p className='text'>Section 3</p></Link>
          <p className='mint'>Mint</p>
          </Text>
          <Image>
            <a href="https://twitter.com/ProjectKotaro"><img className='photo1' src="/images/twitter.png" alt="" /></a>
            <img className='photo2' src="/images/opensea.png" alt="" />
            <img className='photo3' src="/images/etherscan.png" alt="" />
          </Image>
          </Section2>
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
`

const Section1 = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
`

const Section2 = styled.div`
  display: flex;
  column-gap: 100px;
  align-items: center;
  justify-content: center;
  color: white;
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