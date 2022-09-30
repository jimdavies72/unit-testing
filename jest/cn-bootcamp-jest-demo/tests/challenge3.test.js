// Page 3 challenge questions below...

const {century, binaryToDecimal} = require("../challenge3.js");

it(`should return first 2 ints of a 4 digit year`, ()=>{
  expect(century(1987)).toEqual(19)
  expect(century(198)).toEqual(0);
  expect(century(19875)).toEqual(0);
  expect(century("xxxx")).toEqual(0);
})

it(`should return decimmal 19 from binary string 10011`, ()=>{
  //expect(binaryToDecimal("10011")).toEqual(19)
  //expect(binaryToDecimal("1001")).toEqual(9);
  expect(binaryToDecimal("xxx")).toEqual(NaN);
});
