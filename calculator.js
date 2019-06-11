// source https://www.codewars.com/kata/calculator
const Calculator = function() {
  this.evaluate = string => {
    // 1. break string in a array
    const stringToArray = string.split(" ");
    //2. loop over signs, storing its index by calculation order
    let multDiv = [];
    let operations = 0;
    for(let i = 1; i < stringToArray.length; i+=2 ){
      if(stringToArray[i] === '*' || stringToArray[i] === '/') {
        multDiv.push(i);
      }
    }
    // 3. loop over the array of mult and div. for each index, pick i-1 and i+1, does the calculation and replace the trhee values for the result
    while(multDiv.length) {
      let curr = multDiv.shift() - 2 * operations;
      let newValue
      if(stringToArray[curr] === '*') {
        newValue = stringToArray[curr-1] * stringToArray[curr+1]
      } else{
        newValue = stringToArray[curr-1] / stringToArray[curr+1]
      }
      stringToArray.splice(curr-1, 3, newValue)
      operations++
    }
    //4. loop over the array of sum and minus
    if(stringToArray.length > 1) {
      while(stringToArray.length > 1) {
        if(stringToArray[1] === '+') {
          newValue = Number(stringToArray[0]) + Number(stringToArray[2])
        } else {
          newValue = Number(stringToArray[0]) - Number(stringToArray[2])
        }
        stringToArray.splice(0, 3, newValue)
      }
    }
    return stringToArray[0]
  }
};
let calculator = new Calculator

module.exports = calculator
