function fibonacciIterative(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }
  let sum2 = 0;
  let sum1 = 1;
  let sum = 0;
  for (let i = 1; i < n; i++) {
    sum = sum2 + sum1;
    sum2 = sum1;
    sum1 = sum;
  }
  return sum;
}
console.log(fibonacciIterative(3));

function fibonacciIterative(n) {
  if (n < 2) {
    return n;
  }
  return fibonacciIterative(n - 1) + fibonacciIterative(n - 2);
}
console.log(fibonacciIterative(3));
