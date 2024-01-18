function countZer0(num, count) {
  if (num === 0) {
    return 1;
  } else if (num < 10) {
    return count;
  }
  const lastNumber = num % 10;
  if (lastNumber % 10 === 0) {
    count++;
  }
  num = (num - lastNumber) / 10;
  return countZer0(num, count);
}
console.log(countZer0(1010101010, 0));
