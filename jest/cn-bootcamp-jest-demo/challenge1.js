
// Challenge 1.1

const truthyFalsy = () => {
  return "false";
};

const challenge1_1 = () => {
  if (truthyFalsy()) {
    return "truthy";
  } else {
    return "falsey";
  }
};

// Challenge 1.2

const challenge1_2 = () => {
  const object = {
    first: "James",
    last: "Doe"
  }
  return object
};


// Challenge 1.3

const nameArray = ["james", "michael", "fred", "suzanne"];

const challenge1_3 = () => {
  let minLength = 6
  let outputArray = [];
  for(let i = 0; i < nameArray.length; i++){
    if(nameArray[i].length >= minLength){
      outputArray.push(nameArray[i])
    }
  }
  return outputArray
}

module.exports = {challenge1_1, challenge1_2, challenge1_3}