import React, { useState, useEffect } from "react";
import axios from "axios";
import Movie from "../components/Movies";
import "./Home.css";
import CircularProgress from "@material-ui/core/CircularProgress";
import { lighten, makeStyles, withStyles } from "@material-ui/core/styles";

const CustomCircularProgress = withStyles({
  root: {
    color: "#93ACFF",
  },
})(CircularProgress);

interface IMovieFromAPI {
  id: number;
  year: number;
  title: string;
  summary: string;
  medium_cover_image: string;
  genres: Array<string>;
}

let globalPageIndex = 2;

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  const getMoviesFromAPI = async (page?: number) => {
    const result = await axios.get(
      `https://yts.mx/api/v2/list_movies.json?sort_by=rating&page=${page}`
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

  // componentDidMount
  useEffect(() => {
    document.title = "Discover Your Movies!";
    getMoviesFromAPI();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // remove event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight && isFetching === false) {
      console.log("do infinite scroll!");
      setIsFetching(true);
      getMoviesFromAPI(globalPageIndex++);
    }
  };

  return (
    <section className="container">
      {isLoading ? (
        <div className="loader">
          <CustomCircularProgress />
        </div>
      ) : (
        <div className="movies">
          {movies.map((movie: IMovieFromAPI) => (
            <Movie
              key={movie.id}
              id={movie.id}
              year={movie.year}
              title={movie.title}
              poster={movie.medium_cover_image}
              summary={movie.summary}
              genres={movie.genres}
            ></Movie>
          ))}
        </div>
      )}
      {isFetching ? (
        <div className="circular-loader">
          <CustomCircularProgress />
        </div>
      ) : (
        <></>
      )}
    </section>
  );
};

export default Home;
