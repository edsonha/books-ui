import React from "react";
import { render, fireEvent } from "@testing-library/react";
import LoginPage from "../components/LoginPage/LoginPage";

describe("Login Page UI", () => {
  it("should render login page", () => {
    const { getByPlaceholderText, getByTestId } = render(<LoginPage />);

    const usernameInput = getByPlaceholderText("Enter username");
    const passwordInput = getByPlaceholderText("Enter password");
    const loginButton = getByTestId("login-button");
    const registerButton = getByTestId("register-button");

    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
    expect(registerButton).toBeInTheDocument();
  });

  it("should allow user to fill in the value in username and password input field", () => {
    const { getByPlaceholderText, getByDisplayValue } = render(<LoginPage />);

    const usernameInput = getByPlaceholderText("Enter username");
    const passwordInput = getByPlaceholderText("Enter password");

    fireEvent.change(usernameInput, { target: { value: "bob@gmail.com" } });
    fireEvent.change(passwordInput, { target: { value: "123" } });

    expect(getByDisplayValue("bob@gmail.com")).toBeInTheDocument();
    expect(getByDisplayValue("123")).toBeInTheDocument();
  });
});
