import React, { useState } from "react";

const Login = () => {
  console.log("render");

  //   const [username, setUsetname] = useState("");
  //   const [password, setPassword] = useState("");

  const [userInput, setUserInput] = useState({ username: "", password: "" });
  function handelFormSubmit(event) {
    event.preventDefault();
    setUserInput({ username: "", password: "" });
  }
  return (
    <>
      <h1>Login form</h1>
      <form onSubmit={handelFormSubmit} action="#">
        <label>
          User name
          <input
            type="text"
            value={userInput.username}
            onChange={(e) => {
              setUserInput({ ...userInput, username: e.target.value });
            }}
          />
        </label>

        <label>
          User password
          <input
            type="password"
            value={userInput.password}
            onChange={(e) => {
              setUserInput({ ...userInput, password: e.target.value });
            }}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Login;
