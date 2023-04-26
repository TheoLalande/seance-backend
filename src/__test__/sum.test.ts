/* eslint-disable no-undef */
import sum from "../utils/math/sum";
import { test, expect } from "vitest";

test("The addition 1 + 2 must be equal to 3", () => {
  expect(sum(1, 2)).toBe(3);
});
