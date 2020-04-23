import React, { useState, useEffect } from "react";
import axios from "axios";
import Movie from "../components/Movies";
import "./Home.css";

interface IMovieFromAPI {
  id: number;
  year: number;
  title: string;
  summary: string;
  medium_cover_image: string;
  genres: Array<string>;
}

let globalPageIndex = 2;
let oldArray = [];

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMoviesFromAPI = async (page?: number) => {
    const result = await axios.get(
      `https://yts.mx/api/v2/list_movies.json?sort_by=rating&page=${page}`
    );
    const moviesFromAPI = result.data.data.movies;

    // console.log(moviesFromAPI);
    if (page !== undefined) {
      // setMovies((prevState) => {
      const newData = movies.concat(...moviesFromAPI);
      // console.log(newData);
      //   return { ...prevState, moviesFromAPI };
      // });
      setMovies(newData);
    } else {
      setMovies(moviesFromAPI);
    }
    setIsLoading(false);
  };

  // componentDidMount
  useEffect(() => {
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

    if (scrollTop + clientHeight >= scrollHeight) {
      console.log("do infinite scroll!");
      // setIsFetching(true);
      getMoviesFromAPI(globalPageIndex++);
    }
  };

  return (
    <section className="container">
      {isLoading ? (
        <div className="loader">
          <span className="loader__text">Loading...</span>
        </div>
      ) : (
        <div className="movies">
          {/* {console.log(movies)} */}
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
    </section>
  );
};

export default Home;
