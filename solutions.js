// GoMyCode Edabit checkpoint.
// These functions passed their respective Edabit checks.

// Very Easy: Return the Sum of Two Numbers
function addition(a, b) {
  return a + b;
}

// Easy: Fix the Lowest Reading
// Start with an actual reading so arrays of positive values work.
function lowestReading(readings) {
  let lowest = readings[0];
  for (const reading of readings) {
    if (reading < lowest) lowest = reading;
  }
  return lowest;
}

// Medium: How Much is True?
function countTrue(arr) {
  return arr.filter(value => value === true).length;
}

// Medium: A Redundant Function
// The returned function remembers str through a closure.
function redundant(str) {
  return function () { return str; };
}

// Medium: Right Shift by Division
// Recreate the operation without using the right-shift operator.
function shiftToRight(x, y) {
  return Math.floor(x / Math.pow(2, y));
}

// Medium: Find Number of Digits in Number
// Count digits numerically, including zero, without converting to a string.
function num_of_digits(num) {
  num = Math.abs(num);
  let digits = 1;
  while (num >= 10) {
    num = Math.floor(num / 10);
    digits++;
  }
  return digits;
}

// Medium: Derivative of a Function
function derivative(b, m) {
  return b === 0 ? 0 : b * Math.pow(m, b - 1);
}
