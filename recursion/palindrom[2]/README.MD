# PALINDROM

## Example 1

Input: n = "kayak"<br>
Output: true<br>

## Example 2

Input: n = "ana"<br>
Output: true<br>

## 1 St Approach

- what is the base case
- what is the smallest amount of work i can do in each iteration [do some work to shrink the problem space]
- additional base-case to handle non-palindroms

---

### NOTE

after doing the reverse string and this one, we starting to see that the the "the smallest amount of work i can do in each iteration" need to compliment the the basecase.

```javascript
function reverseString(s) {
  if (s.length === 0 || s.length === 1) {
    return true;
  }
}
```

---

## 2nd Approach

imagine there are two pointers and each iteration will make the string shrinking each if the both end and the begining are the same character

```javascript
function reverseString(s) {
  if (s.length === 0 || s.length === 1) {
    return true;
  }

  // if first and end character the same then shrink it
  // example kayak into aya

  if (s[0] === s[s.length - 1]) {
    return reverseString(s.slice(1, s.length - 1));
  }
}
```

---

## 3rd Approach

and if its not the same than just return false (additional basse case)

```javascript
function reverseString(s) {
  if (s.length === 0 || s.length === 1) {
    return true;
  }

  if (s[0] === s[s.length - 1]) {
    return reverseString(s.slice(1, s.length - 1));
  }

  return false
}

---

# the visual of the code

when the call stack is full

![View Design](assets/visual1.png)

when the call stack is almost empty

![View Design](assets/visual2.png)
```
