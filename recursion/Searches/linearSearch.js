function linearSearch(array, target, p0) {
  console.log(p0);
  if (p0 < 0) {
    return [-1];
  }
  if (array[p0] === target) {
    return [array[p0], p0];
  }
  return linearSearch(array, target, --p0);
}
const array = [1, 2, 4, 3, 5, 6, 4];
console.log(linearSearch(array, 4, array.length - 1));
