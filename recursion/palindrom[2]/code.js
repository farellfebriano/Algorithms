// function reverseString(s) {
//   if (s.length === 0 || s.length === 1) {
//     return true;
//   }

//   if (s[0] === s[s.length - 1]) {
//     return reverseString(s.slice(1, s.length - 1));
//   }

//   return false;
// }
// console.log(reverseString("kayak"));

// i will do my own palindrom withoud actually slice
// NOTE assuming that the input are all lowercase and only alphabet

//----------------------------------------------------------------------------------------------------------

// the basecase for this funtion is left and right pointer are
// the same or cross it means it is palindrome

function palindrome(word, l, r) {
  if (l >= r) {
    return true;
  }
  const alphaL = word[l];
  const alphaR = word[r];
  if (alphaL === alphaR) {
    return palindrome(word, ++l, --r);
  } else {
    return false;
  }
}

const word = "21";
console.log(palindrome(word, 0, word.length - 1));
