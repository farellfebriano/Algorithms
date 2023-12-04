function reverseString(s) {
  if (s.length === 0 || s.length === 1) {
    return true;
  }

  if (s[0] === s[s.length - 1]) {
    return reverseString(s.slice(1, s.length - 1));
  }

  return false;
}
console.log(reverseString("kayak"));
