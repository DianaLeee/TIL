import React from "react";
import "./Dropdown.css";

interface IMovie {
  id: number;
  year: number;
  title: string;
  summary: string;
  poster: string;
  genres: Array<string>;
}

const Dropdown = () => {
  return (
    <div className="movie">
      <select>
        <option value="rating">Rating</option>
        <option value="title">Title</option>
      </select>
    </div>
  );
};

export default Dropdown;
