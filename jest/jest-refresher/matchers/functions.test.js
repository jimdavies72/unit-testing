const { sum, tOF, testString, compileCode } = require("./functions");

// 'it' and 'test' are functionaly the same and are for readability of the test only.

/*
describe("", () => {
  it("", () => {});
});
*/

describe("sum tests", () => {
  it("should add 1+2 to equal 3", () => {
    const result = sum(1, 2);
    expect(result).toBe(3);
  });

  it("object assignment", () => {
    const obj = {};
    expect(obj).toEqual({});
  });
});

describe("truthy or falsy", () => {
  it("should flip true to be false and pass", () => {
    const n = tOF(true);
    //expect(n).toBeFalsy();
    // should return same result as above
    expect(n).not.toBeTruthy();
  });

  it("should be null", () => {
    const n = null;
    expect(n).toBeNull();
  });

  it("should return 0 as a falsy", () => {
    const n = 0;
    expect(n).toBeFalsy();
  });
});

describe("numbers", () => {
  it("should add 2+2 to equal 4", () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
  });
});

describe("strings", () => {
  it("should concatonate 'myString ' with 'team'", () => {
    expect(testString("team")).toMatch("myString team");
  });

  it("should test that there is no I in team", () => {
    expect("team").not.toMatch(/I/);
  });
});

describe("arrays", () => {
  const shoppingList = ["Milk", "Bread", "Butter", "Potatoes"];

  it("should return if the array contains 'Milk'", () => {
    expect(shoppingList).toContain("Milk");
  });

  it("should not return if the array contains 'Cheese'", () => {
    expect(shoppingList).not.toContain("Cheese");
  });
});

describe("exceptions", () => {
  it("should throw error", () => {
    expect(() => compileCode()).toThrow();
  });

  it("should throw error Error", () => {
    expect(() => compileCode()).toThrow(Error);
  });

  it("should throw specific error", () => {
    expect(() => compileCode()).toThrow("no value provided");
  });
});
