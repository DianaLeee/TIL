import React, { useEffect } from "react";
import styled from "styled-components";

interface IMovie {
  id: number;
  year: number;
  title: string;
  summary: string;
  poster: string;
  genres: Array<string>;
}

const Container = styled.section`
  height: 100%;
  display: flex;
  justify-content: center;
  position: relative;
`;

const ContentsWrapper = styled.div`
  max-width: 1200px;
  width: 90%;
  margin-top: 80px;
  padding-top: 35px;
`;

const DetailWrapper = styled.div`
  background-color: #ffffff;
  color: #adaeb9;
  box-shadow: 0 1px 11px 0 rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 50px;

  display: flex;
  justify-content: space-between;
  padding: 20px;

  @media (max-width: 425px) {
    flex-wrap: wrap;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  margin-left: 1.5rem;

  h1 {
    color: #000000;
  }

  @media (max-width: 768px) {
  }

  @media (max-width: 425px) {
    margin-left: 0;
  }
`;

const StrongHeader = styled.h1`
  font-size: 1.5rem;
  margin: 0;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const NormalHeader = styled.h1`
  font-size: 1.1rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 10px 0;
`;

const ListItem = styled.li`
  display: inline;
  font-weight: 100;

  &:not(:last-child)::after {
    content: " / ";
  }
`;

const ImgWrapper = styled.div`
  @media (max-width: 425px) {
    margin: 0 auto;
  }
`;

const StyledImg = styled.img`
  @media (max-width: 768px) {
    width: 200px;
  }
`;

const Detail = (props: any) => {
  const { location } = props;

  useEffect(() => {
    const { location, history } = props;

    if (location.state === undefined) {
      history.push("/");
    } else {
      document.title = location.state.title;
    }
  });

  if (location.state) {
    const movieInfo: IMovie = location.state;

    return (
      <Container>
        <ContentsWrapper>
          <DetailWrapper>
            <ImgWrapper>
              <StyledImg src={movieInfo.poster} />
            </ImgWrapper>
            <TextWrapper>
              <StrongHeader>{movieInfo.title}</StrongHeader>
              <List className="detail__genres">
                {movieInfo.genres.map((genre, idx) => (
                  <ListItem>{genre}</ListItem>
                ))}
              </List>
              <p className="detail__summary">
                <NormalHeader>Summary</NormalHeader>
                {movieInfo.summary}
              </p>
            </TextWrapper>
          </DetailWrapper>
        </ContentsWrapper>
      </Container>
    );
  } else {
    return null;
  }
};

export default Detail;
