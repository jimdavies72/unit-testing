import { it, expect, describe } from "vitest";
import { cleanNumbers, transformToNumber } from "./numbers";


describe("transformToNumber()", () => {
  it("should convert a numeric string to a number", () => {
    const numString = "1";
    const expected = +numString;

    const result = transformToNumber(numString);

    expect(result).toBeTypeOf("number");
    expect(result).toBe(expected);
  });

  it("should return NaN if string passed is not numeric", () => {
    const string = "a";

    const result = transformToNumber(string);

    expect(result).toBeNaN();
  });

  it("should return 0 if empty string is passed to the func", () => {
    const string = "";

    const result = transformToNumber(string);

    expect(result).toBe(0);
  });
});

describe("cleanNumbers()", () => {
  //integration test
  it('should return an array of numeric values from an array of strings', () => {
    const values = ['1', '2']

    const result = cleanNumbers(values)

    expect(result[0]).toBeTypeOf('number')
    expect(result).toEqual([1, 2]);
  });

  it('should return an error if invalid values are passed ', () => {
    const values = ['', 1]

    const resultFn = () => cleanNumbers(values)

    expect(resultFn).toThrow(/Invalid input/);
  });
});