// # Compute the largest and second largest values from a list of numbers.
//
// This code example is written in a literate programming style
// and intentionally uses terse names.
//
// let m be the smallest possible number.
// let c be a function that computes the two greatest numbers.
// let l be the list of numbers.
// let p be the two greatest known values while iterating over the list, defaulted to [m, m].
// let v be the current number while iterating over the list.

// Handle three cases:
// If v is greater than 1st value in p then set p to [v, p[0]].
// ElseIf v is greater than 2nd value in p then set p to [p[0], v].
// Otherwise v is smaller than both values in p, p remains unchanged.

const m = Number.NEGATIVE_INFINITY;

const c = l =>
  l.reduce((p, v) => (v > p[0] ? [v, p[0]] : v > p[1] ? [p[0], v] : p), [m, m]);

// ## Test 4 cases to verify correctness.
//
// let t be a function to compare actual and expected and return "pass" or "fail".
// let a be the actual result.
// let e be the expected result.
let t = (a, e) => console.log(a[0] === e[0] && a[1] === e[1] ? "pass" : "fail");

// Test typical case.
t(c([2, 7, 5, 9]), [9, 7]);

// Test duplicates case.
t(c([2, 9, 9, 7]), [9, 9]);

// Test ascending list case.
t(c([1, 2, 3, 4]), [4, 3]);

// Test descending list case.
t(c([9, 6, 5, 2]), [9, 6]);
