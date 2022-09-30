const { exportAllDeclaration } = require("@babel/types");
const fetchData = require("./async");

describe("async", () => {
  it("should return correct todo using .then", () => {
    const todo = fetchData(1).then((todo) => {
      expect(todo.id).toBe(1);
    });
  });

  it("should return correct todo using async/await", async () => {
    const todo = await fetchData(1);
    expect(todo.id).toBe(1);
  });
});
