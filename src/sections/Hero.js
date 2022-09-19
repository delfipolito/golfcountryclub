import React from 'react'
import Navbar from './Navbar'
import styled from 'styled-components'
import pattern from '../assets/pattern.png'
import trustless from '../assets/trustless-v.png'
import noncustodial from '../assets/noncustodial-v.png'
import transparent from '../assets/transparent-v.png'

const Hero = () => (
  <HeroSection>
    <Navbar />
    <Container>
      <h1>
        Achieve your DeFi goals in a <span> smarter, more efficient </span> way
      </h1>
      <h2>
        Our Smart Vaults help you grow your business by transforming manual work into
         automated actions.
      </h2>
      <Icons>
        <Box>
          <img src={noncustodial} alt="trustless and non-custodial" />
          <p>Trustless & non-custodial</p>
        </Box>
        <Box>
          <img src={trustless} alt="non-custodial" />
          <p>Flexible and customizable</p>
        </Box>
        <Box>
          <img src={transparent} alt="transparent and easy to follow up" />
          <p>Transparent and easy to follow up</p>
        </Box>
      </Icons>
    </Container>
  </HeroSection>
)

const HeroSection = styled.section`
  background: #2a1d68;
  margin: auto;
  color: white;
  text-align: center;
  padding: 45px 0 0px 0;
  background: url(${pattern});
  height: 100vh;
  max-height: 1000px;
  @media only screen and (max-width: 390px) {
    padding: 15px 0 0px 0;
  }
`

const Container = styled.div`
  padding: 104px 104px 0 104px;
  max-width: 874px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media only screen and (max-width: 390px) {
    padding: 40px 20px 0 20px;
  }
  @media only screen and (min-width: 391px) and (max-width: 7000px) {
    padding: 100px 40px 0 40px;
  }
  /* @media only screen and (min-width: 2000px) {
    margin: auto;
  } */
  text-align: left;
  h1 {
    font-family: "Poppins-Bold";
    font-weight: bold;
    font-size: 80px;
    line-height: 95px;
    margin: 15px 0px 0px 0px;
    @media only screen and (max-width: 700px) {
      font-size: 43px;
      line-height: 44px;
      white-space: break-spaces;
      margin: 0px 0px;
    }
    letter-spacing: 1.33075px;
    color: #fcfcfc;
    span {
      color: #c072ff;
    }
  }
  h2 {
    font-family: "Poppins-SemiBold";
    font-style: normal;
    width: 560px;
    max-width: 85vw;
    font-weight: 600;
    font-size: 25px;
    line-height: 32px;
    @media only screen and (max-width: 700px) {
      font-size: 17px;
      line-height: 28px;
    }
    letter-spacing: 0.75px;
    color: #D0D0D0;
  }
`

const Icons = styled.div`
  display: flex;
  @media only screen and (max-width: 700px) {
    display: flex;
    width: 100%;
    justify-content: space-between
  }
  margin-top: 100px;
`

const Box = styled.div`
  text-align: center;
  padding: 0 60px 0 0;
  img {
    height: 58px;

  }
  @media only screen and (max-width: 700px) {
    padding: 0 20px 0 0;
    img {
      height: 58px;
    }
  }

  p {
    font-family: "Poppins-Medium";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 32px;
    text-align: center;
    letter-spacing: 0.75px;
    color: #fcfcfc;
    max-width: 194px;
    text-align: center;
    margin: 24px auto;
    @media only screen and (max-width: 700px) {
      font-family: "Poppins";
      font-size: 15px;
      line-height: 20px;
      letter-spacing: 0.75px;
      max-width: 146px;
    }
  }
`

export default Hero
