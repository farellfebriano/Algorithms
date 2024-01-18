// my approach
function removeA(s, p) {
  let result = "";
  if (p === s.length) {
    return "";
  }
  if (/[Aa]/.test(s[p])) {
    result = removeA(s, ++p);
  } else {
    result = s[p] + removeA(s, ++p);
  }

  return result;
}

function removeA2(s) {
  let result = "";
  if (s.length < 2) {
    if (/[aA]/.test(s)) {
      return "";
    }
    return s;
  }

  if (/[aA]/.test(s[0])) {
    result = removeA2(s.slice(1));
  } else {
    result = result + removeA2(s.slice(1));
  }

  return result;
}

// Other approach
function skip(s) {
  if (s.length < 1) {
    return "";
  }
  let result = s[0];
  s = s.slice(1);
  if (/[Aa]/.test(result)) {
    return skip(s);
  } else {
    return result + skip(s);
  }
}

console.log(skip("alalala"), "skip");
