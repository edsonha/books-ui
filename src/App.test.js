import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders Hello World", () => {
  const { getByText } = render(<App />);
  const textElement = getByText(/Hello World from Library Book App!/i);
  expect(textElement).toBeInTheDocument();
});
