
const century = (year) => {
  if(typeof year === "number"){
    if (year.toString().length !== 4){
      return 0
    }else {
      let str = year.toString().substring(0, 2)
      return parseInt(str)
    }
  }
  return 0
}

const binaryToDecimal = (binary) => {
  // converts a binary to decimal
  return parseInt(binary, 2);
};


module.exports = { century, binaryToDecimal };