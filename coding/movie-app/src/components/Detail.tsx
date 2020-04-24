import React, { Component, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import "./Detail.css";
interface IMovie {
  id: number;
  year: number;
  title: string;
  summary: string;
  poster: string;
  genres: Array<string>;
}

const Detail = (props: any) => {
  const { location, history } = props;

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
      <section className="container">
        <div className="detail-infos">
          <div className="detail-info">
            <div className="image__wrapper">
              <img src={movieInfo.poster} />
            </div>
            <div className="text__wrapper">
              <h1>{movieInfo.title}</h1>
              <ul className="detail__genres">
                {movieInfo.genres.map((genre, idx) => (
                  <li>{genre}</li>
                ))}
              </ul>
              <p className="detail__summary">
                <h1>Summary</h1>
                {movieInfo.summary}
              </p>
            </div>
          </div>
        </div>
      </section>
    );

    // <span>{location.state.title}</span>;
  } else {
    return null;
  }
};

export default Detail;
