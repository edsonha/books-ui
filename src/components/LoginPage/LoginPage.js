import React, { Component } from "react";
import "./LoginPage.css";

class LoginPage extends Component {
  render() {
    return (
      <React.Fragment>
        <form className="login-form">
          <h1>Book App</h1>
          <div>
            <label htmlFor="username">Username</label>
            <input
              className="detail-box"
              type="search"
              placeholder="Enter username"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              className="detail-box"
              type="search"
              placeholder="Enter password"
            />
          </div>
          <button className="login-btn" type="button">
            Login
          </button>
          <button className="register-btn" type="button">
            Register
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default LoginPage;
