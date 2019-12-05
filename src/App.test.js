import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import { strikeOrBall } from "./utils/strikeOrBall";

test("renders App without crashing", () => {
  render(<App />);
});

test("increment count by one", () => {
  expect(strikeOrBall(1)).toBe(2);
});
