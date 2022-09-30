import { it, expect } from "vitest";

import { add } from "./math.js";

it("should sum an array of numbers and return the result", () => {
  // Arrange
  const numbers = [1, 2];
  const expectedResult = numbers.reduce((prev, curr) => prev + curr, 0);

  // Act
  const result = add(numbers);

  // Assert
  expect(result).toBe(expectedResult);
});

it("should yield NaN if at least 1 invalid number is provided", () => {
  const array = [1, "a"];

  const result = add(array);

  expect(result).toBeNaN();
});

it("should yield a correct sum if an array of numeric string is given", () => {
  const numbers = ["1", "2"];

  const expectedResult = numbers.reduce((prev, curr) => +prev + +curr, 0);

  const result = add(numbers);

  expect(result).toBe(expectedResult);
});

it("should yield 0  if an empty array is provided", () => {
  const array = [];

  const result = add(array);

  expect(result).toBe(0);
});

it("should throw an error if no value is passed to the func", () => {
  const resultFn = () => {
    add();
  };

  expect(resultFn).toThrow();
});

it("should throw an error if multiple args provided", () => {
  const arg1 = 1;
  const arg2 = 2;

  const resultFn = () => {
    add(arg1, arg2);
  };

  expect(resultFn).toThrow("numbers is not iterable");
});

