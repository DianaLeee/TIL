import React from "react";
import styled from "styled-components";

const AboutInfoWrapper = styled.div`
  width: 100%;
  background-color: #ffffff;
  color: #adaeb9;
  box-shadow: 0 1px 11px 0 rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 50px;
  text-align: center;
`;

const Title = styled.h1`
  color: #555555;
  font-size: 1.5rem;
`;

const StrongParagraph = styled.p`
  margin: 10px 0px;
  color: #555555;
  font-size: 1.2rem;
`;
const NormalParagraph = styled.p`
  margin: 0;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;

  /* Style for Adding other developers in list */
  display: flex;
  justify-content: space-around;
`;

const ListItem = styled.li`
  margin: 0;
  padding: 0;
  border: 0;
  float: left;
`;

const RoundImg = styled.img`
  border-radius: 50%;
  width: 125px;
`;

const AboutDev = () => {
  return (
    <AboutInfoWrapper>
      <Title>About</Title>
      <NormalParagraph>Made by</NormalParagraph>
      <List>
        <ListItem>
          <RoundImg
            alt=""
            src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/18253305_1922829301264420_536497533313089536_a.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=ggzYdV_vg7gAX8cE1s6&oh=bebc1f3b4795680d237b0d74964a87dd&oe=5EC3D2F0"
          />
          <StrongParagraph>Diana</StrongParagraph>
          <NormalParagraph>Front-end Developer</NormalParagraph>
          <NormalParagraph>yeonylee94@gmail.com</NormalParagraph>
        </ListItem>
      </List>
    </AboutInfoWrapper>
  );
};

export default AboutDev;
