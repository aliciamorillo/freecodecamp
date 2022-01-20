let myArray = [1, 2, 3];
let arraySum = myArray.reduce(myFunc);

function myFunc(previous, current) {
  return previous + current;
}

console.log(`Sum of array values is: ${arraySum}`);