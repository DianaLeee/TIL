import React from "react";
import AboutDev from "../components/AboutDev";
import styled from "styled-components";

const Container = styled.section`
  height: 100%;
  display: flex;
  justify-content: center;
  position: relative;
`;

const AboutInfosWrapper = styled.div`
  max-width: 1200px;
  width: 90%;
  margin-top: 80px;
  padding-top: 35px;

  /* Styles for adding additional about info */
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const About = () => {
  return (
    <Container>
      <AboutInfosWrapper>
        <AboutDev />
        <AboutDev />
      </AboutInfosWrapper>
    </Container>
  );
};

export default About;
