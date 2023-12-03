// this function is using iterative function for find the factorialwhich is the easiest technique
function factorialWithIterative(number) {
  let factorial = 1;
  while (number > 0) {
    factorial *= number;
    number--;
  }
  return factorial;
}

// my Idea
// this function will use recursive
let factorial = 1;
let sum = 0;
function factorialWithIRecursive(number) {
  if (number === 0) {
    return factorial;
  }
  factorial *= number;
  number--;
  return factorialWithIRecursive();
}

function factorialWithIRecursive2(number) {
  console.log(number);
  if (number < 2) {
    return number;
  }
  return number * factorialWithIRecursive2(number - 1);
}

console.log(factorialWithIRecursive2(5));
