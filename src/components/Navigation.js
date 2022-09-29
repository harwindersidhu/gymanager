import React from "react";
import "./Navigation.scss"
import { Link } from "react-router-dom";

export default function Navigation(props) {
  return (
    <nav>
      <div className="nav--project-name">GyManager</div>

      <div className="nav-bar">
        <ul className="nav-bar-left">
          <li><Link to='/'>Gym Capacity</Link></li>
          <li><Link to='/book'>Book</Link></li>
        </ul>
        <div className="nav-bar-right">
          <div className="login--register">
            <button>Login</button>
            <button>Register</button>
          </div>
          <div className="login-logout">
            <label>Admin</label>
            <button>LogOut</button>
          </div>
        </div>

      </div>
    </nav>
  );
}