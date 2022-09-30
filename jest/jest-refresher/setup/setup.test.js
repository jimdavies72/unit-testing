let animals = [];

describe("animal array", () => {
  //set up

  beforeAll(() => {
    animals = ["elephant", "zebra", "bear", "tiger"];
  });

  beforeEach(() => {
    animals = ["elephant", "zebra", "bear", "tiger"];
  });

  //teardown
  afterEach(() => {
    animals = [];
  });

  afterAll(() => {
    animals = ["Done"];
  });

  it("should add animal to end of array", () => {
    animals.push("crocodile");
    expect(animals[animals.length - 1]).toBe("crocodile");
  });

  it("should add animal to beginning of array", () => {
    animals.unshift("monkey");
    expect(animals[0]).toBe("monkey");
  });

  it("should have initial length of 4", () => {
    expect(animals.length).toBe(4);
  });
});

describe("testing something else...", () => {
  it("true should be truthy", () => {
    expect(true).toBeTruthy;
  });
});
