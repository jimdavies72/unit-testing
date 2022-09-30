// Page 2 challenge questions below...

const {
  numToString,
  planet,
  classRegister,
  concatSquareDigits,
} = require("../challenge2.js");

it(`returns type of = string`, () => {
  expect(typeof numToString(5)).toBe("string");
});

it(`returns the planet from its order number`, () => {
  expect(planet(3)).toEqual("Earth");
  expect(planet(8)).toEqual("Neptune");
  expect(planet(9)).toBeUndefined();
});

it(`should return 4 present for array of 5`, () => {
  const registerArray = [true, true, false, true, true];
  expect(classRegister(registerArray)).toEqual(4);
});

it(`should return 1625 as a concat squares of 4 & 5`, () => {
  expect(concatSquareDigits(45)).toEqual(1625);
});
