// mulltiple occurance with binary searches
function searches(nums, target, l, r, result) {
  if (l > r) {
    return result;
  }
  const mid = Math.floor((l + r) / 2);
  if (nums[mid] === target) {
    result.push(mid);
    nums = nums.slice(l, mid).concat(nums.slice(mid, r));
    return searches(nums, target, l, --r, result);
  } else if (array[mid] > target) {
    return searches(nums, target, l, mid - 1, result);
  }
  searches(array, target, right, middle + 1);
}

//mulltiple occurance without binary searches

function searches2(array, target, p0, result) {
  if (p0 >= array.length) {
    return result;
  } else if (target === array[p0]) {
    result.push({ index: p0 });
  }
  return searches2(array, target, ++p0, result);
}

// create the funtion without atualy take the result parameters

function searches3(array, target, p0) {
  const result = [];
  if (p0 >= array.length) {
    return result;
  } else if (target === array[p0]) {
    result.push({ index: p0 });
  }
  const arrayFromBellow = searches3(array, target, ++p0);
  return result.concat(arrayFromBellow);
}
const array = [1, 2, 3, 4, 4, 55, 66, 78];
console.log(searches3(array, 4, 0));
