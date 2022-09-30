//doesnt like import need to use require.
const {add} = require("../app.js")


// Lecture examples here...

test('should equal 5 when passed 2 and 3', () => {
  expect(add(2,3)).toBe(5);
})

//'it' is an alias for test..
it('should equal 10', () => {
  expect(add(3,7)).toEqual(10)
})





