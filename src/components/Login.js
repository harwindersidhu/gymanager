import React, { useContext, useState } from "react";
import { loginContext } from "../providers/LoginProvider";
import "./Login.scss";

export default function Login(props) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, setError } = useContext(loginContext);

  function onLogin() {
    if (email === "" || password === "") {
      setError("Fields can't be empty.");
      return;
    }
    login(email, password);
    setEmail("");
    setPassword("");
  }

  return (
    <div className="login-form-main-div">
      <form autoComplete="off" onSubmit={event => event.preventDefault()}>
        { error !== "" && <div>{error}</div>}
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
  );
}


