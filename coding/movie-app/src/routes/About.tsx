import React from "react";
import "./About.css";
const About = () => {
  return (
    <section className="container">
      <div className="about-infos">
        <div className="about-info">
          <h1>About</h1>
          <p>Made by</p>
          <ul className="developers__list">
            <li>
              <img
                alt=""
                src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/18253305_1922829301264420_536497533313089536_a.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=ggzYdV_vg7gAX8cE1s6&oh=bebc1f3b4795680d237b0d74964a87dd&oe=5EC3D2F0"
              />
              <p className="developer__name">Diana</p>
              <p>Front-end Developer</p>
              <p>yeonylee94@gmail.com</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
