import React from "react";
import style from "./Post.module.css";
const Post = (props) => {
  const { id, title, userId, body } = props;

  return (
    <div className={style.post}>
      <h2>{id}</h2>
      <h3>{title}</h3>
      <p>{body}</p>
      <h2>{userId}</h2>
    </div>
  );
};

export default Post;
