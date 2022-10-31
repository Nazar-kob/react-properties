import React, { useState, useEffect } from "react";

const Todo = () => {
  const [data, setData] = useState(null);
  console.log("render todo");
  console.log(data);

  useEffect(() => {
    console.log("render use efect");

    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return <div></div>;
};

export default Todo;
