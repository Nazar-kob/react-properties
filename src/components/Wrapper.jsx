import React from "react";

const Wrapper = (props) => {
  return (
    <div>
      <h1>{props.someProps}</h1>
      <div>{props.children[0].props.text}</div>
      <div>{props.children}</div>
    </div>
  );
};

export default Wrapper;
