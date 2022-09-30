exports.sum = (num1, num2) => {
  return num1 + num2;
};

exports.tOF = (bool) => {
  // flip true to false and vice versa
  return !bool;
};

exports.testString = (string) => {
  return `myString ${string}`;
};

exports.compileCode = () => {
  throw new Error("no value provided");
};
