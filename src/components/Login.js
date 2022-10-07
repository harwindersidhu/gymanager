import React, { useState } from "react";

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function login() {
    console.log("Login Form data: ", email, password);
    setEmail("");
    setPassword("");
  }

  return (
    <div className="login-form-main-div">
      <form autoComplete="off" onSubmit={event => event.preventDefault()}>

        <div className="email-div">
          <label className="email-label">Email: </label>
          <input
            className="email-input"
            name="email"
            type="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="password-div">
          <label className="password-label">Description </label>
          <input
            className="password-input"
            name="password"
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

      </form>

      <button
        className="login-form-button"
        onClick={login}
      >Login</button>
    </div>
  );
}


