import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navigation.css";

const activeStyle = {
  background: "linear-gradient(to left, rgba(0,0,0,0) 85%, #02e3f717 97%, #02e4f7)",
  color: "#555555",
};
const Navigation = () => {
  return (
    <div className="nav">
      <NavLink to="/" activeStyle={activeStyle} exact>
        <i className="far fa-eye"></i>
        Discover
      </NavLink>
      <NavLink to="/about" activeStyle={activeStyle}>
        <i className="fas fa-users"></i>
        About
      </NavLink>
    </div>
  );
};

export default Navigation;
