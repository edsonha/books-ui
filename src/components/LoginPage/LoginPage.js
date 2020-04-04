import React, { Component } from "react";
import "./LoginPage.css";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  handleInputChange = (name, event) => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { username, password } = this.state;

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
              onChange={(event) => this.handleInputChange("username", event)}
              value={username}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              className="detail-box"
              type="search"
              placeholder="Enter password"
              onChange={(event) => this.handleInputChange("password", event)}
              value={password}
            />
          </div>
          <button
            data-testid="login-button"
            className="login-btn"
            type="button"
          >
            Login
          </button>
          <button
            data-testid="register-button"
            className="register-btn"
            type="button"
          >
            Register
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default LoginPage;
