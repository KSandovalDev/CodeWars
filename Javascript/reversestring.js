https://www.codewars.com/kata/5168bb5dfe9a00b126000018

// P - parameters str
// R - return - the reversed version of the string
// E - example - boy - yob
// P -psuedo code - 
// we want to split the string into an array of strings and then reverse their order and then join them again


function solution(str){
  return str.split('').reverse().join('')
//   we're using an extra space because in this case it will return the whole string
}
