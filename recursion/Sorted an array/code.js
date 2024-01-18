function sortedArray(array, p0) {
  if (p0 === array.length - 1) {
    return true;
  }
  if (array[p0] > array[p0 + 1]) {
    return false;
  }

  return sortedArray(array, ++p0);
}

console.log(sortedArray([1, 9, 3, 4, 5, 6], 0));

// better approach

function sortedArray2(array, p0) {
  if (p0 === array.length - 1) {
    return true;
  }
  return array[p0] < array[p0 + 1] && sortedArray2(array, ++p0);
}
console.log(sortedArray2([1, 3, 4, 5, 6], 0));
