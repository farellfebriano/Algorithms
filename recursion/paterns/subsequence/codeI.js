function subset1(arr) {
  /*
    NOTE --> how the pattern look to gain understanding
    1.) [], [ '1' ]
    2.) [], [ '1' ], ADD --> [ '2' ], [ '1', '2' ]
    3.) [], [ '1' ], [ '2' ], [ '1', '2' ] ADD--> [ '3' ], [ '1', '3' ], [ '2', '3' ], [ '1', '2', '3' ]
    */

  /*
    we want the result in the array inside the array. The array will start
    with the empty array to start the algorythm

    */
  let result = [[]];

  //loop trough the arr
  for (let num of arr) {
    // get the length of the current result to do the loop
    const rLength = result.length;
    for (let i = 0; i < rLength; i++) {
      // get the coppy of current result[i] and add num ontop of it so then it create new pattern
      // and push it to the result
      result.push([...result[i], num]);
    }
  }
  return result;
}

console.log("Hello World!");
let array1 = ["1", "2", "3", "4"];
let ans1 = subset1(array1);
console.log(ans1);

/*
    the situation where there are duplication value in the array.
    This will be a problem since there are no duplication in the subset.
*/

function subset(array) {
  let result = [[]],
    set = new Set();
  for (num of array) {
    let rLength = result.length;
    if (set.has(num)) {
      continue;
    }
    set.add(num);
    for (let i = 0; i < rLength; i++) {
      result.push([...result[i], num]);
    }
  }
  return result;
}

// console.log("Hello World!");
// let array2 = ["1", "2", "3", "1", "2"];
// let ans2 = subset(array2);
// console.log(ans2);

// Other technique with sorting the array first
function subset3(array) {
  let result = [[]];
  array.sort((a, b) => {
    return a - b;
  });
  for (let i = 0; i < array.length; i++) {
    const num = array[i];
    const rlength = result.length;
    if (i > 0 && array[i] === array[i - 1]) {
      continue;
    }
    for (let j = 0; j < rlength; j++) {
      result.push([...result[i], num]);
    }
  }
  return result;
}
console.log("Hello World!");
let array3 = ["1", "2", "3", "1", "2", "4"];
let ans3 = subset(array3);
console.log(ans3);
