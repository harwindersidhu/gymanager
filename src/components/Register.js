import React, { useContext, useState } from "react";
import { loginContext } from "../providers/LoginProvider";
import "./Register.scss";

export default function Register() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  // const { login, error, setError } = useContext(loginContext);

  function onRegister() {
    if (email === "" || password === "" || confirmPassword === "" || status === "" || name === "") {
      setError("Fields can't be empty.");
      return;
    } else if (password !== confirmPassword) {
      setError("Passwords doesn't match.");
      return;
    }
    //login(email, password);
    console.log("Register: ", name, email, password, status);
    setEmail("");
    setPassword("");
    setName("");
    setConfirmPassword("");
  }

  return (
    <div className="register-form-main-div">
      <div className="register-inner-form-div">
        <h2>Register</h2>
        {error !== "" && <div className="register-error">{error}</div>}
        <form autoComplete="off" onSubmit={event => event.preventDefault()}>
          <div className="register-form-group">
            <label>Name: </label>
            <input
              name="name"
              type="text"
              value={name}
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="register-form-group">
            <label>Email: </label>
            <input
              name="email"
              type="email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="register-form-group">
            <label>Password: </label>
            <input
              name="password"
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="register-form-group">
            <label>Confirm Password: </label>
            <input
              name="password"
              type="password"
              value={confirmPassword}
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <div className="register-form-group">
            <label>Status: </label>
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>


        </form>

        <button onClick={onRegister}>Register</button>
      </div>
    </div>
  );
}


