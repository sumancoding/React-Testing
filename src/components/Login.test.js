import { render, screen } from "@testing-library/react";
import Login from "./Login";

test("username input should be rendered", () => {
  render(<Login />);
  const inputNode = screen.getByPlaceholderText(/username/i);
  expect(inputNode).toBeInTheDocument();
});

test("password input should be rendered", () => {
  render(<Login />);
  const passwordinputNode = screen.getByPlaceholderText("password");
  expect(passwordinputNode).toBeInTheDocument();
});

test("button input should be rendered", () => {
  render(<Login />);
  const buttoninputNode = screen.getByRole("button");
  expect(buttoninputNode).toBeInTheDocument();
});
