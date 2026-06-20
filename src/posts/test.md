---
title: Post One
date: "2021-12-14"
---

## Hey this is a title

Some other text

- Nice
- Work
- It

$$
L = \frac{1}{2} \rho v^2 S C_L
$$

$f(x) = x^2$

```js
function fibonacci(num) {
  if (num < 2) {
    return num;
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
}

// take nth term input from the user
const nTerms = prompt("Enter the number of terms: ");

if (nTerms <= 0) {
  console.log("Enter a positive integer.");
} else {
  for (let i = 0; i < nTerms; i++) {
    console.log(fibonacci(i));
  }
}
```
