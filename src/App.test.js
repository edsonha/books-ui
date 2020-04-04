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

  it("should disable some input text for different action: Create, Update and Delete", () => {
    const { getByTestId, getByPlaceholderText } = render(<App />);

    const bookIdInput = getByPlaceholderText("Enter Book ID");
    const bookTitleInput = getByPlaceholderText("Enter Book Title");
    const bookAuthorInput = getByPlaceholderText("Enter Book Author");

    const select = getByTestId("select-action");
    fireEvent.change(select, { target: { value: "delete" } });
    expect(bookIdInput).not.toHaveAttribute("disabled");
    expect(bookTitleInput).toHaveAttribute("disabled");
    expect(bookAuthorInput).toHaveAttribute("disabled");

    fireEvent.change(select, { target: { value: "post" } });
    expect(bookIdInput).toHaveAttribute("disabled");
    expect(bookTitleInput).not.toHaveAttribute("disabled");
    expect(bookAuthorInput).not.toHaveAttribute("disabled");

    fireEvent.change(select, { target: { value: "put" } });
    expect(bookIdInput).not.toHaveAttribute("disabled");
    expect(bookTitleInput).not.toHaveAttribute("disabled");
    expect(bookAuthorInput).not.toHaveAttribute("disabled");
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
