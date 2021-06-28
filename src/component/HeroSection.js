import React from "react";
import styled from "styled-components";

const HeroSection = () => {
  return (
    <Container>
      <Hero
        src="/video/video11.mp4"
        type="video/mp4"
        autoPlay={true}
        loop={true}
        muted
      />
      <Wrapper>
        <Info>Know us Better </Info>
        <Info1>The loop attribute is a boolean attribute.</Info1>
        <ButtonContainer>
          <Button1>Sign Up</Button1>
          <Button2>Know More</Button2>
        </ButtonContainer>
      </Wrapper>
    </Container>
  );
};

export default HeroSection;

const Hero = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;

const Container = styled.div`
  height: 80vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-direction: column;
`;

const Wrapper = styled.div`
  position: absolute;
  color: white;
`;

const Info = styled.div`
  color: white;
  font-size: 55px;
  font-weight: bold;
  padding-bottom: 0px;
  margin-bottom: 0px;
  /* background-color: #f69928; */
`;
const Info1 = styled.p`
  color: white;
  padding-top: 0px;
  margin-top: 0px;
  font-size: 22px;
  letter-spacing: 0.3px;
`;

const ButtonContainer = styled.div`
  color: white;
  padding-top: 0px;
  margin-top: 0px;
  display: flex;
  width: 25rem;
  justify-content: space-between;
`;

const Button1 = styled.div`
  color: white;
  width: 12rem;
  background-color: #f69928;
  height: 45px;
  justify-content: center;
  align-items: center;
  display: flex;
  border-radius: 5px;
  text-transform: uppercase;
  font-weight: bold;
  transition: all 350ms;

  &:hover {
    cursor: pointer;
    background-color: lavender;
    color: black;
  }
`;

const Button2 = styled.div`
  color: black;
  width: 12rem;
  background-color: lavender;
  height: 45px;
  justify-content: center;
  align-items: center;
  display: flex;
  border-radius: 5px;
  text-transform: uppercase;
  font-weight: bold;
  transition: all 350ms;

  &:hover {
    cursor: pointer;
    background-color: #f69928;
    color: white;
  }
`;
