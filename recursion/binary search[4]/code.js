function binarySearch(array, right, left, find) {
  if (left < right) {
    return -1;
  }
  let middle = Math.floor((right + left) / 2);

  if (array[middle] === find) {
    return [find, middle];
  } else if (find < array[middle]) {
    return binarySearch(array, right, middle - 1, find);
  }
  return binarySearch(array, middle + 1, left, find);
}
const a = [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(binarySearch(a, 0, a.length - 1, 6));
