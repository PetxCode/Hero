import React, { Fragment } from "react";
import styled from "styled-components";
import { FaFacebookSquare, FaInstagram, FaYoutube } from "react-icons/fa";

let date = new Date().getFullYear();
console.log(date);

const Footer = () => {
  return (
    <Fragment>
      <Container>
        <Wrapper>
          <span>About Us</span>

          <Direct1>How it Work</Direct1>
          <Direct2>Testimonia</Direct2>
          <Direct3>Career</Direct3>
          <Direct4>Investor</Direct4>
          <Direct5>Terms of services</Direct5>
        </Wrapper>
        <Wrapper>
          <span>Contact us:</span>

          <Direct1>How it Work</Direct1>
          <Direct2>Testimonia</Direct2>
          <Direct3>Career</Direct3>
          <Direct4>Investor</Direct4>
          <Direct5>Terms of services</Direct5>
        </Wrapper>
        <Wrapper>
          <span>Videos </span>

          <Direct1>How it Work</Direct1>
          <Direct2>Testimonia</Direct2>
          <Direct3>Career</Direct3>
          <Direct4>Investor</Direct4>
          <Direct5>Terms of services</Direct5>
        </Wrapper>
        <Wrapper>
          <span>Social Media</span>

          <Direct1>How it Work</Direct1>
          <Direct2>Testimonia</Direct2>
          <Direct3>Career</Direct3>
          <Direct4>Investor</Direct4>
          <Direct5>Terms of services</Direct5>
        </Wrapper>
      </Container>

      <BottomTab>
        <Tab>
          <Logo src="/video/3.png" />
          <span>
            Developed by CodeLab 🚀 | © {date} All rights reserved 👽{" "}
          </span>
          <SocialLinks>
            <a
              href="https://www.facebook.com/groups/brighterdayscodelab/"
              // rel="noopener noreferrer"
              target="_blank"
            >
              <FaFacebookSquare />
            </a>

            <a
              href="https://www.instagram.com/peter_oti_code/"
              // rel="noopener noreferrer"
              target="_blank"
            >
              <FaInstagram />
            </a>
            <a
              href="https://studio.youtube.com/channel/UCjHVNjp4cfxBfKRbbtUUYAg/videos"
              // rel="noopener noreferrer"
              target="_blank"
            >
              <FaYoutube />
            </a>
          </SocialLinks>
        </Tab>
      </BottomTab>
    </Fragment>
  );
};

export default Footer;

const Tab = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 40px;
`;

const BottomTab = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  background-color: darkblue;
  color: white;
  align-items: center;
  /* padding: 0 15px; */
`;
const SocialLinks = styled.div`
  font-size: 35px;
  height: 100%;
  display: flex;
  align-items: center;
  width: 170px;
  justify-content: space-between;

  a {
    color: white;
  }
`;
const Logo = styled.img`
  width: 150px;
  height: 40px;
  object-fit: contain;
`;

const Direct1 = styled.div`
  margin-top: 20px;
  text-align: left;
  width: 10rem;
  font-weight: normal;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
const Direct2 = styled.div`
  text-align: left;
  width: 10rem;
  margin-top: 10px;
  font-weight: normal;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
const Direct3 = styled.div`
  text-align: left;
  width: 10rem;
  margin-top: 10px;
  font-weight: normal;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
const Direct4 = styled.div`
  text-align: left;
  width: 10rem;
  margin-top: 10px;
  font-weight: normal;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
const Direct5 = styled.div`
  text-align: left;
  width: 10rem;
  margin-top: 10px;
  font-weight: normal;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const Container = styled.div`
  background-color: #040714;
  width: 100%;
  height: 35vh;
  color: white;

  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  align-items: center;
  display: flex;
  font-weight: bold;
  flex-direction: column;

  span {
    margin-top: 20px;
    text-transform: uppercase;
  }
`;
