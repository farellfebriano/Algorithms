//MERGE SORT

function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }
  const mid = Math.min(array.length / 2);
  console.log(array.slice(0, mid), "left");
  const left = mergeSort(array.slice(0, mid));
  console.log(array.slice(mid, array.length), "right");
  const right = mergeSort(array.slice(mid, array.length));
  return merge(left, right);
}

function merge(array1, array2) {
  let p1 = 0,
    p2 = 0,
    result = [];
  while (p1 < array1.length && p2 < array2.length) {
    if (array1[p1] < array2[p2]) {
      result.push(array1[p1]);
      p1++;
    } else {
      result.push(array2[p2]);
      p2++;
    }
  }
  if (p1 < array1.length) {
    result = [...result, ...array1.slice(p1)];
  }
  if (p2 < array2.length) {
    result = [...result, ...array2.splice(p2)];
  }
  return result;
}

console.log(mergeSort([4, 3, 1, 2]));
