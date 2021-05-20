// https://www.codewars.com/kata/5932c94f6aa4d1d786000028/train/javascript

function perfectRoots(n){
let firstRoot = Math.sqrt(n)
let secondRoot = Math.sqrt(firstRoot)
let thirdRoot = Math.sqrt(secondRoot)
return Number.isInteger(thirdRoot)

}
