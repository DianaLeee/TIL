import React from "react";
import { Link, Route } from "react-router-dom";
import { Post } from "../pages";

const Posts = ({ match }: any) => {
  return (
    <div>
      <h1>Post List</h1>
      <ul>
        <li>
          <Link to={`${match.url}/1`}>Post #1</Link>
        </li>
        <li>
          <Link to={`${match.url}/2`}>Post #2</Link>
        </li>
        <li>
          <Link to={`${match.url}/3`}>Post #3</Link>
        </li>
        <li>
          <Link to={`${match.url}/4`}>Post #4</Link>
        </li>
      </ul>
      {/* Post id가 주어지지 않는 경우 */}
      <Route exact path={match.url} render={() => <h3>Please select any post</h3>}></Route>
      {/* Post id가 주어진 경우 */}
      <Route path={`${match.url}/:id`} component={Post}></Route>
    </div>
  );
};

export default Posts;
