function reverseString(decimal, result) {
  if (decimal === 0) {
    return result;
  }
  console.log(decimal, result);
  // add the result
  result = (decimal % 2) + result;

  // the one that makes the recursive
  return reverseString(Math.floor(decimal / 2), result);
}
console.log(reverseString(233, ""));
