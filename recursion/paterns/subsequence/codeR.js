// this code is the pattern for getting all the subsequece of something

// the pattern is emphasis into two things
/*
    either take it or ignore it
 */

function subSequence(p, up) {
  let result = [];
  if (up.length < 1) {
    result.push(p);
    return result;
  }
  // pass the one character into process
  const a = subSequence(p + up[0], up.substring(1));
  // ignore the string and skip one char in the up
  const b = subSequence(p, up.substring(1));
  return [...result, ...a, ...b];
}

console.log(subSequence("", "ABC"));
