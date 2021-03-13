//   https://www.codewars.com/kata/5545f109004975ea66000086/train/javascript

// Parameters - n,x,y
// Return - whether n is divisible by x and y
// Example - if n= 18, and x = 3 andy =6, n is divisible by x and y
// Psuedo code - this is very similar to fizzbuzz, we need some conditionals, and the use of %


function isDivisible(n, x, y) {
  if (n % x === 0 && n % y ===0){
    return true
  }return false
}
