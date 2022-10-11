import React, { useContext } from "react";
import "./Navigation.scss"
import { Link } from "react-router-dom";
import { loginContext } from "../providers/LoginProvider";

export default function Navigation() {

  const { user, logout } = useContext(loginContext);

  return (
    <nav>

      <div className="nav--project-name">GyManager</div>

      <div className="nav-bar">
        <ul className="nav-bar-left">
          <li><Link to='/'>Gym Capacity</Link></li>
          <li><Link to='/book'>Book</Link></li>
        </ul>
        <div className="nav-bar-right">
          {user.name !== "" && <div className="login-logout">
            <label>{user.name}</label>
            <button onClick={() => logout()}>Logout</button>
          </div>}
          {user.name === "" && <ul className="login--register">
            <li><Link to='/'>Login</Link></li>
            <li>Register</li>
          </ul>}
        </div>

      </div>
    </nav>
  );
}