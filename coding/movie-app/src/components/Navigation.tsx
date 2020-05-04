import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

const activeStyle = {
  color: "#93acff",
};

const Navigation = () => {
  const [isNavClicked, setIsNavClicked] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const handleMediaQueryChange = (mediaQuery: any) => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }

    setIsNavClicked(false);
  };

  const toggleNav = () => {
    setIsNavClicked(!isNavClicked);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1024px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  return (
    <div className="header">
      <div className="header__wrapper">
        {isSmallScreen ? (
          <div>
            <i className="fas fa-bars" onClick={toggleNav} />
            {isNavClicked ? (
              <div className="mobile__header">
                <i className="fas fa-times" onClick={toggleNav}></i>
                <NavLink to="/" activeStyle={activeStyle} exact onClick={toggleNav}>
                  Discover
                </NavLink>
                <NavLink to="/about" activeStyle={activeStyle} onClick={toggleNav}>
                  About
                </NavLink>
              </div>
            ) : (
              ""
            )}
          </div>
        ) : (
          <div className="desktop__header">
            <NavLink to="/" activeStyle={activeStyle} exact>
              Discover
            </NavLink>
            <NavLink to="/about" activeStyle={activeStyle}>
              About
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navigation;
