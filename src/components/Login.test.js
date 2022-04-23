import { fireEvent, render, screen } from "@testing-library/react";
import Login from "./Login";

test("username input should be rendered", () => {
  render(<Login />);
  const inputNode = screen.getByPlaceholderText(/username/i);
  expect(inputNode).toBeInTheDocument();
});

test("password input should be rendered", () => {
  render(<Login />);
  const passwordinputNode = screen.getByPlaceholderText(/password/i);
  expect(passwordinputNode).toBeInTheDocument();
});

test("button should be rendered", () => {
  render(<Login />);
  const buttoninputNode = screen.getByRole("button");
  expect(buttoninputNode).toBeInTheDocument();
});

test("username input should be empty", () => {
  render(<Login />);
  const inputNode = screen.getByPlaceholderText(/username/i);
  expect(inputNode.value).toBe("");
});

test("password input should be rendered", () => {
  render(<Login />);
  const passwordinputNode = screen.getByPlaceholderText(/password/i);
  expect(passwordinputNode.value).toBe("");
});

test("button should be disabled", () => {
  render(<Login />);
  const buttoninputNode = screen.getByRole("button");
  expect(buttoninputNode).toBeDisabled();
});

test("error message should be invisible", () => {
  render(<Login />);
  const buttoninputNode = screen.getByTestId("error");
  expect(buttoninputNode).not.toBeVisible();
});

test("username input should change", () => {
  render(<Login />);
  const inputNode = screen.getByPlaceholderText(/username/i);
  const testValue = "test";
  fireEvent.change(inputNode, { target: { value: testValue } });
  expect(inputNode.value).toBe(testValue);
});

test("password input should change", () => {
  render(<Login />);
  const passwordinputNode = screen.getByPlaceholderText(/password/i);
  const testValue = "test";
  fireEvent.change(passwordinputNode, { target: { value: testValue } });
  expect(passwordinputNode.value).toBe(testValue);
});
