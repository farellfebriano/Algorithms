function permutation(p, up) {
  if (p.length === 3) {
    console.log(p);
    return;
  }
  for (let i = 0; i < p.length + 1; i++) {
    const f = p.substring(0, i);
    const char = up[0];
    const l = p.substring(i);

    permutation(f + char + l, up.substring(1));
  }
}
// permutation("", "ABC");
// put all the result into array

function permutation2(p, up) {
  let result = [];
  if (p.length === 3) {
    result.push(p);
    return result;
  }
  for (let i = 0; i < p.length + 1; i++) {
    const f = p.substring(0, i);
    const c = up[0];
    const l = p.substring(i);
    const arr = permutation2(f + c + l, up.substring(1));
    result = [...arr, ...result];
  }
  return result;
}
console.log(permutation2("", "ABC"));
