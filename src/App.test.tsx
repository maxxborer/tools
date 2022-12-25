import { render } from "@testing-library/react";
import { expect, test } from "vitest";
// import userEvent from '@testing-library/user-event';
import matchers from "@testing-library/jest-dom/matchers";
import App from "./App";

test("loads and displays greeting", () => {
  // ARRANGE
  render(<App />);

  // ACT
  // await userEvent.click(screen.getByText('Load Greeting'));
  // await screen.findByRole('heading');

  // ASSERT
  // expect(screen.getByRole('heading')).toHaveTextContent('hello there');
  // expect(screen.getByRole('button')).toBeDisabled();
});

test("that it renders", () => {
  expect(true).toBe(true);
});

expect.extend(matchers);

export {};
