import React, { useState } from "react";

const Login = () => {
  //   const [username, setUsetname] = useState("");
  //   const [password, setPassword] = useState("");

  const [userInput, setUserInput] = useState({ username: "", password: "" });
  function handelFormSubmit(event) {
    event.preventDefault();
    setUserInput({ username: "", password: "" });
  }

  const handelInputUser = (e, name) => {
    setUserInput({ ...userInput, [name]: e.target.value });
  };
  return (
    <>
      <h1>Login form</h1>
      <form onSubmit={handelFormSubmit} action="#">
        <label>
          User name
          <input
            type="text"
            value={userInput.username}
            onChange={(e) => handelInputUser(e, "username")}
          />
        </label>

        <label>
          User password
          <input
            type="password"
            value={userInput.password}
            onChange={(e) => handelInputUser(e, "password")}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Login;
