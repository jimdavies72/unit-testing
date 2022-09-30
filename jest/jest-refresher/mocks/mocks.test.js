const axios = require("axios");

const fetchData = async (id) => {
  const results = await axios.get(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  );
  console.log(results);
  return results.data;
};

const forEach = (items, callback) => {
  for (let i = 0; i < items.length; i++) {
    callback(items[i]);
  }
};

it("mock callback", () => {
  const mockedCallBack = jest.fn((x) => 42 + x);

  forEach([0, 1], mockedCallBack);

  expect(mockedCallBack.mock.calls.length).toBe(2);

  expect(mockedCallBack.mock.calls[0][0]).toBe(0);
  expect(mockedCallBack.mock.calls[1][0]).toBe(1);

  expect(mockedCallBack.mock.results[1].value).toBe(43);
});

it("mock return", () => {
  const mock = jest.fn();

  mock.mockReturnValueOnce(true).mockReturnValueOnce(false);

  const results = mock();
  const results2 = mock();

  expect(results).toBe(true);
  expect(results2).toBe(false);
});

it("mock axios", async () => {
  jest.spyOn(axios, "get").mockReturnValueOnce({
    data: {
      id: 1,
      todo: "Make Dinner",
    },
  });
  const results = await fetchData(1);

  expect(results.todo).toBe("Make Dinner");
});
