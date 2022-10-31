import React, { useState, useEffect } from "react";
import Post from "./Post";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json))
      .catch((error) => console.log(error.message));
  }, []);

  const postComponent = posts.map((post) => {
    return <Post key={post.id} {...post} />;
  });

  return <div>{postComponent}</div>;
};

export default Posts;
