function rbs(arr, tar, l, r) {
  console.log(l, r);
  if (l > r) {
    return -1;
  }
  /* s -- middse sorted or not
        // if sortted is the, is target in range of s--middse
            //s=s r=middse-1
        // else:
            //l=middle+1 r=r
        //elif if middle--right is sorted
            //if it yes does the target fall between middle--right
                //middle+1 -- right
            //else
                //l=l r=middle-1
    */

  const mid = Math.floor((l + r) / 2);
  console.log("mid->", mid);
  if (tar === arr[mid]) {
    return { index: mid };
  }
  if (arr[l] < arr[mid]) {
    if (tar >= arr[l] && tar <= arr[mid]) {
      return rbs(arr, tar, l, mid - 1);
    } else {
      return rbs(arr, tar, mid + 1, r);
    }
  } else {
    if (tar >= arr[mid] && tar <= arr[r]) {
      return rbs(arr, tar, mid + 1, r);
    } else {
      return rbs(arr, tar, l, mid - 1);
    }
  }
}

const arr = [5, 6, 7, 9, 10, 1, 2, 3];
console.log(rbs(arr, 5, 0, arr.length - 1));
