import { it, expect, describe } from 'vitest'
import { validateNumber, validateStringNotEmpty } from './validation.js'


describe("validateStringNotEmpty()", () => {
  it('should throw error if the string is empty', () => {
    const string = ''

    const resultFn = () => {
      validateStringNotEmpty(string);
    } 

    expect(resultFn).toThrow(/must not be empty/);

  })

  it('should not throw error if the string is not empty', ()=> {
    const string = "hello"

    const resultFn = () => {
      validateStringNotEmpty(string);
    };

    expect(resultFn).not.toThrow(/must not be empty/);
  })

  it('shoud throw an error if the string contains only space', () => {
    const string = '    '

    const resultFn = () => {
      validateStringNotEmpty(string);
    } 

    expect(resultFn).toThrow(/must not be empty/);
  })
});

describe('Validate Number Tests()', () => {
  it('should not throw error if value passed is a number', () => {
    const input = 1

    const resultFn = () => {
      validateNumber(input)
    }

    expect(resultFn).not.toThrow(/Invalid number input/);
  })

  it('should throw error if value passed is a numeric string', () => {
    const input  = '1'

    const resultFn = () => {
      validateNumber(input)
    }

    expect(resultFn).toThrow(/Invalid number input/);
  })

  it('should throw an error if value passed is not a number', ()=> {
    const input1 = 'a'
    const input2  = {}

    const result1Fn = () => {
      validateNumber(input1);  
    }

    const result2Fn = () => {
      validateNumber(input2);
    } 

    expect(result1Fn).toThrow(/Invalid number input/);
    expect(result2Fn).toThrow(/Invalid number input/);
  })
})
