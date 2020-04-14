import React from "react";
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
      <img src={movieInfo.poster} alt={movieInfo.title} title={movieInfo.title} />
      <div className="movie__data">
        <h3 className="movie__title">{movieInfo.title}</h3>
        <h5 className="movie__year">{movieInfo.year}</h5>
        <ul className="movie__genres">
          {movieInfo.genres.map((genre, idx) => (
            <li className="genres__genre" key={idx}>
              {genre}
            </li>
          ))}
        </ul>
        <p className="movie__summary">{movieInfo.summary.slice(0, 180)}...</p>
      </div>
    </div>
  );
};

export default Movie;
