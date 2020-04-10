import React from "react";
import queryString from "query-string";

const About = ({ location, match }: any) => {
  const query = queryString.parse(location.search);
  console.log(query);

  return (
    <div>
      <h1>About {match.params.name}</h1>
    </div>
  );
};

export default About;
