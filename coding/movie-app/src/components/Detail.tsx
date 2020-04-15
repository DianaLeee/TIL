import React, { Component, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";

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
    }
  });

  if (location.state) {
    return <span>{location.state.title}</span>;
  } else {
    return null;
  }
};

export default Detail;
