import React from "react";
import { render } from "@testing-library/react";
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
