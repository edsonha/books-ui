import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";
import mockAxios from "jest-mock-axios";
import mockBookData from "./__mocks__/mockBookData";

afterEach(() => {
  mockAxios.reset();
});

describe("App", () => {
  it("should render Hello World", () => {
    const { getByText } = render(<App />);
    const textElement = getByText(/Hello World from Library Book App!/i);
    expect(textElement).toBeInTheDocument();
  });
});

describe("Book Table", () => {
  it("should display list of 3 books with id, title and author name", () => {
    const { getAllByTestId } = render(<App />);

    mockAxios.mockResponse({ data: mockBookData });

    const firstBookTitle = getAllByTestId("book-title-info")[0];
    const firstBookAuthor = getAllByTestId("book-author-info")[0];
    const thirdBookTitle = getAllByTestId("book-title-info")[2];
    const thirdBookAuthor = getAllByTestId("book-author-info")[2];

    expect(mockAxios.get).toHaveBeenCalledTimes(1);
    expect(mockAxios.get).toHaveBeenCalledWith("http://localhost:3001/books");
    expect(getAllByTestId("book-table-row").length).toEqual(3);
    expect(firstBookTitle).toHaveTextContent(/1983/);
    expect(firstBookAuthor).toHaveTextContent(/George Orwell/);
    expect(thirdBookTitle).toHaveTextContent(/Champion/);
    expect(thirdBookAuthor).toHaveTextContent(/Ra Men/);
  });
});

describe("Input Console", () => {
  it("should trigger the onChange function when the input text is filled in", () => {
    const { getByPlaceholderText } = render(<App />);

    const bookIdField = getByPlaceholderText("Enter Book ID");
    const bookTitleField = getByPlaceholderText("Enter Book Title");
    const bookAuthorField = getByPlaceholderText("Enter Book Author");

    fireEvent.change(bookIdField, { target: { value: "12345" } });
    fireEvent.change(bookTitleField, { target: { value: "test title" } });
    fireEvent.change(bookAuthorField, { target: { value: "test author" } });

    expect(bookIdField).toHaveAttribute("value", "12345");
    expect(bookTitleField).toHaveAttribute("value", "test title");
    expect(bookAuthorField).toHaveAttribute("value", "test author");
  });
});

describe("Error Handling", () => {
  it("should display error message when there is connection error between the frontend UI and the backend server ", () => {
    const { getByTestId } = render(<App />);

    mockAxios.mockError({ message: "Network Error" });

    expect(getByTestId("error-message")).toBeInTheDocument();
  });

  it("should not display error message when there is no connection error", () => {
    const { queryByTestId } = render(<App />);

    mockAxios.mockResponse({ data: mockBookData });

    expect(queryByTestId("error-message")).not.toBeInTheDocument();
  });
});
