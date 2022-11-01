import React, { useState, useEffect } from "react";
import Post from "./Post";
import Spinner from "./Spinner/Spinner";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json))
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));
  }, []);

  if (error) {
    return <h1>{error}</h1>;
  }

  const postComponent = posts.map((post) => {
    return <Post key={post.id} {...post} />;
  });

  return (
    <>
      <h1>Posts</h1>
      {isLoading ? <Spinner /> : postComponent}
    </>
  );
};

export default Posts;
