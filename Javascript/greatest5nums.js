// Parameters ( digits)
// Returning - the greatest 5 digit sequence inside of a given number
// Example - 1234567890 - we would want to return 67890
// Psuedo code - We want to write a function that takes in a given number and returns the greatest 5
// digit sequence, we need to iterate on every number, after every 5 digits so a for loop is good
// to use for that. In order for the loop to be able to compare all the 5 digit sequences in the given
// number. A variable would be recommended to hold that value until it can determine which is the
// greatest for sure after checking the entire number.


function solution(digits){
let max = 0
for (i = 0 ; i < digits.length -4; i++){
    let current = digits.slice(i,i+5)
   if( current > max){
     max = current
   } 
}
  return Number(max)
}
