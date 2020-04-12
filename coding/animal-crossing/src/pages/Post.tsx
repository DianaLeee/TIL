import React from "react";

const Post = ({ match }: any) => {
  return <div>Post {match.params.id} </div>;
};

export default Post;
