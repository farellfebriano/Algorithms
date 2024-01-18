function removeWord(s, word) {
  if (s.length < 1) {
    return "";
  }
  if (s.startsWith(word)) {
    return removeWord(s.slice(word.length), word);
  } else {
    return s[0] + removeWord(s.slice(1), word);
  }
}

// const s = "farell.apple.febriano.apple.rafael.apple.delano";
// console.log(removeWord(s, "apple"));

/*
Second function will remove anything that start with [a,p,p,l,e]. However, if its apple, it
wont delete it from the string
*/

// recursively
function removeWord(s) {
  if (s.length < 1) {
    return "";
  }
  if (/[aple]/i.test(s[0]) && !s.startsWith("apple")) {
    return removeWord(s.slice(1));
  } else {
    if (s.startsWith("apple")) {
      return "apple" + removeWord(s.slice("apple".length));
    } else {
      return s[0] + removeWord(s.slice(1));
    }
  }
}
// console.log(removeWord("aapapppapppappapplepppappleappleappleapap"));

// iterative
function removeWordI(s) {
  let result = "-",
    p = 0;

  while (p < s.length) {
    if (/[aple]/i.test(s[p]) && !s.substr(p).startsWith("apple")) {
      p++;
      continue;
    } else {
      if (s.substr(p).startsWith("apple")) {
        result += "apple";
      } else result += s[p];
    }
    p++;
  }
  return result;
}

console.log(removeWordI("apple"));
