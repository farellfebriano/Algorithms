function reverseNumber(n, number) {
  if (n === 0) {
    return number;
  }
  const lastNumber = n % 10;
  number = number * 10 + lastNumber;
  n = (n - lastNumber) / 10;
  return reverseNumber(n, number);
}
console.log(reverseNumber(123, 0));
