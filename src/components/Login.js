import React, { useContext, useState } from "react";
import { Navigate } from "react-router";
import { loginContext } from "../providers/LoginProvider";
import "./Login.scss";

export default function Login(props) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, login, error, setError } = useContext(loginContext);

  function onLogin() {
    if (email === "" || password === "") {
      setError("Fields can't be empty.");
      return;
    }
    login(email, password);
    setEmail("");
    setPassword("");
  }

  if (user.email !== "") {
    return <Navigate to="/" />
  }

  return (
    <div className="login-form-main-div">
      <div className="inner-form-div">
        <h2>Login</h2>
        {error !== "" && <div className="login-error">{error}</div>}
        <form autoComplete="off" onSubmit={event => event.preventDefault()}>
          <div className="login-form-group">
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

          <div className="login-form-group">
            <label className="password-label">Password: </label>
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
          onClick={onLogin}
        >Login</button>
      </div>
    </div>
  );
}


