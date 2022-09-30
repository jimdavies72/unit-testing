// Page 1 challenge questions below...

const {
  challenge1_1,
  challenge1_2,
  challenge1_3,
} = require("../challenge1.js");

it(`should return as a truthy, not falsy and not null`, () => {
  expect(challenge1_1()).toBe("truthy");
  expect(challenge1_1()).not.toBe("falsey");
  expect(challenge1_1()).not.toBe(null);
});

it(`should return the first and last name from the object`, () => {
  expect(challenge1_2().first).toEqual("James");
  expect(challenge1_2().last).toEqual("Doe");
});

it(`should return a non zero array of values`, () => {
  expect(challenge1_3()).not.toEqual([]);
});
