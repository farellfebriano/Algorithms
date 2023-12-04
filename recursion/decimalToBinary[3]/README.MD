# Reverse a String

## Example 1

Input: n = "work"<br>
Output: "krow"<br>

## Example 2

Input: n = "i am working"<br>
Output: gnikrow ma i<br>

## 1 St Approach

- what is the base case
- what is the smallest amount of work i can do in each iteration

```javascript
function decimalToBinary() {
  // What is the base case
  // What is the smallest amount of work i can do each iteration?
}
```

---

## 2nd Approach

the basecase of this problem is when the decimal hit 0 so just return the result

```javascript
function reverseString(decimal, result) {
  if (decimal === 0) {
    return result;
  }
}
```

---

## 3rd Approach

we need to make the decimal shrink into 0 hence we divided into 2

```javascript
function reverseString(decimal, result) {
  if (decimal === 0) {
    return result;
  }

  // add the result
  result = number.toString(decimal % 2) + result;

  // the one that makes the recursive
  return reverseString(Math.floor(decimal / 2), result);
}
```

---
