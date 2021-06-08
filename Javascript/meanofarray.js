// https://www.codewars.com/kata/563e320cee5dddcf77000158/train/javascript


function getAverage(marks){
  let x = marks.reduce((accumulator, currentValue) => accumulator + currentValue)
  return parseInt(x/marks.length)
}
