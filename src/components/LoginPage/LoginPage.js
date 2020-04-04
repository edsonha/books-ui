import React, { Component } from "react";
import axios from "axios";
import "./LoginPage.css";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: "",
    };
  }

  handleInputChange = (name, event) => {
    this.setState({ [name]: event.target.value });
  };

  loginUser = async () => {
    const { email, password } = this.state;
    await axios
      .post(process.env.REACT_APP_API_URL + `/users/login`, {
        email,
        password,
      })
      .then((res) => {
        this.props.history.push("/home");
        console.log(res.data.name, res.data.books);
      })
      .catch((err) => this.setState({ error: err.response.data.message }));
  };

  render() {
    const { email, password, error } = this.state;

    return (
      <React.Fragment>
        <form className="login-form">
          <h1>Book App</h1>
          <div>
            <label htmlFor="email">Email</label>
            <input
              className="detail-box"
              type="search"
              placeholder="Enter email"
              onChange={(event) => this.handleInputChange("email", event)}
              value={email}
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
            onClick={this.loginUser}
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
          {error && <p className="error-text">{error}</p>}
        </form>
      </React.Fragment>
    );
  }
}

export default LoginPage;
