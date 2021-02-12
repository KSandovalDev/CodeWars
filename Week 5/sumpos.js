// https://www.codewars.com/kata/5715eaedb436cf5606000381

function positiveSum(arr) {
    //   P - arr
    //   R - sum of positive numbers
    //   E - [-1, 3, 4], 7 is the number we want to return
    //   P -  for loop, conditionals
    //       have a loop run through the array and identify what integers are positive or negative
    //       then add a conditional to say if integer is positive, add those positive ints together
              
              let a = []
              for( let i = 0 ; i < arr.length; i++){
                  if( arr[i] >0){
                    a.push(arr[i]) 
                  }
              } return a.reduce((num1, num2)=> num1 +num2 ,0)
                
    }