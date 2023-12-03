# Reverse a String

## Example 1

Input: n = "work"<br>
Output: "krow"<br>

## Example 2

Input: n = "i am working"<br>
Output: gnikrow ma i<br>

## First Approach

- what is the base case
- what is the smallest amount of work i can do in each iteration

```javascript
function reverseString(s) {
  // What is the base case
  // What is the smallest amount of work i can do each iteration?
}
```

---

## Second Approach

when we want to find the base cases i typically think if i were just to pass a very a small input, what is the smallest input that i could just pass in to start. In this condition is an empty string. So if i pass the empty string, it would make sense that it will return back.

```javascript
function reverseString(s) {
  if (s === "") {
    return s;
  }
  // What is the smallest amount of work i can do each iteration?
}
```

---
