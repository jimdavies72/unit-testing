import { it, expect, vi } from "vitest";
import { HttpError } from "./errors";
import { sendDataRequest } from "./http";

//mocking global function (like fetch) using vi.stubGlobal()
//for front end libraries like axios use vi.mock('axios')

const testResponseData = { data: "data" };

const testFetch = vi.fn((url, options) => {
  return new Promise((resolve, reject) => {
    if (typeof options.body !== 'string') {
      return reject('not a string')
    }
    const testResponse = {
      ok: true,
      json() {
        return new Promise((resolve, reject) => {
          resolve(testResponseData);
        });
      },
    };
    resolve(testResponse);
  });
});

vi.stubGlobal("fetch", testFetch);


it("should return any available response data", () => {
  const data = { data: "data" };

  return expect(sendDataRequest(data)).resolves.toEqual(testResponseData);
});

it('should convert data to JSON before posting request', async () => {
  const data = { data: "data" };

  let errorMessage

  try {
    await sendDataRequest(data)
  } catch (error) {
    errorMessage = error
  }

  expect(errorMessage).not.toBe("not a string");
});

it('should throw an HttpError in case of non-ok responses', () => {
  testFetch.mockImplementationOnce((url, options) => {
    return new Promise((resolve, reject) => {
      const testResponse = {
        ok: false,
        json() {
          return new Promise((resolve, reject) => {
            resolve(testResponseData);
          });
        },
      };
      resolve(testResponse);
    });
  });

  const data = { data: "data" };

  return expect(sendDataRequest(data)).rejects.toBeInstanceOf(HttpError);
});