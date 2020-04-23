import React from "react";
import { Link } from "react-router-dom";
import "./Movie.css";

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
    <div className="movie">
      <Link
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
        <img src={movieInfo.poster} alt={movieInfo.title} title={movieInfo.title} />
        <div className="movie__data">
          <h3 className="movie__title">{movieInfo.title}</h3>
          <h5 className="movie__year">{movieInfo.year}</h5>
          <ul className="movie__genres">
            {movieInfo.genres.slice(0, 3).map((genre, idx) => (
              <li className="genres__genre" key={idx}>
                {genre}
              </li>
            ))}
          </ul>
          <p className="movie__summary">{movieInfo.summary.slice(0, 180)}...</p>
        </div>
      </Link>
    </div>
  );
};

export default Movie;
