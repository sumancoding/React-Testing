import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Login from "./Login";

jest.mock("axios", () => ({
  __esModule: true,
  default: {
    get: () => ({
      data: { id: 1, name: "John" },
    }),
  },
}));

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

test("password input should be empty", () => {
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

test("button should not be disabled", () => {
  render(<Login />);
  const buttoninputNode = screen.getByRole("button");
  const inputNode = screen.getByPlaceholderText(/username/i);
  const passwordinputNode = screen.getByPlaceholderText(/password/i);
  const testValue = "test";
  fireEvent.change(inputNode, { target: { value: testValue } });
  fireEvent.change(passwordinputNode, { target: { value: testValue } });
  expect(buttoninputNode).not.toBeDisabled();
});

test("Loading shouldn't be rendered", () => {
  render(<Login />);
  const buttoninputNode = screen.getByRole("button");
  expect(buttoninputNode).not.toHaveTextContext(/please wait/di);
});

test("button should be rendered when clicked", () => {
  render(<Login />);
  const buttoninputNode = screen.getByRole("button");
  const inputNode = screen.getByPlaceholderText(/username/i);
  const passwordinputNode = screen.getByPlaceholderText(/password/i);

  const testValue = "test";

  fireEvent.change(inputNode, { target: { value: testValue } });
  fireEvent.change(passwordinputNode, { target: { value: testValue } });
  fireEvent.click(buttoninputNode);
  expect(buttoninputNode).toHaveTextContext(/please wait/i);
});

test("loading should not be rendered after fetching", async () => {
  render(<Login />);
  const buttoninputNode = screen.getByRole("button");
  const inputNode = screen.getByPlaceholderText(/username/i);
  const passwordinputNode = screen.getByPlaceholderText(/password/i);

  const testValue = "test";

  fireEvent.change(inputNode, { target: { value: testValue } });
  fireEvent.change(passwordinputNode, { target: { value: testValue } });
  fireEvent.click(buttoninputNode);
  await waitFor(() =>
    expect(buttoninputNode).not.toHaveTextContext(/please wait/i)
  );
});

test("user should be rendered after fetching", async () => {
  render(<Login />);
  const buttoninputNode = screen.getByRole("button");
  const inputNode = screen.getByPlaceholderText(/username/i);
  const passwordinputNode = screen.getByPlaceholderText(/password/i);

  const testValue = "test";

  fireEvent.change(inputNode, { target: { value: testValue } });
  fireEvent.change(passwordinputNode, { target: { value: testValue } });
  fireEvent.click(buttoninputNode);

  const userItem = await screen.findByText("John");

  expect(userItem).not.toHaveTextContext(/please wait/i);
});
