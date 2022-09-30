import { it, expect, vi } from "vitest";
import { promises as fs } from "fs";
import writeData from "./io.js";

vi.mock('fs')
vi.mock('path', () => {
  return {
    default: {
      join: (...args) => {
        return args[args.length - 1]
      }
    }
  }
})

it("should execute writefile method ", () => {
  const testData = "Test";
  const fileName = "test.txt";
  
  writeData(testData, fileName);

  //expect(fs.writeFile).toBeCalled()
  expect(fs.writeFile).toBeCalledWith(fileName, testData);

});

it("should return a promise that resolves to no value ", () => {
  const testData = "Test";
  const fileName = "test.txt";

  writeData(testData, fileName);

  return expect(writeData(testData, fileName)).resolves.toBeUndefined();

  
});
