import {it, expect, describe} from 'vitest'

import {validateNotEmpty} from './validation'

describe("class validateNotEmpty", () => {
  it('should return a validation error if empty string provided', () => {
    const text = ''

    const errorFn = () => {validateNotEmpty(text)}

    expect(errorFn).toThrow() 
  });

  it("should return a validation error if padded string provided", () => {
    const text = "  ";

    const errorFn = () => {
      validateNotEmpty(text);
    };

    expect(errorFn).toThrow();
  });

  it('should throw error with provided error message', () => {
    const text = ''
    const errorMessage ='error'

    const errorFn = () => {
      validateNotEmpty(text, errorMessage);
    };

    expect(errorFn).toThrow(errorMessage);
  });
});