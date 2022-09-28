import React from "react";
import "./Navigation.scss"

export default function Navigation(props) {
  return (
    <nav>
      <div className="nav--project-name">GyManager</div>

      <div className="nav-bar">
        <ul className="nav-bar-left">
          <li>Gym Capacity</li>
          <li>Book</li>
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