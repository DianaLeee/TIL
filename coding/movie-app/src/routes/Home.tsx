import React, { useState, useEffect } from "react";
import axios from "axios";
import Movie from "../components/Movies";
import "./Home.css";
import CircularProgress from "@material-ui/core/CircularProgress";
import { withStyles } from "@material-ui/core/styles";
import SortDropdown from "../components/Dropdown";
import styled from "styled-components";

interface IMovieFromAPI {
  id: number;
  year: number;
  title: string;
  summary: string;
  medium_cover_image: string;
  genres: Array<string>;
}

const CustomCircularProgress = withStyles({
  root: {
    color: "#93ACFF",
  },
})(CircularProgress);

const Container = styled.section`
  height: 100%;
  display: flex;
  justify-content: center;
  position: relative;
`;

const ContentsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 90%;
`;

const MoviesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  padding-top: 70px;
  max-width: 1200px;

  @media (max-width: 1024px) {
  }
`;

const PageLoaderWrapper = styled.div`
  z-index: 200;
  margin: 0 auto;
  margin-top: calc(100vh / 2);
`;

const ScrollLoaderWrapper = styled.div`
  z-index: 200;
  position: absolute;
  bottom: calc(100vh / 100);
`;

let globalPageIndex = 2;

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [sortBy, setSortBy] = useState("rating");

  // componentDidMount
  useEffect(() => {
    document.title = "Discover Your Movies!";
    console.log(sortBy);
    getMoviesFromAPI(sortBy);
  });

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const getMoviesFromAPI = async (sortBy: string, page?: number) => {
    let orderBy = "";
    if (sortBy === "title") {
      orderBy = "asc";
    } else if (sortBy === "rating") {
      orderBy = "desc";
    }

    const result = await axios.get(
      `https://yts.mx/api/v2/list_movies.json?sort_by=${sortBy}&page=${page}&order_by=${orderBy}`
    );
    const moviesFromAPI = result.data.data.movies;

    if (page !== undefined) {
      const newData = movies.concat(...moviesFromAPI);
      setMovies(newData);
      setIsFetching(false);
    } else {
      // Initial Data fetching
      setMovies(moviesFromAPI);
      setIsLoading(false);
    }
  };

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight && isFetching === false) {
      setIsFetching(true);
      getMoviesFromAPI(sortBy, globalPageIndex++);
    }
  };

  const handleDropdown = (sort: any) => {
    setSortBy(sort);
    setIsLoading(true);
    getMoviesFromAPI(sort);
  };

  return (
    <Container>
      {isLoading ? (
        <PageLoaderWrapper>
          <CustomCircularProgress />
        </PageLoaderWrapper>
      ) : (
        <ContentsWrapper>
          <SortDropdown
            sortList={["rating", "title"]}
            sortDefault={sortBy}
            onChange={handleDropdown}
          />
          <MoviesWrapper>
            {movies.map((movie: IMovieFromAPI) => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                poster={movie.medium_cover_image}
                summary={movie.summary}
                genres={movie.genres}
              />
            ))}
          </MoviesWrapper>
        </ContentsWrapper>
      )}
      {isFetching ? (
        <ScrollLoaderWrapper>
          <CustomCircularProgress />
        </ScrollLoaderWrapper>
      ) : (
        <></>
      )}
    </Container>
  );
};

export default Home;
