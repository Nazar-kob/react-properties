import React from "react";
import "./Post.css";

const Post = (props) => {
  const { id, title, userId, body } = props;

  return (
    <div className="post">
      <h2>{id}</h2>
      <h3>{title}</h3>
      <p>{body}</p>
      <h2>{userId}</h2>
    </div>
  );
};

export default Post;
