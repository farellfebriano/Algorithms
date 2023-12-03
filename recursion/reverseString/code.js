function reverseString(s) {
  if (s === "") {
    return s;
  }
  return reverseString(s.slice(1)) + s[0];
}
console.log(reverseString("farell"));
