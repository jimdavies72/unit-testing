
const numToString = (num) =>{
  return num.toString()
}

const planet = (numOrder) =>{
  switch (numOrder){
    case 1: 
      return "Mercury";
      break;
    case 2: 
      return "Venus";
      break;
    case 3:
      return "Earth";
      break;
    case 4:
      return "Mars";
      break;
    case 5:
      return "Jupiter";
      break;
    case 6:
      return "Saturn";
      break;
    case 7:
      return "Uranus";
      break;
    case 8: 
      return "Neptune";
      break;
  }
}

const classRegister = (register) =>{
  let count = 0
  for (let i = 0; i < register.length; i++){
    if (register[i]){
      count++
    }
  }
  return count
}

const concatSquareDigits = (num) =>{
  const numString = num.toString()
  let returnVal = ""
  let squareNum = 0
  for (let i = 0; i < numString.length; i++){     
    squareNum = parseInt(numString[i]) ** 2
    returnVal += squareNum.toString()
  }
  return parseInt(returnVal)
}

module.exports = { numToString, planet, classRegister, concatSquareDigits };


