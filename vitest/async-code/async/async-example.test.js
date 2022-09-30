import { it, describe, expect } from "vitest";
import { generateToken, generateTokenPromise } from "./async-example";

describe("generateToken()", () => {
  it("should generate a token value ", (done) => {
    const testUserEmail = "test@test.com";

    generateToken(testUserEmail, (err, token) => {
      try {
        expect(token).toBeDefined();
        done();
      } catch (err) {
        done(err)
      }
    });
  });
});

describe("generateTokenPromise()", () => {
  it('should generate a token promise', () => {
    const testUserEmail = "test@test.com";

    return expect(generateTokenPromise(testUserEmail)).resolves.toBeDefined();
  });

  it("should generate a token promise", async () => {
    const testUserEmail = "test@test.com";

    const token = await generateTokenPromise(testUserEmail);
    expect(token).toBeDefined();
  });
});