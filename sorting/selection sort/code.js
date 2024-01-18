// my approach

// iterative approach
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    const num1 = arr[i];
    let smallest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[smallest]) {
        smallest = j;
      }
    }
    [arr[i], arr[smallest]] = [arr[smallest], arr[i]];
  }
  return arr;
}

// recursive approach

// min approach
function selectionSortR(arr, firstIndex, count, minVal) {
  if (firstIndex === arr.length - 1) {
    return arr;
  }
  if (count < arr.length - 1) {
    if (arr[count] < arr[minVal]) {
      minVal = count;
    }
    return selectionSortR(arr, firstIndex, ++count, minVal);
  } else {
    [arr[firstIndex], arr[minVal]] = [arr[minVal], arr[firstIndex]];
    firstIndex += 1;
    return selectionSortR(arr, firstIndex, firstIndex, firstIndex);
  }
}

// const arr = [4, 3, 1, 6, 5, 8, 7, 11];
// console.log(selectionSortR(arr, 0, 0, 0));

// max approach

function selectionSortR2(arr, lastIndex, count, maxNum) {
  if (lastIndex === 0) {
    return arr;
  }
  // when the count zero i want it too keep the loop going to do the index 0
  if (count >= 0) {
    if (arr[count] > arr[maxNum]) {
      maxNum = count;
    }
    return selectionSortR2(arr, lastIndex, --count, maxNum);
  } else {
    [arr[lastIndex], arr[maxNum]] = [arr[maxNum], arr[lastIndex]];
    lastIndex -= 1;
    return selectionSortR2(arr, lastIndex, lastIndex, lastIndex);
  }
}

const arr = [4, 3, 1, 6, 5, 8, 7, 11, 66, 44, 36, 7453];
console.log(
  selectionSortR2(arr, arr.length - 1, arr.length - 1, arr.length - 1)
);
