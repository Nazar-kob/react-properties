import React, { useState, useEffect } from "react";
import Spinner from "./Spinner/Spinner";

const Todo = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return (
    <>
      {data ? (
        <>
          <h3>{data.id}</h3>
          <h3>{data.title}</h3>
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default Todo;
