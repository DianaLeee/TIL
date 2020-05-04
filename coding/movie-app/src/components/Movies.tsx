import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MovieContainer = styled.div`
  width: 45%;
  background-color: white;
  margin-bottom: 70px;
  padding: 20px;
  border-radius: 2.5px;
  color: #adaeb9;
  transition: box-shadow 0.25s ease-in;
  box-shadow: 0 1px 11px 0 rgba(0, 0, 0, 0.1);

  @media (max-width: 1024px) {
    flex: 100%;
    max-width: 100%;
  }

  &:hover {
    box-shadow: 0 1px 11px 0 rgba(0, 0, 0, 0.3);
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  text-decoration: none;
  color: inherit;

  @media (max-width: 500px) {
    display: block;
  }
`;

const StyledImg = styled.img`
  position: relative;
  top: -50px;
  max-width: 150px;
  width: 100%;
  margin-right: 30px;
  box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25), 0 18px 36px -18px rgba(0, 0, 0, 1),
    0 -12px 36px -8px rgba(0, 0, 0, 0.025);

  @media (max-width: 500px) {
    display: flex;
    margin: 0 auto;
  }
`;

const MovieDataContainer = styled.div`
  overflow: auto;
`;

const Title = styled.h3`
  margin: 0;
  margin-bottom: 5px;
  color: #4e4e62;
`;

const Year = styled.h5`
  margin: 0;
  margin-right: 10px;
`;

const Summary = styled.p`
  color: #d1d1da;
  font-size: 1.1rem;
`;

const GenresList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  margin: 5px 0px;
  color: #d6d9e1;
`;

const GenreListItem = styled.li`
  margin-right: 10px;
`;

interface IMovie {
  id: number;
  year: number;
  title: string;
  summary: string;
  poster: string;
  genres: Array<string>;
}

const Movie = (movieInfo: IMovie) => {
  return (
    <MovieContainer>
      <StyledLink
        to={{
          pathname: `/detail/${movieInfo.id}`,
          state: {
            id: movieInfo.id,
            year: movieInfo.year,
            title: movieInfo.title,
            summary: movieInfo.summary,
            poster: movieInfo.poster,
            genres: movieInfo.genres,
          },
        }}
      >
        <StyledImg src={movieInfo.poster} alt={movieInfo.title} title={movieInfo.title} />
        <MovieDataContainer>
          <Title>{movieInfo.title}</Title>
          <Year>{movieInfo.year}</Year>
          <GenresList>
            {movieInfo.genres.slice(0, 3).map((genre, idx) => (
              <GenreListItem key={idx}>{genre}</GenreListItem>
            ))}
          </GenresList>
          <Summary>{movieInfo.summary.slice(0, 180)}...</Summary>
        </MovieDataContainer>
      </StyledLink>
    </MovieContainer>
  );
};

export default Movie;
