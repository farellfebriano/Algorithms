//My approach
const bubleSort = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length - i - 1; j++) {
      let curr = nums[j],
        next = nums[j + 1];
      if (curr > next) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
      }
    }
  }
  return nums;
};

// recursive approach
let bubleSortR = (nums, lastIndex) => {
  if (lastIndex === 0) {
    return nums;
  }
  for (let i = 0; i < lastIndex; i++) {
    if (nums[i] > nums[i + 1]) {
      [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
    }
  }
  return bubleSortR(nums, --lastIndex);
};
// let arr = [234, 43, 55, 63, 5, 6, 235, 547];
// console.log(bubleSortR(arr, arr.length - 1));

//DIFFERENT APPROACH

function bubleSortR2(arr, count, lastIndex) {
  console.log(arr);
  if (lastIndex === 0) {
    return arr;
  }
  if (count < lastIndex) {
    if (arr[count] > arr[count + 1]) {
      [arr[count], arr[count + 1]] = [arr[count + 1], arr[count]];
    }
    return bubleSortR2(arr, ++count, lastIndex);
  } else {
    return bubleSortR2(arr, 0, --lastIndex);
  }
}
let arr = [234, 43, 55, 63, 5, 6, 235, 547];
console.log(bubleSortR2(arr, 0, arr.length - 1));
