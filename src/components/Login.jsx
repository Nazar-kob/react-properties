import React from "react";

const Login = () => {
  console.log("render");
  function handelFormSubmit(event) {
    event.preventDefault();
    const user = {
      username: event.target.username.value,
      password: event.target.password.value,
    };
    console.log(user);
  }
  console.log(handelFormSubmit);
  return (
    <>
      <h1>Login form</h1>
      <form onSubmit={handelFormSubmit} action="#">
        <label>
          User name
          <input type="text" name="username" />
        </label>

        <label>
          User password
          <input type="password" name="password" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Login;
