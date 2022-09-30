import { it, expect, describe } from 'vitest'

import { HttpError, ValidationError } from './errors.js'

describe("class HttpError", () => {
  it('should create an object instance of type HttpError', () => {
    const statusCode = "404";
    const message = "Page cannot be found";
    const data = { data: "test data" };

    const errorObject = new HttpError(statusCode, message, data)

    expect(errorObject).toBeInstanceOf(HttpError)
  });

  it('should contain the properties statusCode, message, data', () => {
    const statusCode = "404";
    const message = "Page cannot be found";
    const data = { data: "test data" };

    const errorObject = new HttpError(statusCode, message, data);

    expect(errorObject.statusCode).toBe(statusCode);
    expect(errorObject.message).toBe(message);
    expect(errorObject.data).toEqual(data);
  });

  it('should contain undefined as data if no data is provided', () => {
    const statusCode = "404";
    const message = "Page cannot be found";

    const errorObject = new HttpError(statusCode, message);

    expect(errorObject.data).toBeUndefined();
  });
});

describe("class ValidationError", () => {
  it('should create an object instance of type ValidationError', () => {
    const message = 'validation error'

    const validationErrorObject = new ValidationError(message)

    expect(validationErrorObject).toBeInstanceOf(ValidationError);

  });

  it('should contain the provided message', () => {
    const message = "validation error";

    const validationErrorObject = new ValidationError(message);

    expect(validationErrorObject.message).toBe(message);
  });
});