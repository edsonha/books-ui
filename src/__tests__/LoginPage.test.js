import React from "react";
import { render, fireEvent } from "@testing-library/react";
import LoginPage from "../components/LoginPage/LoginPage";
import mockAxios from "jest-mock-axios";

afterEach(() => {
  mockAxios.reset();
});

describe("Login Page UI", () => {
  it("should render login page", () => {
    const { getByPlaceholderText, getByTestId } = render(<LoginPage />);

    const emailInput = getByPlaceholderText("Enter email");
    const passwordInput = getByPlaceholderText("Enter password");
    const loginButton = getByTestId("login-button");
    const registerButton = getByTestId("register-button");

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
    expect(registerButton).toBeInTheDocument();
  });

  it("should allow user to fill in the value in username and password input field", () => {
    const { getByPlaceholderText, getByDisplayValue } = render(<LoginPage />);

    const emailInput = getByPlaceholderText("Enter email");
    const passwordInput = getByPlaceholderText("Enter password");

    fireEvent.change(emailInput, { target: { value: "bob@gmail.com" } });
    fireEvent.change(passwordInput, { target: { value: "123" } });

    expect(getByDisplayValue("bob@gmail.com")).toBeInTheDocument();
    expect(getByDisplayValue("123")).toBeInTheDocument();
  });
});

describe("Login functionality", () => {
  it("should deny login when credentials are wrong and show an error message", () => {
    const { getByTestId, getByText } = render(<LoginPage />);

    const loginButton = getByTestId("login-button");

    fireEvent.click(loginButton);
    mockAxios.mockError({
      response: { data: { message: "Wrong credentials" } },
    });

    expect(mockAxios.post).toHaveBeenCalledTimes(1);
    expect(getByText("Wrong credentials")).toBeInTheDocument();
  });
});
