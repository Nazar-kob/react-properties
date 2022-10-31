import React, { useState } from "react";

const Login = () => {
  console.log("render");

  const [username, setUsetname] = useState("");
  const [password, setPassword] = useState("");

  function handelFormSubmit(event) {
    event.preventDefault();
    const user = {
      username: username,
      password: password,
    };
    setUsetname("");
    setPassword("");
  }
  return (
    <>
      <h1>Login form</h1>
      <form onSubmit={handelFormSubmit} action="#">
        <label>
          User name
          <input
            type="text"
            value={username}
            onChange={(e) => {
              setUsetname(e.target.value);
            }}
          />
        </label>

        <label>
          User password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Login;
